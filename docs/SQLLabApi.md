# Superset.SQLLabApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1SqllabEstimatePost**](SQLLabApi.md#apiV1SqllabEstimatePost) | **POST** /api/v1/sqllab/estimate/ | Estimates the SQL query execution cost
[**apiV1SqllabExecutePost**](SQLLabApi.md#apiV1SqllabExecutePost) | **POST** /api/v1/sqllab/execute/ | 
[**apiV1SqllabExportClientIdGet**](SQLLabApi.md#apiV1SqllabExportClientIdGet) | **GET** /api/v1/sqllab/export/{client_id}/ | Exports the SQL query results to a CSV
[**apiV1SqllabResultsGet**](SQLLabApi.md#apiV1SqllabResultsGet) | **GET** /api/v1/sqllab/results/ | Gets the result of a SQL query execution

<a name="apiV1SqllabEstimatePost"></a>
# **apiV1SqllabEstimatePost**
> InlineResponse20013 apiV1SqllabEstimatePost(body)

Estimates the SQL query execution cost

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.SQLLabApi();
let body = new Superset.EstimateQueryCostSchema(); // EstimateQueryCostSchema | SQL query and params

apiInstance.apiV1SqllabEstimatePost(body, (error, data, response) => {
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
 **body** | [**EstimateQueryCostSchema**](EstimateQueryCostSchema.md)| SQL query and params | 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1SqllabExecutePost"></a>
# **apiV1SqllabExecutePost**
> QueryExecutionResponseSchema apiV1SqllabExecutePost(body)



Starts the execution of a SQL query

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.SQLLabApi();
let body = new Superset.ExecutePayloadSchema(); // ExecutePayloadSchema | SQL query and params

apiInstance.apiV1SqllabExecutePost(body, (error, data, response) => {
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
 **body** | [**ExecutePayloadSchema**](ExecutePayloadSchema.md)| SQL query and params | 

### Return type

[**QueryExecutionResponseSchema**](QueryExecutionResponseSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1SqllabExportClientIdGet"></a>
# **apiV1SqllabExportClientIdGet**
> &#x27;String&#x27; apiV1SqllabExportClientIdGet(clientId)

Exports the SQL query results to a CSV

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.SQLLabApi();
let clientId = 56; // Number | The SQL query result identifier

apiInstance.apiV1SqllabExportClientIdGet(clientId, (error, data, response) => {
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
 **clientId** | **Number**| The SQL query result identifier | 

### Return type

**&#x27;String&#x27;**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json

<a name="apiV1SqllabResultsGet"></a>
# **apiV1SqllabResultsGet**
> QueryExecutionResponseSchema apiV1SqllabResultsGet(opts)

Gets the result of a SQL query execution

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.SQLLabApi();
let opts = { 
  'q': new Superset.SqlLabGetResultsSchema() // SqlLabGetResultsSchema | 
};
apiInstance.apiV1SqllabResultsGet(opts, (error, data, response) => {
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
 **q** | [**SqlLabGetResultsSchema**](.md)|  | [optional] 

### Return type

[**QueryExecutionResponseSchema**](QueryExecutionResponseSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

