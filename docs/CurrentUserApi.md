# Superset.CurrentUserApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1MeGet**](CurrentUserApi.md#apiV1MeGet) | **GET** /api/v1/me/ | 
[**apiV1MeRolesGet**](CurrentUserApi.md#apiV1MeRolesGet) | **GET** /api/v1/me/roles/ | 

<a name="apiV1MeGet"></a>
# **apiV1MeGet**
> InlineResponse20042 apiV1MeGet()



Returns the user object corresponding to the agent making the request, or returns a 401 error if the user is unauthenticated.

### Example
```javascript
import {Superset} from 'superset';

let apiInstance = new Superset.CurrentUserApi();
apiInstance.apiV1MeGet((error, data, response) => {
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

[**InlineResponse20042**](InlineResponse20042.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1MeRolesGet"></a>
# **apiV1MeRolesGet**
> InlineResponse20042 apiV1MeRolesGet()



Returns the user roles corresponding to the agent making the request, or returns a 401 error if the user is unauthenticated.

### Example
```javascript
import {Superset} from 'superset';

let apiInstance = new Superset.CurrentUserApi();
apiInstance.apiV1MeRolesGet((error, data, response) => {
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

[**InlineResponse20042**](InlineResponse20042.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

