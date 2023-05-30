# Superset.AsyncEventsRestApiApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1AsyncEventGet**](AsyncEventsRestApiApi.md#apiV1AsyncEventGet) | **GET** /api/v1/async_event/ | 

<a name="apiV1AsyncEventGet"></a>
# **apiV1AsyncEventGet**
> InlineResponse2008 apiV1AsyncEventGet(opts)



Reads off of the Redis events stream, using the user&#x27;s JWT token and optional query params for last event received.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AsyncEventsRestApiApi();
let opts = { 
  'lastId': "lastId_example" // String | Last ID received by the client
};
apiInstance.apiV1AsyncEventGet(opts, (error, data, response) => {
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
 **lastId** | **String**| Last ID received by the client | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

