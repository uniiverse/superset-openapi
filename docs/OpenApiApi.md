# Superset.OpenApiApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiVersionOpenapiGet**](OpenApiApi.md#apiVersionOpenapiGet) | **GET** /api/{version}/_openapi | 

<a name="apiVersionOpenapiGet"></a>
# **apiVersionOpenapiGet**
> Object apiVersionOpenapiGet(version)



Get the OpenAPI spec for a specific API version

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.OpenApiApi();
let version = "version_example"; // String | 

apiInstance.apiVersionOpenapiGet(version, (error, data, response) => {
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
 **version** | **String**|  | 

### Return type

**Object**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

