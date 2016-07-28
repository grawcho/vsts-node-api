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

import TfsCoreInterfaces = require("../interfaces/CoreInterfaces");
import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


export interface AggregatedDataForResultTrend {
    /**
     * This is tests execution duration.
     */
    duration: any;
    resultsByOutcome: { [key: number] : AggregatedResultsByOutcome; };
    testResultsContext: TestResultsContext;
}

export interface AggregatedResultsAnalysis {
    duration: any;
    previousContext: TestResultsContext;
    resultsByOutcome: { [key: number] : AggregatedResultsByOutcome; };
    resultsDifference: AggregatedResultsDifference;
    totalTests: number;
}

export interface AggregatedResultsByOutcome {
    count: number;
    duration: any;
    outcome: TestOutcome;
}

export interface AggregatedResultsDifference {
    increaseInDuration: any;
    increaseInFailures: number;
    increaseInPassedTests: number;
    increaseInTotalTests: number;
}

export enum AttachmentType {
    GeneralAttachment = 0,
    AfnStrip = 1,
    BugFilingData = 2,
    CodeCoverage = 3,
    IntermediateCollectorData = 4,
    RunConfig = 5,
    TestImpactDetails = 6,
    TmiTestRunDeploymentFiles = 7,
    TmiTestRunReverseDeploymentFiles = 8,
    TmiTestResultDetail = 9,
    TmiTestRunSummary = 10,
    ConsoleLog = 11,
}

export interface BatchResponse {
    error: string;
    responses: Response[];
    status: string;
}

export interface BuildConfiguration {
    branchName: string;
    buildDefinitionId: number;
    flavor: string;
    id: number;
    number: string;
    platform: string;
    project: ShallowReference;
    repositoryId: number;
    sourceVersion: string;
    uri: string;
}

export interface BuildCoverage {
    codeCoverageFileUrl: string;
    configuration: BuildConfiguration;
    lastError: string;
    modules: ModuleCoverage[];
    state: string;
}

export interface BuildReference {
    branchName: string;
    buildSystem: string;
    definitionId: number;
    id: number;
    number: string;
    repositoryId: string;
    uri: string;
}

export interface CloneOperationInformation {
    cloneStatistics: CloneStatistics;
    /**
     * If the operation is complete, the DateTime of completion. If operation is not complete, this is DateTime.MaxValue
     */
    completionDate: Date;
    /**
     * DateTime when the operation was started
     */
    creationDate: Date;
    /**
     * Shallow reference of the destination
     */
    destinationObject: ShallowReference;
    /**
     * Shallow reference of the destination
     */
    destinationPlan: ShallowReference;
    /**
     * Shallow reference of the destination
     */
    destinationProject: ShallowReference;
    /**
     * If the operation has Failed, Message contains the reason for failure. Null otherwise.
     */
    message: string;
    /**
     * The ID of the operation
     */
    opId: number;
    /**
     * The type of the object generated as a result of the Clone operation
     */
    resultObjectType: ResultObjectType;
    /**
     * Shallow reference of the source
     */
    sourceObject: ShallowReference;
    /**
     * Shallow reference of the source
     */
    sourcePlan: ShallowReference;
    /**
     * Shallow reference of the source
     */
    sourceProject: ShallowReference;
    /**
     * Current state of the operation. When State reaches Suceeded or Failed, the operation is complete
     */
    state: CloneOperationState;
    /**
     * Url for geting the clone information
     */
    url: string;
}

export enum CloneOperationState {
    Failed = 2,
    InProgress = 1,
    Queued = 0,
    Succeeded = 3,
}

export interface CloneOptions {
    /**
     * If set to true requirements will be cloned
     */
    cloneRequirements: boolean;
    /**
     * copy all suites from a source plan
     */
    copyAllSuites: boolean;
    /**
     * copy ancestor hieracrchy
     */
    copyAncestorHierarchy: boolean;
    /**
     * Name of the workitem type of the clone
     */
    destinationWorkItemType: string;
    /**
     * Key value pairs where the key value is overridden by the value.
     */
    overrideParameters: { [key: string] : string; };
    /**
     * Comment on the link that will link the new clone  test case to the original Set null for no comment
     */
    relatedLinkComment: string;
}

export interface CloneStatistics {
    /**
     * Number of Requirments cloned so far.
     */
    clonedRequirementsCount: number;
    /**
     * Number of shared steps cloned so far.
     */
    clonedSharedStepsCount: number;
    /**
     * Number of test cases cloned so far
     */
    clonedTestCasesCount: number;
    /**
     * Total number of requirements to be cloned
     */
    totalRequirementsCount: number;
    /**
     * Total number of test cases to be cloned
     */
    totalTestCasesCount: number;
}

/**
 * Represents the build configuration (platform, flavor) and coverage data for the build
 */
export interface CodeCoverageData {
    /**
     * Flavor of build for which data is retrieved/published
     */
    buildFlavor: string;
    /**
     * Platform of build for which data is retrieved/published
     */
    buildPlatform: string;
    /**
     * List of coverage data for the build
     */
    coverageStats: CodeCoverageStatistics[];
}

/**
 * Represents the code coverage statistics for a particular coverage label (modules, statements, blocks, etc.)
 */
export interface CodeCoverageStatistics {
    /**
     * Covered units
     */
    covered: number;
    /**
     * Delta of coverage
     */
    delta: number;
    /**
     * Is delta valid
     */
    isDeltaAvailable: boolean;
    /**
     * Label of coverage data ("Blocks", "Statements", "Modules", etc.)
     */
    label: string;
    /**
     * Position of label
     */
    position: number;
    /**
     * Total units
     */
    total: number;
}

/**
 * Represents the code coverage summary results Used to publish or retrieve code coverage summary against a build
 */
export interface CodeCoverageSummary {
    /**
     * Uri of build for which data is retrieved/published
     */
    build: ShallowReference;
    /**
     * List of coverage data and details for the build
     */
    coverageData: CodeCoverageData[];
    /**
     * Uri of build against which difference in coverage is computed
     */
    deltaBuild: ShallowReference;
}

export enum CoverageQueryFlags {
    /**
     * If set, the Coverage.Modules property will be populated.
     */
    Modules = 1,
    /**
     * If set, the ModuleCoverage.Functions properties will be populated.
     */
    Functions = 2,
    /**
     * If set, the ModuleCoverage.CoverageData field will be populated.
     */
    BlockData = 4,
}

export interface CoverageStatistics {
    blocksCovered: number;
    blocksNotCovered: number;
    linesCovered: number;
    linesNotCovered: number;
    linesPartiallyCovered: number;
}

export interface CustomTestField {
    fieldName: string;
    value: any;
}

export interface CustomTestFieldDefinition {
    fieldId: number;
    fieldName: string;
    fieldType: CustomTestFieldType;
    scope: CustomTestFieldScope;
}

export enum CustomTestFieldScope {
    None = 0,
    TestRun = 1,
    TestResult = 2,
    System = 4,
    All = 7,
}

export enum CustomTestFieldType {
    Bit = 2,
    DateTime = 4,
    Int = 8,
    Float = 6,
    String = 12,
    Guid = 14,
}

/**
 * This is a temporary class to provide the details for the test run environment.
 */
export interface DtlEnvironmentDetails {
    csmContent: string;
    csmParameters: string;
    subscriptionName: string;
}

export interface FailingSince {
    build: BuildReference;
    date: Date;
    release: ReleaseReference;
}

export interface FunctionCoverage {
    class: string;
    name: string;
    namespace: string;
    sourceFile: string;
    statistics: CoverageStatistics;
}

