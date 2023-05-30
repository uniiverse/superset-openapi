# Superset.ChartDataPostProcessingOperation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **String** | Post processing operation type | 
**options** | **Object** | Options specifying how to perform the operation. Please refer to the respective post processing operation option schemas. For example, &#x60;ChartDataPostProcessingOperationOptions&#x60; specifies the required options for the pivot operation. | [optional] 

<a name="OperationEnum"></a>
## Enum: OperationEnum

* `aggregate` (value: `"aggregate"`)
* `boxplot` (value: `"boxplot"`)
* `compare` (value: `"compare"`)
* `contribution` (value: `"contribution"`)
* `cum` (value: `"cum"`)
* `diff` (value: `"diff"`)
* `escapeSeparator` (value: `"escape_separator"`)
* `flatten` (value: `"flatten"`)
* `geodeticParse` (value: `"geodetic_parse"`)
* `geohashDecode` (value: `"geohash_decode"`)
* `geohashEncode` (value: `"geohash_encode"`)
* `pivot` (value: `"pivot"`)
* `prophet` (value: `"prophet"`)
* `rename` (value: `"rename"`)
* `resample` (value: `"resample"`)
* `rolling` (value: `"rolling"`)
* `select` (value: `"select"`)
* `sort` (value: `"sort"`)
* `unescapeSeparator` (value: `"unescape_separator"`)

