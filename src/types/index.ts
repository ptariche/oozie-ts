/**
 * @remarks
 * The configuration values for the node module
 *
 * @param apiVersion - Optional* The API version of the API you're using 1 or 2
 * @param serviceVersion - Optional* The API version of the API you're using 4 or 5
 * @param timeout - Optional* The Timeout limitation in milliseconds
 * @param oozieUrl - The API URL http://127.0.0.1:11000/oozie
*/
type typeOozieConfig = {
  apiVersion?: apiVersion|undefined|null,
  timeout?: number|undefined|null,
  serviceVersion?: serviceVersion|undefined|null
  oozieUrl: string
};

/**
 * @remarks
 * The Axios Retrieve Function Signature
 *
 * @param body - Optional* The body to post or put
 * @param route - The rest path
 * @param method - HTTP Method: get,post,put,delete,patch
 * 
*/
type retrieveFunction = (method: httpMethods, route: string, body?: object|string|null|undefined, options?: object|null|undefined) =>  Promise<any>;

/**
 * @remarks
 * Lookup the Status of Oozie
 *
 * @param apiVersion - Optional* Override the API version from your config
*/
type versionFunction = () =>  Promise<number[]>;

/**
 * @remarks
 * Lookup the Status of Oozie
 *
 * @param apiVersion - Optional* Override the API version from your config
*/
type statusFunction = (apiVersion?: apiVersion) =>  Promise<{systemMode: systemMode}|object|null>;

/**
 * @remarks
 * Set the Status of Oozie
 *
 * @param apiVersion - Optional* Override the API version from your config
*/
type setStatusFunction = (mode: systemMode, apiVersion: apiVersion) =>  Promise<null|undefined>;

/**
 * @remarks
 * Lookup the OS Environment
 *
 * @param apiVersion - Optional* Override the API version from your config
*/
type environmentFunction = (apiVersion?: apiVersion) =>  Promise<object|null>;

/**
 * @remarks
 * Lookup the Java System Properties
 *
 * @param apiVersion - Optional* Override the API version from your config
*/
type javaSystemFunction = (apiVersion?: apiVersion) =>  Promise<object|null>;

/**
 * @remarks
 * Lookup the Oozie Configuration
 *
 * @param apiVersion - Optional* Override the API version from your config
*/
type configurationFunction = (apiVersion?: apiVersion) =>  Promise<object|null>;

/**
 * @remarks
 * Lookup the Oozie Instrumentation Information
 *
 * @param apiVersion - Optional* Override the API version from your config
*/
type instrumentationFunction = (apiVersion?: apiVersion) =>  Promise<object|null>;

/**
 * @remarks
 * Lookup the Oozie Build Version Information
 *
 * @param apiVersion - Optional* Override the API version from your config
*/
type buildVersionFunction = (apiVersion?: apiVersion) =>  Promise<object|null>;

/**
 * @remarks
 * Lookup the Oozie Available Timezones
 *
 * @param apiVersion - Optional* Override the API version from your config
*/
type availableTimezonesFunction = (apiVersion?: apiVersion) =>  Promise<object|null>;

/**
 * @remarks
 * Helps Debug by Dumping the Queue
 * @param apiVersion - Optional* Override the API version from your config
*/
type queueDumpFunction = (apiVersion?: apiVersion) =>  Promise<object|null>;

/**
 * @remarks
 * Submit a job with XML Instructions
 * @param xml - XML to Post for Job Creation
 * @param apiVersion - Optional* Override the API version from your config
*/
type jobSubmissionFunction = (xml: string, apiVersion?: apiVersion) =>  Promise<jobType>;

