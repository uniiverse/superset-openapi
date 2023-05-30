# Superset.ImportexportApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1AssetsExportGet**](ImportexportApi.md#apiV1AssetsExportGet) | **GET** /api/v1/assets/export/ | 
[**apiV1AssetsImportPost**](ImportexportApi.md#apiV1AssetsImportPost) | **POST** /api/v1/assets/import/ | 

<a name="apiV1AssetsExportGet"></a>
# **apiV1AssetsExportGet**
> &#x27;Blob&#x27; apiV1AssetsExportGet()



Returns a ZIP file with all the Superset assets (databases, datasets, charts, dashboards, saved queries) as YAML files.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ImportexportApi();
apiInstance.apiV1AssetsExportGet((error, data, response) => {
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

**&#x27;Blob&#x27;**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/zip, application/json

<a name="apiV1AssetsImportPost"></a>
# **apiV1AssetsImportPost**
> InlineResponse400 apiV1AssetsImportPost(bundle, passwords, sshTunnelPasswords, sshTunnelPrivateKeyPasswords, sshTunnelPrivateKeys)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.ImportexportApi();
let bundle = "bundle_example"; // Blob | 
let passwords = "passwords_example"; // String | 
let sshTunnelPasswords = "sshTunnelPasswords_example"; // String | 
let sshTunnelPrivateKeyPasswords = "sshTunnelPrivateKeyPasswords_example"; // String | 
let sshTunnelPrivateKeys = "sshTunnelPrivateKeys_example"; // String | 

apiInstance.apiV1AssetsImportPost(bundle, passwords, sshTunnelPasswords, sshTunnelPrivateKeyPasswords, sshTunnelPrivateKeys, (error, data, response) => {
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
 **bundle** | **Blob**|  | 
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

