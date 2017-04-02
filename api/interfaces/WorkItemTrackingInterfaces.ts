/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 * 
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 */

"use strict";

import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


export interface AccountMyWorkResult {
    /**
     * True, when length of WorkItemDetails is same as the limit
     */
    querySizeLimitExceeded: boolean;
    /**
     * WorkItem Details
     */
    workItemDetails: AccountWorkWorkItemModel[];
}

/**
 * Represents Work Item Recent Activity
 */
export interface AccountRecentActivityWorkItemModel {
    /**
     * Date of the last Activity by the user
     */
    activityDate: Date;
    /**
     * Type of the activity
     */
    activityType: WorkItemRecentActivityType;
    /**
     * Assigned To
     */
    assignedTo: string;
    /**
     * Last changed date of the work item
     */
    changedDate: Date;
    /**
     * Work Item Id
     */
    id: number;
    /**
     * TeamFoundationId of the user this activity belongs to
     */
    identityId: string;
    /**
     * State of the work item
     */
    state: string;
    /**
     * Team project the work item belongs to
     */
    teamProject: string;
    /**
     * Title of the work item
     */
    title: string;
    /**
     * Type of Work Item
     */
    workItemType: string;
}

export interface AccountWorkWorkItemModel {
    assignedTo: string;
    changedDate: Date;
    id: number;
    state: string;
    teamProject: string;
    title: string;
    workItemType: string;
}

export interface AttachmentReference {
    id: string;
    url: string;
}

export enum CommentSortOrder {
    Asc = 1,
    Desc = 2,
}

export interface FieldDependentRule extends WorkItemTrackingResource {
    dependentFields: WorkItemFieldReference[];
}

export interface FieldsToEvaluate {
    fields: string[];
    fieldUpdates: { [key: string] : any; };
    fieldValues: { [key: string] : any; };
    rulesFrom: string[];
}

export enum FieldType {
    String = 0,
    Integer = 1,
    DateTime = 2,
    PlainText = 3,
    Html = 4,
    TreePath = 5,
    History = 6,
    Double = 7,
    Guid = 8,
    Boolean = 9,
    Identity = 10,
    PicklistString = 11,
    PicklistInteger = 12,
    PicklistDouble = 13,
}

export enum GetFieldsExpand {
    None = 0,
    ExtensionFields = 1,
}

export interface IdentityReference {
    id: string;
    name: string;
    url: string;
}

export interface Link {
    attributes: { [key: string] : any; };
    rel: string;
    url: string;
}

export enum LinkChangeType {
    Create = 0,
    Remove = 1,
}

export enum LinkQueryMode {
    WorkItems = 0,
    LinksOneHopMustContain = 1,
    LinksOneHopMayContain = 2,
    LinksOneHopDoesNotContain = 3,
    LinksRecursiveMustContain = 4,
    LinksRecursiveMayContain = 5,
    LinksRecursiveDoesNotContain = 6,
}

export enum LogicalOperation {
    NONE = 0,
    AND = 1,
    OR = 2,
}

/**
 * Project work item type state colors
 */
export interface ProjectWorkItemStateColors {
    /**
     * Project name
     */
    projectName: string;
    /**
     * State colors for all work item type in a project
     */
    workItemTypeStateColors: WorkItemTypeStateColors[];
}

export enum ProvisioningActionType {
    Import = 0,
    Validate = 1,
}

export interface ProvisioningResult {
    provisioningImportEvents: string[];
}

export enum QueryExpand {
    None = 0,
    Wiql = 1,
    Clauses = 2,
    All = 3,
}

export interface QueryHierarchyItem extends WorkItemTrackingResource {
    children: QueryHierarchyItem[];
    clauses: WorkItemQueryClause;
    columns: WorkItemFieldReference[];
    createdBy: IdentityReference;
    createdDate: Date;
    filterOptions: LinkQueryMode;
    hasChildren: boolean;
    id: string;
    isDeleted: boolean;
    isFolder: boolean;
    isInvalidSyntax: boolean;
    isPublic: boolean;
    lastModifiedBy: IdentityReference;
    lastModifiedDate: Date;
    linkClauses: WorkItemQueryClause;
    name: string;
    path: string;
    queryType: QueryType;
    sortColumns: WorkItemQuerySortColumn[];
    sourceClauses: WorkItemQueryClause;
    targetClauses: WorkItemQueryClause;
    wiql: string;
}

export enum QueryOption {
    Doing = 1,
    Done = 2,
    Followed = 3,
}

export enum QueryResultType {
    WorkItem = 1,
    WorkItemLink = 2,
}

export enum QueryType {
    Flat = 1,
    Tree = 2,
    OneHop = 3,
}

