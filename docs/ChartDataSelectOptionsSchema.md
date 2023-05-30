# Superset.ChartDataSelectOptionsSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **[String]** | Columns which to select from the input data, in the desired order. If columns are renamed, the original column name should be referenced here. | [optional] 
**exclude** | **[String]** | Columns to exclude from selection. | [optional] 
**rename** | **[Object]** | columns which to rename, mapping source column to target column. For instance, &#x60;{&#x27;y&#x27;: &#x27;y2&#x27;}&#x60; will rename the column &#x60;y&#x60; to &#x60;y2&#x60;. | [optional] 
