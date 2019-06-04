/**
 * @remarks
 * The configuration values for the node module
 *
 * @param apiVersion - The API version of the API you're using 1 or 2
 * @param serviceVersion - The API version of the API you're using 4 or 5
 * @param timeout - The Timeout limitation in milliseconds
 * @param oozieUrl - The API URL http://127.0.0.1:11000/oozie
*/
type typeOozieConfig = {
  apiVersion: apiVersion|undefined|null,
  timeout: number|undefined|null,
  serviceVersion: serviceVersion|undefined|null
  oozieUrl: string
};

/**
 * @remarks
 * The Axios Retrieve Function Signature
 *
 * @param body - The body to post or put
 * @param route - The rest path
 * @param method - HTTP Method: get,post,put,delete,patch
 * 
*/
type retrieveFunction = (method: httpMethods, route: string, body: object|null) =>  Promise<object|null>;

/**
 * @remarks
 * Lookup the Status of Oozie
 *
 * @param apiVersion - Ovveride the API version from your config
*/
type statusFunction = (apiVersion: number) =>  Promise<object|null>;

/**
 * @remarks
 * Set the Status of Oozie
 *
 * @param apiVersion - Ovveride the API version from your config
*/
type setStatusFunction = (mode: systemMode, apiVersion: number) =>  Promise<object|null>;

/**
 * @remarks
 * Lookup the OS Environment
 *
 * @param apiVersion - Ovveride the API version from your config
*/
type environmentFunction = (apiVersion: number) =>  Promise<object|null>;

/**
 * @remarks
 * Lookup the Java System Properties
 *
 * @param apiVersion - Ovveride the API version from your config
*/
type javaSystemFunction = (apiVersion: number) =>  Promise<object|null>;

/**
 * @remarks
 * Lookup the Oozie Configuration
 *
 * @param apiVersion - Ovveride the API version from your config
*/
type configurationFunction = (apiVersion: number) =>  Promise<object|null>;

/**
 * @remarks
 * Lookup the Oozie Instrumentation Information
 *
 * @param apiVersion - Ovveride the API version from your config
*/
type instrumentationFunction = (apiVersion: number) =>  Promise<object|null>;

/**
 * @remarks
 * Lookup the Oozie Build Version Information
 *
 * @param apiVersion - Ovveride the API version from your config
*/
type buildVersionFunction = (apiVersion: number) =>  Promise<object|null>;

/**
 * @remarks
 * Lookup the Oozie Available Timezones
 *
 * @param apiVersion - Ovveride the API version from your config
*/
type availableTimezonesFunction = (apiVersion: number) =>  Promise<object|null>;

/**
 * @remarks
 * Helps Debug by Dumping the Queue
 * @param apiVersion - Ovveride the API version from your config
*/
type queueDumpFunction = (apiVersion: number) =>  Promise<object|null>;

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
  CHANGE = ' change'
};

export {
  serviceVersion,
  apiVersion,
  httpMethods,
  systemMode,
  jobAction,
  typeOozieConfig,
  retrieveFunction,
  statusFunction,
  setStatusFunction,
  environmentFunction,
  javaSystemFunction,
  configurationFunction,
  instrumentationFunction,
  buildVersionFunction,
  availableTimezonesFunction,
  queueDumpFunction
};