export enum ReportingRevisionsExpand {
    None = 0,
    Fields = 1,
}

export interface ReportingWorkItemLink {
    changedBy: VSSInterfaces.IdentityRef;
    changedDate: Date;
    changedOperation: LinkChangeType;
    comment: string;
    isActive: boolean;
    linkType: string;
    rel: string;
    sourceId: number;
    targetId: number;
}

export interface ReportingWorkItemLinksBatch extends StreamedBatch<ReportingWorkItemLink> {
}

export interface ReportingWorkItemRevisionsBatch extends StreamedBatch<WorkItem> {
}

export interface ReportingWorkItemRevisionsFilter {
    /**
     * A list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
     */
    fields: string[];
    /**
     * Include deleted work item in the result.
     */
    includeDeleted: boolean;
    /**
     * Return an identity reference instead of a string value for identity fields.
     */
    includeIdentityRef: boolean;
    /**
     * Include only the latest version of a work item, skipping over all previous revisions of the work item.
     */
    includeLatestOnly: boolean;
    /**
     * Include tag reference instead of string value for System.Tags field
     */
    includeTagRef: boolean;
    /**
     * A list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
     */
    types: string[];
}

export interface StreamedBatch<T> {
    continuationToken: string;
    isLastBatch: boolean;
    nextLink: string;
    values: T[];
}

export enum TemplateType {
    WorkItemType = 0,
    GlobalWorkflow = 1,
}

export enum TreeNodeStructureType {
    Area = 0,
    Iteration = 1,
}

export enum TreeStructureGroup {
    Areas = 0,
    Iterations = 1,
}

export interface Wiql {
    query: string;
}

export interface WorkItem extends WorkItemTrackingResource {
    fields: { [key: string] : any; };
    id: number;
    relations: WorkItemRelation[];
    rev: number;
}

export interface WorkItemClassificationNode extends WorkItemTrackingResource {
    attributes: { [key: string] : any; };
    children: WorkItemClassificationNode[];
    id: number;
    identifier: string;
    name: string;
    structureType: TreeNodeStructureType;
}

export interface WorkItemComment extends WorkItemTrackingResource {
    revisedBy: IdentityReference;
    revisedDate: Date;
    revision: number;
    text: string;
}

export interface WorkItemComments {
    comments: WorkItemComment[];
    count: number;
    fromRevisionCount: number;
    totalCount: number;
}

export interface WorkItemDelete extends WorkItemDeleteReference {
    resource: WorkItem;
}

export interface WorkItemDeleteReference {
    code: number;
    deletedBy: string;
    deletedDate: string;
    id: number;
    message: string;
    name: string;
    project: string;
    type: string;
    url: string;
}

export interface WorkItemDeleteShallowReference {
    id: number;
    url: string;
}

export interface WorkItemDeleteUpdate {
    isDeleted: boolean;
}

export enum WorkItemErrorPolicy {
    Fail = 1,
    Omit = 2,
}

export enum WorkItemExpand {
    None = 0,
    Relations = 1,
    Fields = 2,
    Links = 3,
    All = 4,
}

export interface WorkItemField extends WorkItemTrackingResource {
    description: string;
    name: string;
    readOnly: boolean;
    referenceName: string;
    supportedOperations: WorkItemFieldOperation[];
    type: FieldType;
}

export interface WorkItemFieldOperation {
    name: string;
    referenceName: string;
}

export interface WorkItemFieldReference {
    name: string;
    referenceName: string;
    url: string;
}

export interface WorkItemFieldUpdate {
    newValue: any;
    oldValue: any;
}

export interface WorkItemHistory extends WorkItemTrackingResource {
    rev: number;
    revisedBy: IdentityReference;
    revisedDate: Date;
    value: string;
}

export interface WorkItemLink {
    rel: string;
    source: WorkItemReference;
    target: WorkItemReference;
}

export interface WorkItemQueryClause {
    clauses: WorkItemQueryClause[];
    field: WorkItemFieldReference;
    fieldValue: WorkItemFieldReference;
    isFieldValue: boolean;
    logicalOperator: LogicalOperation;
    operator: WorkItemFieldOperation;
    value: string;
}

export interface WorkItemQueryResult {
    asOf: Date;
    columns: WorkItemFieldReference[];
    queryResultType: QueryResultType;
    queryType: QueryType;
    sortColumns: WorkItemQuerySortColumn[];
    workItemRelations: WorkItemLink[];
    workItems: WorkItemReference[];
}

export interface WorkItemQuerySortColumn {
    descending: boolean;
    field: WorkItemFieldReference;
}

export enum WorkItemRecentActivityType {
    Visited = 0,
    Edited = 1,
    Deleted = 2,
    Restored = 3,
}

