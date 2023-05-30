# Superset.DashboardPermanentLinkApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1DashboardPermalinkKeyGet**](DashboardPermanentLinkApi.md#apiV1DashboardPermalinkKeyGet) | **GET** /api/v1/dashboard/permalink/{key} | 
[**apiV1DashboardPkPermalinkPost**](DashboardPermanentLinkApi.md#apiV1DashboardPkPermalinkPost) | **POST** /api/v1/dashboard/{pk}/permalink | 

<a name="apiV1DashboardPermalinkKeyGet"></a>
# **apiV1DashboardPermalinkKeyGet**
> InlineResponse20018 apiV1DashboardPermalinkKeyGet(key)



Retrives dashboard state associated with a permanent link.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardPermanentLinkApi();
let key = "key_example"; // String | 

apiInstance.apiV1DashboardPermalinkKeyGet(key, (error, data, response) => {
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

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DashboardPkPermalinkPost"></a>
# **apiV1DashboardPkPermalinkPost**
> InlineResponse2017 apiV1DashboardPkPermalinkPost(pk)



Stores a new permanent link.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardPermanentLinkApi();
let pk = "pk_example"; // String | 

apiInstance.apiV1DashboardPkPermalinkPost(pk, (error, data, response) => {
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
 **pk** | **String**|  | 

### Return type

[**InlineResponse2017**](InlineResponse2017.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

