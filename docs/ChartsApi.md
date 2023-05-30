# Superset.ChartsApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1ChartDataCacheKeyGet**](ChartsApi.md#apiV1ChartDataCacheKeyGet) | **GET** /api/v1/chart/data/{cache_key} | 
[**apiV1ChartDataPost**](ChartsApi.md#apiV1ChartDataPost) | **POST** /api/v1/chart/data | 
[**apiV1ChartDelete**](ChartsApi.md#apiV1ChartDelete) | **DELETE** /api/v1/chart/ | 
[**apiV1ChartExportGet**](ChartsApi.md#apiV1ChartExportGet) | **GET** /api/v1/chart/export/ | 
[**apiV1ChartFavoriteStatusGet**](ChartsApi.md#apiV1ChartFavoriteStatusGet) | **GET** /api/v1/chart/favorite_status/ | 
[**apiV1ChartGet**](ChartsApi.md#apiV1ChartGet) | **GET** /api/v1/chart/ | 
[**apiV1ChartImportPost**](ChartsApi.md#apiV1ChartImportPost) | **POST** /api/v1/chart/import/ | 
[**apiV1ChartInfoGet**](ChartsApi.md#apiV1ChartInfoGet) | **GET** /api/v1/chart/_info | 
[**apiV1ChartPkCacheScreenshotGet**](ChartsApi.md#apiV1ChartPkCacheScreenshotGet) | **GET** /api/v1/chart/{pk}/cache_screenshot/ | 
[**apiV1ChartPkDataGet**](ChartsApi.md#apiV1ChartPkDataGet) | **GET** /api/v1/chart/{pk}/data/ | 
[**apiV1ChartPkDelete**](ChartsApi.md#apiV1ChartPkDelete) | **DELETE** /api/v1/chart/{pk} | 
[**apiV1ChartPkFavoritesDelete**](ChartsApi.md#apiV1ChartPkFavoritesDelete) | **DELETE** /api/v1/chart/{pk}/favorites/ | 
[**apiV1ChartPkFavoritesPost**](ChartsApi.md#apiV1ChartPkFavoritesPost) | **POST** /api/v1/chart/{pk}/favorites/ | 
[**apiV1ChartPkGet**](ChartsApi.md#apiV1ChartPkGet) | **GET** /api/v1/chart/{pk} | 
[**apiV1ChartPkPut**](ChartsApi.md#apiV1ChartPkPut) | **PUT** /api/v1/chart/{pk} | 
[**apiV1ChartPkScreenshotDigestGet**](ChartsApi.md#apiV1ChartPkScreenshotDigestGet) | **GET** /api/v1/chart/{pk}/screenshot/{digest}/ | 
[**apiV1ChartPkThumbnailDigestGet**](ChartsApi.md#apiV1ChartPkThumbnailDigestGet) | **GET** /api/v1/chart/{pk}/thumbnail/{digest}/ | 
[**apiV1ChartPost**](ChartsApi.md#apiV1ChartPost) | **POST** /api/v1/chart/ | 
[**apiV1ChartRelatedColumnNameGet**](ChartsApi.md#apiV1ChartRelatedColumnNameGet) | **GET** /api/v1/chart/related/{column_name} | 

<a name="apiV1ChartDataCacheKeyGet"></a>
# **apiV1ChartDataCacheKeyGet**
> ChartDataResponseSchema apiV1ChartDataCacheKeyGet(cacheKey)



Takes a query context cache key and returns payload data response for the given query.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let cacheKey = "cacheKey_example"; // String | 

apiInstance.apiV1ChartDataCacheKeyGet(cacheKey, (error, data, response) => {
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
 **cacheKey** | **String**|  | 

### Return type

[**ChartDataResponseSchema**](ChartDataResponseSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ChartDataPost"></a>
# **apiV1ChartDataPost**
> ChartDataResponseSchema apiV1ChartDataPost(body)



Takes a query context constructed in the client and returns payload data response for the given query.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let body = new Superset.ChartDataQueryContextSchema(); // ChartDataQueryContextSchema | A query context consists of a datasource from which to fetch data and one or many query objects.

apiInstance.apiV1ChartDataPost(body, (error, data, response) => {
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
 **body** | [**ChartDataQueryContextSchema**](ChartDataQueryContextSchema.md)| A query context consists of a datasource from which to fetch data and one or many query objects. | 

### Return type

[**ChartDataResponseSchema**](ChartDataResponseSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1ChartDelete"></a>
# **apiV1ChartDelete**
> InlineResponse400 apiV1ChartDelete(opts)



Deletes multiple Charts in a bulk operation.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let opts = { 
  'q': new Superset.GetDeleteIdsSchema() // GetDeleteIdsSchema | 
};
apiInstance.apiV1ChartDelete(opts, (error, data, response) => {
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

<a name="apiV1ChartExportGet"></a>
# **apiV1ChartExportGet**
> &#x27;Blob&#x27; apiV1ChartExportGet(opts)



Exports multiple charts and downloads them as YAML files

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let opts = { 
  'q': new Superset.GetExportIdsSchema() // GetExportIdsSchema | 
};
apiInstance.apiV1ChartExportGet(opts, (error, data, response) => {
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

<a name="apiV1ChartFavoriteStatusGet"></a>
# **apiV1ChartFavoriteStatusGet**
> GetFavStarIdsSchema apiV1ChartFavoriteStatusGet(opts)



Check favorited dashboards for current user

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let opts = { 
  'q': new Superset.GetFavStarIdsSchema() // GetFavStarIdsSchema | 
};
apiInstance.apiV1ChartFavoriteStatusGet(opts, (error, data, response) => {
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
 **q** | [**GetFavStarIdsSchema**](.md)|  | [optional] 

### Return type

[**GetFavStarIdsSchema**](GetFavStarIdsSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ChartGet"></a>
# **apiV1ChartGet**
> InlineResponse20010 apiV1ChartGet(opts)



Get a list of charts, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let opts = { 
  'q': new Superset.GetListSchema() // GetListSchema | 
};
apiInstance.apiV1ChartGet(opts, (error, data, response) => {
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

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ChartImportPost"></a>
# **apiV1ChartImportPost**
> InlineResponse400 apiV1ChartImportPost(formData, overwrite, passwords, sshTunnelPasswords, sshTunnelPrivateKeyPasswords, sshTunnelPrivateKeys)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let formData = "formData_example"; // Blob | 
let overwrite = true; // Boolean | 
let passwords = "passwords_example"; // String | 
let sshTunnelPasswords = "sshTunnelPasswords_example"; // String | 
let sshTunnelPrivateKeyPasswords = "sshTunnelPrivateKeyPasswords_example"; // String | 
let sshTunnelPrivateKeys = "sshTunnelPrivateKeys_example"; // String | 

apiInstance.apiV1ChartImportPost(formData, overwrite, passwords, sshTunnelPasswords, sshTunnelPrivateKeyPasswords, sshTunnelPrivateKeys, (error, data, response) => {
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

<a name="apiV1ChartInfoGet"></a>
# **apiV1ChartInfoGet**
> InlineResponse2002 apiV1ChartInfoGet(opts)



Several metadata information about chart API endpoints.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let opts = { 
  'q': new Superset.GetInfoSchema() // GetInfoSchema | 
};
apiInstance.apiV1ChartInfoGet(opts, (error, data, response) => {
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

<a name="apiV1ChartPkCacheScreenshotGet"></a>
# **apiV1ChartPkCacheScreenshotGet**
> ChartCacheScreenshotResponseSchema apiV1ChartPkCacheScreenshotGet(pk, opts)



Compute and cache a screenshot.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let pk = 56; // Number | 
let opts = { 
  'q': new Superset.ScreenshotQuerySchema() // ScreenshotQuerySchema | 
};
apiInstance.apiV1ChartPkCacheScreenshotGet(pk, opts, (error, data, response) => {
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
 **q** | [**ScreenshotQuerySchema**](.md)|  | [optional] 

### Return type

[**ChartCacheScreenshotResponseSchema**](ChartCacheScreenshotResponseSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ChartPkDataGet"></a>
# **apiV1ChartPkDataGet**
> ChartDataResponseSchema apiV1ChartPkDataGet(pk, opts)



Takes a chart ID and uses the query context stored when the chart was saved to return payload data response.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let pk = 56; // Number | The chart ID
let opts = { 
  'format': "format_example", // String | The format in which the data should be returned
  'type': "type_example", // String | The type in which the data should be returned
  'force': true // Boolean | Should the queries be forced to load from the source
};
apiInstance.apiV1ChartPkDataGet(pk, opts, (error, data, response) => {
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
 **pk** | **Number**| The chart ID | 
 **format** | **String**| The format in which the data should be returned | [optional] 
 **type** | **String**| The type in which the data should be returned | [optional] 
 **force** | **Boolean**| Should the queries be forced to load from the source | [optional] 

### Return type

[**ChartDataResponseSchema**](ChartDataResponseSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ChartPkDelete"></a>
# **apiV1ChartPkDelete**
> InlineResponse400 apiV1ChartPkDelete(pk)



Deletes a Chart.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let pk = 56; // Number | 

apiInstance.apiV1ChartPkDelete(pk, (error, data, response) => {
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

<a name="apiV1ChartPkFavoritesDelete"></a>
# **apiV1ChartPkFavoritesDelete**
> InlineResponse20013 apiV1ChartPkFavoritesDelete(pk)



Remove the chart from the user favorite list

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let pk = 56; // Number | 

apiInstance.apiV1ChartPkFavoritesDelete(pk, (error, data, response) => {
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

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ChartPkFavoritesPost"></a>
# **apiV1ChartPkFavoritesPost**
> InlineResponse20013 apiV1ChartPkFavoritesPost(pk)



Marks the chart as favorite for the current user

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let pk = 56; // Number | 

apiInstance.apiV1ChartPkFavoritesPost(pk, (error, data, response) => {
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

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ChartPkGet"></a>
# **apiV1ChartPkGet**
> InlineResponse20011 apiV1ChartPkGet(pk, opts)



Get a chart detail information.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let pk = 56; // Number | 
let opts = { 
  'q': new Superset.GetItemSchema() // GetItemSchema | 
};
apiInstance.apiV1ChartPkGet(pk, opts, (error, data, response) => {
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

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ChartPkPut"></a>
# **apiV1ChartPkPut**
> InlineResponse20012 apiV1ChartPkPut(body, pk)



Changes a Chart.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let body = new Superset.ChartRestApiPut(); // ChartRestApiPut | Chart schema
let pk = 56; // Number | 

apiInstance.apiV1ChartPkPut(body, pk, (error, data, response) => {
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
 **body** | [**ChartRestApiPut**](ChartRestApiPut.md)| Chart schema | 
 **pk** | **Number**|  | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1ChartPkScreenshotDigestGet"></a>
# **apiV1ChartPkScreenshotDigestGet**
> &#x27;Blob&#x27; apiV1ChartPkScreenshotDigestGet(pk, digest)



Get a computed screenshot from cache.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let pk = 56; // Number | 
let digest = "digest_example"; // String | 

apiInstance.apiV1ChartPkScreenshotDigestGet(pk, digest, (error, data, response) => {
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
 **digest** | **String**|  | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/_*, application/json

<a name="apiV1ChartPkThumbnailDigestGet"></a>
# **apiV1ChartPkThumbnailDigestGet**
> &#x27;Blob&#x27; apiV1ChartPkThumbnailDigestGet(pk, digest)



Compute or get already computed chart thumbnail from cache.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let pk = 56; // Number | 
let digest = "digest_example"; // String | 

apiInstance.apiV1ChartPkThumbnailDigestGet(pk, digest, (error, data, response) => {
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
 **digest** | **String**|  | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/_*, application/json

<a name="apiV1ChartPost"></a>
# **apiV1ChartPost**
> InlineResponse2012 apiV1ChartPost(body)



Create a new Chart.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let body = new Superset.ChartRestApiPost(); // ChartRestApiPost | Chart schema

apiInstance.apiV1ChartPost(body, (error, data, response) => {
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
 **body** | [**ChartRestApiPost**](ChartRestApiPost.md)| Chart schema | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1ChartRelatedColumnNameGet"></a>
# **apiV1ChartRelatedColumnNameGet**
> RelatedResponseSchema apiV1ChartRelatedColumnNameGet(columnName, opts)



Get a list of all possible owners for a chart. Use &#x60;owners&#x60; has the &#x60;column_name&#x60; parameter

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ChartsApi();
let columnName = "columnName_example"; // String | 
let opts = { 
  'q': new Superset.GetRelatedSchema() // GetRelatedSchema | 
};
apiInstance.apiV1ChartRelatedColumnNameGet(columnName, opts, (error, data, response) => {
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

