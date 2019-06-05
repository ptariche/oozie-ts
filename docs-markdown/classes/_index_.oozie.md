[oozie-api](../README.md) > ["index"](../modules/_index_.md) > [Oozie](../classes/_index_.oozie.md)

# Class: Oozie

## Hierarchy

**Oozie**

## Index

### Constructors

* [constructor](_index_.oozie.md#constructor)

### Properties

* [axios](_index_.oozie.md#axios)
* [config](_index_.oozie.md#config)

### Methods

* [availableTimezones](_index_.oozie.md#availabletimezones)
* [buildVersion](_index_.oozie.md#buildversion)
* [configuration](_index_.oozie.md#configuration)
* [createHiveJob](_index_.oozie.md#createhivejob)
* [createJob](_index_.oozie.md#createjob)
* [createProxyMapReduceJob](_index_.oozie.md#createproxymapreducejob)
* [createProxyPigJob](_index_.oozie.md#createproxypigjob)
* [environment](_index_.oozie.md#environment)
* [getJob](_index_.oozie.md#getjob)
* [getJobs](_index_.oozie.md#getjobs)
* [getVersion](_index_.oozie.md#getversion)
* [instrumentation](_index_.oozie.md#instrumentation)
* [javaSystem](_index_.oozie.md#javasystem)
* [manageJob](_index_.oozie.md#managejob)
* [queueDump](_index_.oozie.md#queuedump)
* [retrieve](_index_.oozie.md#retrieve)
* [setStatus](_index_.oozie.md#setstatus)
* [status](_index_.oozie.md#status)
* [versions](_index_.oozie.md#versions)
* [xmlHeader](_index_.oozie.md#xmlheader)
* [xmlStatement](_index_.oozie.md#xmlstatement)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Oozie**(config: *[typeOozieConfig](../modules/_types_index_.md#typeoozieconfig)*): [Oozie](_index_.oozie.md)

*Defined in [index.ts:30](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L30)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [typeOozieConfig](../modules/_types_index_.md#typeoozieconfig) |

**Returns:** [Oozie](_index_.oozie.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Defined in [index.ts:30](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L30)*

___
<a id="config"></a>

### `<Protected>` config

**● config**: *[typeOozieConfig](../modules/_types_index_.md#typeoozieconfig)*

*Defined in [index.ts:29](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L29)*

___

## Methods

<a id="availabletimezones"></a>

###  availableTimezones

▸ **availableTimezones**(version: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`any`>

*Defined in [index.ts:123](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L123)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="buildversion"></a>

###  buildVersion

▸ **buildVersion**(version: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`any`>

*Defined in [index.ts:119](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L119)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="configuration"></a>

###  configuration

▸ **configuration**(version: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`any`>

*Defined in [index.ts:111](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L111)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="createhivejob"></a>

###  createHiveJob

▸ **createHiveJob**(options: *`object`*): `Promise`<`any`>

*Defined in [index.ts:231](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L231)*

**Parameters:**

**options: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](../enums/_types_index_.apiversion.md) |
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

▸ **createJob**(xml: *`string`*, version: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`any`>

*Defined in [index.ts:131](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L131)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| xml | `string` |
| version | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="createproxymapreducejob"></a>

###  createProxyMapReduceJob

▸ **createProxyMapReduceJob**(options: *`object`*): `Promise`<`any`>

*Defined in [index.ts:136](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L136)*

**Parameters:**

**options: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](../enums/_types_index_.apiversion.md) |
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

*Defined in [index.ts:191](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L191)*

**Parameters:**

**options: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` apiVersion | [apiVersion](../enums/_types_index_.apiversion.md) |
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

▸ **environment**(version: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`any`>

*Defined in [index.ts:103](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L103)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="getjob"></a>

###  getJob

▸ **getJob**(jobId: *`string`*, show: *[jobGetType](../enums/_types_index_.jobgettype.md)*, timezone: *[timezone](../enums/_types_index_.timezone.md)*, version: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`any`>

*Defined in [index.ts:291](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L291)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| jobId | `string` |
| show | [jobGetType](../enums/_types_index_.jobgettype.md) |
| timezone | [timezone](../enums/_types_index_.timezone.md) |
| version | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="getjobs"></a>

###  getJobs

▸ **getJobs**(filter: *`string`*, offset: *`number`*, limit: *`number`*, timezone: *[timezone](../enums/_types_index_.timezone.md)*, version: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`any`>

*Defined in [index.ts:302](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L302)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| filter | `string` |
| offset | `number` |
| limit | `number` |
| timezone | [timezone](../enums/_types_index_.timezone.md) |
| version | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="getversion"></a>

### `<Private>` getVersion

▸ **getVersion**(version: *`number`*): `number`

*Defined in [index.ts:86](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L86)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | `number` |

**Returns:** `number`

___
<a id="instrumentation"></a>

###  instrumentation

▸ **instrumentation**(version: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`any`>

*Defined in [index.ts:115](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L115)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="javasystem"></a>

###  javaSystem

▸ **javaSystem**(version: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`any`>

*Defined in [index.ts:107](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L107)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="managejob"></a>

###  manageJob

▸ **manageJob**(jobId: *`string`*, action: *[jobAction](../enums/_types_index_.jobaction.md)*, xml: *`string`*, options: *`object`*, version: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`any`>

*Defined in [index.ts:273](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L273)*

**Parameters:**

**jobId: `string`**

**action: [jobAction](../enums/_types_index_.jobaction.md)**

**xml: `string`**

**options: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` nocleanup | `boolean` |
| `Optional` refresh | `boolean` |
| `Optional` scope | `string` |
| `Optional` type | [jobActionRerunType](../enums/_types_index_.jobactionreruntype.md) |
| `Optional` value | `string` |

**version: [apiVersion](../enums/_types_index_.apiversion.md)**

**Returns:** `Promise`<`any`>

___
<a id="queuedump"></a>

###  queueDump

▸ **queueDump**(version: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`any`>

*Defined in [index.ts:127](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L127)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="retrieve"></a>

### `<Private>` retrieve

▸ **retrieve**(method: *[httpMethods](../enums/_types_index_.httpmethods.md)*, route: *`string`*, body: *`string` \| `object`*, options: *`object`*): `Promise`<`any`>

*Defined in [index.ts:61](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L61)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | [httpMethods](../enums/_types_index_.httpmethods.md) |
| route | `string` |
| body | `string` \| `object` |
| options | `object` |

**Returns:** `Promise`<`any`>

___
<a id="setstatus"></a>

###  setStatus

▸ **setStatus**(mode: *[systemMode](../enums/_types_index_.systemmode.md)*, version: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`any`>

*Defined in [index.ts:98](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L98)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| mode | [systemMode](../enums/_types_index_.systemmode.md) |
| version | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="status"></a>

###  status

▸ **status**(version: *[apiVersion](../enums/_types_index_.apiversion.md)*): `Promise`<`any`>

*Defined in [index.ts:94](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L94)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| version | [apiVersion](../enums/_types_index_.apiversion.md) |

**Returns:** `Promise`<`any`>

___
<a id="versions"></a>

###  versions

▸ **versions**(): `Promise`<`any`>

*Defined in [index.ts:90](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L90)*

**Returns:** `Promise`<`any`>

___
<a id="xmlheader"></a>

### `<Private>` xmlHeader

▸ **xmlHeader**(): `object`

*Defined in [index.ts:78](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L78)*

**Returns:** `object`

___
<a id="xmlstatement"></a>

### `<Private>` xmlStatement

▸ **xmlStatement**(): `string`

*Defined in [index.ts:82](https://github.com/ptariche/oozie-ts/blob/83e55cd/src/index.ts#L82)*

**Returns:** `string`

___

