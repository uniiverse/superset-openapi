# Superset.ExplorePermanentLinkApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1ExplorePermalinkKeyGet**](ExplorePermanentLinkApi.md#apiV1ExplorePermalinkKeyGet) | **GET** /api/v1/explore/permalink/{key} | 
[**apiV1ExplorePermalinkPost**](ExplorePermanentLinkApi.md#apiV1ExplorePermalinkPost) | **POST** /api/v1/explore/permalink | 

<a name="apiV1ExplorePermalinkKeyGet"></a>
# **apiV1ExplorePermalinkKeyGet**
> InlineResponse20018 apiV1ExplorePermalinkKeyGet(key)



Retrives chart state associated with a permanent link.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ExplorePermanentLinkApi();
let key = "key_example"; // String | 

apiInstance.apiV1ExplorePermalinkKeyGet(key, (error, data, response) => {
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

<a name="apiV1ExplorePermalinkPost"></a>
# **apiV1ExplorePermalinkPost**
> InlineResponse2017 apiV1ExplorePermalinkPost()



Stores a new permanent link.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ExplorePermanentLinkApi();
apiInstance.apiV1ExplorePermalinkPost((error, data, response) => {
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

[**InlineResponse2017**](InlineResponse2017.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