export interface LastResultDetails {
    dateCompleted: Date;
    duration: number;
    runBy: VSSInterfaces.IdentityRef;
}

export interface ModuleCoverage {
    blockCount: number;
    blockData: number[];
    functions: FunctionCoverage[];
    name: string;
    signature: string;
    signatureAge: number;
    statistics: CoverageStatistics;
}

export interface NameValuePair {
    name: string;
    value: string;
}

export interface PlanUpdateModel {
    area: ShallowReference;
    automatedTestEnvironment: TestEnvironment;
    automatedTestSettings: TestSettings;
    build: ShallowReference;
    configurationIds: number[];
    description: string;
    endDate: string;
    iteration: string;
    manualTestEnvironment: TestEnvironment;
    manualTestSettings: TestSettings;
    name: string;
    owner: VSSInterfaces.IdentityRef;
    startDate: string;
    state: string;
    status: string;
}

export interface PointAssignment {
    configuration: ShallowReference;
    tester: VSSInterfaces.IdentityRef;
}

export interface PointUpdateModel {
    outcome: string;
    resetToActive: boolean;
    tester: VSSInterfaces.IdentityRef;
}

export interface PointWorkItemProperty {
    workItem: { key: string; value: any };
}

export interface PropertyBag {
    /**
     * Generic store for test session data
     */
    bag: { [key: string] : string; };
}

export interface QueryModel {
    query: string;
}

export interface ReleaseReference {
    definitionId: number;
    environmentDefinitionId: number;
    environmentDefinitionName: string;
    environmentId: number;
    environmentName: string;
    id: number;
    name: string;
}

export interface Response {
    error: string;
    id: string;
    status: string;
    url: string;
}

export enum ResultDetails {
    None = 0,
    Iterations = 1,
    WorkItems = 2,
}

export enum ResultObjectType {
    TestSuite = 0,
    TestPlan = 1,
}

export interface ResultRetentionSettings {
    automatedResultsRetentionDuration: number;
    lastUpdatedBy: VSSInterfaces.IdentityRef;
    lastUpdatedDate: Date;
    manualResultsRetentionDuration: number;
}

export interface ResultsFilter {
    automatedTestName: string;
    branch: string;
    groupBy: string;
    maxCompleteDate: Date;
    resultsCount: number;
    testResultsContext: TestResultsContext;
    trendDays: number;
}

export interface ResultUpdateRequestModel {
    actionResultDeletes: TestActionResultModel[];
    actionResults: TestActionResultModel[];
    parameterDeletes: TestResultParameterModel[];
    parameters: TestResultParameterModel[];
    testCaseResult: TestCaseResultUpdateModel;
}

export interface ResultUpdateResponseModel {
    revision: number;
}

export interface RunCreateModel {
    automated: boolean;
    build: ShallowReference;
    buildDropLocation: string;
    buildFlavor: string;
    buildPlatform: string;
    comment: string;
    completeDate: string;
    configurationIds: number[];
    controller: string;
    customTestFields: CustomTestField[];
    dtlAutEnvironment: ShallowReference;
    dtlTestEnvironment: ShallowReference;
    dueDate: string;
    environmentDetails: DtlEnvironmentDetails;
    errorMessage: string;
    filter: RunFilter;
    iteration: string;
    name: string;
    owner: VSSInterfaces.IdentityRef;
    plan: ShallowReference;
    pointIds: number[];
    releaseEnvironmentUri: string;
    releaseUri: string;
    runTimeout: any;
    sourceWorkflow: string;
    startDate: string;
    state: string;
    testConfigurationsMapping: string;
    testEnvironmentId: string;
    testSettings: ShallowReference;
    type: string;
}

/**
 * This class is used to provide the filters used for discovery
 */
export interface RunFilter {
    /**
     * filter for the test case sources (test containers)
     */
    sourceFilter: string;
    /**
     * filter for the test cases
     */
    testCaseFilter: string;
}

export interface RunStatistic {
    count: number;
    outcome: string;
    resolutionState: TestResolutionState;
    state: string;
}

export interface RunUpdateModel {
    build: ShallowReference;
    comment: string;
    completedDate: string;
    controller: string;
    deleteInProgressResults: boolean;
    dtlAutEnvironment: ShallowReference;
    dtlEnvironment: ShallowReference;
    dtlEnvironmentDetails: DtlEnvironmentDetails;
    dueDate: string;
    errorMessage: string;
    iteration: string;
    logEntries: TestMessageLogDetails[];
    name: string;
    startedDate: string;
    state: string;
    substate: TestRunSubstate;
    testEnvironmentId: string;
    testSettings: ShallowReference;
}

/**
 * An abstracted reference to some other resource. This class is used to provide the build data contracts with a uniform way to reference other resources in a way that provides easy traversal through links.
 */
export interface ShallowReference {
    /**
     * Id of the resource
     */
    id: string;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}

export interface SharedStepModel {
    id: number;
    revision: number;
}

export interface SuiteCreateModel {
    name: string;
    queryString: string;
    requirementIds: number[];
    suiteType: string;
}

export interface SuiteEntry {
    /**
     * Id of child suite in a suite
     */
    childSuiteId: number;
    /**
     * Sequence number for the test case or child suite in the suite
     */
    sequenceNumber: number;
    /**
     * Id for the suite
     */
    suiteId: number;
    /**
     * Id of a test case in a suite
     */
    testCaseId: number;
}

export interface SuiteEntryUpdateModel {
    /**
     * Id of child suite in a suite
     */
    childSuiteId: number;
    /**
     * Updated sequence number for the test case or child suite in the suite
     */
    sequenceNumber: number;
    /**
     * Id of a test case in a suite
     */
    testCaseId: number;
}

export interface SuiteTestCase {
    pointAssignments: PointAssignment[];
    testCase: WorkItemReference;
}

export interface SuiteUpdateModel {
}

export interface TestActionResultModel extends TestResultModelBase {
    actionPath: string;
    iterationId: number;
    sharedStepModel: SharedStepModel;
    url: string;
}

export interface TestAttachment {
    attachmentType: AttachmentType;
    comment: string;
    createdDate: Date;
    fileName: string;
    id: number;
    url: string;
}

export interface TestAttachmentReference {
    id: number;
    url: string;
}

export interface TestAttachmentRequestModel {
    attachmentType: string;
    comment: string;
    fileName: string;
    stream: string;
}

export interface TestCaseResult {
    afnStripId: number;
    area: ShallowReference;
    associatedBugs: ShallowReference[];
    automatedTestId: string;
    automatedTestName: string;
    automatedTestStorage: string;
    automatedTestType: string;
    automatedTestTypeId: string;
    build: ShallowReference;
    buildReference: BuildReference;
    comment: string;
    completedDate: Date;
    computerName: string;
    configuration: ShallowReference;
    createdDate: Date;
    customFields: CustomTestField[];
    durationInMs: number;
    errorMessage: string;
    failingSince: FailingSince;
    failureType: string;
    id: number;
    iterationDetails: TestIterationDetailsModel[];
    lastUpdatedBy: VSSInterfaces.IdentityRef;
    lastUpdatedDate: Date;
    outcome: string;
    owner: VSSInterfaces.IdentityRef;
    priority: number;
    project: ShallowReference;
    release: ShallowReference;
    releaseReference: ReleaseReference;
    resetCount: number;
    resolutionState: string;
    resolutionStateId: number;
    revision: number;
    runBy: VSSInterfaces.IdentityRef;
    stackTrace: string;
    startedDate: Date;
    state: string;
    testCase: ShallowReference;
    testCaseTitle: string;
    testPlan: ShallowReference;
    testPoint: ShallowReference;
    testRun: ShallowReference;
    testSuite: ShallowReference;
    url: string;
}

