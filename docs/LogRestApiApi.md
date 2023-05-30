# Superset.LogRestApiApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1LogGet**](LogRestApiApi.md#apiV1LogGet) | **GET** /api/v1/log/ | 
[**apiV1LogPkGet**](LogRestApiApi.md#apiV1LogPkGet) | **GET** /api/v1/log/{pk} | 
[**apiV1LogPost**](LogRestApiApi.md#apiV1LogPost) | **POST** /api/v1/log/ | 
[**apiV1LogRecentActivityUserIdGet**](LogRestApiApi.md#apiV1LogRecentActivityUserIdGet) | **GET** /api/v1/log/recent_activity/{user_id}/ | Get recent activity data for a user

<a name="apiV1LogGet"></a>
# **apiV1LogGet**
> InlineResponse20040 apiV1LogGet(opts)



Get a list of models

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.LogRestApiApi();
let opts = { 
  'q': new Superset.GetListSchema() // GetListSchema | 
};
apiInstance.apiV1LogGet(opts, (error, data, response) => {
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
 **q** | [**GetListSchema**](.md)|  | [optional] 

### Return type

[**InlineResponse20040**](InlineResponse20040.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1LogPkGet"></a>
# **apiV1LogPkGet**
> InlineResponse20041 apiV1LogPkGet(pk, opts)



Get an item model

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.LogRestApiApi();
let pk = 56; // Number | 
let opts = { 
  'q': new Superset.GetItemSchema() // GetItemSchema | 
};
apiInstance.apiV1LogPkGet(pk, opts, (error, data, response) => {
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
 **q** | [**GetItemSchema**](.md)|  | [optional] 

### Return type

[**InlineResponse20041**](InlineResponse20041.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1LogPost"></a>
# **apiV1LogPost**
> InlineResponse20112 apiV1LogPost(body)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.LogRestApiApi();
let body = new Superset.LogRestApiPost(); // LogRestApiPost | Model schema

apiInstance.apiV1LogPost(body, (error, data, response) => {
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
 **body** | [**LogRestApiPost**](LogRestApiPost.md)| Model schema | 

### Return type

[**InlineResponse20112**](InlineResponse20112.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1LogRecentActivityUserIdGet"></a>
# **apiV1LogRecentActivityUserIdGet**
> RecentActivityResponseSchema apiV1LogRecentActivityUserIdGet(userId, opts)

Get recent activity data for a user

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.LogRestApiApi();
let userId = 56; // Number | The id of the user
let opts = { 
  'q': new Superset.GetRecentActivitySchema() // GetRecentActivitySchema | 
};
apiInstance.apiV1LogRecentActivityUserIdGet(userId, opts, (error, data, response) => {
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
 **userId** | **Number**| The id of the user | 
 **q** | [**GetRecentActivitySchema**](.md)|  | [optional] 

### Return type

[**RecentActivityResponseSchema**](RecentActivityResponseSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

