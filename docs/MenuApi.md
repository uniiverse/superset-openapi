# Superset.MenuApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1MenuGet**](MenuApi.md#apiV1MenuGet) | **GET** /api/v1/menu/ | 

<a name="apiV1MenuGet"></a>
# **apiV1MenuGet**
> InlineResponse20043 apiV1MenuGet()



Get the menu data structure. Returns a forest like structure with the menu the user has access to

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.MenuApi();
apiInstance.apiV1MenuGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20043**](InlineResponse20043.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

