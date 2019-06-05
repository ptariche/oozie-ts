[oozie-api](../README.md) > ["types/index"](../modules/_types_index_.md)

# External module: "types/index"

## Index

### Enumerations

* [apiVersion](../enums/_types_index_.apiversion.md)
* [httpMethods](../enums/_types_index_.httpmethods.md)
* [jobAction](../enums/_types_index_.jobaction.md)
* [jobActionRerunType](../enums/_types_index_.jobactionreruntype.md)
* [jobGetType](../enums/_types_index_.jobgettype.md)
* [serviceVersion](../enums/_types_index_.serviceversion.md)
* [systemMode](../enums/_types_index_.systemmode.md)
* [timezone](../enums/_types_index_.timezone.md)

### Type aliases

* [availableTimezonesFunction](_types_index_.md#availabletimezonesfunction)
* [buildVersionFunction](_types_index_.md#buildversionfunction)
* [configurationFunction](_types_index_.md#configurationfunction)
* [environmentFunction](_types_index_.md#environmentfunction)
* [getJobFunction](_types_index_.md#getjobfunction)
* [getJobsFunction](_types_index_.md#getjobsfunction)
* [instrumentationFunction](_types_index_.md#instrumentationfunction)
* [javaSystemFunction](_types_index_.md#javasystemfunction)
* [jobHiveOptions](_types_index_.md#jobhiveoptions)
* [jobMapReduceOptions](_types_index_.md#jobmapreduceoptions)
* [jobPigOptions](_types_index_.md#jobpigoptions)
* [jobSubmissionFunction](_types_index_.md#jobsubmissionfunction)
* [jobSubmissionHiveFunction](_types_index_.md#jobsubmissionhivefunction)
* [jobSubmissionMapReduceFunction](_types_index_.md#jobsubmissionmapreducefunction)
* [jobSubmissionPigFunction](_types_index_.md#jobsubmissionpigfunction)
* [jobType](_types_index_.md#jobtype)
* [manageJobFunction](_types_index_.md#managejobfunction)
* [queueDumpFunction](_types_index_.md#queuedumpfunction)
* [retrieveFunction](_types_index_.md#retrievefunction)
* [setStatusFunction](_types_index_.md#setstatusfunction)
* [statusFunction](_types_index_.md#statusfunction)
* [typeOozieConfig](_types_index_.md#typeoozieconfig)
* [versionFunction](_types_index_.md#versionfunction)

---

## Type aliases

<a id="availabletimezonesfunction"></a>

###  availableTimezonesFunction

**Ƭ availableTimezonesFunction**: *`function`*

*Defined in [types/index.ts:98](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L98)*

*__remarks__*: Lookup the Oozie Available Timezones

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(apiVersion?: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="buildversionfunction"></a>

###  buildVersionFunction

**Ƭ buildVersionFunction**: *`function`*

*Defined in [types/index.ts:90](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L90)*

*__remarks__*: Lookup the Oozie Build Version Information

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(apiVersion?: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="configurationfunction"></a>

###  configurationFunction

**Ƭ configurationFunction**: *`function`*

*Defined in [types/index.ts:74](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L74)*

*__remarks__*: Lookup the Oozie Configuration

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(apiVersion?: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="environmentfunction"></a>

###  environmentFunction

**Ƭ environmentFunction**: *`function`*

*Defined in [types/index.ts:58](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L58)*

*__remarks__*: Lookup the OS Environment

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(apiVersion?: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="getjobfunction"></a>

###  getJobFunction

**Ƭ getJobFunction**: *`function`*

*Defined in [types/index.ts:183](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L183)*

*__remarks__*: Get a Job

*__param__*: The JobID

*__param__*: Optional\* definition, log, & info

*__param__*: Optional\* timezone GMT, PST, etc

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(jobId: *`string`*, show?: *[jobGetType](../enums/_types_index_.jobgettype.md)*, timezone?: *[timezone](../enums/_types_index_.timezone.md)*, apiVersion?: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| jobId | `string` |
| `Optional` show | [jobGetType](../enums/_types_index_.jobgettype.md) |
| `Optional` timezone | [timezone](../enums/_types_index_.timezone.md) |
| `Optional` apiVersion | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="getjobsfunction"></a>

###  getJobsFunction

**Ƭ getJobsFunction**: *`function`*

*Defined in [types/index.ts:194](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L194)*

*__remarks__*: Get Jobs

*__param__*: \[NAME=VALUE\]\[;NAME=VALUE\]\*

*__param__*: The numerical value to offset by

*__param__*: The numerical value to limit by

*__param__*: Optional\* timezone GMT, PST, etc

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(filter?: *`string`*, offset?: *`number`*, limit?: *`number`*, timezone?: *[timezone](../enums/_types_index_.timezone.md)*, apiVersion?: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` filter | `string` |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` timezone | [timezone](../enums/_types_index_.timezone.md) |
| `Optional` apiVersion | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="instrumentationfunction"></a>

###  instrumentationFunction

**Ƭ instrumentationFunction**: *`function`*

*Defined in [types/index.ts:82](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L82)*

*__remarks__*: Lookup the Oozie Instrumentation Information

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(apiVersion?: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="javasystemfunction"></a>

###  javaSystemFunction

**Ƭ javaSystemFunction**: *`function`*

*Defined in [types/index.ts:66](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L66)*

*__remarks__*: Lookup the Java System Properties

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(apiVersion?: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="jobhiveoptions"></a>

###  jobHiveOptions

**Ƭ jobHiveOptions**: *`object`*

*Defined in [types/index.ts:219](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L219)*

#### Type declaration

`Optional`  apiVersion: [apiVersion](../enums/_types_index_.apiversion.md)

 hiveScript: `string`

 jobTracker: `string`

 nameNode: `string`

 oozieLibPath: `string`

`Optional`  oozieProxySubmission: `boolean` \| `null` \| `undefined`

 userName: `string`

___
<a id="jobmapreduceoptions"></a>

###  jobMapReduceOptions

**Ƭ jobMapReduceOptions**: *`object`*

*Defined in [types/index.ts:196](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L196)*

#### Type declaration

`Optional`  apiVersion: [apiVersion](../enums/_types_index_.apiversion.md)

 inputDirectory: `string`

 jobTracker: `string`

 mapTaskClassname: `string`

 nameNode: `string`

 oozieLibPath: `string`

`Optional`  oozieProxySubmission: `boolean` \| `null` \| `undefined`

 outputDirectory: `string`

 reducerClassname: `string`

 userName: `string`

___
<a id="jobpigoptions"></a>

###  jobPigOptions

**Ƭ jobPigOptions**: *`object`*

*Defined in [types/index.ts:209](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L209)*

#### Type declaration

`Optional`  apiVersion: [apiVersion](../enums/_types_index_.apiversion.md)

 jobTracker: `string`

 nameNode: `string`

 oozieLibPath: `string`

`Optional`  oozieProxySubmission: `boolean` \| `null` \| `undefined`

 pigScript: `string`

 userName: `string`

___
<a id="jobsubmissionfunction"></a>

###  jobSubmissionFunction

**Ƭ jobSubmissionFunction**: *`function`*

*Defined in [types/index.ts:113](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L113)*

*__remarks__*: Submit a job with XML Instructions

*__param__*: XML to Post for Job Creation

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(xml: *`string`*, apiVersion?: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<[jobType](_types_index_.md#jobtype)>

**Parameters:**

| Name | Type |
| ------ | ------ |
| xml | `string` |
| `Optional` apiVersion | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<[jobType](_types_index_.md#jobtype)>

___
<a id="jobsubmissionhivefunction"></a>

###  jobSubmissionHiveFunction

**Ƭ jobSubmissionHiveFunction**: *`function`*

*Defined in [types/index.ts:158](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L158)*

*__remarks__*: You can submit a Workflow that contains a single Hive action without writing a workflow.xml. Any requred Jars or other files must already exist in HDFS.

*__param__*: XML to Post for Job Creation

*__param__*: hdfs://localhost:8020

*__param__*: localhost:8021

*__param__*: Contains the hive script you want to run (the actual script, not a file path)

*__param__*: A directory in HDFS that contains necessary Jars for your job

*__param__*: fakeUser

*__param__*: true

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(options: *[jobHiveOptions](_types_index_.md#jobhiveoptions)*): `Promise`<[jobType](_types_index_.md#jobtype)>

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [jobHiveOptions](_types_index_.md#jobhiveoptions) |

**Returns:** `Promise`<[jobType](_types_index_.md#jobtype)>

___
<a id="jobsubmissionmapreducefunction"></a>

###  jobSubmissionMapReduceFunction

**Ƭ jobSubmissionMapReduceFunction**: *`function`*

*Defined in [types/index.ts:130](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L130)*

*__remarks__*: You can submit a Workflow that contains a single MapReduce action without writing a workflow.xml. Any required Jars or other files must already exist in HDFS.

*__param__*: XML to Post for Job Creation

*__param__*: hdfs://localhost:8020

*__param__*: localhost:8021

*__param__*: org.apache.oozie.example.SampleMapper

*__param__*: org.apache.oozie.example.SampleReducer

*__param__*: hdfs://localhost:8020/user/rkanter/examples/input-data/text

*__param__*: hdfs://localhost:8020/user/rkanter/examples/output-data/map-reduce

*__param__*: fakeUser

*__param__*: hdfs://localhost:8020/user/rkanter/examples/apps/map-reduce/lib

*__param__*: true

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(options: *[jobMapReduceOptions](_types_index_.md#jobmapreduceoptions)*): `Promise`<[jobType](_types_index_.md#jobtype)>

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [jobMapReduceOptions](_types_index_.md#jobmapreduceoptions) |

**Returns:** `Promise`<[jobType](_types_index_.md#jobtype)>

___
<a id="jobsubmissionpigfunction"></a>

###  jobSubmissionPigFunction

**Ƭ jobSubmissionPigFunction**: *`function`*

*Defined in [types/index.ts:144](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L144)*

*__remarks__*: You can submit a Workflow that contains a single Pig action without writing a workflow.xml. Any requred Jars or other files must already exist in HDFS.

*__param__*: XML to Post for Job Creation

*__param__*: hdfs://localhost:8020

*__param__*: localhost:8021

*__param__*: Contains the pig script you want to run (the actual script, not a file path)

*__param__*: A directory in HDFS that contains necessary Jars for your job

*__param__*: fakeUser

*__param__*: true

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(options: *[jobPigOptions](_types_index_.md#jobpigoptions)*): `Promise`<[jobType](_types_index_.md#jobtype)>

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [jobPigOptions](_types_index_.md#jobpigoptions) |

**Returns:** `Promise`<[jobType](_types_index_.md#jobtype)>

___
<a id="jobtype"></a>

###  jobType

**Ƭ jobType**: *`object` \| `object` \| `null`*

*Defined in [types/index.ts:233](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L233)*

*__remarks__*: Job Response

___
<a id="managejobfunction"></a>

###  manageJobFunction

**Ƭ manageJobFunction**: *`function`*

*Defined in [types/index.ts:173](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L173)*

*__remarks__*: You can submit a Workflow that contains a single Hive action without writing a workflow.xml. Any requred Jars or other files must already exist in HDFS.

*__param__*: The JobID

*__param__*: start, rerun, suspend, resume, dryrun, & change

*__param__*: \*Required XML if required for re-running or changing the job for example

*__param__*: Options for rerun

*__param__*: date or action

*__param__*: boolean

*__param__*: boolean

*__param__*: A comma-separated list of date ranges. Each date range element is specified with dates separated by :: \* action : a comma-separated list of action ranges. Each action range is specified with two action numbers separated by -

*__param__*: The value parameter can contain any of the following: \* endtime: the end time of the coordinator job. \* concurrency: the concurrency of the coordinator job. \* pausetime: the pause time of the coordinator job.

#### Type declaration
▸(jobId: *`string`*, action: *[jobAction](../enums/_types_index_.jobaction.md)*, xml?: *`string`*, options?: *`object`*, apiVersion?: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`null` \| `undefined`>

**Parameters:**

**jobId: `string`**

**action: [jobAction](../enums/_types_index_.jobaction.md)**

**`Optional` xml: `string`**

**`Optional` options: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` nocleanup | `boolean` |
| `Optional` refresh | `boolean` |
| `Optional` scope | `string` |
| `Optional` type | [jobActionRerunType](../enums/_types_index_.jobactionreruntype.md) |
| `Optional` value | `string` |

**`Optional` apiVersion: [apiVersion](../enums/_types_index_.apiversion.md)**

**Returns:** `Promise`<`null` \| `undefined`>

___
<a id="queuedumpfunction"></a>

###  queueDumpFunction

**Ƭ queueDumpFunction**: *`function`*

*Defined in [types/index.ts:105](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L105)*

*__remarks__*: Helps Debug by Dumping the Queue

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(apiVersion?: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="retrievefunction"></a>

###  retrieveFunction

**Ƭ retrieveFunction**: *`function`*

*Defined in [types/index.ts:26](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L26)*

*__remarks__*: The Axios Retrieve Function Signature

*__param__*: Optional\* The body to post or put

*__param__*: The rest path

*__param__*: HTTP Method: get,post,put,delete,patch

#### Type declaration
▸(method: *[httpMethods](../enums/_types_index_.httpmethods.md)*, route: *`string`*, body?: *`object` \| `string` \| `null` \| `undefined`*, options?: *`object` \| `null` \| `undefined`*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | [httpMethods](../enums/_types_index_.httpmethods.md) |
| route | `string` |
| `Optional` body | `object` \| `string` \| `null` \| `undefined` |
| `Optional` options | `object` \| `null` \| `undefined` |

**Returns:** `Promise`<`any`>

___
<a id="setstatusfunction"></a>

###  setStatusFunction

**Ƭ setStatusFunction**: *`function`*

*Defined in [types/index.ts:50](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L50)*

*__remarks__*: Set the Status of Oozie

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(mode: *[systemMode](../enums/_types_index_.systemmode.md)*, apiVersion?: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`null` \| `undefined`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| mode | [systemMode](../enums/_types_index_.systemmode.md) |
| `Optional` apiVersion | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`null` \| `undefined`>

___
<a id="statusfunction"></a>

###  statusFunction

**Ƭ statusFunction**: *`function`*

*Defined in [types/index.ts:42](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L42)*

*__remarks__*: Lookup the Status of Oozie

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(apiVersion?: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`object` \| `object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`object` \| `object` \| `null`>

___
<a id="typeoozieconfig"></a>

###  typeOozieConfig

**Ƭ typeOozieConfig**: *`object`*

*Defined in [types/index.ts:10](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L10)*

*__remarks__*: The configuration values for the node module

*__param__*: Optional\* The API version of the API you're using 1 or 2

*__param__*: Optional\* The API version of the API you're using 4 or 5

*__param__*: Optional\* The Timeout limitation in milliseconds

*__param__*: The API URL [http://127.0.0.1:11000/oozie](http://127.0.0.1:11000/oozie)

#### Type declaration

`Optional`  apiVersion: [apiVersion](../enums/_types_index_.apiversion.md) \| `undefined` \| `null`

 oozieUrl: `string`

`Optional`  serviceVersion: [serviceVersion](../enums/_types_index_.serviceversion.md) \| `undefined` \| `null`

`Optional`  timeout: `number` \| `undefined` \| `null`

___
<a id="versionfunction"></a>

###  versionFunction

**Ƭ versionFunction**: *`function`*

*Defined in [types/index.ts:34](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/types/index.ts#L34)*

*__remarks__*: Lookup the Status of Oozie

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(): `Promise`<`number`[]>

**Returns:** `Promise`<`number`[]>

___

