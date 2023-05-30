# Superset.AvailableDomainsApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1AvailableDomainsGet**](AvailableDomainsApi.md#apiV1AvailableDomainsGet) | **GET** /api/v1/available_domains/ | 

<a name="apiV1AvailableDomainsGet"></a>
# **apiV1AvailableDomainsGet**
> InlineResponse2009 apiV1AvailableDomainsGet()



Get all available domains

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AvailableDomainsApi();
apiInstance.apiV1AvailableDomainsGet((error, data, response) => {
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

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

