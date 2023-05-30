# Superset.DashboardsApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1DashboardDelete**](DashboardsApi.md#apiV1DashboardDelete) | **DELETE** /api/v1/dashboard/ | 
[**apiV1DashboardExportGet**](DashboardsApi.md#apiV1DashboardExportGet) | **GET** /api/v1/dashboard/export/ | 
[**apiV1DashboardFavoriteStatusGet**](DashboardsApi.md#apiV1DashboardFavoriteStatusGet) | **GET** /api/v1/dashboard/favorite_status/ | 
[**apiV1DashboardGet**](DashboardsApi.md#apiV1DashboardGet) | **GET** /api/v1/dashboard/ | 
[**apiV1DashboardIdOrSlugChartsGet**](DashboardsApi.md#apiV1DashboardIdOrSlugChartsGet) | **GET** /api/v1/dashboard/{id_or_slug}/charts | 
[**apiV1DashboardIdOrSlugCopyPost**](DashboardsApi.md#apiV1DashboardIdOrSlugCopyPost) | **POST** /api/v1/dashboard/{id_or_slug}/copy/ | Makes a copy of an existing dashboard
[**apiV1DashboardIdOrSlugDatasetsGet**](DashboardsApi.md#apiV1DashboardIdOrSlugDatasetsGet) | **GET** /api/v1/dashboard/{id_or_slug}/datasets | 
[**apiV1DashboardIdOrSlugEmbeddedDelete**](DashboardsApi.md#apiV1DashboardIdOrSlugEmbeddedDelete) | **DELETE** /api/v1/dashboard/{id_or_slug}/embedded | 
[**apiV1DashboardIdOrSlugEmbeddedGet**](DashboardsApi.md#apiV1DashboardIdOrSlugEmbeddedGet) | **GET** /api/v1/dashboard/{id_or_slug}/embedded | 
[**apiV1DashboardIdOrSlugEmbeddedPost**](DashboardsApi.md#apiV1DashboardIdOrSlugEmbeddedPost) | **POST** /api/v1/dashboard/{id_or_slug}/embedded | 
[**apiV1DashboardIdOrSlugEmbeddedPut**](DashboardsApi.md#apiV1DashboardIdOrSlugEmbeddedPut) | **PUT** /api/v1/dashboard/{id_or_slug}/embedded | 
[**apiV1DashboardIdOrSlugGet**](DashboardsApi.md#apiV1DashboardIdOrSlugGet) | **GET** /api/v1/dashboard/{id_or_slug} | 
[**apiV1DashboardImportPost**](DashboardsApi.md#apiV1DashboardImportPost) | **POST** /api/v1/dashboard/import/ | 
[**apiV1DashboardInfoGet**](DashboardsApi.md#apiV1DashboardInfoGet) | **GET** /api/v1/dashboard/_info | 
[**apiV1DashboardPkDelete**](DashboardsApi.md#apiV1DashboardPkDelete) | **DELETE** /api/v1/dashboard/{pk} | 
[**apiV1DashboardPkFavoritesDelete**](DashboardsApi.md#apiV1DashboardPkFavoritesDelete) | **DELETE** /api/v1/dashboard/{pk}/favorites/ | 
[**apiV1DashboardPkFavoritesPost**](DashboardsApi.md#apiV1DashboardPkFavoritesPost) | **POST** /api/v1/dashboard/{pk}/favorites/ | 
[**apiV1DashboardPkPut**](DashboardsApi.md#apiV1DashboardPkPut) | **PUT** /api/v1/dashboard/{pk} | 
[**apiV1DashboardPkThumbnailDigestGet**](DashboardsApi.md#apiV1DashboardPkThumbnailDigestGet) | **GET** /api/v1/dashboard/{pk}/thumbnail/{digest}/ | 
[**apiV1DashboardPost**](DashboardsApi.md#apiV1DashboardPost) | **POST** /api/v1/dashboard/ | 
[**apiV1DashboardRelatedColumnNameGet**](DashboardsApi.md#apiV1DashboardRelatedColumnNameGet) | **GET** /api/v1/dashboard/related/{column_name} | 

<a name="apiV1DashboardDelete"></a>
# **apiV1DashboardDelete**
> InlineResponse400 apiV1DashboardDelete(opts)



Deletes multiple Dashboards in a bulk operation.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let opts = { 
  'q': new Superset.GetDeleteIdsSchema() // GetDeleteIdsSchema | 
};
apiInstance.apiV1DashboardDelete(opts, (error, data, response) => {
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

<a name="apiV1DashboardExportGet"></a>
# **apiV1DashboardExportGet**
> &#x27;String&#x27; apiV1DashboardExportGet(opts)



Exports multiple Dashboards and downloads them as YAML files.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let opts = { 
  'q': new Superset.GetExportIdsSchema() // GetExportIdsSchema | 
};
apiInstance.apiV1DashboardExportGet(opts, (error, data, response) => {
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

**&#x27;String&#x27;**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

<a name="apiV1DashboardFavoriteStatusGet"></a>
# **apiV1DashboardFavoriteStatusGet**
> GetFavStarIdsSchema apiV1DashboardFavoriteStatusGet(opts)



Check favorited dashboards for current user

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let opts = { 
  'q': new Superset.GetFavStarIdsSchema() // GetFavStarIdsSchema | 
};
apiInstance.apiV1DashboardFavoriteStatusGet(opts, (error, data, response) => {
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

<a name="apiV1DashboardGet"></a>
# **apiV1DashboardGet**
> InlineResponse20017 apiV1DashboardGet(opts)



Get a list of dashboards, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let opts = { 
  'q': new Superset.GetListSchema() // GetListSchema | 
};
apiInstance.apiV1DashboardGet(opts, (error, data, response) => {
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

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DashboardIdOrSlugChartsGet"></a>
# **apiV1DashboardIdOrSlugChartsGet**
> InlineResponse20022 apiV1DashboardIdOrSlugChartsGet(idOrSlug)



Get the chart definitions for a given dashboard

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let idOrSlug = "idOrSlug_example"; // String | 

apiInstance.apiV1DashboardIdOrSlugChartsGet(idOrSlug, (error, data, response) => {
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
 **idOrSlug** | **String**|  | 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DashboardIdOrSlugCopyPost"></a>
# **apiV1DashboardIdOrSlugCopyPost**
> InlineResponse20023 apiV1DashboardIdOrSlugCopyPost(body, idOrSlug)

Makes a copy of an existing dashboard

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let body = new Superset.DashboardCopySchema(); // DashboardCopySchema | 
let idOrSlug = "idOrSlug_example"; // String | The dashboard id or slug

apiInstance.apiV1DashboardIdOrSlugCopyPost(body, idOrSlug, (error, data, response) => {
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
 **body** | [**DashboardCopySchema**](DashboardCopySchema.md)|  | 
 **idOrSlug** | **String**| The dashboard id or slug | 

### Return type

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1DashboardIdOrSlugDatasetsGet"></a>
# **apiV1DashboardIdOrSlugDatasetsGet**
> InlineResponse20024 apiV1DashboardIdOrSlugDatasetsGet(idOrSlug)



Returns a list of a dashboard&#x27;s datasets. Each dataset includes only the information necessary to render the dashboard&#x27;s charts.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let idOrSlug = "idOrSlug_example"; // String | Either the id of the dashboard, or its slug

apiInstance.apiV1DashboardIdOrSlugDatasetsGet(idOrSlug, (error, data, response) => {
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
 **idOrSlug** | **String**| Either the id of the dashboard, or its slug | 

### Return type

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DashboardIdOrSlugEmbeddedDelete"></a>
# **apiV1DashboardIdOrSlugEmbeddedDelete**
> InlineResponse400 apiV1DashboardIdOrSlugEmbeddedDelete(idOrSlug)



Removes a dashboard&#x27;s embedded configuration.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let idOrSlug = "idOrSlug_example"; // String | The dashboard id or slug

apiInstance.apiV1DashboardIdOrSlugEmbeddedDelete(idOrSlug, (error, data, response) => {
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
 **idOrSlug** | **String**| The dashboard id or slug | 

### Return type

[**InlineResponse400**](InlineResponse400.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DashboardIdOrSlugEmbeddedGet"></a>
# **apiV1DashboardIdOrSlugEmbeddedGet**
> InlineResponse20025 apiV1DashboardIdOrSlugEmbeddedGet(idOrSlug)



Returns the dashboard&#x27;s embedded configuration

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let idOrSlug = "idOrSlug_example"; // String | The dashboard id or slug

apiInstance.apiV1DashboardIdOrSlugEmbeddedGet(idOrSlug, (error, data, response) => {
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
 **idOrSlug** | **String**| The dashboard id or slug | 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DashboardIdOrSlugEmbeddedPost"></a>
# **apiV1DashboardIdOrSlugEmbeddedPost**
> InlineResponse20025 apiV1DashboardIdOrSlugEmbeddedPost(body, idOrSlug)



Sets a dashboard&#x27;s embedded configuration.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let body = new Superset.EmbeddedDashboardConfig(); // EmbeddedDashboardConfig | The embedded configuration to set
let idOrSlug = "idOrSlug_example"; // String | The dashboard id or slug

apiInstance.apiV1DashboardIdOrSlugEmbeddedPost(body, idOrSlug, (error, data, response) => {
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
 **body** | [**EmbeddedDashboardConfig**](EmbeddedDashboardConfig.md)| The embedded configuration to set | 
 **idOrSlug** | **String**| The dashboard id or slug | 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1DashboardIdOrSlugEmbeddedPut"></a>
# **apiV1DashboardIdOrSlugEmbeddedPut**
> InlineResponse20025 apiV1DashboardIdOrSlugEmbeddedPut(body, idOrSlug)



Sets a dashboard&#x27;s embedded configuration.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let body = new Superset.EmbeddedDashboardConfig(); // EmbeddedDashboardConfig | The embedded configuration to set
let idOrSlug = "idOrSlug_example"; // String | The dashboard id or slug

apiInstance.apiV1DashboardIdOrSlugEmbeddedPut(body, idOrSlug, (error, data, response) => {
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
 **body** | [**EmbeddedDashboardConfig**](EmbeddedDashboardConfig.md)| The embedded configuration to set | 
 **idOrSlug** | **String**| The dashboard id or slug | 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1DashboardIdOrSlugGet"></a>
# **apiV1DashboardIdOrSlugGet**
> InlineResponse20021 apiV1DashboardIdOrSlugGet(idOrSlug)



Get a dashboard detail information.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let idOrSlug = "idOrSlug_example"; // String | Either the id of the dashboard, or its slug

apiInstance.apiV1DashboardIdOrSlugGet(idOrSlug, (error, data, response) => {
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
 **idOrSlug** | **String**| Either the id of the dashboard, or its slug | 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DashboardImportPost"></a>
# **apiV1DashboardImportPost**
> InlineResponse400 apiV1DashboardImportPost(formData, overwrite, passwords, sshTunnelPasswords, sshTunnelPrivateKeyPasswords, sshTunnelPrivateKeys)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let formData = "formData_example"; // Blob | 
let overwrite = true; // Boolean | 
let passwords = "passwords_example"; // String | 
let sshTunnelPasswords = "sshTunnelPasswords_example"; // String | 
let sshTunnelPrivateKeyPasswords = "sshTunnelPrivateKeyPasswords_example"; // String | 
let sshTunnelPrivateKeys = "sshTunnelPrivateKeys_example"; // String | 

apiInstance.apiV1DashboardImportPost(formData, overwrite, passwords, sshTunnelPasswords, sshTunnelPrivateKeyPasswords, sshTunnelPrivateKeys, (error, data, response) => {
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

<a name="apiV1DashboardInfoGet"></a>
# **apiV1DashboardInfoGet**
> InlineResponse2002 apiV1DashboardInfoGet(opts)



Several metadata information about dashboard API endpoints.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let opts = { 
  'q': new Superset.GetInfoSchema() // GetInfoSchema | 
};
apiInstance.apiV1DashboardInfoGet(opts, (error, data, response) => {
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

<a name="apiV1DashboardPkDelete"></a>
# **apiV1DashboardPkDelete**
> InlineResponse400 apiV1DashboardPkDelete(pk)



Deletes a Dashboard.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let pk = 56; // Number | 

apiInstance.apiV1DashboardPkDelete(pk, (error, data, response) => {
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

<a name="apiV1DashboardPkFavoritesDelete"></a>
# **apiV1DashboardPkFavoritesDelete**
> InlineResponse20013 apiV1DashboardPkFavoritesDelete(pk)



Remove the dashboard from the user favorite list

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let pk = 56; // Number | 

apiInstance.apiV1DashboardPkFavoritesDelete(pk, (error, data, response) => {
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

<a name="apiV1DashboardPkFavoritesPost"></a>
# **apiV1DashboardPkFavoritesPost**
> InlineResponse20013 apiV1DashboardPkFavoritesPost(pk)



Marks the dashboard as favorite for the current user

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let pk = 56; // Number | 

apiInstance.apiV1DashboardPkFavoritesPost(pk, (error, data, response) => {
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

<a name="apiV1DashboardPkPut"></a>
# **apiV1DashboardPkPut**
> InlineResponse20026 apiV1DashboardPkPut(body, pk)



Changes a Dashboard.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let body = new Superset.DashboardRestApiPut(); // DashboardRestApiPut | Dashboard schema
let pk = 56; // Number | 

apiInstance.apiV1DashboardPkPut(body, pk, (error, data, response) => {
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
 **body** | [**DashboardRestApiPut**](DashboardRestApiPut.md)| Dashboard schema | 
 **pk** | **Number**|  | 

### Return type

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1DashboardPkThumbnailDigestGet"></a>
# **apiV1DashboardPkThumbnailDigestGet**
> &#x27;Blob&#x27; apiV1DashboardPkThumbnailDigestGet(pk, digest, opts)



Compute async or get already computed dashboard thumbnail from cache.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let pk = 56; // Number | 
let digest = "digest_example"; // String | A hex digest that makes this dashboard unique
let opts = { 
  'q': new Superset.ThumbnailQuerySchema() // ThumbnailQuerySchema | 
};
apiInstance.apiV1DashboardPkThumbnailDigestGet(pk, digest, opts, (error, data, response) => {
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
 **digest** | **String**| A hex digest that makes this dashboard unique | 
 **q** | [**ThumbnailQuerySchema**](.md)|  | [optional] 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/_*, application/json

<a name="apiV1DashboardPost"></a>
# **apiV1DashboardPost**
> InlineResponse2014 apiV1DashboardPost(body)



Create a new Dashboard.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let body = new Superset.DashboardRestApiPost(); // DashboardRestApiPost | Dashboard schema

apiInstance.apiV1DashboardPost(body, (error, data, response) => {
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
 **body** | [**DashboardRestApiPost**](DashboardRestApiPost.md)| Dashboard schema | 

### Return type

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1DashboardRelatedColumnNameGet"></a>
# **apiV1DashboardRelatedColumnNameGet**
> RelatedResponseSchema apiV1DashboardRelatedColumnNameGet(columnName, opts)



Get a list of all possible owners for a dashboard.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DashboardsApi();
let columnName = "columnName_example"; // String | 
let opts = { 
  'q': new Superset.GetRelatedSchema() // GetRelatedSchema | 
};
apiInstance.apiV1DashboardRelatedColumnNameGet(columnName, opts, (error, data, response) => {
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

