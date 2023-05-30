# Superset.RowLevelSecurityApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1RowlevelsecurityDelete**](RowLevelSecurityApi.md#apiV1RowlevelsecurityDelete) | **DELETE** /api/v1/rowlevelsecurity/ | 
[**apiV1RowlevelsecurityGet**](RowLevelSecurityApi.md#apiV1RowlevelsecurityGet) | **GET** /api/v1/rowlevelsecurity/ | 
[**apiV1RowlevelsecurityInfoGet**](RowLevelSecurityApi.md#apiV1RowlevelsecurityInfoGet) | **GET** /api/v1/rowlevelsecurity/_info | 
[**apiV1RowlevelsecurityPkDelete**](RowLevelSecurityApi.md#apiV1RowlevelsecurityPkDelete) | **DELETE** /api/v1/rowlevelsecurity/{pk} | 
[**apiV1RowlevelsecurityPkGet**](RowLevelSecurityApi.md#apiV1RowlevelsecurityPkGet) | **GET** /api/v1/rowlevelsecurity/{pk} | 
[**apiV1RowlevelsecurityPkPut**](RowLevelSecurityApi.md#apiV1RowlevelsecurityPkPut) | **PUT** /api/v1/rowlevelsecurity/{pk} | 
[**apiV1RowlevelsecurityPost**](RowLevelSecurityApi.md#apiV1RowlevelsecurityPost) | **POST** /api/v1/rowlevelsecurity/ | 
[**apiV1RowlevelsecurityRelatedColumnNameGet**](RowLevelSecurityApi.md#apiV1RowlevelsecurityRelatedColumnNameGet) | **GET** /api/v1/rowlevelsecurity/related/{column_name} | 

<a name="apiV1RowlevelsecurityDelete"></a>
# **apiV1RowlevelsecurityDelete**
> InlineResponse400 apiV1RowlevelsecurityDelete(opts)



Deletes multiple RLS rules in a bulk operation.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.RowLevelSecurityApi();
let opts = { 
  'q': new Superset.GetDeleteIdsSchema() // GetDeleteIdsSchema | 
};
apiInstance.apiV1RowlevelsecurityDelete(opts, (error, data, response) => {
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
 **q** | [**GetDeleteIdsSchema**](.md)|  | [optional] 

### Return type

[**InlineResponse400**](InlineResponse400.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1RowlevelsecurityGet"></a>
# **apiV1RowlevelsecurityGet**
> InlineResponse20053 apiV1RowlevelsecurityGet(opts)



Get a list of models

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.RowLevelSecurityApi();
let opts = { 
  'q': new Superset.GetListSchema() // GetListSchema | 
};
apiInstance.apiV1RowlevelsecurityGet(opts, (error, data, response) => {
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

[**InlineResponse20053**](InlineResponse20053.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1RowlevelsecurityInfoGet"></a>
# **apiV1RowlevelsecurityInfoGet**
> InlineResponse2002 apiV1RowlevelsecurityInfoGet(opts)



Get metadata information about this API resource

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.RowLevelSecurityApi();
let opts = { 
  'q': new Superset.GetInfoSchema() // GetInfoSchema | 
};
apiInstance.apiV1RowlevelsecurityInfoGet(opts, (error, data, response) => {
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
 **q** | [**GetInfoSchema**](.md)|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1RowlevelsecurityPkDelete"></a>
# **apiV1RowlevelsecurityPkDelete**
> InlineResponse400 apiV1RowlevelsecurityPkDelete(pk)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.RowLevelSecurityApi();
let pk = 56; // Number | 

apiInstance.apiV1RowlevelsecurityPkDelete(pk, (error, data, response) => {
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

### Return type

[**InlineResponse400**](InlineResponse400.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1RowlevelsecurityPkGet"></a>
# **apiV1RowlevelsecurityPkGet**
> InlineResponse20054 apiV1RowlevelsecurityPkGet(pk, opts)



Get an item model

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.RowLevelSecurityApi();
let pk = 56; // Number | 
let opts = { 
  'q': new Superset.GetItemSchema() // GetItemSchema | 
};
apiInstance.apiV1RowlevelsecurityPkGet(pk, opts, (error, data, response) => {
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

[**InlineResponse20054**](InlineResponse20054.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1RowlevelsecurityPkPut"></a>
# **apiV1RowlevelsecurityPkPut**
> InlineResponse20055 apiV1RowlevelsecurityPkPut(body, pk)



Updates an RLS Rule

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.RowLevelSecurityApi();
let body = new Superset.RLSRestApiPut(); // RLSRestApiPut | RLS schema
let pk = 56; // Number | The Rule pk

apiInstance.apiV1RowlevelsecurityPkPut(body, pk, (error, data, response) => {
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
 **body** | [**RLSRestApiPut**](RLSRestApiPut.md)| RLS schema | 
 **pk** | **Number**| The Rule pk | 

### Return type

[**InlineResponse20055**](InlineResponse20055.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1RowlevelsecurityPost"></a>
# **apiV1RowlevelsecurityPost**
> InlineResponse20114 apiV1RowlevelsecurityPost(body)



Create a new RLS Rule

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.RowLevelSecurityApi();
let body = new Superset.RLSRestApiPost(); // RLSRestApiPost | RLS schema

apiInstance.apiV1RowlevelsecurityPost(body, (error, data, response) => {
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
 **body** | [**RLSRestApiPost**](RLSRestApiPost.md)| RLS schema | 

### Return type

[**InlineResponse20114**](InlineResponse20114.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1RowlevelsecurityRelatedColumnNameGet"></a>
# **apiV1RowlevelsecurityRelatedColumnNameGet**
> RelatedResponseSchema apiV1RowlevelsecurityRelatedColumnNameGet(columnName, opts)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.RowLevelSecurityApi();
let columnName = "columnName_example"; // String | 
let opts = { 
  'q': new Superset.GetRelatedSchema() // GetRelatedSchema | 
};
apiInstance.apiV1RowlevelsecurityRelatedColumnNameGet(columnName, opts, (error, data, response) => {
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
 **columnName** | **String**|  | 
 **q** | [**GetRelatedSchema**](.md)|  | [optional] 

### Return type

[**RelatedResponseSchema**](RelatedResponseSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

