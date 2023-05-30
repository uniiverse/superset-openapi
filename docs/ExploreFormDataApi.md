# Superset.ExploreFormDataApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1ExploreFormDataKeyDelete**](ExploreFormDataApi.md#apiV1ExploreFormDataKeyDelete) | **DELETE** /api/v1/explore/form_data/{key} | 
[**apiV1ExploreFormDataKeyGet**](ExploreFormDataApi.md#apiV1ExploreFormDataKeyGet) | **GET** /api/v1/explore/form_data/{key} | 
[**apiV1ExploreFormDataKeyPut**](ExploreFormDataApi.md#apiV1ExploreFormDataKeyPut) | **PUT** /api/v1/explore/form_data/{key} | 
[**apiV1ExploreFormDataPost**](ExploreFormDataApi.md#apiV1ExploreFormDataPost) | **POST** /api/v1/explore/form_data | 

<a name="apiV1ExploreFormDataKeyDelete"></a>
# **apiV1ExploreFormDataKeyDelete**
> InlineResponse20028 apiV1ExploreFormDataKeyDelete(key)



Deletes a form_data.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ExploreFormDataApi();
let key = "key_example"; // String | The form_data key.

apiInstance.apiV1ExploreFormDataKeyDelete(key, (error, data, response) => {
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
 **key** | **String**| The form_data key. | 

### Return type

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ExploreFormDataKeyGet"></a>
# **apiV1ExploreFormDataKeyGet**
> InlineResponse20039 apiV1ExploreFormDataKeyGet(key)



Retrives a form_data.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ExploreFormDataApi();
let key = "key_example"; // String | 

apiInstance.apiV1ExploreFormDataKeyGet(key, (error, data, response) => {
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
 **key** | **String**|  | 

### Return type

[**InlineResponse20039**](InlineResponse20039.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ExploreFormDataKeyPut"></a>
# **apiV1ExploreFormDataKeyPut**
> InlineResponse20111 apiV1ExploreFormDataKeyPut(body, key, opts)



Updates an existing form_data.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ExploreFormDataApi();
let body = new Superset.FormDataPutSchema(); // FormDataPutSchema | 
let key = "key_example"; // String | 
let opts = { 
  'tabId': 56 // Number | 
};
apiInstance.apiV1ExploreFormDataKeyPut(body, key, opts, (error, data, response) => {
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
 **body** | [**FormDataPutSchema**](FormDataPutSchema.md)|  | 
 **key** | **String**|  | 
 **tabId** | **Number**|  | [optional] 

### Return type

[**InlineResponse20111**](InlineResponse20111.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1ExploreFormDataPost"></a>
# **apiV1ExploreFormDataPost**
> InlineResponse20111 apiV1ExploreFormDataPost(body, opts)



Stores a new form_data.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ExploreFormDataApi();
let body = new Superset.FormDataPostSchema(); // FormDataPostSchema | 
let opts = { 
  'tabId': 56 // Number | 
};
apiInstance.apiV1ExploreFormDataPost(body, opts, (error, data, response) => {
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
 **body** | [**FormDataPostSchema**](FormDataPostSchema.md)|  | 
 **tabId** | **Number**|  | [optional] 

### Return type

[**InlineResponse20111**](InlineResponse20111.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

