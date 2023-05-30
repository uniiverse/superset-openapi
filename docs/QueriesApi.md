# Superset.QueriesApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1QueryDistinctColumnNameGet**](QueriesApi.md#apiV1QueryDistinctColumnNameGet) | **GET** /api/v1/query/distinct/{column_name} | 
[**apiV1QueryGet**](QueriesApi.md#apiV1QueryGet) | **GET** /api/v1/query/ | 
[**apiV1QueryPkGet**](QueriesApi.md#apiV1QueryPkGet) | **GET** /api/v1/query/{pk} | 
[**apiV1QueryRelatedColumnNameGet**](QueriesApi.md#apiV1QueryRelatedColumnNameGet) | **GET** /api/v1/query/related/{column_name} | 
[**apiV1QueryStopPost**](QueriesApi.md#apiV1QueryStopPost) | **POST** /api/v1/query/stop | Manually stop a query with client_id
[**apiV1QueryUpdatedSinceGet**](QueriesApi.md#apiV1QueryUpdatedSinceGet) | **GET** /api/v1/query/updated_since | Get a list of queries that changed after last_updated_ms
[**apiV1SavedQueryDelete**](QueriesApi.md#apiV1SavedQueryDelete) | **DELETE** /api/v1/saved_query/ | 
[**apiV1SavedQueryDistinctColumnNameGet**](QueriesApi.md#apiV1SavedQueryDistinctColumnNameGet) | **GET** /api/v1/saved_query/distinct/{column_name} | 
[**apiV1SavedQueryExportGet**](QueriesApi.md#apiV1SavedQueryExportGet) | **GET** /api/v1/saved_query/export/ | 
[**apiV1SavedQueryGet**](QueriesApi.md#apiV1SavedQueryGet) | **GET** /api/v1/saved_query/ | 
[**apiV1SavedQueryImportPost**](QueriesApi.md#apiV1SavedQueryImportPost) | **POST** /api/v1/saved_query/import/ | 
[**apiV1SavedQueryInfoGet**](QueriesApi.md#apiV1SavedQueryInfoGet) | **GET** /api/v1/saved_query/_info | 
[**apiV1SavedQueryPkDelete**](QueriesApi.md#apiV1SavedQueryPkDelete) | **DELETE** /api/v1/saved_query/{pk} | 
[**apiV1SavedQueryPkGet**](QueriesApi.md#apiV1SavedQueryPkGet) | **GET** /api/v1/saved_query/{pk} | 
[**apiV1SavedQueryPkPut**](QueriesApi.md#apiV1SavedQueryPkPut) | **PUT** /api/v1/saved_query/{pk} | 
[**apiV1SavedQueryPost**](QueriesApi.md#apiV1SavedQueryPost) | **POST** /api/v1/saved_query/ | 
[**apiV1SavedQueryRelatedColumnNameGet**](QueriesApi.md#apiV1SavedQueryRelatedColumnNameGet) | **GET** /api/v1/saved_query/related/{column_name} | 

<a name="apiV1QueryDistinctColumnNameGet"></a>
# **apiV1QueryDistinctColumnNameGet**
> DistincResponseSchema apiV1QueryDistinctColumnNameGet(columnName, opts)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.QueriesApi();
let columnName = "columnName_example"; // String | 
let opts = { 
  'q': new Superset.GetRelatedSchema() // GetRelatedSchema | 
};
apiInstance.apiV1QueryDistinctColumnNameGet(columnName, opts, (error, data, response) => {
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

[**DistincResponseSchema**](DistincResponseSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1QueryGet"></a>
# **apiV1QueryGet**
> InlineResponse20044 apiV1QueryGet(opts)



Get a list of queries, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.QueriesApi();
let opts = { 
  'q': new Superset.GetListSchema() // GetListSchema | 
};
apiInstance.apiV1QueryGet(opts, (error, data, response) => {
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

[**InlineResponse20044**](InlineResponse20044.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1QueryPkGet"></a>
# **apiV1QueryPkGet**
> InlineResponse20047 apiV1QueryPkGet(pk, opts)



Get query detail information.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.QueriesApi();
let pk = 56; // Number | 
let opts = { 
  'q': new Superset.GetItemSchema() // GetItemSchema | 
};
apiInstance.apiV1QueryPkGet(pk, opts, (error, data, response) => {
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

[**InlineResponse20047**](InlineResponse20047.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1QueryRelatedColumnNameGet"></a>
# **apiV1QueryRelatedColumnNameGet**
> RelatedResponseSchema apiV1QueryRelatedColumnNameGet(columnName, opts)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.QueriesApi();
let columnName = "columnName_example"; // String | 
let opts = { 
  'q': new Superset.GetRelatedSchema() // GetRelatedSchema | 
};
apiInstance.apiV1QueryRelatedColumnNameGet(columnName, opts, (error, data, response) => {
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

<a name="apiV1QueryStopPost"></a>
# **apiV1QueryStopPost**
> InlineResponse20045 apiV1QueryStopPost(body)

Manually stop a query with client_id

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.QueriesApi();
let body = new Superset.StopQuerySchema(); // StopQuerySchema | Stop query schema

apiInstance.apiV1QueryStopPost(body, (error, data, response) => {
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
 **body** | [**StopQuerySchema**](StopQuerySchema.md)| Stop query schema | 

### Return type

[**InlineResponse20045**](InlineResponse20045.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1QueryUpdatedSinceGet"></a>
# **apiV1QueryUpdatedSinceGet**
> InlineResponse20046 apiV1QueryUpdatedSinceGet(opts)

Get a list of queries that changed after last_updated_ms

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.QueriesApi();
let opts = { 
  'q': new Superset.QueriesGetUpdatedSinceSchema() // QueriesGetUpdatedSinceSchema | 
};
apiInstance.apiV1QueryUpdatedSinceGet(opts, (error, data, response) => {
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
 **q** | [**QueriesGetUpdatedSinceSchema**](.md)|  | [optional] 

### Return type

[**InlineResponse20046**](InlineResponse20046.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1SavedQueryDelete"></a>
# **apiV1SavedQueryDelete**
> InlineResponse400 apiV1SavedQueryDelete(opts)



Deletes multiple saved queries in a bulk operation.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.QueriesApi();
let opts = { 
  'q': new Superset.GetDeleteIdsSchema() // GetDeleteIdsSchema | 
};
apiInstance.apiV1SavedQueryDelete(opts, (error, data, response) => {
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

<a name="apiV1SavedQueryDistinctColumnNameGet"></a>
# **apiV1SavedQueryDistinctColumnNameGet**
> DistincResponseSchema apiV1SavedQueryDistinctColumnNameGet(columnName, opts)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.QueriesApi();
let columnName = "columnName_example"; // String | 
let opts = { 
  'q': new Superset.GetRelatedSchema() // GetRelatedSchema | 
};
apiInstance.apiV1SavedQueryDistinctColumnNameGet(columnName, opts, (error, data, response) => {
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

[**DistincResponseSchema**](DistincResponseSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1SavedQueryExportGet"></a>
# **apiV1SavedQueryExportGet**
> &#x27;Blob&#x27; apiV1SavedQueryExportGet(opts)



Exports multiple saved queries and downloads them as YAML files

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.QueriesApi();
let opts = { 
  'q': new Superset.GetExportIdsSchema() // GetExportIdsSchema | 
};
apiInstance.apiV1SavedQueryExportGet(opts, (error, data, response) => {
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
 **q** | [**GetExportIdsSchema**](.md)|  | [optional] 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/zip, application/json

<a name="apiV1SavedQueryGet"></a>
# **apiV1SavedQueryGet**
> InlineResponse20056 apiV1SavedQueryGet(opts)



Get a list of saved queries, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.QueriesApi();
let opts = { 
  'q': new Superset.GetListSchema() // GetListSchema | 
};
apiInstance.apiV1SavedQueryGet(opts, (error, data, response) => {
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

[**InlineResponse20056**](InlineResponse20056.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1SavedQueryImportPost"></a>
# **apiV1SavedQueryImportPost**
> InlineResponse400 apiV1SavedQueryImportPost(formData, overwrite, passwords, sshTunnelPasswords, sshTunnelPrivateKeyPasswords, sshTunnelPrivateKeys)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.QueriesApi();
let formData = "formData_example"; // Blob | 
let overwrite = true; // Boolean | 
let passwords = "passwords_example"; // String | 
let sshTunnelPasswords = "sshTunnelPasswords_example"; // String | 
let sshTunnelPrivateKeyPasswords = "sshTunnelPrivateKeyPasswords_example"; // String | 
let sshTunnelPrivateKeys = "sshTunnelPrivateKeys_example"; // String | 

apiInstance.apiV1SavedQueryImportPost(formData, overwrite, passwords, sshTunnelPasswords, sshTunnelPrivateKeyPasswords, sshTunnelPrivateKeys, (error, data, response) => {
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
 **formData** | **Blob**|  | 
 **overwrite** | **Boolean**|  | 
 **passwords** | **String**|  | 
 **sshTunnelPasswords** | **String**|  | 
 **sshTunnelPrivateKeyPasswords** | **String**|  | 
 **sshTunnelPrivateKeys** | **String**|  | 

### Return type

[**InlineResponse400**](InlineResponse400.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="apiV1SavedQueryInfoGet"></a>
# **apiV1SavedQueryInfoGet**
> InlineResponse2002 apiV1SavedQueryInfoGet(opts)



Get metadata information about this API resource

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.QueriesApi();
let opts = { 
  'q': new Superset.GetInfoSchema() // GetInfoSchema | 
};
apiInstance.apiV1SavedQueryInfoGet(opts, (error, data, response) => {
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

<a name="apiV1SavedQueryPkDelete"></a>
# **apiV1SavedQueryPkDelete**
> InlineResponse400 apiV1SavedQueryPkDelete(pk)



Delete saved query

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.QueriesApi();
let pk = 56; // Number | 

apiInstance.apiV1SavedQueryPkDelete(pk, (error, data, response) => {
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

<a name="apiV1SavedQueryPkGet"></a>
# **apiV1SavedQueryPkGet**
> InlineResponse20057 apiV1SavedQueryPkGet(pk, opts)



Get a saved query

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.QueriesApi();
let pk = 56; // Number | 
let opts = { 
  'q': new Superset.GetItemSchema() // GetItemSchema | 
};
apiInstance.apiV1SavedQueryPkGet(pk, opts, (error, data, response) => {
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

[**InlineResponse20057**](InlineResponse20057.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1SavedQueryPkPut"></a>
# **apiV1SavedQueryPkPut**
> InlineResponse20058 apiV1SavedQueryPkPut(body, pk)



Update a saved query

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.QueriesApi();
let body = new Superset.SavedQueryRestApiPut(); // SavedQueryRestApiPut | Model schema
let pk = 56; // Number | 

apiInstance.apiV1SavedQueryPkPut(body, pk, (error, data, response) => {
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
 **body** | [**SavedQueryRestApiPut**](SavedQueryRestApiPut.md)| Model schema | 
 **pk** | **Number**|  | 

### Return type

[**InlineResponse20058**](InlineResponse20058.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1SavedQueryPost"></a>
# **apiV1SavedQueryPost**
> InlineResponse20115 apiV1SavedQueryPost(body)



Create a saved query

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.QueriesApi();
let body = new Superset.SavedQueryRestApiPost(); // SavedQueryRestApiPost | Model schema

apiInstance.apiV1SavedQueryPost(body, (error, data, response) => {
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
 **body** | [**SavedQueryRestApiPost**](SavedQueryRestApiPost.md)| Model schema | 

### Return type

[**InlineResponse20115**](InlineResponse20115.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1SavedQueryRelatedColumnNameGet"></a>
# **apiV1SavedQueryRelatedColumnNameGet**
> RelatedResponseSchema apiV1SavedQueryRelatedColumnNameGet(columnName, opts)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.QueriesApi();
let columnName = "columnName_example"; // String | 
let opts = { 
  'q': new Superset.GetRelatedSchema() // GetRelatedSchema | 
};
apiInstance.apiV1SavedQueryRelatedColumnNameGet(columnName, opts, (error, data, response) => {
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

