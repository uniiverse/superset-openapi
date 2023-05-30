# Superset.ChartDataFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**col** | **Object** | The column to filter by. Can be either a string (physical or saved expression) or an object (adhoc column) | 
**grain** | **String** | Optional time grain for temporal filters | [optional] 
**isExtra** | **Boolean** | Indicates if the filter has been added by a filter component as opposed to being a part of the original query. | [optional] 
**op** | **String** | The comparison operator. | 
**val** | **Object** | The value or values to compare against. Can be a string, integer, decimal, None or list, depending on the operator. | [optional] 

<a name="OpEnum"></a>
## Enum: OpEnum

* `` (value: `"=="`)
* `NOT_EQUAL` (value: `"!="`)
* `GREATER_THAN` (value: `">"`)
* `LESS_THAN` (value: `"<"`)
* `GREATER_THAN_OR_EQUAL_TO` (value: `">="`)
* `LESS_THAN_OR_EQUAL_TO` (value: `"<="`)
* `LIKE` (value: `"LIKE"`)
* `ILIKE` (value: `"ILIKE"`)
* `IS_NULL` (value: `"IS NULL"`)
* `IS_NOT_NULL` (value: `"IS NOT NULL"`)
* `IN` (value: `"IN"`)
* `NOT_IN` (value: `"NOT IN"`)
* `REGEX` (value: `"REGEX"`)
* `IS_TRUE` (value: `"IS TRUE"`)
* `IS_FALSE` (value: `"IS FALSE"`)
* `TEMPORAL_RANGE` (value: `"TEMPORAL_RANGE"`)

