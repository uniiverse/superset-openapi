# Superset.DatasetsApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1DatasetDelete**](DatasetsApi.md#apiV1DatasetDelete) | **DELETE** /api/v1/dataset/ | 
[**apiV1DatasetDistinctColumnNameGet**](DatasetsApi.md#apiV1DatasetDistinctColumnNameGet) | **GET** /api/v1/dataset/distinct/{column_name} | 
[**apiV1DatasetDuplicatePost**](DatasetsApi.md#apiV1DatasetDuplicatePost) | **POST** /api/v1/dataset/duplicate | 
[**apiV1DatasetExportGet**](DatasetsApi.md#apiV1DatasetExportGet) | **GET** /api/v1/dataset/export/ | 
[**apiV1DatasetGet**](DatasetsApi.md#apiV1DatasetGet) | **GET** /api/v1/dataset/ | 
[**apiV1DatasetGetOrCreatePost**](DatasetsApi.md#apiV1DatasetGetOrCreatePost) | **POST** /api/v1/dataset/get_or_create/ | Retrieve a table by name, or create it if it does not exist
[**apiV1DatasetImportPost**](DatasetsApi.md#apiV1DatasetImportPost) | **POST** /api/v1/dataset/import/ | 
[**apiV1DatasetInfoGet**](DatasetsApi.md#apiV1DatasetInfoGet) | **GET** /api/v1/dataset/_info | 
[**apiV1DatasetPkColumnColumnIdDelete**](DatasetsApi.md#apiV1DatasetPkColumnColumnIdDelete) | **DELETE** /api/v1/dataset/{pk}/column/{column_id} | 
[**apiV1DatasetPkDelete**](DatasetsApi.md#apiV1DatasetPkDelete) | **DELETE** /api/v1/dataset/{pk} | 
[**apiV1DatasetPkGet**](DatasetsApi.md#apiV1DatasetPkGet) | **GET** /api/v1/dataset/{pk} | 
[**apiV1DatasetPkMetricMetricIdDelete**](DatasetsApi.md#apiV1DatasetPkMetricMetricIdDelete) | **DELETE** /api/v1/dataset/{pk}/metric/{metric_id} | 
[**apiV1DatasetPkPut**](DatasetsApi.md#apiV1DatasetPkPut) | **PUT** /api/v1/dataset/{pk} | 
[**apiV1DatasetPkRefreshPut**](DatasetsApi.md#apiV1DatasetPkRefreshPut) | **PUT** /api/v1/dataset/{pk}/refresh | 
[**apiV1DatasetPkRelatedObjectsGet**](DatasetsApi.md#apiV1DatasetPkRelatedObjectsGet) | **GET** /api/v1/dataset/{pk}/related_objects | 
[**apiV1DatasetPost**](DatasetsApi.md#apiV1DatasetPost) | **POST** /api/v1/dataset/ | 
[**apiV1DatasetRelatedColumnNameGet**](DatasetsApi.md#apiV1DatasetRelatedColumnNameGet) | **GET** /api/v1/dataset/related/{column_name} | 

<a name="apiV1DatasetDelete"></a>
# **apiV1DatasetDelete**
> InlineResponse400 apiV1DatasetDelete(opts)



Deletes multiple Datasets in a bulk operation.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasetsApi();
let opts = { 
  'q': new Superset.GetDeleteIdsSchema() // GetDeleteIdsSchema | 
};
apiInstance.apiV1DatasetDelete(opts, (error, data, response) => {
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

<a name="apiV1DatasetDistinctColumnNameGet"></a>
# **apiV1DatasetDistinctColumnNameGet**
> DistincResponseSchema apiV1DatasetDistinctColumnNameGet(columnName, opts)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasetsApi();
let columnName = "columnName_example"; // String | 
let opts = { 
  'q': new Superset.GetRelatedSchema() // GetRelatedSchema | 
};
apiInstance.apiV1DatasetDistinctColumnNameGet(columnName, opts, (error, data, response) => {
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

<a name="apiV1DatasetDuplicatePost"></a>
# **apiV1DatasetDuplicatePost**
> InlineResponse20110 apiV1DatasetDuplicatePost(body)



Duplicates a Dataset

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasetsApi();
let body = new Superset.DatasetDuplicateSchema(); // DatasetDuplicateSchema | Dataset schema

apiInstance.apiV1DatasetDuplicatePost(body, (error, data, response) => {
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
 **body** | [**DatasetDuplicateSchema**](DatasetDuplicateSchema.md)| Dataset schema | 

### Return type

[**InlineResponse20110**](InlineResponse20110.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1DatasetExportGet"></a>
# **apiV1DatasetExportGet**
> &#x27;String&#x27; apiV1DatasetExportGet(opts)



Exports multiple datasets and downloads them as YAML files

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasetsApi();
let opts = { 
  'q': new Superset.GetExportIdsSchema() // GetExportIdsSchema | 
};
apiInstance.apiV1DatasetExportGet(opts, (error, data, response) => {
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

<a name="apiV1DatasetGet"></a>
# **apiV1DatasetGet**
> InlineResponse20034 apiV1DatasetGet(opts)



Get a list of models

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasetsApi();
let opts = { 
  'q': new Superset.GetListSchema() // GetListSchema | 
};
apiInstance.apiV1DatasetGet(opts, (error, data, response) => {
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

[**InlineResponse20034**](InlineResponse20034.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatasetGetOrCreatePost"></a>
# **apiV1DatasetGetOrCreatePost**
> InlineResponse20035 apiV1DatasetGetOrCreatePost(body)

Retrieve a table by name, or create it if it does not exist

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasetsApi();
let body = new Superset.GetOrCreateDatasetSchema(); // GetOrCreateDatasetSchema | 

apiInstance.apiV1DatasetGetOrCreatePost(body, (error, data, response) => {
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
 **body** | [**GetOrCreateDatasetSchema**](GetOrCreateDatasetSchema.md)|  | 

### Return type

[**InlineResponse20035**](InlineResponse20035.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1DatasetImportPost"></a>
# **apiV1DatasetImportPost**
> InlineResponse400 apiV1DatasetImportPost(formData, overwrite, passwords, sshTunnelPasswords, sshTunnelPrivateKeyPasswords, sshTunnelPrivateKeys, syncColumns, syncMetrics)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasetsApi();
let formData = "formData_example"; // Blob | 
let overwrite = true; // Boolean | 
let passwords = "passwords_example"; // String | 
let sshTunnelPasswords = "sshTunnelPasswords_example"; // String | 
let sshTunnelPrivateKeyPasswords = "sshTunnelPrivateKeyPasswords_example"; // String | 
let sshTunnelPrivateKeys = "sshTunnelPrivateKeys_example"; // String | 
let syncColumns = true; // Boolean | 
let syncMetrics = true; // Boolean | 

apiInstance.apiV1DatasetImportPost(formData, overwrite, passwords, sshTunnelPasswords, sshTunnelPrivateKeyPasswords, sshTunnelPrivateKeys, syncColumns, syncMetrics, (error, data, response) => {
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
 **syncColumns** | **Boolean**|  | 
 **syncMetrics** | **Boolean**|  | 

### Return type

[**InlineResponse400**](InlineResponse400.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="apiV1DatasetInfoGet"></a>
# **apiV1DatasetInfoGet**
> InlineResponse2002 apiV1DatasetInfoGet(opts)



Get metadata information about this API resource

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasetsApi();
let opts = { 
  'q': new Superset.GetInfoSchema() // GetInfoSchema | 
};
apiInstance.apiV1DatasetInfoGet(opts, (error, data, response) => {
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

<a name="apiV1DatasetPkColumnColumnIdDelete"></a>
# **apiV1DatasetPkColumnColumnIdDelete**
> InlineResponse400 apiV1DatasetPkColumnColumnIdDelete(pk, columnId)



Delete a Dataset column

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasetsApi();
let pk = 56; // Number | The dataset pk for this column
let columnId = 56; // Number | The column id for this dataset

apiInstance.apiV1DatasetPkColumnColumnIdDelete(pk, columnId, (error, data, response) => {
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
 **pk** | **Number**| The dataset pk for this column | 
 **columnId** | **Number**| The column id for this dataset | 

### Return type

[**InlineResponse400**](InlineResponse400.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatasetPkDelete"></a>
# **apiV1DatasetPkDelete**
> InlineResponse400 apiV1DatasetPkDelete(pk)



Deletes a Dataset

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasetsApi();
let pk = 56; // Number | 

apiInstance.apiV1DatasetPkDelete(pk, (error, data, response) => {
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

<a name="apiV1DatasetPkGet"></a>
# **apiV1DatasetPkGet**
> InlineResponse20036 apiV1DatasetPkGet(pk, opts)



Get an item model

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasetsApi();
let pk = 56; // Number | 
let opts = { 
  'q': new Superset.GetItemSchema() // GetItemSchema | 
};
apiInstance.apiV1DatasetPkGet(pk, opts, (error, data, response) => {
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

[**InlineResponse20036**](InlineResponse20036.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatasetPkMetricMetricIdDelete"></a>
# **apiV1DatasetPkMetricMetricIdDelete**
> InlineResponse400 apiV1DatasetPkMetricMetricIdDelete(pk, metricId)



Delete a Dataset metric

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasetsApi();
let pk = 56; // Number | The dataset pk for this column
let metricId = 56; // Number | The metric id for this dataset

apiInstance.apiV1DatasetPkMetricMetricIdDelete(pk, metricId, (error, data, response) => {
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
 **pk** | **Number**| The dataset pk for this column | 
 **metricId** | **Number**| The metric id for this dataset | 

### Return type

[**InlineResponse400**](InlineResponse400.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatasetPkPut"></a>
# **apiV1DatasetPkPut**
> InlineResponse20037 apiV1DatasetPkPut(body, pk, opts)



Changes a Dataset

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasetsApi();
let body = new Superset.DatasetRestApiPut(); // DatasetRestApiPut | Dataset schema
let pk = 56; // Number | 
let opts = { 
  'overrideColumns': true // Boolean | 
};
apiInstance.apiV1DatasetPkPut(body, pk, opts, (error, data, response) => {
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
 **body** | [**DatasetRestApiPut**](DatasetRestApiPut.md)| Dataset schema | 
 **pk** | **Number**|  | 
 **overrideColumns** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse20037**](InlineResponse20037.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1DatasetPkRefreshPut"></a>
# **apiV1DatasetPkRefreshPut**
> InlineResponse400 apiV1DatasetPkRefreshPut(pk)



Refreshes and updates columns of a dataset

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasetsApi();
let pk = 56; // Number | 

apiInstance.apiV1DatasetPkRefreshPut(pk, (error, data, response) => {
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

<a name="apiV1DatasetPkRelatedObjectsGet"></a>
# **apiV1DatasetPkRelatedObjectsGet**
> DatasetRelatedObjectsResponse apiV1DatasetPkRelatedObjectsGet(pk)



Get charts and dashboards count associated to a dataset

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasetsApi();
let pk = 56; // Number | 

apiInstance.apiV1DatasetPkRelatedObjectsGet(pk, (error, data, response) => {
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

[**DatasetRelatedObjectsResponse**](DatasetRelatedObjectsResponse.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatasetPost"></a>
# **apiV1DatasetPost**
> InlineResponse2019 apiV1DatasetPost(body)



Create a new Dataset

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasetsApi();
let body = new Superset.DatasetRestApiPost(); // DatasetRestApiPost | Dataset schema

apiInstance.apiV1DatasetPost(body, (error, data, response) => {
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
 **body** | [**DatasetRestApiPost**](DatasetRestApiPost.md)| Dataset schema | 

### Return type

[**InlineResponse2019**](InlineResponse2019.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1DatasetRelatedColumnNameGet"></a>
# **apiV1DatasetRelatedColumnNameGet**
> RelatedResponseSchema apiV1DatasetRelatedColumnNameGet(columnName, opts)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatasetsApi();
let columnName = "columnName_example"; // String | 
let opts = { 
  'q': new Superset.GetRelatedSchema() // GetRelatedSchema | 
};
apiInstance.apiV1DatasetRelatedColumnNameGet(columnName, opts, (error, data, response) => {
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

