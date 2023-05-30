# Superset.AdvancedDataTypeApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1AdvancedDataTypeConvertGet**](AdvancedDataTypeApi.md#apiV1AdvancedDataTypeConvertGet) | **GET** /api/v1/advanced_data_type/convert | Returns a AdvancedDataTypeResponse object populated with the passed in args.
[**apiV1AdvancedDataTypeTypesGet**](AdvancedDataTypeApi.md#apiV1AdvancedDataTypeTypesGet) | **GET** /api/v1/advanced_data_type/types | 

<a name="apiV1AdvancedDataTypeConvertGet"></a>
# **apiV1AdvancedDataTypeConvertGet**
> AdvancedDataTypeSchema apiV1AdvancedDataTypeConvertGet(opts)

Returns a AdvancedDataTypeResponse object populated with the passed in args.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AdvancedDataTypeApi();
let opts = { 
  'q': new Superset.AdvancedDataTypeConvertSchema() // AdvancedDataTypeConvertSchema | 
};
apiInstance.apiV1AdvancedDataTypeConvertGet(opts, (error, data, response) => {
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
 **q** | [**AdvancedDataTypeConvertSchema**](.md)|  | [optional] 

### Return type

[**AdvancedDataTypeSchema**](AdvancedDataTypeSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1AdvancedDataTypeTypesGet"></a>
# **apiV1AdvancedDataTypeTypesGet**
> InlineResponse200 apiV1AdvancedDataTypeTypesGet()



Returns a list of available advanced data types.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.AdvancedDataTypeApi();
apiInstance.apiV1AdvancedDataTypeTypesGet((error, data, response) => {
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

