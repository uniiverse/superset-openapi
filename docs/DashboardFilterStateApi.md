# Superset.DashboardFilterStateApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1DashboardPkFilterStateKeyDelete**](DashboardFilterStateApi.md#apiV1DashboardPkFilterStateKeyDelete) | **DELETE** /api/v1/dashboard/{pk}/filter_state/{key} | 
[**apiV1DashboardPkFilterStateKeyGet**](DashboardFilterStateApi.md#apiV1DashboardPkFilterStateKeyGet) | **GET** /api/v1/dashboard/{pk}/filter_state/{key} | 
[**apiV1DashboardPkFilterStateKeyPut**](DashboardFilterStateApi.md#apiV1DashboardPkFilterStateKeyPut) | **PUT** /api/v1/dashboard/{pk}/filter_state/{key} | 
[**apiV1DashboardPkFilterStatePost**](DashboardFilterStateApi.md#apiV1DashboardPkFilterStatePost) | **POST** /api/v1/dashboard/{pk}/filter_state | 

<a name="apiV1DashboardPkFilterStateKeyDelete"></a>
# **apiV1DashboardPkFilterStateKeyDelete**
> InlineResponse20028 apiV1DashboardPkFilterStateKeyDelete(pk, key)



Deletes a value.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardFilterStateApi();
let pk = 56; // Number | 
let key = "key_example"; // String | The value key.

apiInstance.apiV1DashboardPkFilterStateKeyDelete(pk, key, (error, data, response) => {
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
 **key** | **String**| The value key. | 

### Return type

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DashboardPkFilterStateKeyGet"></a>
# **apiV1DashboardPkFilterStateKeyGet**
> InlineResponse20027 apiV1DashboardPkFilterStateKeyGet(pk, key)



Retrives a value.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardFilterStateApi();
let pk = 56; // Number | 
let key = "key_example"; // String | 

apiInstance.apiV1DashboardPkFilterStateKeyGet(pk, key, (error, data, response) => {
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
 **key** | **String**|  | 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DashboardPkFilterStateKeyPut"></a>
# **apiV1DashboardPkFilterStateKeyPut**
> InlineResponse2016 apiV1DashboardPkFilterStateKeyPut(body, pk, key, opts)



Updates an existing value.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardFilterStateApi();
let body = new Superset.TemporaryCachePutSchema(); // TemporaryCachePutSchema | 
let pk = 56; // Number | 
let key = "key_example"; // String | 
let opts = { 
  'tabId': 56 // Number | 
};
apiInstance.apiV1DashboardPkFilterStateKeyPut(body, pk, key, opts, (error, data, response) => {
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
 **body** | [**TemporaryCachePutSchema**](TemporaryCachePutSchema.md)|  | 
 **pk** | **Number**|  | 
 **key** | **String**|  | 
 **tabId** | **Number**|  | [optional] 

### Return type

[**InlineResponse2016**](InlineResponse2016.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1DashboardPkFilterStatePost"></a>
# **apiV1DashboardPkFilterStatePost**
> InlineResponse2016 apiV1DashboardPkFilterStatePost(body, pk, opts)



Stores a new value.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardFilterStateApi();
let body = new Superset.TemporaryCachePostSchema(); // TemporaryCachePostSchema | 
let pk = 56; // Number | 
let opts = { 
  'tabId': 56 // Number | 
};
apiInstance.apiV1DashboardPkFilterStatePost(body, pk, opts, (error, data, response) => {
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
 **body** | [**TemporaryCachePostSchema**](TemporaryCachePostSchema.md)|  | 
 **pk** | **Number**|  | 
 **tabId** | **Number**|  | [optional] 

### Return type

[**InlineResponse2016**](InlineResponse2016.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