export interface WorkItemReference {
    id: number;
    url: string;
}

export interface WorkItemRelation extends Link {
}

export interface WorkItemRelationType extends WorkItemTrackingReference {
    attributes: { [key: string] : any; };
}

export interface WorkItemRelationUpdates {
    added: WorkItemRelation[];
    removed: WorkItemRelation[];
    updated: WorkItemRelation[];
}

/**
 * Work item type state name and color pair
 */
export interface WorkItemStateColor {
    /**
     * Color value
     */
    color: string;
    /**
     * Work item type state name
     */
    name: string;
}

export interface WorkItemStateTransition {
    to: string;
}

export interface WorkItemTemplate extends WorkItemTemplateReference {
    fields: { [key: string] : string; };
}

export interface WorkItemTemplateReference extends WorkItemTrackingResource {
    description: string;
    id: string;
    name: string;
    workItemTypeName: string;
}

export interface WorkItemTrackingReference extends WorkItemTrackingResource {
    name: string;
    referenceName: string;
}

export interface WorkItemTrackingResource extends WorkItemTrackingResourceReference {
    _links: any;
}

export interface WorkItemTrackingResourceReference {
    url: string;
}

export interface WorkItemType extends WorkItemTrackingResource {
    color: string;
    description: string;
    fieldInstances: WorkItemTypeFieldInstance[];
    fields: WorkItemTypeFieldInstance[];
    name: string;
    transitions: { [key: string] : WorkItemStateTransition[]; };
    xmlForm: string;
}

export interface WorkItemTypeCategory extends WorkItemTrackingResource {
    defaultWorkItemType: WorkItemTypeReference;
    name: string;
    referenceName: string;
    workItemTypes: WorkItemTypeReference[];
}

export interface WorkItemTypeColor {
    primaryColor: string;
    secondaryColor: string;
    workItemTypeName: string;
}

export interface WorkItemTypeFieldInstance extends WorkItemFieldReference {
    alwaysRequired: boolean;
    field: WorkItemFieldReference;
    helpText: string;
}

export interface WorkItemTypeReference extends WorkItemTrackingResourceReference {
    name: string;
}

/**
 * State colors for a work item type
 */
export interface WorkItemTypeStateColors {
    /**
     * Work item type state colors
     */
    stateColors: WorkItemStateColor[];
    /**
     * Work item type name
     */
    workItemTypeName: string;
}

export interface WorkItemTypeTemplate {
    template: string;
}

export interface WorkItemTypeTemplateUpdateModel {
    actionType: ProvisioningActionType;
    methodology: string;
    template: string;
    templateType: TemplateType;
}

export interface WorkItemUpdate extends WorkItemTrackingResourceReference {
    fields: { [key: string] : WorkItemFieldUpdate; };
    id: number;
    relations: WorkItemRelationUpdates;
    rev: number;
    revisedBy: IdentityReference;
    revisedDate: Date;
    workItemId: number;
}

export var TypeInfo = {
    AccountMyWorkResult: <any>{
    },
    AccountRecentActivityWorkItemModel: <any>{
    },
    AccountWorkWorkItemModel: <any>{
    },
    CommentSortOrder: {
        enumValues: {
            "asc": 1,
            "desc": 2
        }
    },
    FieldType: {
        enumValues: {
            "string": 0,
            "integer": 1,
            "dateTime": 2,
            "plainText": 3,
            "html": 4,
            "treePath": 5,
            "history": 6,
            "double": 7,
            "guid": 8,
            "boolean": 9,
            "identity": 10,
            "picklistString": 11,
            "picklistInteger": 12,
            "picklistDouble": 13
        }
    },
    GetFieldsExpand: {
        enumValues: {
            "none": 0,
            "extensionFields": 1
        }
    },
    LinkChangeType: {
        enumValues: {
            "create": 0,
            "remove": 1
        }
    },
    LinkQueryMode: {
        enumValues: {
            "workItems": 0,
            "linksOneHopMustContain": 1,
            "linksOneHopMayContain": 2,
            "linksOneHopDoesNotContain": 3,
            "linksRecursiveMustContain": 4,
            "linksRecursiveMayContain": 5,
            "linksRecursiveDoesNotContain": 6
        }
    },
    LogicalOperation: {
        enumValues: {
            "nONE": 0,
            "aND": 1,
            "oR": 2
        }
    },
    ProvisioningActionType: {
        enumValues: {
            "import": 0,
            "validate": 1
        }
    },
    QueryExpand: {
        enumValues: {
            "none": 0,
            "wiql": 1,
            "clauses": 2,
            "all": 3
        }
    },
    QueryHierarchyItem: <any>{
    },
    QueryOption: {
        enumValues: {
            "doing": 1,
            "done": 2,
            "followed": 3
        }
    },
    QueryResultType: {
        enumValues: {
            "workItem": 1,
            "workItemLink": 2
        }
    },
    QueryType: {
        enumValues: {
            "flat": 1,
            "tree": 2,
            "oneHop": 3
        }
    },
    ReportingRevisionsExpand: {
        enumValues: {
            "none": 0,
            "fields": 1
        }
    },
    ReportingWorkItemLink: <any>{
    },
    TemplateType: {
        enumValues: {
            "workItemType": 0,
            "globalWorkflow": 1
        }
    },
    TreeNodeStructureType: {
        enumValues: {
            "area": 0,
            "iteration": 1
        }
    },
    TreeStructureGroup: {
        enumValues: {
            "areas": 0,
            "iterations": 1
        }
    },
    WorkItemClassificationNode: <any>{
    },
    WorkItemComment: <any>{
    },
    WorkItemComments: <any>{
    },
    WorkItemErrorPolicy: {
        enumValues: {
            "fail": 1,
            "omit": 2
        }
    },
    WorkItemExpand: {
        enumValues: {
            "none": 0,
            "relations": 1,
            "fields": 2,
            "links": 3,
            "all": 4
        }
    },
    WorkItemField: <any>{
    },
    WorkItemHistory: <any>{
    },
    WorkItemQueryClause: <any>{
    },
    WorkItemQueryResult: <any>{
    },
    WorkItemRecentActivityType: {
        enumValues: {
            "visited": 0,
            "edited": 1,
            "deleted": 2,
            "restored": 3
        }
    },
    WorkItemTypeTemplateUpdateModel: <any>{
    },
    WorkItemUpdate: <any>{
    },
};

