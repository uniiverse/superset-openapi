# Superset.DatasourcesApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesGet**](DatasourcesApi.md#apiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesGet) | **GET** /api/v1/datasource/{datasource_type}/{datasource_id}/column/{column_name}/values/ | Get possible values for a datasource column

<a name="apiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesGet"></a>
# **apiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesGet**
> InlineResponse20038 apiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesGet(datasourceType, datasourceId, columnName)

Get possible values for a datasource column

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasourcesApi();
let datasourceType = "datasourceType_example"; // String | The type of datasource
let datasourceId = 56; // Number | The id of the datasource
let columnName = "columnName_example"; // String | The name of the column to get values for

apiInstance.apiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesGet(datasourceType, datasourceId, columnName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasourceType** | **String**| The type of datasource | 
 **datasourceId** | **Number**| The id of the datasource | 
 **columnName** | **String**| The name of the column to get values for | 

### Return type

[**InlineResponse20038**](InlineResponse20038.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

