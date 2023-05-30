# Superset.EmbeddedDashboardApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1EmbeddedDashboardUuidGet**](EmbeddedDashboardApi.md#apiV1EmbeddedDashboardUuidGet) | **GET** /api/v1/embedded_dashboard/{uuid} | 

<a name="apiV1EmbeddedDashboardUuidGet"></a>
# **apiV1EmbeddedDashboardUuidGet**
> InlineResponse20025 apiV1EmbeddedDashboardUuidGet(uuid)



Get a report schedule log

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.EmbeddedDashboardApi();
let uuid = "uuid_example"; // String | The embedded configuration uuid

apiInstance.apiV1EmbeddedDashboardUuidGet(uuid, (error, data, response) => {
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
 **uuid** | **String**| The embedded configuration uuid | 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

