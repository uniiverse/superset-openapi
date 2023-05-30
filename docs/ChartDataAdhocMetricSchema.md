# Superset.ChartDataAdhocMetricSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate** | **String** | Aggregation operator.Only required for simple expression types. | [optional] 
**column** | [**ChartDataColumn**](ChartDataColumn.md) |  | [optional] 
**expressionType** | **String** | Simple or SQL metric | 
**hasCustomLabel** | **Boolean** | When false, the label will be automatically generated based on the aggregate expression. When true, a custom label has to be specified. | [optional] 
**isExtra** | **Boolean** | Indicates if the filter has been added by a filter component as opposed to being a part of the original query. | [optional] 
**label** | **String** | Label for the metric. Is automatically generated unlesshasCustomLabel is true, in which case label must be defined. | [optional] 
**optionName** | **String** | Unique identifier. Can be any string value, as long as all metrics have a unique identifier. If undefined, a random namewill be generated. | [optional] 
**sqlExpression** | **String** | The metric as defined by a SQL aggregate expression. Only required for SQL expression type. | [optional] 
**timeGrain** | **String** | Optional time grain for temporal filters | [optional] 

<a name="AggregateEnum"></a>
## Enum: AggregateEnum

* `AVG` (value: `"AVG"`)
* `COUNT` (value: `"COUNT"`)
* `COUNT_DISTINCT` (value: `"COUNT_DISTINCT"`)
* `MAX` (value: `"MAX"`)
* `MIN` (value: `"MIN"`)
* `SUM` (value: `"SUM"`)


<a name="ExpressionTypeEnum"></a>
## Enum: ExpressionTypeEnum

* `SIMPLE` (value: `"SIMPLE"`)
* `SQL` (value: `"SQL"`)