export interface TestCaseResultAttachmentModel {
    id: number;
    iterationId: number;
    name: string;
    size: number;
    url: string;
}

export interface TestCaseResultIdentifier {
    testResultId: number;
    testRunId: number;
}

export interface TestCaseResultUpdateModel {
    associatedWorkItems: number[];
    automatedTestTypeId: string;
    comment: string;
    completedDate: string;
    computerName: string;
    customFields: CustomTestField[];
    durationInMs: string;
    errorMessage: string;
    failureType: string;
    outcome: string;
    owner: VSSInterfaces.IdentityRef;
    resolutionState: string;
    runBy: VSSInterfaces.IdentityRef;
    stackTrace: string;
    startedDate: string;
    state: string;
    testCasePriority: string;
    testResult: ShallowReference;
}

export interface TestConfiguration {
    /**
     * Area of the configuration
     */
    area: ShallowReference;
    /**
     * Description of the configuration
     */
    description: string;
    /**
     * Id of the configuration
     */
    id: number;
    /**
     * Is the configuration a default for the test plans
     */
    isDefault: boolean;
    /**
     * Last Updated By  Reference
     */
    lastUpdatedBy: VSSInterfaces.IdentityRef;
    /**
     * Last Updated Data
     */
    lastUpdatedDate: Date;
    /**
     * Name of the configuration
     */
    name: string;
    /**
     * Project to which the configuration belongs
     */
    project: ShallowReference;
    /**
     * Revision of the the configuration
     */
    revision: number;
    /**
     * State of the configuration
     */
    state: TestConfigurationState;
    /**
     * Url of Configuration Resource
     */
    url: string;
    /**
     * Dictionary of Test Variable, Selected Value
     */
    values: NameValuePair[];
}

export enum TestConfigurationState {
    /**
     * The configuration can be used for new test runs.
     */
    Active = 1,
    /**
     * The configuration has been retired and should not be used for new test runs.
     */
    Inactive = 2,
}

export interface TestEnvironment {
    environmentId: string;
    environmentName: string;
}

export interface TestFailureDetails {
    count: number;
    testResults: ShallowReference[];
}

export interface TestFailuresAnalysis {
    existingFailures: TestFailureDetails;
    fixedTests: TestFailureDetails;
    newFailures: TestFailureDetails;
    previousContext: TestResultsContext;
}

export interface TestIterationDetailsModel {
    actionResults: TestActionResultModel[];
    attachments: TestCaseResultAttachmentModel[];
    comment: string;
    completedDate: Date;
    durationInMs: number;
    errorMessage: string;
    id: number;
    outcome: string;
    parameters: TestResultParameterModel[];
    startedDate: Date;
    url: string;
}

/**
 * An abstracted reference to some other resource. This class is used to provide the build data contracts with a uniform way to reference other resources in a way that provides easy traversal through links.
 */
export interface TestMessageLogDetails {
    /**
     * Date when the resource is created
     */
    dateCreated: Date;
    /**
     * Id of the resource
     */
    entryId: number;
    /**
     * Message of the resource
     */
    message: string;
}

export interface TestMethod {
    container: string;
    name: string;
}

export enum TestOutcome {
    /**
     * Only used during an update to preserve the existing value.
     */
    Unspecified = 0,
    /**
     * Test has not been completed, or the test type does not report pass/failure.
     */
    None = 1,
    /**
     * Test was executed w/o any issues.
     */
    Passed = 2,
    /**
     * Test was executed, but there were issues. Issues may involve exceptions or failed assertions.
     */
    Failed = 3,
    /**
     * Test has completed, but we can't say if it passed or failed. May be used for aborted tests...
     */
    Inconclusive = 4,
    /**
     * The test timed out
     */
    Timeout = 5,
    /**
     * Test was aborted. This was not caused by a user gesture, but rather by a framework decision.
     */
    Aborted = 6,
    /**
     * Test had it chance for been executed but was not, as ITestElement.IsRunnable == false.
     */
    Blocked = 7,
    /**
     * Test was not executed. This was caused by a user gesture - e.g. user hit stop button.
     */
    NotExecuted = 8,
    /**
     * To be used by Run level results. This is not a failure.
     */
    Warning = 9,
    /**
     * There was a system error while we were trying to execute a test.
     */
    Error = 10,
    /**
     * Test is Not Applicable for execution.
     */
    NotApplicable = 11,
    /**
     * Test is paused.
     */
    Paused = 12,
    /**
     * Test is currently executing. Added this for TCM charts
     */
    InProgress = 13,
    MaxValue = 13,
}

export interface TestPlan {
    area: ShallowReference;
    automatedTestEnvironment: TestEnvironment;
    automatedTestSettings: TestSettings;
    build: ShallowReference;
    clientUrl: string;
    description: string;
    endDate: Date;
    id: number;
    iteration: string;
    manualTestEnvironment: TestEnvironment;
    manualTestSettings: TestSettings;
    name: string;
    owner: VSSInterfaces.IdentityRef;
    previousBuild: ShallowReference;
    project: ShallowReference;
    revision: number;
    rootSuite: ShallowReference;
    startDate: Date;
    state: string;
    updatedBy: VSSInterfaces.IdentityRef;
    updatedDate: Date;
    url: string;
}

export interface TestPlanCloneRequest {
    destinationTestPlan: TestPlan;
    options: CloneOptions;
    suiteIds: number[];
}

export interface TestPlanHubData {
    selectedSuiteId: number;
    testPlan: TestPlan;
    testPoints: TestPoint[];
    testSuites: TestSuite[];
}

export interface TestPlansWithSelection {
    lastSelectedPlan: number;
    lastSelectedSuite: number;
    plans: TestPlan[];
}

export interface TestPoint {
    assignedTo: VSSInterfaces.IdentityRef;
    automated: boolean;
    comment: string;
    configuration: ShallowReference;
    failureType: string;
    id: number;
    lastResolutionStateId: number;
    lastResult: ShallowReference;
    lastResultDetails: LastResultDetails;
    lastResultState: string;
    lastRunBuildNumber: string;
    lastTestRun: ShallowReference;
    lastUpdatedBy: VSSInterfaces.IdentityRef;
    lastUpdatedDate: Date;
    outcome: string;
    revision: number;
    state: string;
    suite: ShallowReference;
    testCase: WorkItemReference;
    testPlan: ShallowReference;
    url: string;
    workItemProperties: any[];
}

export interface TestResolutionState {
    id: number;
    name: string;
    project: ShallowReference;
}

export interface TestResultCreateModel {
    area: ShallowReference;
    associatedWorkItems: number[];
    automatedTestId: string;
    automatedTestName: string;
    automatedTestStorage: string;
    automatedTestType: string;
    automatedTestTypeId: string;
    comment: string;
    completedDate: string;
    computerName: string;
    configuration: ShallowReference;
    customFields: CustomTestField[];
    durationInMs: string;
    errorMessage: string;
    failureType: string;
    outcome: string;
    owner: VSSInterfaces.IdentityRef;
    resolutionState: string;
    runBy: VSSInterfaces.IdentityRef;
    stackTrace: string;
    startedDate: string;
    state: string;
    testCase: ShallowReference;
    testCasePriority: string;
    testCaseTitle: string;
    testPoint: ShallowReference;
}

export interface TestResultHistory {
    groupByField: string;
    resultsForGroup: TestResultHistoryDetailsForGroup[];
}

