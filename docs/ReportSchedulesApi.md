# Superset.ReportSchedulesApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1ReportDelete**](ReportSchedulesApi.md#apiV1ReportDelete) | **DELETE** /api/v1/report/ | 
[**apiV1ReportGet**](ReportSchedulesApi.md#apiV1ReportGet) | **GET** /api/v1/report/ | 
[**apiV1ReportInfoGet**](ReportSchedulesApi.md#apiV1ReportInfoGet) | **GET** /api/v1/report/_info | 
[**apiV1ReportPkDelete**](ReportSchedulesApi.md#apiV1ReportPkDelete) | **DELETE** /api/v1/report/{pk} | 
[**apiV1ReportPkGet**](ReportSchedulesApi.md#apiV1ReportPkGet) | **GET** /api/v1/report/{pk} | 
[**apiV1ReportPkLogGet**](ReportSchedulesApi.md#apiV1ReportPkLogGet) | **GET** /api/v1/report/{pk}/log/ | 
[**apiV1ReportPkLogLogIdGet**](ReportSchedulesApi.md#apiV1ReportPkLogLogIdGet) | **GET** /api/v1/report/{pk}/log/{log_id} | 
[**apiV1ReportPkPut**](ReportSchedulesApi.md#apiV1ReportPkPut) | **PUT** /api/v1/report/{pk} | 
[**apiV1ReportPost**](ReportSchedulesApi.md#apiV1ReportPost) | **POST** /api/v1/report/ | 
[**apiV1ReportRelatedColumnNameGet**](ReportSchedulesApi.md#apiV1ReportRelatedColumnNameGet) | **GET** /api/v1/report/related/{column_name} | 

<a name="apiV1ReportDelete"></a>
# **apiV1ReportDelete**
> InlineResponse400 apiV1ReportDelete(opts)



Deletes multiple report schedules in a bulk operation.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ReportSchedulesApi();
let opts = { 
  'q': new Superset.GetDeleteIdsSchema() // GetDeleteIdsSchema | 
};
apiInstance.apiV1ReportDelete(opts, (error, data, response) => {
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
 **q** | [**GetDeleteIdsSchema**](.md)|  | [optional] 

### Return type

[**InlineResponse400**](InlineResponse400.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ReportGet"></a>
# **apiV1ReportGet**
> InlineResponse20048 apiV1ReportGet(opts)



Get a list of report schedules, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ReportSchedulesApi();
let opts = { 
  'q': new Superset.GetListSchema() // GetListSchema | 
};
apiInstance.apiV1ReportGet(opts, (error, data, response) => {
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
 **q** | [**GetListSchema**](.md)|  | [optional] 

### Return type

[**InlineResponse20048**](InlineResponse20048.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ReportInfoGet"></a>
# **apiV1ReportInfoGet**
> InlineResponse2002 apiV1ReportInfoGet(opts)



Get metadata information about this API resource

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ReportSchedulesApi();
let opts = { 
  'q': new Superset.GetInfoSchema() // GetInfoSchema | 
};
apiInstance.apiV1ReportInfoGet(opts, (error, data, response) => {
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
 **q** | [**GetInfoSchema**](.md)|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ReportPkDelete"></a>
# **apiV1ReportPkDelete**
> InlineResponse400 apiV1ReportPkDelete(pk)



Delete a report schedule

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ReportSchedulesApi();
let pk = 56; // Number | The report schedule pk

apiInstance.apiV1ReportPkDelete(pk, (error, data, response) => {
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
 **pk** | **Number**| The report schedule pk | 

### Return type

[**InlineResponse400**](InlineResponse400.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ReportPkGet"></a>
# **apiV1ReportPkGet**
> InlineResponse20049 apiV1ReportPkGet(pk, opts)



Get a report schedule

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ReportSchedulesApi();
let pk = 56; // Number | 
let opts = { 
  'q': new Superset.GetItemSchema() // GetItemSchema | 
};
apiInstance.apiV1ReportPkGet(pk, opts, (error, data, response) => {
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
 **pk** | **Number**|  | 
 **q** | [**GetItemSchema**](.md)|  | [optional] 

### Return type

[**InlineResponse20049**](InlineResponse20049.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ReportPkLogGet"></a>
# **apiV1ReportPkLogGet**
> InlineResponse20051 apiV1ReportPkLogGet(pk, opts)



Get a list of report schedule logs, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ReportSchedulesApi();
let pk = 56; // Number | The report schedule id for these logs
let opts = { 
  'q': new Superset.GetListSchema() // GetListSchema | 
};
apiInstance.apiV1ReportPkLogGet(pk, opts, (error, data, response) => {
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
 **pk** | **Number**| The report schedule id for these logs | 
 **q** | [**GetListSchema**](.md)|  | [optional] 

### Return type

[**InlineResponse20051**](InlineResponse20051.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ReportPkLogLogIdGet"></a>
# **apiV1ReportPkLogLogIdGet**
> InlineResponse20052 apiV1ReportPkLogLogIdGet(pk, logId, opts)



Get a report schedule log

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ReportSchedulesApi();
let pk = 56; // Number | The report schedule pk for log
let logId = 56; // Number | The log pk
let opts = { 
  'q': new Superset.GetItemSchema() // GetItemSchema | 
};
apiInstance.apiV1ReportPkLogLogIdGet(pk, logId, opts, (error, data, response) => {
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
 **pk** | **Number**| The report schedule pk for log | 
 **logId** | **Number**| The log pk | 
 **q** | [**GetItemSchema**](.md)|  | [optional] 

### Return type

[**InlineResponse20052**](InlineResponse20052.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ReportPkPut"></a>
# **apiV1ReportPkPut**
> InlineResponse20050 apiV1ReportPkPut(body, pk)



Update a report schedule

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ReportSchedulesApi();
let body = new Superset.ReportScheduleRestApiPut(); // ReportScheduleRestApiPut | Report Schedule schema
let pk = 56; // Number | The Report Schedule pk

apiInstance.apiV1ReportPkPut(body, pk, (error, data, response) => {
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
 **body** | [**ReportScheduleRestApiPut**](ReportScheduleRestApiPut.md)| Report Schedule schema | 
 **pk** | **Number**| The Report Schedule pk | 

### Return type

[**InlineResponse20050**](InlineResponse20050.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1ReportPost"></a>
# **apiV1ReportPost**
> InlineResponse20113 apiV1ReportPost(body)



Create a report schedule

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ReportSchedulesApi();
let body = new Superset.ReportScheduleRestApiPost(); // ReportScheduleRestApiPost | Report Schedule schema

apiInstance.apiV1ReportPost(body, (error, data, response) => {
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
 **body** | [**ReportScheduleRestApiPost**](ReportScheduleRestApiPost.md)| Report Schedule schema | 

### Return type

[**InlineResponse20113**](InlineResponse20113.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1ReportRelatedColumnNameGet"></a>
# **apiV1ReportRelatedColumnNameGet**
> RelatedResponseSchema apiV1ReportRelatedColumnNameGet(columnName, opts)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ReportSchedulesApi();
let columnName = "columnName_example"; // String | 
let opts = { 
  'q': new Superset.GetRelatedSchema() // GetRelatedSchema | 
};
apiInstance.apiV1ReportRelatedColumnNameGet(columnName, opts, (error, data, response) => {
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
 **columnName** | **String**|  | 
 **q** | [**GetRelatedSchema**](.md)|  | [optional] 

### Return type

[**RelatedResponseSchema**](RelatedResponseSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

