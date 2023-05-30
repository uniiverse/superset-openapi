# Superset.ChartDataRestApiPost

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cacheTimeout** | **Number** | Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined. | [optional] 
**certificationDetails** | **String** | Details of the certification | [optional] 
**certifiedBy** | **String** | Person or group that has certified this chart | [optional] 
**dashboards** | **[Number]** |  | [optional] 
**datasourceId** | **Number** | The id of the dataset/datasource this new chart will use. A complete datasource identification needs &#x60;datasouce_id&#x60; and &#x60;datasource_type&#x60;. | 
**datasourceName** | **String** | The datasource name. | [optional] 
**datasourceType** | **String** | The type of dataset/datasource identified on &#x60;datasource_id&#x60;. | 
**description** | **String** | A description of the chart propose. | [optional] 
**externalUrl** | **String** |  | [optional] 
**isManagedExternally** | **Boolean** |  | [optional] 
**owners** | **[Number]** |  | [optional] 
**params** | **String** | Parameters are generated dynamically when clicking the save or overwrite button in the explore view. This JSON object for power users who may want to alter specific parameters. | [optional] 
**queryContext** | **String** | The query context represents the queries that need to run in order to generate the data the visualization, and in what format the data should be returned. | [optional] 
**queryContextGeneration** | **Boolean** | The query context generation represents whether the query_contextis user generated or not so that it does not update user modfiedstate. | [optional] 
**sliceName** | **String** | The name of the chart. | 
**vizType** | **String** | The type of chart visualization used. | [optional] 

<a name="DatasourceTypeEnum"></a>
## Enum: DatasourceTypeEnum

* `slTable` (value: `"sl_table"`)
* `table` (value: `"table"`)
* `dataset` (value: `"dataset"`)
* `query` (value: `"query"`)
* `savedQuery` (value: `"saved_query"`)
* `view` (value: `"view"`)

