# Superset.TagsApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1TagDelete**](TagsApi.md#apiV1TagDelete) | **DELETE** /api/v1/tag/ | 
[**apiV1TagGet**](TagsApi.md#apiV1TagGet) | **GET** /api/v1/tag/ | 
[**apiV1TagGetObjectsGet**](TagsApi.md#apiV1TagGetObjectsGet) | **GET** /api/v1/tag/get_objects/ | 
[**apiV1TagInfoGet**](TagsApi.md#apiV1TagInfoGet) | **GET** /api/v1/tag/_info | 
[**apiV1TagObjectTypeObjectIdPost**](TagsApi.md#apiV1TagObjectTypeObjectIdPost) | **POST** /api/v1/tag/{object_type}/{object_id}/ | 
[**apiV1TagObjectTypeObjectIdTagDelete**](TagsApi.md#apiV1TagObjectTypeObjectIdTagDelete) | **DELETE** /api/v1/tag/{object_type}/{object_id}/{tag}/ | 
[**apiV1TagPkDelete**](TagsApi.md#apiV1TagPkDelete) | **DELETE** /api/v1/tag/{pk} | 
[**apiV1TagPkGet**](TagsApi.md#apiV1TagPkGet) | **GET** /api/v1/tag/{pk} | 
[**apiV1TagPkPut**](TagsApi.md#apiV1TagPkPut) | **PUT** /api/v1/tag/{pk} | 
[**apiV1TagPost**](TagsApi.md#apiV1TagPost) | **POST** /api/v1/tag/ | 
[**apiV1TagRelatedColumnNameGet**](TagsApi.md#apiV1TagRelatedColumnNameGet) | **GET** /api/v1/tag/related/{column_name} | 

<a name="apiV1TagDelete"></a>
# **apiV1TagDelete**
> InlineResponse400 apiV1TagDelete(opts)



Deletes multiple Tags. This will remove all tagged objects with this tag

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.TagsApi();
let opts = { 
  'q': new Superset.DeleteTagsSchema() // DeleteTagsSchema | 
};
apiInstance.apiV1TagDelete(opts, (error, data, response) => {
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
 **q** | [**DeleteTagsSchema**](.md)|  | [optional] 

### Return type

[**InlineResponse400**](InlineResponse400.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1TagGet"></a>
# **apiV1TagGet**
> InlineResponse20062 apiV1TagGet(opts)



Get a list of tags, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.TagsApi();
let opts = { 
  'q': new Superset.GetListSchema() // GetListSchema | 
};
apiInstance.apiV1TagGet(opts, (error, data, response) => {
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

[**InlineResponse20062**](InlineResponse20062.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1TagGetObjectsGet"></a>
# **apiV1TagGetObjectsGet**
> InlineResponse20063 apiV1TagGetObjectsGet(tagId)



Gets all objects associated with a Tag.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.TagsApi();
let tagId = 56; // Number | 

apiInstance.apiV1TagGetObjectsGet(tagId, (error, data, response) => {
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
 **tagId** | **Number**|  | 

### Return type

[**InlineResponse20063**](InlineResponse20063.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1TagInfoGet"></a>
# **apiV1TagInfoGet**
> InlineResponse2002 apiV1TagInfoGet(opts)



Several metadata information about tag API endpoints.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.TagsApi();
let opts = { 
  'q': new Superset.GetInfoSchema() // GetInfoSchema | 
};
apiInstance.apiV1TagInfoGet(opts, (error, data, response) => {
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

<a name="apiV1TagObjectTypeObjectIdPost"></a>
# **apiV1TagObjectTypeObjectIdPost**
> apiV1TagObjectTypeObjectIdPost(body, objectType, objectId)



Add tags to an object..

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.TagsApi();
let body = new Superset.ObjectTypeObjectIdBody(); // ObjectTypeObjectIdBody | Tag schema
let objectType = 56; // Number | 
let objectId = 56; // Number | 

apiInstance.apiV1TagObjectTypeObjectIdPost(body, objectType, objectId, (error, data, response) => {
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
 **body** | [**ObjectTypeObjectIdBody**](ObjectTypeObjectIdBody.md)| Tag schema | 
 **objectType** | **Number**|  | 
 **objectId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1TagObjectTypeObjectIdTagDelete"></a>
# **apiV1TagObjectTypeObjectIdTagDelete**
> InlineResponse400 apiV1TagObjectTypeObjectIdTagDelete(tag, objectType, objectId)



Deletes a Tagged Object.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.TagsApi();
let tag = "tag_example"; // String | 
let objectType = 56; // Number | 
let objectId = 56; // Number | 

apiInstance.apiV1TagObjectTypeObjectIdTagDelete(tag, objectType, objectId, (error, data, response) => {
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
 **tag** | **String**|  | 
 **objectType** | **Number**|  | 
 **objectId** | **Number**|  | 

### Return type

[**InlineResponse400**](InlineResponse400.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1TagPkDelete"></a>
# **apiV1TagPkDelete**
> InlineResponse400 apiV1TagPkDelete(pk)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.TagsApi();
let pk = 56; // Number | 

apiInstance.apiV1TagPkDelete(pk, (error, data, response) => {
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

<a name="apiV1TagPkGet"></a>
# **apiV1TagPkGet**
> InlineResponse20064 apiV1TagPkGet(pk, opts)



Get a tag detail information.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.TagsApi();
let pk = 56; // Number | 
let opts = { 
  'q': new Superset.GetItemSchema() // GetItemSchema | 
};
apiInstance.apiV1TagPkGet(pk, opts, (error, data, response) => {
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

[**InlineResponse20064**](InlineResponse20064.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1TagPkPut"></a>
# **apiV1TagPkPut**
> InlineResponse20065 apiV1TagPkPut(body, pk)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.TagsApi();
let body = new Superset.TagRestApiPut(); // TagRestApiPut | Model schema
let pk = 56; // Number | 

apiInstance.apiV1TagPkPut(body, pk, (error, data, response) => {
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
 **body** | [**TagRestApiPut**](TagRestApiPut.md)| Model schema | 
 **pk** | **Number**|  | 

### Return type

[**InlineResponse20065**](InlineResponse20065.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1TagPost"></a>
# **apiV1TagPost**
> InlineResponse20116 apiV1TagPost(body)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.TagsApi();
let body = new Superset.TagRestApiPost(); // TagRestApiPost | Model schema

apiInstance.apiV1TagPost(body, (error, data, response) => {
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
 **body** | [**TagRestApiPost**](TagRestApiPost.md)| Model schema | 

### Return type

[**InlineResponse20116**](InlineResponse20116.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1TagRelatedColumnNameGet"></a>
# **apiV1TagRelatedColumnNameGet**
> RelatedResponseSchema apiV1TagRelatedColumnNameGet(columnName, opts)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.TagsApi();
let columnName = "columnName_example"; // String | 
let opts = { 
  'q': new Superset.GetRelatedSchema() // GetRelatedSchema | 
};
apiInstance.apiV1TagRelatedColumnNameGet(columnName, opts, (error, data, response) => {
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