TypeInfo.AccountMyWorkResult.fields = {
    workItemDetails: {
        isArray: true,
        typeInfo: TypeInfo.AccountWorkWorkItemModel
    },
};

TypeInfo.AccountRecentActivityWorkItemModel.fields = {
    activityDate: {
        isDate: true,
    },
    activityType: {
        enumType: TypeInfo.WorkItemRecentActivityType
    },
    changedDate: {
        isDate: true,
    },
};

TypeInfo.AccountWorkWorkItemModel.fields = {
    changedDate: {
        isDate: true,
    },
};

TypeInfo.QueryHierarchyItem.fields = {
    children: {
        isArray: true,
        typeInfo: TypeInfo.QueryHierarchyItem
    },
    clauses: {
        typeInfo: TypeInfo.WorkItemQueryClause
    },
    createdDate: {
        isDate: true,
    },
    filterOptions: {
        enumType: TypeInfo.LinkQueryMode
    },
    lastModifiedDate: {
        isDate: true,
    },
    linkClauses: {
        typeInfo: TypeInfo.WorkItemQueryClause
    },
    queryType: {
        enumType: TypeInfo.QueryType
    },
    sourceClauses: {
        typeInfo: TypeInfo.WorkItemQueryClause
    },
    targetClauses: {
        typeInfo: TypeInfo.WorkItemQueryClause
    },
};

TypeInfo.ReportingWorkItemLink.fields = {
    changedDate: {
        isDate: true,
    },
    changedOperation: {
        enumType: TypeInfo.LinkChangeType
    },
};

TypeInfo.WorkItemClassificationNode.fields = {
    children: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemClassificationNode
    },
    structureType: {
        enumType: TypeInfo.TreeNodeStructureType
    },
};

TypeInfo.WorkItemComment.fields = {
    revisedDate: {
        isDate: true,
    },
};

TypeInfo.WorkItemComments.fields = {
    comments: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemComment
    },
};

TypeInfo.WorkItemField.fields = {
    type: {
        enumType: TypeInfo.FieldType
    },
};

TypeInfo.WorkItemHistory.fields = {
    revisedDate: {
        isDate: true,
    },
};

TypeInfo.WorkItemQueryClause.fields = {
    clauses: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemQueryClause
    },
    logicalOperator: {
        enumType: TypeInfo.LogicalOperation
    },
};

TypeInfo.WorkItemQueryResult.fields = {
    asOf: {
        isDate: true,
    },
    queryResultType: {
        enumType: TypeInfo.QueryResultType
    },
    queryType: {
        enumType: TypeInfo.QueryType
    },
};

TypeInfo.WorkItemTypeTemplateUpdateModel.fields = {
    actionType: {
        enumType: TypeInfo.ProvisioningActionType
    },
    templateType: {
        enumType: TypeInfo.TemplateType
    },
};

TypeInfo.WorkItemUpdate.fields = {
    revisedDate: {
        isDate: true,
    },
};
