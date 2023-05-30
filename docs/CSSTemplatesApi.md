# Superset.CSSTemplatesApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1CssTemplateDelete**](CSSTemplatesApi.md#apiV1CssTemplateDelete) | **DELETE** /api/v1/css_template/ | 
[**apiV1CssTemplateGet**](CSSTemplatesApi.md#apiV1CssTemplateGet) | **GET** /api/v1/css_template/ | 
[**apiV1CssTemplateInfoGet**](CSSTemplatesApi.md#apiV1CssTemplateInfoGet) | **GET** /api/v1/css_template/_info | 
[**apiV1CssTemplatePkDelete**](CSSTemplatesApi.md#apiV1CssTemplatePkDelete) | **DELETE** /api/v1/css_template/{pk} | 
[**apiV1CssTemplatePkGet**](CSSTemplatesApi.md#apiV1CssTemplatePkGet) | **GET** /api/v1/css_template/{pk} | 
[**apiV1CssTemplatePkPut**](CSSTemplatesApi.md#apiV1CssTemplatePkPut) | **PUT** /api/v1/css_template/{pk} | 
[**apiV1CssTemplatePost**](CSSTemplatesApi.md#apiV1CssTemplatePost) | **POST** /api/v1/css_template/ | 
[**apiV1CssTemplateRelatedColumnNameGet**](CSSTemplatesApi.md#apiV1CssTemplateRelatedColumnNameGet) | **GET** /api/v1/css_template/related/{column_name} | 

<a name="apiV1CssTemplateDelete"></a>
# **apiV1CssTemplateDelete**
> InlineResponse400 apiV1CssTemplateDelete(opts)



Deletes multiple css templates in a bulk operation.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.CSSTemplatesApi();
let opts = { 
  'q': new Superset.GetDeleteIdsSchema() // GetDeleteIdsSchema | 
};
apiInstance.apiV1CssTemplateDelete(opts, (error, data, response) => {
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

<a name="apiV1CssTemplateGet"></a>
# **apiV1CssTemplateGet**
> InlineResponse20014 apiV1CssTemplateGet(opts)



Get a list of CSS templates, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.CSSTemplatesApi();
let opts = { 
  'q': new Superset.GetListSchema() // GetListSchema | 
};
apiInstance.apiV1CssTemplateGet(opts, (error, data, response) => {
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

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1CssTemplateInfoGet"></a>
# **apiV1CssTemplateInfoGet**
> InlineResponse2002 apiV1CssTemplateInfoGet(opts)



Get metadata information about this API resource

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.CSSTemplatesApi();
let opts = { 
  'q': new Superset.GetInfoSchema() // GetInfoSchema | 
};
apiInstance.apiV1CssTemplateInfoGet(opts, (error, data, response) => {
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

<a name="apiV1CssTemplatePkDelete"></a>
# **apiV1CssTemplatePkDelete**
> InlineResponse400 apiV1CssTemplatePkDelete(pk)



Delete CSS template

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.CSSTemplatesApi();
let pk = 56; // Number | 

apiInstance.apiV1CssTemplatePkDelete(pk, (error, data, response) => {
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

<a name="apiV1CssTemplatePkGet"></a>
# **apiV1CssTemplatePkGet**
> InlineResponse20015 apiV1CssTemplatePkGet(pk, opts)



Get a CSS template

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.CSSTemplatesApi();
let pk = 56; // Number | 
let opts = { 
  'q': new Superset.GetItemSchema() // GetItemSchema | 
};
apiInstance.apiV1CssTemplatePkGet(pk, opts, (error, data, response) => {
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

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1CssTemplatePkPut"></a>
# **apiV1CssTemplatePkPut**
> InlineResponse20016 apiV1CssTemplatePkPut(body, pk)



Update a CSS template

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.CSSTemplatesApi();
let body = new Superset.CssTemplateRestApiPut(); // CssTemplateRestApiPut | Model schema
let pk = 56; // Number | 

apiInstance.apiV1CssTemplatePkPut(body, pk, (error, data, response) => {
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
 **body** | [**CssTemplateRestApiPut**](CssTemplateRestApiPut.md)| Model schema | 
 **pk** | **Number**|  | 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1CssTemplatePost"></a>
# **apiV1CssTemplatePost**
> InlineResponse2013 apiV1CssTemplatePost(body)



Create a CSS template

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.CSSTemplatesApi();
let body = new Superset.CssTemplateRestApiPost(); // CssTemplateRestApiPost | Model schema

apiInstance.apiV1CssTemplatePost(body, (error, data, response) => {
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
 **body** | [**CssTemplateRestApiPost**](CssTemplateRestApiPost.md)| Model schema | 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1CssTemplateRelatedColumnNameGet"></a>
# **apiV1CssTemplateRelatedColumnNameGet**
> RelatedResponseSchema apiV1CssTemplateRelatedColumnNameGet(columnName, opts)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.CSSTemplatesApi();
let columnName = "columnName_example"; // String | 
let opts = { 
  'q': new Superset.GetRelatedSchema() // GetRelatedSchema | 
};
apiInstance.apiV1CssTemplateRelatedColumnNameGet(columnName, opts, (error, data, response) => {
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

