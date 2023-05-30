# Superset.CacheRestApiApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1CachekeyInvalidatePost**](CacheRestApiApi.md#apiV1CachekeyInvalidatePost) | **POST** /api/v1/cachekey/invalidate | 

<a name="apiV1CachekeyInvalidatePost"></a>
# **apiV1CachekeyInvalidatePost**
> apiV1CachekeyInvalidatePost(body)



Takes a list of datasources, finds the associated cache records and invalidates them and removes the database records

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.CacheRestApiApi();
let body = new Superset.CacheInvalidationRequestSchema(); // CacheInvalidationRequestSchema | A list of datasources uuid or the tuples of database and datasource names

apiInstance.apiV1CachekeyInvalidatePost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CacheInvalidationRequestSchema**](CacheInvalidationRequestSchema.md)| A list of datasources uuid or the tuples of database and datasource names | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