export interface TestResultHistoryDetailsForGroup {
    groupByValue: any;
    latestResult: TestCaseResult;
}

export interface TestResultModelBase {
    comment: string;
    completedDate: Date;
    durationInMs: number;
    errorMessage: string;
    outcome: string;
    startedDate: Date;
}

export interface TestResultParameterModel {
    actionPath: string;
    iterationId: number;
    parameterName: string;
    url: string;
    value: string;
}

export interface TestResultsContext {
    build: BuildReference;
    contextType: TestResultsContextType;
    release: ReleaseReference;
}

export enum TestResultsContextType {
    Build = 1,
    Release = 2,
}

export interface TestResultsDetails {
    groupByField: string;
    resultsForGroup: TestResultsDetailsForGroup[];
}

export interface TestResultsDetailsForGroup {
    groupByValue: any;
    results: TestCaseResult[];
    resultsCountByOutcome: { [key: number] : AggregatedResultsByOutcome; };
}

export interface TestResultsQuery {
    fields: string[];
    results: TestCaseResult[];
    resultsFilter: ResultsFilter;
}

export interface TestResultSummary {
    aggregatedResultsAnalysis: AggregatedResultsAnalysis;
    teamProject: TfsCoreInterfaces.TeamProjectReference;
    testFailures: TestFailuresAnalysis;
    testResultsContext: TestResultsContext;
}

export interface TestResultTrendFilter {
    branchNames: string[];
    buildCount: number;
    definitionIds: number[];
    maxCompleteDate: Date;
    publishContext: string;
    testRunTitles: string[];
    trendDays: number;
}

export interface TestRun {
    build: ShallowReference;
    buildConfiguration: BuildConfiguration;
    comment: string;
    completedDate: Date;
    controller: string;
    createdDate: Date;
    customFields: CustomTestField[];
    dropLocation: string;
    dtlAutEnvironment: ShallowReference;
    dtlEnvironment: ShallowReference;
    dtlEnvironmentCreationDetails: DtlEnvironmentDetails;
    dueDate: Date;
    errorMessage: string;
    filter: RunFilter;
    id: number;
    incompleteTests: number;
    isAutomated: boolean;
    iteration: string;
    lastUpdatedBy: VSSInterfaces.IdentityRef;
    lastUpdatedDate: Date;
    name: string;
    notApplicableTests: number;
    owner: VSSInterfaces.IdentityRef;
    passedTests: number;
    phase: string;
    plan: ShallowReference;
    postProcessState: string;
    project: ShallowReference;
    release: ReleaseReference;
    releaseEnvironmentUri: string;
    releaseUri: string;
    revision: number;
    runStatistics: RunStatistic[];
    startedDate: Date;
    state: string;
    substate: TestRunSubstate;
    testEnvironment: TestEnvironment;
    testMessageLogId: number;
    testSettings: ShallowReference;
    totalTests: number;
    unanalyzedTests: number;
    url: string;
    webAccessUrl: string;
}

export interface TestRunCoverage {
    lastError: string;
    modules: ModuleCoverage[];
    state: string;
    testRun: ShallowReference;
}

export interface TestRunStatistic {
    run: ShallowReference;
    runStatistics: RunStatistic[];
}

export enum TestRunSubstate {
    None = 0,
    CreatingEnvironment = 1,
    RunningTests = 2,
    CanceledByUser = 3,
    AbortedBySystem = 4,
    TimedOut = 5,
    PendingAnalysis = 6,
    Analyzed = 7,
    CancellationInProgress = 8,
}

export interface TestSession {
    /**
     * Area path of the test session
     */
    area: ShallowReference;
    /**
     * Comments in the test session
     */
    comment: string;
    /**
     * Duration of the session
     */
    endDate: Date;
    /**
     * Id of the test session
     */
    id: number;
    /**
     * Last Updated By  Reference
     */
    lastUpdatedBy: VSSInterfaces.IdentityRef;
    /**
     * Last updated date
     */
    lastUpdatedDate: Date;
    /**
     * Owner of the test session
     */
    owner: VSSInterfaces.IdentityRef;
    /**
     * Project to which the test session belongs
     */
    project: ShallowReference;
    /**
     * Generic store for test session data
     */
    propertyBag: PropertyBag;
    /**
     * Revision of the test session
     */
    revision: number;
    /**
     * Source of the test session
     */
    source: TestSessionSource;
    /**
     * Start date
     */
    startDate: Date;
    /**
     * State of the test session
     */
    state: TestSessionState;
    /**
     * Title of the test session
     */
    title: string;
    /**
     * Url of Test Session Resource
     */
    url: string;
}

export interface TestSessionExploredWorkItemReference extends TestSessionWorkItemReference {
    /**
     * Workitem references of workitems filed as a part of the current workitem exploration.
     */
    associatedWorkItems: TestSessionWorkItemReference[];
    /**
     * Time when exploration of workitem ended.
     */
    endTime: Date;
    /**
     * Time when explore of workitem was started.
     */
    startTime: Date;
}

export enum TestSessionSource {
    /**
     * Source of test session uncertain as it is stale
     */
    Unkonown = 0,
    /**
     * The session was created from Microsoft Test Manager exploratory desktop tool.
     */
    XTDesktop = 1,
    /**
     * The session was created from feedback client.
     */
    FeedbackDesktop = 2,
    /**
     * The session was created from browser extension.
     */
    XTWeb = 3,
    /**
     * The session was created from browser extension.
     */
    FeedbackWeb = 4,
}

export enum TestSessionState {
    /**
     * Only used during an update to preserve the existing value.
     */
    Unspecified = 0,
    /**
     * The session is still being created.
     */
    NotStarted = 1,
    /**
     * The session is running.
     */
    InProgress = 2,
    /**
     * The session has paused.
     */
    Paused = 3,
    /**
     * The session has completed.
     */
    Completed = 4,
    /**
     * This is required for Feedback session which are declined
     */
    Declined = 5,
}

export interface TestSessionWorkItemReference {
    /**
     * Id of the workitem
     */
    id: number;
    /**
     * Type of the workitem
     */
    type: string;
}

/**
 * Represents the test settings of the run. Used to create test settings and fetch test settings
 */
export interface TestSettings {
    /**
     * Area path required to create test settings
     */
    areaPath: string;
    /**
     * Description of the test settings. Used in create test settings.
     */
    description: string;
    /**
     * Indicates if the tests settings is public or private.Used in create test settings.
     */
    isPublic: boolean;
    /**
     * Xml string of machine roles. Used in create test settings.
     */
    machineRoles: string;
    /**
     * Test settings content.
     */
    testSettingsContent: string;
    /**
     * Test settings id.
     */
    testSettingsId: number;
    /**
     * Test settings name.
     */
    testSettingsName: string;
}

export interface TestSuite {
    areaUri: string;
    children: TestSuite[];
    defaultConfigurations: ShallowReference[];
    id: number;
    inheritDefaultConfigurations: boolean;
    lastError: string;
    lastPopulatedDate: Date;
    lastUpdatedBy: VSSInterfaces.IdentityRef;
    lastUpdatedDate: Date;
    name: string;
    parent: ShallowReference;
    plan: ShallowReference;
    project: ShallowReference;
    queryString: string;
    requirementId: number;
    revision: number;
    state: string;
    suites: ShallowReference[];
    suiteType: string;
    testCaseCount: number;
    testCasesUrl: string;
    text: string;
    url: string;
}

export interface TestSuiteCloneRequest {
    cloneOptions: CloneOptions;
    destinationSuiteId: number;
    destinationSuiteProjectName: string;
}