/**
 * @remarks
 * You can submit a Workflow that contains a single MapReduce action without writing a workflow.xml. Any required Jars or other files must already exist in HDFS.
 * @param options - XML to Post for Job Creation
 * @param options.nameNode - hdfs://localhost:8020
 * @param options.jobTracker - localhost:8021
 * @param options.mapTaskClassname - org.apache.oozie.example.SampleMapper
 * @param options.reducerClassname - org.apache.oozie.example.SampleReducer
 * @param options.inputDirectory - hdfs://localhost:8020/user/rkanter/examples/input-data/text
 * @param options.outputDirectory - hdfs://localhost:8020/user/rkanter/examples/output-data/map-reduce
 * @param options.userName - fakeUser
 * @param options.oozieLibPath - hdfs://localhost:8020/user/rkanter/examples/apps/map-reduce/lib
 * @param options.oozieProxySubmission - true
 * @param options.apiVersion - Optional* Override the API version from your config
*/
type jobSubmissionMapReduceFunction = (options: jobMapReduceOptions) =>  Promise<jobType>;

/**
 * @remarks
 * You can submit a Workflow that contains a single Pig action without writing a workflow.xml. Any requred Jars or other files must already exist in HDFS.
 * @param options - XML to Post for Job Creation
 * @param options.nameNode - hdfs://localhost:8020
 * @param options.jobTracker - localhost:8021
 * @param options.pigScript -  Contains the pig script you want to run (the actual script, not a file path)
 * @param options.oozieLibPath - A directory in HDFS that contains necessary Jars for your job
 * @param options.userName - fakeUser
 * @param options.oozieProxySubmission - true
 * @param options.apiVersion - Optional* Override the API version from your config
*/
type jobSubmissionPigFunction = (options: jobPigOptions) => Promise<jobType>;

/**
 * @remarks
 * You can submit a Workflow that contains a single Hive action without writing a workflow.xml. Any requred Jars or other files must already exist in HDFS.
 * @param options - XML to Post for Job Creation
 * @param options.nameNode - hdfs://localhost:8020
 * @param options.jobTracker - localhost:8021
 * @param options.hiveScript -  Contains the hive script you want to run (the actual script, not a file path)
 * @param options.oozieLibPath - A directory in HDFS that contains necessary Jars for your job
 * @param options.userName - fakeUser
 * @param options.oozieProxySubmission - true
 * @param options.apiVersion - Optional* Override the API version from your config
*/
type jobSubmissionHiveFunction = (options: jobHiveOptions) => Promise<jobType>;

/**
 * @remarks
 * You can submit a Workflow that contains a single Hive action without writing a workflow.xml. Any requred Jars or other files must already exist in HDFS.
 * @param jobId - The JobID
 * @param action -  start, rerun, suspend, resume, dryrun, & change
 * @param xml - *Required XML if required for re-running or changing the job for example
 * @param options - Options for rerun
 * @param options.type - date or action
 * @param options.refresh - boolean
 * @param options.nocleanup - boolean
 * @param options.scope - A comma-separated list of date ranges. Each date range element is specified with dates separated by :: * action : a comma-separated list of action ranges. Each action range is specified with two action numbers separated by -
 * @param options.value - The value parameter can contain any of the following: * endtime: the end time of the coordinator job. * concurrency: the concurrency of the coordinator job. * pausetime: the pause time of the coordinator job.
*/
type manageJobFunction = (jobId: string, action: jobAction, xml?: string, options?: {type?: jobActionRerunType, refresh?: boolean, nocleanup?: boolean, scope?: string, value?: string}, apiVersion?: apiVersion) => Promise<null|undefined>;

/**
 * @remarks
 * Get a Job
 * @param jobId - The JobID
 * @param show -  Optional* definition, log, & info
 * @param timezone -  Optional* timezone GMT, PST, etc
 * @param apiVersion - Optional* Override the API version from your config
*/
type getJobFunction = (jobId: string, show?: jobGetType, timezone?: timezone, apiVersion?: apiVersion) =>  Promise<any>;

/**
 * @remarks
 * Get Jobs
 * @param filter - [NAME=VALUE][;NAME=VALUE]*
 * @param offset - The numerical value to offset by
 * @param limit - The numerical value to limit by
 * @param timezone -  Optional* timezone GMT, PST, etc
 * @param apiVersion - Optional* Override the API version from your config
*/
type getJobsFunction = (filter?: string, offset?: number, limit?: number, timezone?: timezone, apiVersion?: apiVersion)  => Promise<object|null>;

