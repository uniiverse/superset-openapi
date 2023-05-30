# Superset.DatabaseApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1DatabaseAvailableGet**](DatabaseApi.md#apiV1DatabaseAvailableGet) | **GET** /api/v1/database/available/ | 
[**apiV1DatabaseExportGet**](DatabaseApi.md#apiV1DatabaseExportGet) | **GET** /api/v1/database/export/ | 
[**apiV1DatabaseGet**](DatabaseApi.md#apiV1DatabaseGet) | **GET** /api/v1/database/ | 
[**apiV1DatabaseImportPost**](DatabaseApi.md#apiV1DatabaseImportPost) | **POST** /api/v1/database/import/ | 
[**apiV1DatabaseInfoGet**](DatabaseApi.md#apiV1DatabaseInfoGet) | **GET** /api/v1/database/_info | 
[**apiV1DatabasePkConnectionGet**](DatabaseApi.md#apiV1DatabasePkConnectionGet) | **GET** /api/v1/database/{pk}/connection | Get a database connection info
[**apiV1DatabasePkDelete**](DatabaseApi.md#apiV1DatabasePkDelete) | **DELETE** /api/v1/database/{pk} | 
[**apiV1DatabasePkFunctionNamesGet**](DatabaseApi.md#apiV1DatabasePkFunctionNamesGet) | **GET** /api/v1/database/{pk}/function_names/ | 
[**apiV1DatabasePkGet**](DatabaseApi.md#apiV1DatabasePkGet) | **GET** /api/v1/database/{pk} | 
[**apiV1DatabasePkPut**](DatabaseApi.md#apiV1DatabasePkPut) | **PUT** /api/v1/database/{pk} | 
[**apiV1DatabasePkRelatedObjectsGet**](DatabaseApi.md#apiV1DatabasePkRelatedObjectsGet) | **GET** /api/v1/database/{pk}/related_objects/ | 
[**apiV1DatabasePkSchemasAccessForFileUploadGet**](DatabaseApi.md#apiV1DatabasePkSchemasAccessForFileUploadGet) | **GET** /api/v1/database/{pk}/schemas_access_for_file_upload/ | The list of the database schemas where to upload information
[**apiV1DatabasePkSchemasGet**](DatabaseApi.md#apiV1DatabasePkSchemasGet) | **GET** /api/v1/database/{pk}/schemas/ | 
[**apiV1DatabasePkSelectStarTableNameGet**](DatabaseApi.md#apiV1DatabasePkSelectStarTableNameGet) | **GET** /api/v1/database/{pk}/select_star/{table_name}/ | 
[**apiV1DatabasePkSelectStarTableNameSchemaNameGet**](DatabaseApi.md#apiV1DatabasePkSelectStarTableNameSchemaNameGet) | **GET** /api/v1/database/{pk}/select_star/{table_name}/{schema_name}/ | 
[**apiV1DatabasePkSshTunnelDelete**](DatabaseApi.md#apiV1DatabasePkSshTunnelDelete) | **DELETE** /api/v1/database/{pk}/ssh_tunnel/ | 
[**apiV1DatabasePkTableExtraTableNameSchemaNameGet**](DatabaseApi.md#apiV1DatabasePkTableExtraTableNameSchemaNameGet) | **GET** /api/v1/database/{pk}/table_extra/{table_name}/{schema_name}/ | Get table extra metadata
[**apiV1DatabasePkTableTableNameSchemaNameGet**](DatabaseApi.md#apiV1DatabasePkTableTableNameSchemaNameGet) | **GET** /api/v1/database/{pk}/table/{table_name}/{schema_name}/ | 
[**apiV1DatabasePkTablesGet**](DatabaseApi.md#apiV1DatabasePkTablesGet) | **GET** /api/v1/database/{pk}/tables/ | Get a list of tables for given database
[**apiV1DatabasePkValidateSqlPost**](DatabaseApi.md#apiV1DatabasePkValidateSqlPost) | **POST** /api/v1/database/{pk}/validate_sql/ | Validates that arbitrary sql is acceptable for the given database
[**apiV1DatabasePost**](DatabaseApi.md#apiV1DatabasePost) | **POST** /api/v1/database/ | 
[**apiV1DatabaseTestConnectionPost**](DatabaseApi.md#apiV1DatabaseTestConnectionPost) | **POST** /api/v1/database/test_connection/ | 
[**apiV1DatabaseValidateParametersPost**](DatabaseApi.md#apiV1DatabaseValidateParametersPost) | **POST** /api/v1/database/validate_parameters/ | 

<a name="apiV1DatabaseAvailableGet"></a>
# **apiV1DatabaseAvailableGet**
> [InlineResponse20030] apiV1DatabaseAvailableGet()



Get names of databases currently available

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
apiInstance.apiV1DatabaseAvailableGet((error, data, response) => {
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

[**[InlineResponse20030]**](InlineResponse20030.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatabaseExportGet"></a>
# **apiV1DatabaseExportGet**
> &#x27;Blob&#x27; apiV1DatabaseExportGet(opts)



Download database(s) and associated dataset(s) as a zip file

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let opts = { 
  'q': new Superset.GetExportIdsSchema() // GetExportIdsSchema | 
};
apiInstance.apiV1DatabaseExportGet(opts, (error, data, response) => {
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

<a name="apiV1DatabaseGet"></a>
# **apiV1DatabaseGet**
> InlineResponse20029 apiV1DatabaseGet(opts)



Get a list of models

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let opts = { 
  'q': new Superset.GetListSchema() // GetListSchema | 
};
apiInstance.apiV1DatabaseGet(opts, (error, data, response) => {
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

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatabaseImportPost"></a>
# **apiV1DatabaseImportPost**
> InlineResponse400 apiV1DatabaseImportPost(formData, overwrite, passwords, sshTunnelPasswords, sshTunnelPrivateKeyPasswords, sshTunnelPrivateKeys)



### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let formData = "formData_example"; // Blob | 
let overwrite = true; // Boolean | 
let passwords = "passwords_example"; // String | 
let sshTunnelPasswords = "sshTunnelPasswords_example"; // String | 
let sshTunnelPrivateKeyPasswords = "sshTunnelPrivateKeyPasswords_example"; // String | 
let sshTunnelPrivateKeys = "sshTunnelPrivateKeys_example"; // String | 

apiInstance.apiV1DatabaseImportPost(formData, overwrite, passwords, sshTunnelPasswords, sshTunnelPrivateKeyPasswords, sshTunnelPrivateKeys, (error, data, response) => {
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

<a name="apiV1DatabaseInfoGet"></a>
# **apiV1DatabaseInfoGet**
> InlineResponse2002 apiV1DatabaseInfoGet(opts)



Get metadata information about this API resource

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let opts = { 
  'q': new Superset.GetInfoSchema() // GetInfoSchema | 
};
apiInstance.apiV1DatabaseInfoGet(opts, (error, data, response) => {
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

<a name="apiV1DatabasePkConnectionGet"></a>
# **apiV1DatabasePkConnectionGet**
> DatabaseConnectionSchema apiV1DatabasePkConnectionGet(pk)

Get a database connection info

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let pk = 56; // Number | The database id

apiInstance.apiV1DatabasePkConnectionGet(pk, (error, data, response) => {
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
 **pk** | **Number**| The database id | 

### Return type

[**DatabaseConnectionSchema**](DatabaseConnectionSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatabasePkDelete"></a>
# **apiV1DatabasePkDelete**
> InlineResponse400 apiV1DatabasePkDelete(pk)



Deletes a Database.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let pk = 56; // Number | 

apiInstance.apiV1DatabasePkDelete(pk, (error, data, response) => {
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

<a name="apiV1DatabasePkFunctionNamesGet"></a>
# **apiV1DatabasePkFunctionNamesGet**
> DatabaseFunctionNamesResponse apiV1DatabasePkFunctionNamesGet(pk)



Get function names supported by a database

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let pk = 56; // Number | 

apiInstance.apiV1DatabasePkFunctionNamesGet(pk, (error, data, response) => {
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

[**DatabaseFunctionNamesResponse**](DatabaseFunctionNamesResponse.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatabasePkGet"></a>
# **apiV1DatabasePkGet**
> Object apiV1DatabasePkGet(pk)



Get a database

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let pk = 56; // Number | The database id

apiInstance.apiV1DatabasePkGet(pk, (error, data, response) => {
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
 **pk** | **Number**| The database id | 

### Return type

**Object**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatabasePkPut"></a>
# **apiV1DatabasePkPut**
> InlineResponse20031 apiV1DatabasePkPut(body, pk)



Changes a Database.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let body = new Superset.DatabaseRestApiPut(); // DatabaseRestApiPut | Database schema
let pk = 56; // Number | 

apiInstance.apiV1DatabasePkPut(body, pk, (error, data, response) => {
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
 **body** | [**DatabaseRestApiPut**](DatabaseRestApiPut.md)| Database schema | 
 **pk** | **Number**|  | 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1DatabasePkRelatedObjectsGet"></a>
# **apiV1DatabasePkRelatedObjectsGet**
> DatabaseRelatedObjectsResponse apiV1DatabasePkRelatedObjectsGet(pk)



Get charts and dashboards count associated to a database

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let pk = 56; // Number | 

apiInstance.apiV1DatabasePkRelatedObjectsGet(pk, (error, data, response) => {
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

[**DatabaseRelatedObjectsResponse**](DatabaseRelatedObjectsResponse.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatabasePkSchemasAccessForFileUploadGet"></a>
# **apiV1DatabasePkSchemasAccessForFileUploadGet**
> DatabaseSchemaAccessForFileUploadResponse apiV1DatabasePkSchemasAccessForFileUploadGet(pk)

The list of the database schemas where to upload information

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let pk = 56; // Number | 

apiInstance.apiV1DatabasePkSchemasAccessForFileUploadGet(pk, (error, data, response) => {
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

[**DatabaseSchemaAccessForFileUploadResponse**](DatabaseSchemaAccessForFileUploadResponse.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatabasePkSchemasGet"></a>
# **apiV1DatabasePkSchemasGet**
> SchemasResponseSchema apiV1DatabasePkSchemasGet(pk, opts)



Get all schemas from a database

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let pk = 56; // Number | The database id
let opts = { 
  'q': new Superset.DatabaseSchemasQuerySchema() // DatabaseSchemasQuerySchema | 
};
apiInstance.apiV1DatabasePkSchemasGet(pk, opts, (error, data, response) => {
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
 **pk** | **Number**| The database id | 
 **q** | [**DatabaseSchemasQuerySchema**](.md)|  | [optional] 

### Return type

[**SchemasResponseSchema**](SchemasResponseSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatabasePkSelectStarTableNameGet"></a>
# **apiV1DatabasePkSelectStarTableNameGet**
> SelectStarResponseSchema apiV1DatabasePkSelectStarTableNameGet(pk, tableName, schemaName)



Get database select star for table

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let pk = 56; // Number | The database id
let tableName = "tableName_example"; // String | Table name
let schemaName = "schemaName_example"; // String | Table schema

apiInstance.apiV1DatabasePkSelectStarTableNameGet(pk, tableName, schemaName, (error, data, response) => {
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
 **pk** | **Number**| The database id | 
 **tableName** | **String**| Table name | 
 **schemaName** | **String**| Table schema | 

### Return type

[**SelectStarResponseSchema**](SelectStarResponseSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatabasePkSelectStarTableNameSchemaNameGet"></a>
# **apiV1DatabasePkSelectStarTableNameSchemaNameGet**
> SelectStarResponseSchema apiV1DatabasePkSelectStarTableNameSchemaNameGet(pk, tableName, schemaName)



Get database select star for table

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let pk = 56; // Number | The database id
let tableName = "tableName_example"; // String | Table name
let schemaName = "schemaName_example"; // String | Table schema

apiInstance.apiV1DatabasePkSelectStarTableNameSchemaNameGet(pk, tableName, schemaName, (error, data, response) => {
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
 **pk** | **Number**| The database id | 
 **tableName** | **String**| Table name | 
 **schemaName** | **String**| Table schema | 

### Return type

[**SelectStarResponseSchema**](SelectStarResponseSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatabasePkSshTunnelDelete"></a>
# **apiV1DatabasePkSshTunnelDelete**
> InlineResponse400 apiV1DatabasePkSshTunnelDelete(pk)



Deletes a SSH Tunnel.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let pk = 56; // Number | 

apiInstance.apiV1DatabasePkSshTunnelDelete(pk, (error, data, response) => {
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

<a name="apiV1DatabasePkTableExtraTableNameSchemaNameGet"></a>
# **apiV1DatabasePkTableExtraTableNameSchemaNameGet**
> TableExtraMetadataResponseSchema apiV1DatabasePkTableExtraTableNameSchemaNameGet(pk, tableName, schemaName)

Get table extra metadata

Response depends on each DB engine spec normally focused on partitions

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let pk = 56; // Number | The database id
let tableName = "tableName_example"; // String | Table name
let schemaName = "schemaName_example"; // String | Table schema

apiInstance.apiV1DatabasePkTableExtraTableNameSchemaNameGet(pk, tableName, schemaName, (error, data, response) => {
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
 **pk** | **Number**| The database id | 
 **tableName** | **String**| Table name | 
 **schemaName** | **String**| Table schema | 

### Return type

[**TableExtraMetadataResponseSchema**](TableExtraMetadataResponseSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatabasePkTableTableNameSchemaNameGet"></a>
# **apiV1DatabasePkTableTableNameSchemaNameGet**
> TableMetadataResponseSchema apiV1DatabasePkTableTableNameSchemaNameGet(pk, tableName, schemaName)



Get database table metadata

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let pk = 56; // Number | The database id
let tableName = "tableName_example"; // String | Table name
let schemaName = "schemaName_example"; // String | Table schema

apiInstance.apiV1DatabasePkTableTableNameSchemaNameGet(pk, tableName, schemaName, (error, data, response) => {
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
 **pk** | **Number**| The database id | 
 **tableName** | **String**| Table name | 
 **schemaName** | **String**| Table schema | 

### Return type

[**TableMetadataResponseSchema**](TableMetadataResponseSchema.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatabasePkTablesGet"></a>
# **apiV1DatabasePkTablesGet**
> InlineResponse20032 apiV1DatabasePkTablesGet(pk, opts)

Get a list of tables for given database

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let pk = 56; // Number | The database id
let opts = { 
  'q': new Superset.DatabaseTablesQuerySchema() // DatabaseTablesQuerySchema | 
};
apiInstance.apiV1DatabasePkTablesGet(pk, opts, (error, data, response) => {
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
 **pk** | **Number**| The database id | 
 **q** | [**DatabaseTablesQuerySchema**](.md)|  | [optional] 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DatabasePkValidateSqlPost"></a>
# **apiV1DatabasePkValidateSqlPost**
> InlineResponse20033 apiV1DatabasePkValidateSqlPost(body, pk)

Validates that arbitrary sql is acceptable for the given database

Validates arbitrary SQL.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let body = new Superset.ValidateSQLRequest(); // ValidateSQLRequest | Validate SQL request
let pk = 56; // Number | 

apiInstance.apiV1DatabasePkValidateSqlPost(body, pk, (error, data, response) => {
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
 **body** | [**ValidateSQLRequest**](ValidateSQLRequest.md)| Validate SQL request | 
 **pk** | **Number**|  | 

### Return type

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1DatabasePost"></a>
# **apiV1DatabasePost**
> InlineResponse2018 apiV1DatabasePost(body)



Create a new Database.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let body = new Superset.DatabaseRestApiPost(); // DatabaseRestApiPost | Database schema

apiInstance.apiV1DatabasePost(body, (error, data, response) => {
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
 **body** | [**DatabaseRestApiPost**](DatabaseRestApiPost.md)| Database schema | 

### Return type

[**InlineResponse2018**](InlineResponse2018.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1DatabaseTestConnectionPost"></a>
# **apiV1DatabaseTestConnectionPost**
> InlineResponse400 apiV1DatabaseTestConnectionPost(body)



Tests a database connection

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let body = new Superset.DatabaseTestConnectionSchema(); // DatabaseTestConnectionSchema | Database schema

apiInstance.apiV1DatabaseTestConnectionPost(body, (error, data, response) => {
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
 **body** | [**DatabaseTestConnectionSchema**](DatabaseTestConnectionSchema.md)| Database schema | 

### Return type

[**InlineResponse400**](InlineResponse400.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1DatabaseValidateParametersPost"></a>
# **apiV1DatabaseValidateParametersPost**
> InlineResponse400 apiV1DatabaseValidateParametersPost(body)



Validates parameters used to connect to a database

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.DatabaseApi();
let body = new Superset.DatabaseValidateParametersSchema(); // DatabaseValidateParametersSchema | DB-specific parameters

apiInstance.apiV1DatabaseValidateParametersPost(body, (error, data, response) => {
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
 **body** | [**DatabaseValidateParametersSchema**](DatabaseValidateParametersSchema.md)| DB-specific parameters | 

### Return type

[**InlineResponse400**](InlineResponse400.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