export interface TestSummaryForWorkItem {
    summary: AggregatedDataForResultTrend;
    workItem: WorkItemReference;
}

export interface TestToWorkItemLinks {
    test: TestMethod;
    workItems: WorkItemReference[];
}

export interface TestVariable {
    /**
     * Description of the test variable
     */
    description: string;
    /**
     * Id of the test variable
     */
    id: number;
    /**
     * Name of the test variable
     */
    name: string;
    /**
     * Project to which the test variable belongs
     */
    project: ShallowReference;
    /**
     * Revision
     */
    revision: number;
    /**
     * Url of the test variable
     */
    url: string;
    /**
     * List of allowed values
     */
    values: string[];
}

export interface WorkItemReference {
    id: string;
    name: string;
    type: string;
    url: string;
    webUrl: string;
}

export interface WorkItemToTestLinks {
    tests: TestMethod[];
    workItem: WorkItemReference;
}

export var TypeInfo = {
    AggregatedDataForResultTrend: {
        fields: <any>null
    },
    AggregatedResultsAnalysis: {
        fields: <any>null
    },
    AggregatedResultsByOutcome: {
        fields: <any>null
    },
    AggregatedResultsDifference: {
        fields: <any>null
    },
    AttachmentType: {
        enumValues: {
            "generalAttachment": 0,
            "afnStrip": 1,
            "bugFilingData": 2,
            "codeCoverage": 3,
            "intermediateCollectorData": 4,
            "runConfig": 5,
            "testImpactDetails": 6,
            "tmiTestRunDeploymentFiles": 7,
            "tmiTestRunReverseDeploymentFiles": 8,
            "tmiTestResultDetail": 9,
            "tmiTestRunSummary": 10,
            "consoleLog": 11,
        }
    },
    BatchResponse: {
        fields: <any>null
    },
    BuildConfiguration: {
        fields: <any>null
    },
    BuildCoverage: {
        fields: <any>null
    },
    BuildReference: {
        fields: <any>null
    },
    CloneOperationInformation: {
        fields: <any>null
    },
    CloneOperationState: {
        enumValues: {
            "failed": 2,
            "inProgress": 1,
            "queued": 0,
            "succeeded": 3,
        }
    },
    CloneOptions: {
        fields: <any>null
    },
    CloneStatistics: {
        fields: <any>null
    },
    CodeCoverageData: {
        fields: <any>null
    },
    CodeCoverageStatistics: {
        fields: <any>null
    },
    CodeCoverageSummary: {
        fields: <any>null
    },
    CoverageQueryFlags: {
        enumValues: {
            "modules": 1,
            "functions": 2,
            "blockData": 4,
        }
    },
    CoverageStatistics: {
        fields: <any>null
    },
    CustomTestField: {
        fields: <any>null
    },
    CustomTestFieldDefinition: {
        fields: <any>null
    },
    CustomTestFieldScope: {
        enumValues: {
            "none": 0,
            "testRun": 1,
            "testResult": 2,
            "system": 4,
            "all": 7,
        }
    },
    CustomTestFieldType: {
        enumValues: {
            "bit": 2,
            "dateTime": 4,
            "int": 8,
            "float": 6,
            "string": 12,
            "guid": 14,
        }
    },
    DtlEnvironmentDetails: {
        fields: <any>null
    },
    FailingSince: {
        fields: <any>null
    },
    FunctionCoverage: {
        fields: <any>null
    },
    LastResultDetails: {
        fields: <any>null
    },
    ModuleCoverage: {
        fields: <any>null
    },
    NameValuePair: {
        fields: <any>null
    },
    PlanUpdateModel: {
        fields: <any>null
    },
    PointAssignment: {
        fields: <any>null
    },
    PointUpdateModel: {
        fields: <any>null
    },
    PointWorkItemProperty: {
        fields: <any>null
    },
    PropertyBag: {
        fields: <any>null
    },
    QueryModel: {
        fields: <any>null
    },
    ReleaseReference: {
        fields: <any>null
    },
    Response: {
        fields: <any>null
    },
    ResultDetails: {
        enumValues: {
            "none": 0,
            "iterations": 1,
            "workItems": 2,
        }
    },
    ResultObjectType: {
        enumValues: {
            "testSuite": 0,
            "testPlan": 1,
        }
    },
    ResultRetentionSettings: {
        fields: <any>null
    },
    ResultsFilter: {
        fields: <any>null
    },
    ResultUpdateRequestModel: {
        fields: <any>null
    },
    ResultUpdateResponseModel: {
        fields: <any>null
    },
    RunCreateModel: {
        fields: <any>null
    },
    RunFilter: {
        fields: <any>null
    },
    RunStatistic: {
        fields: <any>null
    },
    RunUpdateModel: {
        fields: <any>null
    },
    ShallowReference: {
        fields: <any>null
    },
    SharedStepModel: {
        fields: <any>null
    },
    SuiteCreateModel: {
        fields: <any>null
    },
    SuiteEntry: {
        fields: <any>null
    },
    SuiteEntryUpdateModel: {
        fields: <any>null
    },
    SuiteTestCase: {
        fields: <any>null
    },
    SuiteUpdateModel: {
        fields: <any>null
    },
    TestActionResultModel: {
        fields: <any>null
    },
    TestAttachment: {
        fields: <any>null
    },
    TestAttachmentReference: {
        fields: <any>null
    },
    TestAttachmentRequestModel: {
        fields: <any>null
    },
    TestCaseResult: {
        fields: <any>null
    },
    TestCaseResultAttachmentModel: {
        fields: <any>null
    },
    TestCaseResultIdentifier: {
        fields: <any>null
    },
    TestCaseResultUpdateModel: {
        fields: <any>null
    },
    TestConfiguration: {
        fields: <any>null
    },
    TestConfigurationState: {
        enumValues: {
            "active": 1,
            "inactive": 2,
        }
    },
    TestEnvironment: {
        fields: <any>null
    },
    TestFailureDetails: {
        fields: <any>null
    },
    TestFailuresAnalysis: {
        fields: <any>null
    },
    TestIterationDetailsModel: {
        fields: <any>null
    },
    TestMessageLogDetails: {
        fields: <any>null
    },
    TestMethod: {
        fields: <any>null
    },
    TestOutcome: {
        enumValues: {
            "unspecified": 0,
            "none": 1,
            "passed": 2,
            "failed": 3,
            "inconclusive": 4,
            "timeout": 5,
            "aborted": 6,
            "blocked": 7,
            "notExecuted": 8,
            "warning": 9,
            "error": 10,
            "notApplicable": 11,
            "paused": 12,
            "inProgress": 13,
            "maxValue": 13,
        }
    },
    TestPlan: {
        fields: <any>null
    },
    TestPlanCloneRequest: {
        fields: <any>null
    },
    TestPlanHubData: {
        fields: <any>null
    },
    TestPlansWithSelection: {
        fields: <any>null
    },
    TestPoint: {
        fields: <any>null
    },
    TestResolutionState: {
        fields: <any>null
    },
    TestResultCreateModel: {
        fields: <any>null
    },
    TestResultHistory: {
        fields: <any>null
    },
    TestResultHistoryDetailsForGroup: {
        fields: <any>null
    },
    TestResultModelBase: {
        fields: <any>null
    },
    TestResultParameterModel: {
        fields: <any>null
    },
    TestResultsContext: {
        fields: <any>null
    },
    TestResultsContextType: {
        enumValues: {
            "build": 1,
            "release": 2,
        }
    },
    TestResultsDetails: {
        fields: <any>null
    },
    TestResultsDetailsForGroup: {
        fields: <any>null
    },
    TestResultsQuery: {
        fields: <any>null
    },
    TestResultSummary: {
        fields: <any>null
    },
    TestResultTrendFilter: {
        fields: <any>null
    },
    TestRun: {
        fields: <any>null
    },
    TestRunCoverage: {
        fields: <any>null
    },
    TestRunStatistic: {
        fields: <any>null
    },
    TestRunSubstate: {
        enumValues: {
            "none": 0,
            "creatingEnvironment": 1,
            "runningTests": 2,
            "canceledByUser": 3,
            "abortedBySystem": 4,
            "timedOut": 5,
            "pendingAnalysis": 6,
            "analyzed": 7,
            "cancellationInProgress": 8,
        }
    },
    TestSession: {
        fields: <any>null
    },
    TestSessionExploredWorkItemReference: {
        fields: <any>null
    },
    TestSessionSource: {
        enumValues: {
            "unkonown": 0,
            "xTDesktop": 1,
            "feedbackDesktop": 2,
            "xTWeb": 3,
            "feedbackWeb": 4,
        }
    },
    TestSessionState: {
        enumValues: {
            "unspecified": 0,
            "notStarted": 1,
            "inProgress": 2,
            "paused": 3,
            "completed": 4,
            "declined": 5,
        }
    },
    TestSessionWorkItemReference: {
        fields: <any>null
    },
    TestSettings: {
        fields: <any>null
    },
    TestSuite: {
        fields: <any>null
    },
    TestSuiteCloneRequest: {
        fields: <any>null
    },
    TestSummaryForWorkItem: {
        fields: <any>null
    },
    TestToWorkItemLinks: {
        fields: <any>null
    },
    TestVariable: {
        fields: <any>null
    },
    WorkItemReference: {
        fields: <any>null
    },
    WorkItemToTestLinks: {
        fields: <any>null
    },
};

