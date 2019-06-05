---
id: api-modules-types-index-module
title: types/index Module
sidebar_label: types/index
---

[oozie-api](api-readme.md) > [[types/index Module]](api-modules-types-index-module.md)

## Module

### Enumerations

* [apiVersion](api-enums-types-index-apiversion.md)
* [httpMethods](api-enums-types-index-httpmethods.md)
* [jobAction](api-enums-types-index-jobaction.md)
* [jobActionRerunType](api-enums-types-index-jobactionreruntype.md)
* [jobGetType](api-enums-types-index-jobgettype.md)
* [serviceVersion](api-enums-types-index-serviceversion.md)
* [systemMode](api-enums-types-index-systemmode.md)
* [timezone](api-enums-types-index-timezone.md)

### Type aliases

* [availableTimezonesFunction](api-modules-types-index-module.md#availabletimezonesfunction)
* [buildVersionFunction](api-modules-types-index-module.md#buildversionfunction)
* [configurationFunction](api-modules-types-index-module.md#configurationfunction)
* [environmentFunction](api-modules-types-index-module.md#environmentfunction)
* [getJobFunction](api-modules-types-index-module.md#getjobfunction)
* [getJobsFunction](api-modules-types-index-module.md#getjobsfunction)
* [instrumentationFunction](api-modules-types-index-module.md#instrumentationfunction)
* [javaSystemFunction](api-modules-types-index-module.md#javasystemfunction)
* [jobHiveOptions](api-modules-types-index-module.md#jobhiveoptions)
* [jobMapReduceOptions](api-modules-types-index-module.md#jobmapreduceoptions)
* [jobPigOptions](api-modules-types-index-module.md#jobpigoptions)
* [jobSubmissionFunction](api-modules-types-index-module.md#jobsubmissionfunction)
* [jobSubmissionHiveFunction](api-modules-types-index-module.md#jobsubmissionhivefunction)
* [jobSubmissionMapReduceFunction](api-modules-types-index-module.md#jobsubmissionmapreducefunction)
* [jobSubmissionPigFunction](api-modules-types-index-module.md#jobsubmissionpigfunction)
* [jobType](api-modules-types-index-module.md#jobtype)
* [manageJobFunction](api-modules-types-index-module.md#managejobfunction)
* [queueDumpFunction](api-modules-types-index-module.md#queuedumpfunction)
* [retrieveFunction](api-modules-types-index-module.md#retrievefunction)
* [setStatusFunction](api-modules-types-index-module.md#setstatusfunction)
* [statusFunction](api-modules-types-index-module.md#statusfunction)
* [typeOozieConfig](api-modules-types-index-module.md#typeoozieconfig)
* [versionFunction](api-modules-types-index-module.md#versionfunction)

---

## Type aliases

<a id="availabletimezonesfunction"></a>

###  availableTimezonesFunction

**Ƭ availableTimezonesFunction**: *`function`*

*__remarks__*: Lookup the Oozie Available Timezones

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(apiVersion?: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="buildversionfunction"></a>

###  buildVersionFunction

**Ƭ buildVersionFunction**: *`function`*

*__remarks__*: Lookup the Oozie Build Version Information

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(apiVersion?: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="configurationfunction"></a>

###  configurationFunction

**Ƭ configurationFunction**: *`function`*

*__remarks__*: Lookup the Oozie Configuration

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(apiVersion?: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="environmentfunction"></a>

###  environmentFunction

**Ƭ environmentFunction**: *`function`*

*__remarks__*: Lookup the OS Environment

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(apiVersion?: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="getjobfunction"></a>

###  getJobFunction

**Ƭ getJobFunction**: *`function`*

*__remarks__*: Get a Job

*__param__*: The JobID

*__param__*: Optional\* definition, log, & info

*__param__*: Optional\* timezone GMT, PST, etc

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(jobId: *`string`*, show?: *[jobGetType](api-enums-types-index-jobgettype.md)*, timezone?: *[timezone](api-enums-types-index-timezone.md)*, apiVersion?: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| jobId | `string` |
| `Optional` show | [jobGetType](api-enums-types-index-jobgettype.md) |
| `Optional` timezone | [timezone](api-enums-types-index-timezone.md) |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="getjobsfunction"></a>

###  getJobsFunction

**Ƭ getJobsFunction**: *`function`*

*__remarks__*: Get Jobs

*__param__*: \[NAME=VALUE\]\[;NAME=VALUE\]\*

*__param__*: The numerical value to offset by

*__param__*: The numerical value to limit by

*__param__*: Optional\* timezone GMT, PST, etc

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(filter?: *`string`*, offset?: *`number`*, limit?: *`number`*, timezone?: *[timezone](api-enums-types-index-timezone.md)*, apiVersion?: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` filter | `string` |
| `Optional` offset | `number` |
| `Optional` limit | `number` |
| `Optional` timezone | [timezone](api-enums-types-index-timezone.md) |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="instrumentationfunction"></a>

###  instrumentationFunction

**Ƭ instrumentationFunction**: *`function`*

*__remarks__*: Lookup the Oozie Instrumentation Information

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(apiVersion?: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="javasystemfunction"></a>

###  javaSystemFunction

**Ƭ javaSystemFunction**: *`function`*

*__remarks__*: Lookup the Java System Properties

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(apiVersion?: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="jobhiveoptions"></a>

###  jobHiveOptions

**Ƭ jobHiveOptions**: *`object`*

#### Type declaration

`Optional`  apiVersion: [apiVersion](api-enums-types-index-apiversion.md)

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

#### Type declaration

`Optional`  apiVersion: [apiVersion](api-enums-types-index-apiversion.md)

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

#### Type declaration

`Optional`  apiVersion: [apiVersion](api-enums-types-index-apiversion.md)

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

*__remarks__*: Submit a job with XML Instructions

*__param__*: XML to Post for Job Creation

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(xml: *`string`*, apiVersion?: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<[jobType](api-modules-types-index-module.md#jobtype)>

**Parameters:**

| Name | Type |
| ------ | ------ |
| xml | `string` |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<[jobType](api-modules-types-index-module.md#jobtype)>

___
<a id="jobsubmissionhivefunction"></a>

###  jobSubmissionHiveFunction

**Ƭ jobSubmissionHiveFunction**: *`function`*

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
▸(options: *[jobHiveOptions](api-modules-types-index-module.md#jobhiveoptions)*): `Promise`<[jobType](api-modules-types-index-module.md#jobtype)>

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [jobHiveOptions](api-modules-types-index-module.md#jobhiveoptions) |

**Returns:** `Promise`<[jobType](api-modules-types-index-module.md#jobtype)>

___
<a id="jobsubmissionmapreducefunction"></a>

###  jobSubmissionMapReduceFunction

**Ƭ jobSubmissionMapReduceFunction**: *`function`*

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
▸(options: *[jobMapReduceOptions](api-modules-types-index-module.md#jobmapreduceoptions)*): `Promise`<[jobType](api-modules-types-index-module.md#jobtype)>

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [jobMapReduceOptions](api-modules-types-index-module.md#jobmapreduceoptions) |

**Returns:** `Promise`<[jobType](api-modules-types-index-module.md#jobtype)>

___
<a id="jobsubmissionpigfunction"></a>

###  jobSubmissionPigFunction

**Ƭ jobSubmissionPigFunction**: *`function`*

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
▸(options: *[jobPigOptions](api-modules-types-index-module.md#jobpigoptions)*): `Promise`<[jobType](api-modules-types-index-module.md#jobtype)>

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [jobPigOptions](api-modules-types-index-module.md#jobpigoptions) |

**Returns:** `Promise`<[jobType](api-modules-types-index-module.md#jobtype)>

___
<a id="jobtype"></a>

###  jobType

**Ƭ jobType**: *`object` \| `object` \| `null`*

*__remarks__*: Job Response

___
<a id="managejobfunction"></a>

###  manageJobFunction

**Ƭ manageJobFunction**: *`function`*

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
▸(jobId: *`string`*, action: *[jobAction](api-enums-types-index-jobaction.md)*, xml?: *`string`*, options?: *`object`*, apiVersion?: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`null` \| `undefined`>

**Parameters:**

**jobId: `string`**

**action: [jobAction](api-enums-types-index-jobaction.md)**

**`Optional` xml: `string`**

**`Optional` options: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` nocleanup | `boolean` |
| `Optional` refresh | `boolean` |
| `Optional` scope | `string` |
| `Optional` type | [jobActionRerunType](api-enums-types-index-jobactionreruntype.md) |
| `Optional` value | `string` |

**`Optional` apiVersion: [apiVersion](api-enums-types-index-apiversion.md)**

**Returns:** `Promise`<`null` \| `undefined`>

___
<a id="queuedumpfunction"></a>

###  queueDumpFunction

**Ƭ queueDumpFunction**: *`function`*

*__remarks__*: Helps Debug by Dumping the Queue

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(apiVersion?: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="retrievefunction"></a>

###  retrieveFunction

**Ƭ retrieveFunction**: *`function`*

*__remarks__*: The Axios Retrieve Function Signature

*__param__*: Optional\* The body to post or put

*__param__*: The rest path

*__param__*: HTTP Method: get,post,put,delete,patch

#### Type declaration
▸(method: *[httpMethods](api-enums-types-index-httpmethods.md)*, route: *`string`*, body?: *`object` \| `string` \| `null` \| `undefined`*, options?: *`object` \| `null` \| `undefined`*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | [httpMethods](api-enums-types-index-httpmethods.md) |
| route | `string` |
| `Optional` body | `object` \| `string` \| `null` \| `undefined` |
| `Optional` options | `object` \| `null` \| `undefined` |

**Returns:** `Promise`<`any`>

___
<a id="setstatusfunction"></a>

###  setStatusFunction

**Ƭ setStatusFunction**: *`function`*

*__remarks__*: Set the Status of Oozie

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(mode: *[systemMode](api-enums-types-index-systemmode.md)*, apiVersion?: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`null` \| `undefined`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| mode | [systemMode](api-enums-types-index-systemmode.md) |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`null` \| `undefined`>

___
<a id="statusfunction"></a>

###  statusFunction

**Ƭ statusFunction**: *`function`*

*__remarks__*: Lookup the Status of Oozie

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(apiVersion?: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`object` \| `object` \| `null`>

___
<a id="typeoozieconfig"></a>

###  typeOozieConfig

**Ƭ typeOozieConfig**: *`object`*

*__remarks__*: The configuration values for the node module

*__param__*: Optional\* The API version of the API you're using 1 or 2

*__param__*: Optional\* The API version of the API you're using 4 or 5

*__param__*: Optional\* The Timeout limitation in milliseconds

*__param__*: The API URL [http://127.0.0.1:11000/oozie](http://127.0.0.1:11000/oozie)

#### Type declaration

`Optional`  apiVersion: [apiVersion](api-enums-types-index-apiversion.md) \| `undefined` \| `null`

 oozieUrl: `string`

`Optional`  serviceVersion: [serviceVersion](api-enums-types-index-serviceversion.md) \| `undefined` \| `null`

`Optional`  timeout: `number` \| `undefined` \| `null`

___
<a id="versionfunction"></a>

###  versionFunction

**Ƭ versionFunction**: *`function`*

*__remarks__*: Lookup the Status of Oozie

*__param__*: Optional\* Override the API version from your config

#### Type declaration
▸(): `Promise`<`number`[]>

**Returns:** `Promise`<`number`[]>

___

