// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import VsoBaseInterfaces = require('../interfaces/common/VsoBaseInterfaces');

import http = require("http");
import https = require("https");
var _ = require("underscore");
var ntlm = require("../opensource/node-http-ntlm/ntlm");

export class NtlmCredentialHandler implements VsoBaseInterfaces.IRequestHandler {
    username: string;
    password: string;
    workstation: string;
    domain: string;

    constructor(username: string, password: string,  domain?: string, workstation?: string) {
        this.username = username;
        this.password = password;
        if (domain !== undefined) {
            this.domain = domain;
        }
        if (workstation !== undefined) {
            this.workstation = workstation;
        }
    }

    prepareRequest(options:any): void {
        // No headers or options need to be set.  We keep the credentials on the handler itself.
    }

    canHandleAuthentication(res: VsoBaseInterfaces.IHttpResponse): boolean {
        if (res && res.statusCode === 401) {
            // Ensure that we're talking NTLM here
            // Once we have the www-authenticate header, split it so we can ensure we can talk NTLM
            var wwwAuthenticate = res.headers['www-authenticate'];
            if (wwwAuthenticate !== undefined) {
                var mechanisms = wwwAuthenticate.split(', ');
                var idx =  mechanisms.indexOf("NTLM");
                if (idx >= 0) {
                    // Check specifically for 'NTLM' since www-authenticate header can also contain
                    // the Authorization value to use in the form of 'NTLM TlRMTVNT....AAAADw=='
                    if (mechanisms[idx].length == 4) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    // The following method is an adaptation of code found at https://github.com/SamDecrock/node-http-ntlm/blob/master/httpntlm.js
    handleAuthentication(httpClient, protocol, options, objs, finalCallback): void {
        // Set up the headers for NTLM authentication
        var ntlmOptions = _.extend(options, {
            username: this.username,
            password: this.password,
            domain: this.domain || '',
            workstation: this.workstation || ''
        });
        var keepaliveAgent;
        if (httpClient.isSsl === true) {
            keepaliveAgent = new https.Agent({});
        } else {
            keepaliveAgent = new http.Agent({ keepAlive: true });
        }
        let self = this;
        // The following pattern of sending the type1 message following immediately (in a setImmediate) is
        // critical for the NTLM exchange to happen.  If we removed setImmediate (or call in a different manner)
        // the NTLM exchange will always fail with a 401.
        this.sendType1Message(httpClient, protocol, ntlmOptions, objs, keepaliveAgent, function (err, res) {
            if (err) {
                return finalCallback(err, null, null);
            }
            setImmediate(function () {
                self.sendType3Message(httpClient, protocol, ntlmOptions, objs, keepaliveAgent, res, finalCallback);
            });
        });
    }

    // The following method is an adaptation of code found at https://github.com/SamDecrock/node-http-ntlm/blob/master/httpntlm.js
    private sendType1Message(httpClient, protocol, options, objs, keepaliveAgent, callback): void {
        var type1msg = ntlm.createType1Message(options);
        var type1options = {
            headers: {
                'Connection': 'keep-alive',
                'Authorization': type1msg
            },
            timeout: options.timeout || 0,
            agent: keepaliveAgent,
             // don't redirect because http could change to https which means we need to change the keepaliveAgent
            allowRedirects: false
        };
        type1options = _.extend(type1options, _.omit(options, 'headers'));
        httpClient.requestInternal(protocol, type1options, objs, callback);
    }

    // The following method is an adaptation of code found at https://github.com/SamDecrock/node-http-ntlm/blob/master/httpntlm.js
    private sendType3Message(httpClient, protocol, options, objs, keepaliveAgent, res, callback): void {
        if (!res.headers['www-authenticate']) {
            return callback(new Error('www-authenticate not found on response of second request'));
        }
        // parse type2 message from server:
        var type2msg = ntlm.parseType2Message(res.headers['www-authenticate']);
        // create type3 message:
        var type3msg = ntlm.createType3Message(type2msg, options);
        // build type3 request:
        var type3options = {
            headers: {
                'Authorization': type3msg
            },
            allowRedirects: false,
            agent: keepaliveAgent
        };
        // pass along other options:
        type3options.headers = _.extend(type3options.headers, options.headers);
        type3options = _.extend(type3options, _.omit(options, 'headers'));
        // send type3 message to server:
        httpClient.requestInternal(protocol, type3options, objs, callback);
    }
}
