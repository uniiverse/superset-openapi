# Superset.ExploreApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1ExploreGet**](ExploreApi.md#apiV1ExploreGet) | **GET** /api/v1/explore/ | Assembles Explore related information (form_data, slice, dataset)\\n in a single endpoint.

<a name="apiV1ExploreGet"></a>
# **apiV1ExploreGet**
> ExploreContextSchema apiV1ExploreGet(opts)

Assembles Explore related information (form_data, slice, dataset)\\n in a single endpoint.

Assembles Explore related information (form_data, slice, dataset)\\n in a single endpoint.&lt;br/&gt;&lt;br/&gt;\\nThe information can be assembled from:&lt;br/&gt; - The cache using a form_data_key&lt;br/&gt; - The metadata database using a permalink_key&lt;br/&gt; - Build from scratch using dataset or slice identifiers.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ExploreApi();
let opts = { 
  'formDataKey': "formDataKey_example", // String | 
  'permalinkKey': "permalinkKey_example", // String | 
  'sliceId': 56, // Number | 
  'datasourceId': 56, // Number | 
  'datasourceType': "datasourceType_example" // String | 
};
apiInstance.apiV1ExploreGet(opts, (error, data, response) => {
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
 **formDataKey** | **String**|  | [optional] 
 **permalinkKey** | **String**|  | [optional] 
 **sliceId** | **Number**|  | [optional] 
 **datasourceId** | **Number**|  | [optional] 
 **datasourceType** | **String**|  | [optional] 

### Return type

[**ExploreContextSchema**](ExploreContextSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

