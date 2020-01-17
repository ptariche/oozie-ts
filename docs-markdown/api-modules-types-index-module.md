---
id: api-modules-types-index-module
title: types/index Module
sidebar_label: types/index
---

[oozie-api - v0.1.10](api-readme.md) > [[types/index Module]](api-modules-types-index-module.md)

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

#### Type declaration
▸(apiVersion: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="buildversionfunction"></a>

###  buildVersionFunction

**Ƭ buildVersionFunction**: *`function`*

#### Type declaration
▸(apiVersion: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="configurationfunction"></a>

###  configurationFunction

**Ƭ configurationFunction**: *`function`*

#### Type declaration
▸(apiVersion: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="environmentfunction"></a>

###  environmentFunction

**Ƭ environmentFunction**: *`function`*

#### Type declaration
▸(apiVersion: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="getjobfunction"></a>

###  getJobFunction

**Ƭ getJobFunction**: *`function`*

#### Type declaration
▸(jobId: *`string`*, show: *[jobGetType](api-enums-types-index-jobgettype.md)*, timezone: *[timezone](api-enums-types-index-timezone.md)*, apiVersion: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`any`>

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

#### Type declaration
▸(filter: *`string`*, offset: *`number`*, limit: *`number`*, timezone: *[timezone](api-enums-types-index-timezone.md)*, apiVersion: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `null`>

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

#### Type declaration
▸(apiVersion: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="javasystemfunction"></a>

###  javaSystemFunction

**Ƭ javaSystemFunction**: *`function`*

#### Type declaration
▸(apiVersion: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `null`>

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

#### Type declaration
▸(xml: *`string`*, apiVersion: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<[jobType](api-modules-types-index-module.md#jobtype)>

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

___
<a id="managejobfunction"></a>

###  manageJobFunction

**Ƭ manageJobFunction**: *`function`*

#### Type declaration
▸(jobId: *`string`*, action: *[jobAction](api-enums-types-index-jobaction.md)*, xml: *`string`*, options: *`object`*, apiVersion: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`null` \| `undefined`>

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

#### Type declaration
▸(apiVersion: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`object` \| `null`>

___
<a id="retrievefunction"></a>

###  retrieveFunction

**Ƭ retrieveFunction**: *`function`*

#### Type declaration
▸(method: *[httpMethods](api-enums-types-index-httpmethods.md)*, route: *`string`*, body: *`object` \| `string` \| `null` \| `undefined`*, options: *`object` \| `null` \| `undefined`*): `Promise`<`any`>

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

#### Type declaration
▸(mode: *[systemMode](api-enums-types-index-systemmode.md)*, apiVersion: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`null` \| `undefined`>

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

#### Type declaration
▸(apiVersion: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`object` \| `object` \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`object` \| `object` \| `null`>

___
<a id="typeoozieconfig"></a>

###  typeOozieConfig

**Ƭ typeOozieConfig**: *`object`*

#### Type declaration

`Optional`  apiVersion: [apiVersion](api-enums-types-index-apiversion.md) \| `undefined` \| `null`

 oozieUrl: `string`

`Optional`  serviceVersion: [serviceVersion](api-enums-types-index-serviceversion.md) \| `undefined` \| `null`

`Optional`  timeout: `number` \| `undefined` \| `null`

___
<a id="versionfunction"></a>

###  versionFunction

**Ƭ versionFunction**: *`function`*

#### Type declaration
▸(): `Promise`<`number`[]>

**Returns:** `Promise`<`number`[]>

___