TypeInfo.AggregatedDataForResultTrend.fields = {
    resultsByOutcome: {
    },
    testResultsContext: {
        typeInfo: TypeInfo.TestResultsContext
    },
};

TypeInfo.AggregatedResultsAnalysis.fields = {
    previousContext: {
        typeInfo: TypeInfo.TestResultsContext
    },
    resultsByOutcome: {
    },
    resultsDifference: {
        typeInfo: TypeInfo.AggregatedResultsDifference
    },
};

TypeInfo.AggregatedResultsByOutcome.fields = {
    outcome: {
        enumType: TypeInfo.TestOutcome
    },
};

TypeInfo.AggregatedResultsDifference.fields = {
};

TypeInfo.BatchResponse.fields = {
    responses: {
        isArray: true,
        typeInfo: TypeInfo.Response
    },
};

TypeInfo.BuildConfiguration.fields = {
    project: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.BuildCoverage.fields = {
    configuration: {
        typeInfo: TypeInfo.BuildConfiguration
    },
    modules: {
        isArray: true,
        typeInfo: TypeInfo.ModuleCoverage
    },
};

TypeInfo.BuildReference.fields = {
};

TypeInfo.CloneOperationInformation.fields = {
    cloneStatistics: {
        typeInfo: TypeInfo.CloneStatistics
    },
    completionDate: {
        isDate: true,
    },
    creationDate: {
        isDate: true,
    },
    destinationObject: {
        typeInfo: TypeInfo.ShallowReference
    },
    destinationPlan: {
        typeInfo: TypeInfo.ShallowReference
    },
    destinationProject: {
        typeInfo: TypeInfo.ShallowReference
    },
    resultObjectType: {
        enumType: TypeInfo.ResultObjectType
    },
    sourceObject: {
        typeInfo: TypeInfo.ShallowReference
    },
    sourcePlan: {
        typeInfo: TypeInfo.ShallowReference
    },
    sourceProject: {
        typeInfo: TypeInfo.ShallowReference
    },
    state: {
        enumType: TypeInfo.CloneOperationState
    },
};

TypeInfo.CloneOptions.fields = {
};

TypeInfo.CloneStatistics.fields = {
};

TypeInfo.CodeCoverageData.fields = {
    coverageStats: {
        isArray: true,
        typeInfo: TypeInfo.CodeCoverageStatistics
    },
};

TypeInfo.CodeCoverageStatistics.fields = {
};

TypeInfo.CodeCoverageSummary.fields = {
    build: {
        typeInfo: TypeInfo.ShallowReference
    },
    coverageData: {
        isArray: true,
        typeInfo: TypeInfo.CodeCoverageData
    },
    deltaBuild: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.CoverageStatistics.fields = {
};

TypeInfo.CustomTestField.fields = {
};

TypeInfo.CustomTestFieldDefinition.fields = {
    fieldType: {
        enumType: TypeInfo.CustomTestFieldType
    },
    scope: {
        enumType: TypeInfo.CustomTestFieldScope
    },
};

TypeInfo.DtlEnvironmentDetails.fields = {
};

TypeInfo.FailingSince.fields = {
    build: {
        typeInfo: TypeInfo.BuildReference
    },
    date: {
        isDate: true,
    },
    release: {
        typeInfo: TypeInfo.ReleaseReference
    },
};

TypeInfo.FunctionCoverage.fields = {
    statistics: {
        typeInfo: TypeInfo.CoverageStatistics
    },
};

TypeInfo.LastResultDetails.fields = {
    dateCompleted: {
        isDate: true,
    },
    runBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.ModuleCoverage.fields = {
    functions: {
        isArray: true,
        typeInfo: TypeInfo.FunctionCoverage
    },
    statistics: {
        typeInfo: TypeInfo.CoverageStatistics
    },
};

TypeInfo.NameValuePair.fields = {
};

TypeInfo.PlanUpdateModel.fields = {
    area: {
        typeInfo: TypeInfo.ShallowReference
    },
    automatedTestEnvironment: {
        typeInfo: TypeInfo.TestEnvironment
    },
    automatedTestSettings: {
        typeInfo: TypeInfo.TestSettings
    },
    build: {
        typeInfo: TypeInfo.ShallowReference
    },
    manualTestEnvironment: {
        typeInfo: TypeInfo.TestEnvironment
    },
    manualTestSettings: {
        typeInfo: TypeInfo.TestSettings
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.PointAssignment.fields = {
    configuration: {
        typeInfo: TypeInfo.ShallowReference
    },
    tester: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.PointUpdateModel.fields = {
    tester: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.PointWorkItemProperty.fields = {
};

TypeInfo.PropertyBag.fields = {
};

TypeInfo.QueryModel.fields = {
};

TypeInfo.ReleaseReference.fields = {
};

TypeInfo.Response.fields = {
};

TypeInfo.ResultRetentionSettings.fields = {
    lastUpdatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    lastUpdatedDate: {
        isDate: true,
    },
};

TypeInfo.ResultsFilter.fields = {
    maxCompleteDate: {
        isDate: true,
    },
    testResultsContext: {
        typeInfo: TypeInfo.TestResultsContext
    },
};

TypeInfo.ResultUpdateRequestModel.fields = {
    actionResultDeletes: {
        isArray: true,
        typeInfo: TypeInfo.TestActionResultModel
    },
    actionResults: {
        isArray: true,
        typeInfo: TypeInfo.TestActionResultModel
    },
    parameterDeletes: {
        isArray: true,
        typeInfo: TypeInfo.TestResultParameterModel
    },
    parameters: {
        isArray: true,
        typeInfo: TypeInfo.TestResultParameterModel
    },
    testCaseResult: {
        typeInfo: TypeInfo.TestCaseResultUpdateModel
    },
};

TypeInfo.ResultUpdateResponseModel.fields = {
};

TypeInfo.RunCreateModel.fields = {
    build: {
        typeInfo: TypeInfo.ShallowReference
    },
    customTestFields: {
        isArray: true,
        typeInfo: TypeInfo.CustomTestField
    },
    dtlAutEnvironment: {
        typeInfo: TypeInfo.ShallowReference
    },
    dtlTestEnvironment: {
        typeInfo: TypeInfo.ShallowReference
    },
    environmentDetails: {
        typeInfo: TypeInfo.DtlEnvironmentDetails
    },
    filter: {
        typeInfo: TypeInfo.RunFilter
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    plan: {
        typeInfo: TypeInfo.ShallowReference
    },
    testSettings: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.RunFilter.fields = {
};

TypeInfo.RunStatistic.fields = {
    resolutionState: {
        typeInfo: TypeInfo.TestResolutionState
    },
};

TypeInfo.RunUpdateModel.fields = {
    build: {
        typeInfo: TypeInfo.ShallowReference
    },
    dtlAutEnvironment: {
        typeInfo: TypeInfo.ShallowReference
    },
    dtlEnvironment: {
        typeInfo: TypeInfo.ShallowReference
    },
    dtlEnvironmentDetails: {
        typeInfo: TypeInfo.DtlEnvironmentDetails
    },
    logEntries: {
        isArray: true,
        typeInfo: TypeInfo.TestMessageLogDetails
    },
    substate: {
        enumType: TypeInfo.TestRunSubstate
    },
    testSettings: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.ShallowReference.fields = {
};

TypeInfo.SharedStepModel.fields = {
};

TypeInfo.SuiteCreateModel.fields = {
};

TypeInfo.SuiteEntry.fields = {
};

TypeInfo.SuiteEntryUpdateModel.fields = {
};

TypeInfo.SuiteTestCase.fields = {
    pointAssignments: {
        isArray: true,
        typeInfo: TypeInfo.PointAssignment
    },
    testCase: {
        typeInfo: TypeInfo.WorkItemReference
    },
};

TypeInfo.SuiteUpdateModel.fields = {
};

TypeInfo.TestActionResultModel.fields = {
    completedDate: {
        isDate: true,
    },
    sharedStepModel: {
        typeInfo: TypeInfo.SharedStepModel
    },
    startedDate: {
        isDate: true,
    },
};

TypeInfo.TestAttachment.fields = {
    attachmentType: {
        enumType: TypeInfo.AttachmentType
    },
    createdDate: {
        isDate: true,
    },
};

TypeInfo.TestAttachmentReference.fields = {
};

TypeInfo.TestAttachmentRequestModel.fields = {
};

TypeInfo.TestCaseResult.fields = {
    area: {
        typeInfo: TypeInfo.ShallowReference
    },
    associatedBugs: {
        isArray: true,
        typeInfo: TypeInfo.ShallowReference
    },
    build: {
        typeInfo: TypeInfo.ShallowReference
    },
    buildReference: {
        typeInfo: TypeInfo.BuildReference
    },
    completedDate: {
        isDate: true,
    },
    configuration: {
        typeInfo: TypeInfo.ShallowReference
    },
    createdDate: {
        isDate: true,
    },
    customFields: {
        isArray: true,
        typeInfo: TypeInfo.CustomTestField
    },
    failingSince: {
        typeInfo: TypeInfo.FailingSince
    },
    iterationDetails: {
        isArray: true,
        typeInfo: TypeInfo.TestIterationDetailsModel
    },
    lastUpdatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    lastUpdatedDate: {
        isDate: true,
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    project: {
        typeInfo: TypeInfo.ShallowReference
    },
    release: {
        typeInfo: TypeInfo.ShallowReference
    },
    releaseReference: {
        typeInfo: TypeInfo.ReleaseReference
    },
    runBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    startedDate: {
        isDate: true,
    },
    testCase: {
        typeInfo: TypeInfo.ShallowReference
    },
    testPlan: {
        typeInfo: TypeInfo.ShallowReference
    },
    testPoint: {
        typeInfo: TypeInfo.ShallowReference
    },
    testRun: {
        typeInfo: TypeInfo.ShallowReference
    },
    testSuite: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestCaseResultAttachmentModel.fields = {
};

TypeInfo.TestCaseResultIdentifier.fields = {
};

TypeInfo.TestCaseResultUpdateModel.fields = {
    customFields: {
        isArray: true,
        typeInfo: TypeInfo.CustomTestField
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    runBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    testResult: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestConfiguration.fields = {
    area: {
        typeInfo: TypeInfo.ShallowReference
    },
    lastUpdatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    lastUpdatedDate: {
        isDate: true,
    },
    project: {
        typeInfo: TypeInfo.ShallowReference
    },
    state: {
        enumType: TypeInfo.TestConfigurationState
    },
    values: {
        isArray: true,
        typeInfo: TypeInfo.NameValuePair
    },
};

TypeInfo.TestEnvironment.fields = {
};

TypeInfo.TestFailureDetails.fields = {
    testResults: {
        isArray: true,
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestFailuresAnalysis.fields = {
    existingFailures: {
        typeInfo: TypeInfo.TestFailureDetails
    },
    fixedTests: {
        typeInfo: TypeInfo.TestFailureDetails
    },
    newFailures: {
        typeInfo: TypeInfo.TestFailureDetails
    },
    previousContext: {
        typeInfo: TypeInfo.TestResultsContext
    },
};

TypeInfo.TestIterationDetailsModel.fields = {
    actionResults: {
        isArray: true,
        typeInfo: TypeInfo.TestActionResultModel
    },
    attachments: {
        isArray: true,
        typeInfo: TypeInfo.TestCaseResultAttachmentModel
    },
    completedDate: {
        isDate: true,
    },
    parameters: {
        isArray: true,
        typeInfo: TypeInfo.TestResultParameterModel
    },
    startedDate: {
        isDate: true,
    },
};

TypeInfo.TestMessageLogDetails.fields = {
    dateCreated: {
        isDate: true,
    },
};

TypeInfo.TestMethod.fields = {
};

TypeInfo.TestPlan.fields = {
    area: {
        typeInfo: TypeInfo.ShallowReference
    },
    automatedTestEnvironment: {
        typeInfo: TypeInfo.TestEnvironment
    },
    automatedTestSettings: {
        typeInfo: TypeInfo.TestSettings
    },
    build: {
        typeInfo: TypeInfo.ShallowReference
    },
    endDate: {
        isDate: true,
    },
    manualTestEnvironment: {
        typeInfo: TypeInfo.TestEnvironment
    },
    manualTestSettings: {
        typeInfo: TypeInfo.TestSettings
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    previousBuild: {
        typeInfo: TypeInfo.ShallowReference
    },
    project: {
        typeInfo: TypeInfo.ShallowReference
    },
    rootSuite: {
        typeInfo: TypeInfo.ShallowReference
    },
    startDate: {
        isDate: true,
    },
    updatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    updatedDate: {
        isDate: true,
    },
};

TypeInfo.TestPlanCloneRequest.fields = {
    destinationTestPlan: {
        typeInfo: TypeInfo.TestPlan
    },
    options: {
        typeInfo: TypeInfo.CloneOptions
    },
};

TypeInfo.TestPlanHubData.fields = {
    testPlan: {
        typeInfo: TypeInfo.TestPlan
    },
    testPoints: {
        isArray: true,
        typeInfo: TypeInfo.TestPoint
    },
    testSuites: {
        isArray: true,
        typeInfo: TypeInfo.TestSuite
    },
};

TypeInfo.TestPlansWithSelection.fields = {
    plans: {
        isArray: true,
        typeInfo: TypeInfo.TestPlan
    },
};

TypeInfo.TestPoint.fields = {
    assignedTo: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    configuration: {
        typeInfo: TypeInfo.ShallowReference
    },
    lastResult: {
        typeInfo: TypeInfo.ShallowReference
    },
    lastResultDetails: {
        typeInfo: TypeInfo.LastResultDetails
    },
    lastTestRun: {
        typeInfo: TypeInfo.ShallowReference
    },
    lastUpdatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    lastUpdatedDate: {
        isDate: true,
    },
    suite: {
        typeInfo: TypeInfo.ShallowReference
    },
    testCase: {
        typeInfo: TypeInfo.WorkItemReference
    },
    testPlan: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestResolutionState.fields = {
    project: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestResultCreateModel.fields = {
    area: {
        typeInfo: TypeInfo.ShallowReference
    },
    configuration: {
        typeInfo: TypeInfo.ShallowReference
    },
    customFields: {
        isArray: true,
        typeInfo: TypeInfo.CustomTestField
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    runBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    testCase: {
        typeInfo: TypeInfo.ShallowReference
    },
    testPoint: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestResultHistory.fields = {
    resultsForGroup: {
        isArray: true,
        typeInfo: TypeInfo.TestResultHistoryDetailsForGroup
    },
};

TypeInfo.TestResultHistoryDetailsForGroup.fields = {
    latestResult: {
        typeInfo: TypeInfo.TestCaseResult
    },
};

TypeInfo.TestResultModelBase.fields = {
    completedDate: {
        isDate: true,
    },
    startedDate: {
        isDate: true,
    },
};

TypeInfo.TestResultParameterModel.fields = {
};

TypeInfo.TestResultsContext.fields = {
    build: {
        typeInfo: TypeInfo.BuildReference
    },
    contextType: {
        enumType: TypeInfo.TestResultsContextType
    },
    release: {
        typeInfo: TypeInfo.ReleaseReference
    },
};

TypeInfo.TestResultsDetails.fields = {
    resultsForGroup: {
        isArray: true,
        typeInfo: TypeInfo.TestResultsDetailsForGroup
    },
};

TypeInfo.TestResultsDetailsForGroup.fields = {
    results: {
        isArray: true,
        typeInfo: TypeInfo.TestCaseResult
    },
    resultsCountByOutcome: {
    },
};

TypeInfo.TestResultsQuery.fields = {
    results: {
        isArray: true,
        typeInfo: TypeInfo.TestCaseResult
    },
    resultsFilter: {
        typeInfo: TypeInfo.ResultsFilter
    },
};

TypeInfo.TestResultSummary.fields = {
    aggregatedResultsAnalysis: {
        typeInfo: TypeInfo.AggregatedResultsAnalysis
    },
    teamProject: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
    testFailures: {
        typeInfo: TypeInfo.TestFailuresAnalysis
    },
    testResultsContext: {
        typeInfo: TypeInfo.TestResultsContext
    },
};

TypeInfo.TestResultTrendFilter.fields = {
    maxCompleteDate: {
        isDate: true,
    },
};

TypeInfo.TestRun.fields = {
    build: {
        typeInfo: TypeInfo.ShallowReference
    },
    buildConfiguration: {
        typeInfo: TypeInfo.BuildConfiguration
    },
    completedDate: {
        isDate: true,
    },
    createdDate: {
        isDate: true,
    },
    customFields: {
        isArray: true,
        typeInfo: TypeInfo.CustomTestField
    },
    dtlAutEnvironment: {
        typeInfo: TypeInfo.ShallowReference
    },
    dtlEnvironment: {
        typeInfo: TypeInfo.ShallowReference
    },
    dtlEnvironmentCreationDetails: {
        typeInfo: TypeInfo.DtlEnvironmentDetails
    },
    dueDate: {
        isDate: true,
    },
    filter: {
        typeInfo: TypeInfo.RunFilter
    },
    lastUpdatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    lastUpdatedDate: {
        isDate: true,
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    plan: {
        typeInfo: TypeInfo.ShallowReference
    },
    project: {
        typeInfo: TypeInfo.ShallowReference
    },
    release: {
        typeInfo: TypeInfo.ReleaseReference
    },
    runStatistics: {
        isArray: true,
        typeInfo: TypeInfo.RunStatistic
    },
    startedDate: {
        isDate: true,
    },
    substate: {
        enumType: TypeInfo.TestRunSubstate
    },
    testEnvironment: {
        typeInfo: TypeInfo.TestEnvironment
    },
    testSettings: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestRunCoverage.fields = {
    modules: {
        isArray: true,
        typeInfo: TypeInfo.ModuleCoverage
    },
    testRun: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestRunStatistic.fields = {
    run: {
        typeInfo: TypeInfo.ShallowReference
    },
    runStatistics: {
        isArray: true,
        typeInfo: TypeInfo.RunStatistic
    },
};

TypeInfo.TestSession.fields = {
    area: {
        typeInfo: TypeInfo.ShallowReference
    },
    endDate: {
        isDate: true,
    },
    lastUpdatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    lastUpdatedDate: {
        isDate: true,
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    project: {
        typeInfo: TypeInfo.ShallowReference
    },
    propertyBag: {
        typeInfo: TypeInfo.PropertyBag
    },
    source: {
        enumType: TypeInfo.TestSessionSource
    },
    startDate: {
        isDate: true,
    },
    state: {
        enumType: TypeInfo.TestSessionState
    },
};

TypeInfo.TestSessionExploredWorkItemReference.fields = {
    associatedWorkItems: {
        isArray: true,
        typeInfo: TypeInfo.TestSessionWorkItemReference
    },
    endTime: {
        isDate: true,
    },
    startTime: {
        isDate: true,
    },
};

TypeInfo.TestSessionWorkItemReference.fields = {
};

TypeInfo.TestSettings.fields = {
};

TypeInfo.TestSuite.fields = {
    children: {
        isArray: true,
        typeInfo: TypeInfo.TestSuite
    },
    defaultConfigurations: {
        isArray: true,
        typeInfo: TypeInfo.ShallowReference
    },
    lastPopulatedDate: {
        isDate: true,
    },
    lastUpdatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    lastUpdatedDate: {
        isDate: true,
    },
    parent: {
        typeInfo: TypeInfo.ShallowReference
    },
    plan: {
        typeInfo: TypeInfo.ShallowReference
    },
    project: {
        typeInfo: TypeInfo.ShallowReference
    },
    suites: {
        isArray: true,
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestSuiteCloneRequest.fields = {
    cloneOptions: {
        typeInfo: TypeInfo.CloneOptions
    },
};

TypeInfo.TestSummaryForWorkItem.fields = {
    summary: {
        typeInfo: TypeInfo.AggregatedDataForResultTrend
    },
    workItem: {
        typeInfo: TypeInfo.WorkItemReference
    },
};

TypeInfo.TestToWorkItemLinks.fields = {
    test: {
        typeInfo: TypeInfo.TestMethod
    },
    workItems: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemReference
    },
};

TypeInfo.TestVariable.fields = {
    project: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.WorkItemReference.fields = {
};

TypeInfo.WorkItemToTestLinks.fields = {
    tests: {
        isArray: true,
        typeInfo: TypeInfo.TestMethod
    },
    workItem: {
        typeInfo: TypeInfo.WorkItemReference
    },
};
