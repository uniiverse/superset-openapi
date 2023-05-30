# Superset.AnnotationLayersApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1AnnotationLayerDelete**](AnnotationLayersApi.md#apiV1AnnotationLayerDelete) | **DELETE** /api/v1/annotation_layer/ | 
[**apiV1AnnotationLayerGet**](AnnotationLayersApi.md#apiV1AnnotationLayerGet) | **GET** /api/v1/annotation_layer/ | 
[**apiV1AnnotationLayerInfoGet**](AnnotationLayersApi.md#apiV1AnnotationLayerInfoGet) | **GET** /api/v1/annotation_layer/_info | 
[**apiV1AnnotationLayerPkAnnotationAnnotationIdDelete**](AnnotationLayersApi.md#apiV1AnnotationLayerPkAnnotationAnnotationIdDelete) | **DELETE** /api/v1/annotation_layer/{pk}/annotation/{annotation_id} | 
[**apiV1AnnotationLayerPkAnnotationAnnotationIdGet**](AnnotationLayersApi.md#apiV1AnnotationLayerPkAnnotationAnnotationIdGet) | **GET** /api/v1/annotation_layer/{pk}/annotation/{annotation_id} | 
[**apiV1AnnotationLayerPkAnnotationAnnotationIdPut**](AnnotationLayersApi.md#apiV1AnnotationLayerPkAnnotationAnnotationIdPut) | **PUT** /api/v1/annotation_layer/{pk}/annotation/{annotation_id} | 
[**apiV1AnnotationLayerPkAnnotationDelete**](AnnotationLayersApi.md#apiV1AnnotationLayerPkAnnotationDelete) | **DELETE** /api/v1/annotation_layer/{pk}/annotation/ | 
[**apiV1AnnotationLayerPkAnnotationGet**](AnnotationLayersApi.md#apiV1AnnotationLayerPkAnnotationGet) | **GET** /api/v1/annotation_layer/{pk}/annotation/ | 
[**apiV1AnnotationLayerPkAnnotationPost**](AnnotationLayersApi.md#apiV1AnnotationLayerPkAnnotationPost) | **POST** /api/v1/annotation_layer/{pk}/annotation/ | 
[**apiV1AnnotationLayerPkDelete**](AnnotationLayersApi.md#apiV1AnnotationLayerPkDelete) | **DELETE** /api/v1/annotation_layer/{pk} | 
[**apiV1AnnotationLayerPkGet**](AnnotationLayersApi.md#apiV1AnnotationLayerPkGet) | **GET** /api/v1/annotation_layer/{pk} | 
[**apiV1AnnotationLayerPkPut**](AnnotationLayersApi.md#apiV1AnnotationLayerPkPut) | **PUT** /api/v1/annotation_layer/{pk} | 
[**apiV1AnnotationLayerPost**](AnnotationLayersApi.md#apiV1AnnotationLayerPost) | **POST** /api/v1/annotation_layer/ | 
[**apiV1AnnotationLayerRelatedColumnNameGet**](AnnotationLayersApi.md#apiV1AnnotationLayerRelatedColumnNameGet) | **GET** /api/v1/annotation_layer/related/{column_name} | 

<a name="apiV1AnnotationLayerDelete"></a>
# **apiV1AnnotationLayerDelete**
> InlineResponse400 apiV1AnnotationLayerDelete(opts)



Deletes multiple annotation layers in a bulk operation.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AnnotationLayersApi();
let opts = { 
  'q': new Superset.GetDeleteIdsSchema() // GetDeleteIdsSchema | 
};
apiInstance.apiV1AnnotationLayerDelete(opts, (error, data, response) => {
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

<a name="apiV1AnnotationLayerGet"></a>
# **apiV1AnnotationLayerGet**
> InlineResponse2001 apiV1AnnotationLayerGet(opts)



Get a list of Annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AnnotationLayersApi();
let opts = { 
  'q': new Superset.GetListSchema() // GetListSchema | 
};
apiInstance.apiV1AnnotationLayerGet(opts, (error, data, response) => {
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1AnnotationLayerInfoGet"></a>
# **apiV1AnnotationLayerInfoGet**
> InlineResponse2002 apiV1AnnotationLayerInfoGet(opts)



Get metadata information about this API resource

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AnnotationLayersApi();
let opts = { 
  'q': new Superset.GetInfoSchema() // GetInfoSchema | 
};
apiInstance.apiV1AnnotationLayerInfoGet(opts, (error, data, response) => {
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

<a name="apiV1AnnotationLayerPkAnnotationAnnotationIdDelete"></a>
# **apiV1AnnotationLayerPkAnnotationAnnotationIdDelete**
> InlineResponse400 apiV1AnnotationLayerPkAnnotationAnnotationIdDelete(pk, annotationId)



Delete Annotation layer

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AnnotationLayersApi();
let pk = 56; // Number | The annotation layer pk for this annotation
let annotationId = 56; // Number | The annotation pk for this annotation

apiInstance.apiV1AnnotationLayerPkAnnotationAnnotationIdDelete(pk, annotationId, (error, data, response) => {
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
 **pk** | **Number**| The annotation layer pk for this annotation | 
 **annotationId** | **Number**| The annotation pk for this annotation | 

### Return type

[**InlineResponse400**](InlineResponse400.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1AnnotationLayerPkAnnotationAnnotationIdGet"></a>
# **apiV1AnnotationLayerPkAnnotationAnnotationIdGet**
> InlineResponse2006 apiV1AnnotationLayerPkAnnotationAnnotationIdGet(pk, annotationId, opts)



Get an Annotation layer

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AnnotationLayersApi();
let pk = 56; // Number | The annotation layer pk for this annotation
let annotationId = 56; // Number | The annotation pk
let opts = { 
  'q': new Superset.GetItemSchema() // GetItemSchema | 
};
apiInstance.apiV1AnnotationLayerPkAnnotationAnnotationIdGet(pk, annotationId, opts, (error, data, response) => {
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
 **pk** | **Number**| The annotation layer pk for this annotation | 
 **annotationId** | **Number**| The annotation pk | 
 **q** | [**GetItemSchema**](.md)|  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1AnnotationLayerPkAnnotationAnnotationIdPut"></a>
# **apiV1AnnotationLayerPkAnnotationAnnotationIdPut**
> InlineResponse2007 apiV1AnnotationLayerPkAnnotationAnnotationIdPut(body, pk, annotationId)



Update an Annotation layer

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AnnotationLayersApi();
let body = new Superset.AnnotationRestApiPut(); // AnnotationRestApiPut | Annotation schema
let pk = 56; // Number | The annotation layer pk for this annotation
let annotationId = 56; // Number | The annotation pk for this annotation

apiInstance.apiV1AnnotationLayerPkAnnotationAnnotationIdPut(body, pk, annotationId, (error, data, response) => {
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
 **body** | [**AnnotationRestApiPut**](AnnotationRestApiPut.md)| Annotation schema | 
 **pk** | **Number**| The annotation layer pk for this annotation | 
 **annotationId** | **Number**| The annotation pk for this annotation | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1AnnotationLayerPkAnnotationDelete"></a>
# **apiV1AnnotationLayerPkAnnotationDelete**
> InlineResponse400 apiV1AnnotationLayerPkAnnotationDelete(pk, opts)



Deletes multiple annotation in a bulk operation.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AnnotationLayersApi();
let pk = 56; // Number | The annotation layer pk for this annotation
let opts = { 
  'q': new Superset.GetDeleteIdsSchema() // GetDeleteIdsSchema | 
};
apiInstance.apiV1AnnotationLayerPkAnnotationDelete(pk, opts, (error, data, response) => {
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
 **pk** | **Number**| The annotation layer pk for this annotation | 
 **q** | [**GetDeleteIdsSchema**](.md)|  | [optional] 

### Return type

[**InlineResponse400**](InlineResponse400.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1AnnotationLayerPkAnnotationGet"></a>
# **apiV1AnnotationLayerPkAnnotationGet**
> InlineResponse2005 apiV1AnnotationLayerPkAnnotationGet(pk, opts)



Get a list of Annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AnnotationLayersApi();
let pk = 56; // Number | The annotation layer id for this annotation
let opts = { 
  'q': new Superset.GetListSchema() // GetListSchema | 
};
apiInstance.apiV1AnnotationLayerPkAnnotationGet(pk, opts, (error, data, response) => {
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
 **pk** | **Number**| The annotation layer id for this annotation | 
 **q** | [**GetListSchema**](.md)|  | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1AnnotationLayerPkAnnotationPost"></a>
# **apiV1AnnotationLayerPkAnnotationPost**
> InlineResponse2011 apiV1AnnotationLayerPkAnnotationPost(body, pk)



Create an Annotation layer

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AnnotationLayersApi();
let body = new Superset.AnnotationRestApiPost(); // AnnotationRestApiPost | Annotation schema
let pk = 56; // Number | The annotation layer pk for this annotation

apiInstance.apiV1AnnotationLayerPkAnnotationPost(body, pk, (error, data, response) => {
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
 **body** | [**AnnotationRestApiPost**](AnnotationRestApiPost.md)| Annotation schema | 
 **pk** | **Number**| The annotation layer pk for this annotation | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1AnnotationLayerPkDelete"></a>
# **apiV1AnnotationLayerPkDelete**
> InlineResponse400 apiV1AnnotationLayerPkDelete(pk)



Delete Annotation layer

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AnnotationLayersApi();
let pk = 56; // Number | The annotation layer pk for this annotation

apiInstance.apiV1AnnotationLayerPkDelete(pk, (error, data, response) => {
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
 **pk** | **Number**| The annotation layer pk for this annotation | 

### Return type

[**InlineResponse400**](InlineResponse400.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1AnnotationLayerPkGet"></a>
# **apiV1AnnotationLayerPkGet**
> InlineResponse2003 apiV1AnnotationLayerPkGet(pk, opts)



Get an Annotation layer

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AnnotationLayersApi();
let pk = 56; // Number | 
let opts = { 
  'q': new Superset.GetItemSchema() // GetItemSchema | 
};
apiInstance.apiV1AnnotationLayerPkGet(pk, opts, (error, data, response) => {
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

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1AnnotationLayerPkPut"></a>
# **apiV1AnnotationLayerPkPut**
> InlineResponse2004 apiV1AnnotationLayerPkPut(body, pk)



Update an Annotation layer

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AnnotationLayersApi();
let body = new Superset.AnnotationLayerRestApiPut(); // AnnotationLayerRestApiPut | Annotation schema
let pk = 56; // Number | The annotation layer pk for this annotation

apiInstance.apiV1AnnotationLayerPkPut(body, pk, (error, data, response) => {
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
 **body** | [**AnnotationLayerRestApiPut**](AnnotationLayerRestApiPut.md)| Annotation schema | 
 **pk** | **Number**| The annotation layer pk for this annotation | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1AnnotationLayerPost"></a>
# **apiV1AnnotationLayerPost**
> InlineResponse201 apiV1AnnotationLayerPost(body)



Create an Annotation layer

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AnnotationLayersApi();
let body = new Superset.AnnotationLayerRestApiPost(); // AnnotationLayerRestApiPost | Annotation Layer schema

apiInstance.apiV1AnnotationLayerPost(body, (error, data, response) => {
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
 **body** | [**AnnotationLayerRestApiPost**](AnnotationLayerRestApiPost.md)| Annotation Layer schema | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1AnnotationLayerRelatedColumnNameGet"></a>
# **apiV1AnnotationLayerRelatedColumnNameGet**
> RelatedResponseSchema apiV1AnnotationLayerRelatedColumnNameGet(columnName, opts)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AnnotationLayersApi();
let columnName = "columnName_example"; // String | 
let opts = { 
  'q': new Superset.GetRelatedSchema() // GetRelatedSchema | 
};
apiInstance.apiV1AnnotationLayerRelatedColumnNameGet(columnName, opts, (error, data, response) => {
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