type jobMapReduceOptions = {
  nameNode: string, 
  jobTracker: string,
  mapTaskClassname: string,
  reducerClassname: string,
  inputDirectory: string,
  outputDirectory: string,
  userName: string,
  oozieLibPath: string,
  oozieProxySubmission?: boolean|null|undefined,
  apiVersion?: apiVersion
};

type jobPigOptions = {
  nameNode: string, 
  jobTracker: string,
  pigScript: string,
  oozieLibPath: string,
  userName: string,
  oozieProxySubmission?: boolean|null|undefined
  apiVersion?: apiVersion
};

type jobHiveOptions = {
  nameNode: string, 
  jobTracker: string,
  hiveScript: string,
  oozieLibPath: string,
  userName: string,
  oozieProxySubmission?: boolean|null|undefined
  apiVersion?: apiVersion
};

/**
 * @remarks
 * Job Response
*/
type jobType = {id: string}|object|null;

enum serviceVersion {
  FOUR = 4,
  FIVE = 5
}

enum apiVersion {
  ONE = 1,
  TWO = 2
}

enum httpMethods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch'
};

enum systemMode {
  NORMAL = 'NORMAL',
  NOWEBSERVICE = 'NOWEBSERVICE',
  SAFEMODE = 'SAFEMODE'
};

enum jobAction {
  START = 'start',
  SUSPEND = 'suspend',
  RESUME = 'resume',
  DRYRUN = 'dryrun',
  RERUN = 'rerun',
  COORD_RERUN = 'coord-rerun',
  BUNDLE_RERUN = 'bundle-rerun',
  CHANGE = 'change'
};

enum jobActionRerunType {
  DATE = 'date',
  ACTION = 'action'
};

enum jobGetType {
  LOG = 'log',
  GRAPTH = 'graph',
  DEFINITION = 'definition',
  INFO = 'info'
}

enum timezone {
  GMT = 'GMT',
  UTC = 'GMT',
  ECT = 'GMT+1:00',
  EET = 'GMT+2:00',
  ART = 'GMT+2:00',
  EAT = 'GMT+3:00',
  MET = 'GMT+3:30',
  NET = 'GMT+4:00',
  PLT = 'GMT+5:00',
  IST = 'GMT+5:30',
  BST = 'GMT+6:00',
  VST = 'GMT+7:00',
  CTT = 'GMT+8:00',
  JST = 'GMT+9:00',
  ACT = 'GMT+9:30',
  AET = 'GMT+10:00',
  SST = 'GMT+11:00',
  NST = 'GMT+12:00',
  MIT = 'GMT-11:00',
  HST = 'GMT-10:00',
  AST = 'GMT-9:00',
  PST = 'GMT-8:00',
  PNT = 'GMT-7:00',
  MST = 'GMT-7:00',
  CST = 'GMT-6:00',
  EST = 'GMT-5:00',
  IET = 'GMT-5:00',
  PRT = 'GMT-4:00',
  CNT = 'GMT-3:30',
  AGT = 'GMT-3:00',
  VET = 'GMT-3:00',
  CAT = 'GMT-1:00'
};

export {
  serviceVersion,
  apiVersion,
  httpMethods,
  systemMode,
  jobAction,
  typeOozieConfig,
  retrieveFunction,
  versionFunction,
  statusFunction,
  setStatusFunction,
  environmentFunction,
  javaSystemFunction,
  configurationFunction,
  instrumentationFunction,
  buildVersionFunction,
  availableTimezonesFunction,
  queueDumpFunction,
  jobSubmissionFunction,
  jobSubmissionMapReduceFunction,
  jobSubmissionPigFunction,
  jobSubmissionHiveFunction,
  manageJobFunction,
  jobGetType,
  timezone,
  getJobFunction,
  getJobsFunction
};
