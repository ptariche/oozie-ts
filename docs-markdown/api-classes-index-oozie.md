---
id: api-classes-index-oozie
title: Oozie
sidebar_label: Oozie
---

[oozie-api](api-readme.md) > [[index Module]](api-modules-index-module.md) > [Oozie](api-classes-index-oozie.md)

## Class

## Hierarchy

**Oozie**

### Constructors

* [constructor](api-classes-index-oozie.md#constructor)

### Properties

* [axios](api-classes-index-oozie.md#axios)
* [config](api-classes-index-oozie.md#config)

### Methods

* [availableTimezones](api-classes-index-oozie.md#availabletimezones)
* [buildVersion](api-classes-index-oozie.md#buildversion)
* [configuration](api-classes-index-oozie.md#configuration)
* [createHiveJob](api-classes-index-oozie.md#createhivejob)
* [createJob](api-classes-index-oozie.md#createjob)
* [createProxyMapReduceJob](api-classes-index-oozie.md#createproxymapreducejob)
* [createProxyPigJob](api-classes-index-oozie.md#createproxypigjob)
* [environment](api-classes-index-oozie.md#environment)
* [getJob](api-classes-index-oozie.md#getjob)
* [getJobs](api-classes-index-oozie.md#getjobs)
* [getVersion](api-classes-index-oozie.md#getversion)
* [instrumentation](api-classes-index-oozie.md#instrumentation)
* [javaSystem](api-classes-index-oozie.md#javasystem)
* [manageJob](api-classes-index-oozie.md#managejob)
* [queueDump](api-classes-index-oozie.md#queuedump)
* [retrieve](api-classes-index-oozie.md#retrieve)
* [setStatus](api-classes-index-oozie.md#setstatus)
* [status](api-classes-index-oozie.md#status)
* [versions](api-classes-index-oozie.md#versions)
* [xmlHeader](api-classes-index-oozie.md#xmlheader)
* [xmlStatement](api-classes-index-oozie.md#xmlstatement)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Oozie**(config: *[typeOozieConfig](api-modules-types-index-module.md#typeoozieconfig)*): [Oozie](api-classes-index-oozie.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [typeOozieConfig](api-modules-types-index-module.md#typeoozieconfig) |

**Returns:** [Oozie](api-classes-index-oozie.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

___
<a id="config"></a>

### `<Protected>` config

**● config**: *[typeOozieConfig](api-modules-types-index-module.md#typeoozieconfig)*

___

## Methods

<a id="availabletimezones"></a>

###  availableTimezones

▸ **availableTimezones**(version: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="buildversion"></a>

###  buildVersion

▸ **buildVersion**(version: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="configuration"></a>

###  configuration

▸ **configuration**(version: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="createhivejob"></a>

###  createHiveJob

▸ **createHiveJob**(options: *`object`*): `Promise`<`any`>

**Parameters:**

**options: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |
| hiveScript | `string` |
| jobTracker | `string` |
| nameNode | `string` |
| oozieLibPath | `string` |
| `Optional` oozieProxySubmission | `boolean` \| `null` \| `undefined` |
| userName | `string` |

**Returns:** `Promise`<`any`>

___
<a id="createjob"></a>

###  createJob

▸ **createJob**(xml: *`string`*, version: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| xml | `string` |
| version | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="createproxymapreducejob"></a>

###  createProxyMapReduceJob

▸ **createProxyMapReduceJob**(options: *`object`*): `Promise`<`any`>

**Parameters:**

**options: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |
| inputDirectory | `string` |
| jobTracker | `string` |
| mapTaskClassname | `string` |
| nameNode | `string` |
| oozieLibPath | `string` |
| `Optional` oozieProxySubmission | `boolean` \| `null` \| `undefined` |
| outputDirectory | `string` |
| reducerClassname | `string` |
| userName | `string` |

**Returns:** `Promise`<`any`>

___
<a id="createproxypigjob"></a>

###  createProxyPigJob

▸ **createProxyPigJob**(options: *`object`*): `Promise`<`any`>

**Parameters:**

**options: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](api-enums-types-index-apiversion.md) |
| jobTracker | `string` |
| nameNode | `string` |
| oozieLibPath | `string` |
| `Optional` oozieProxySubmission | `boolean` \| `null` \| `undefined` |
| pigScript | `string` |
| userName | `string` |

**Returns:** `Promise`<`any`>

___
<a id="environment"></a>

###  environment

▸ **environment**(version: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="getjob"></a>

###  getJob

▸ **getJob**(jobId: *`string`*, show: *[jobGetType](api-enums-types-index-jobgettype.md)*, timezone: *[timezone](api-enums-types-index-timezone.md)*, version: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| jobId | `string` |
| show | [jobGetType](api-enums-types-index-jobgettype.md) |
| timezone | [timezone](api-enums-types-index-timezone.md) |
| version | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="getjobs"></a>

###  getJobs

▸ **getJobs**(filter: *`string`*, offset: *`number`*, limit: *`number`*, timezone: *[timezone](api-enums-types-index-timezone.md)*, version: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| filter | `string` |
| offset | `number` |
| limit | `number` |
| timezone | [timezone](api-enums-types-index-timezone.md) |
| version | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="getversion"></a>

### `<Private>` getVersion

▸ **getVersion**(version: *`number`*): `number`

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | `number` |

**Returns:** `number`

___
<a id="instrumentation"></a>

###  instrumentation

▸ **instrumentation**(version: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="javasystem"></a>

###  javaSystem

▸ **javaSystem**(version: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="managejob"></a>

###  manageJob

▸ **manageJob**(jobId: *`string`*, action: *[jobAction](api-enums-types-index-jobaction.md)*, xml: *`string`*, options: *`object`*, version: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`any`>

**Parameters:**

**jobId: `string`**

**action: [jobAction](api-enums-types-index-jobaction.md)**

**xml: `string`**

**options: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` nocleanup | `boolean` |
| `Optional` refresh | `boolean` |
| `Optional` scope | `string` |
| `Optional` type | [jobActionRerunType](api-enums-types-index-jobactionreruntype.md) |
| `Optional` value | `string` |

**version: [apiVersion](api-enums-types-index-apiversion.md)**

**Returns:** `Promise`<`any`>

___
<a id="queuedump"></a>

###  queueDump

▸ **queueDump**(version: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="retrieve"></a>

### `<Private>` retrieve

▸ **retrieve**(method: *[httpMethods](api-enums-types-index-httpmethods.md)*, route: *`string`*, body: *`string` \| `object`*, options: *`object`*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | [httpMethods](api-enums-types-index-httpmethods.md) |
| route | `string` |
| body | `string` \| `object` |
| options | `object` |

**Returns:** `Promise`<`any`>

___
<a id="setstatus"></a>

###  setStatus

▸ **setStatus**(mode: *[systemMode](api-enums-types-index-systemmode.md)*, version: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| mode | [systemMode](api-enums-types-index-systemmode.md) |
| version | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="status"></a>

###  status

▸ **status**(version: *[apiVersion](api-enums-types-index-apiversion.md)*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | [apiVersion](api-enums-types-index-apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="versions"></a>

###  versions

▸ **versions**(): `Promise`<`any`>

**Returns:** `Promise`<`any`>

___
<a id="xmlheader"></a>

### `<Private>` xmlHeader

▸ **xmlHeader**(): `object`

**Returns:** `object`

___
<a id="xmlstatement"></a>

### `<Private>` xmlStatement

▸ **xmlStatement**(): `string`

**Returns:** `string`

___

