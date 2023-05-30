# Superset.ChartDataResponseResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotationData** | **[{String: String}]** | All requested annotation data | [optional] 
**appliedFilters** | **[Object]** | A list with applied filters | [optional] 
**cacheKey** | **String** | Unique cache key for query object | 
**cacheTimeout** | **Number** | Cache timeout in following order: custom timeout, datasource timeout, cache default timeout, config default cache timeout. | 
**cachedDttm** | **String** | Cache timestamp | 
**colnames** | **[String]** | A list of column names | [optional] 
**coltypes** | **[Number]** | A list of generic data types of each column | [optional] 
**data** | **[Object]** | A list with results | [optional] 
**error** | **String** | Error | [optional] 
**fromDttm** | **Number** | Start timestamp of time range | [optional] 
**isCached** | **Boolean** | Is the result cached | 
**query** | **String** | The executed query statement | 
**rejectedFilters** | **[Object]** | A list with rejected filters | [optional] 
**rowcount** | **Number** | Amount of rows in result set | [optional] 
**stacktrace** | **String** | Stacktrace if there was an error | [optional] 
**status** | **String** | Status of the query | [optional] 
**toDttm** | **Number** | End timestamp of time range | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `stopped` (value: `"stopped"`)
* `failed` (value: `"failed"`)
* `pending` (value: `"pending"`)
* `running` (value: `"running"`)
* `scheduled` (value: `"scheduled"`)
* `success` (value: `"success"`)
* `timedOut` (value: `"timed_out"`)

