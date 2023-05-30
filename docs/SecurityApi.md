# Superset.SecurityApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1SecurityCsrfTokenGet**](SecurityApi.md#apiV1SecurityCsrfTokenGet) | **GET** /api/v1/security/csrf_token/ | 
[**apiV1SecurityGuestTokenPost**](SecurityApi.md#apiV1SecurityGuestTokenPost) | **POST** /api/v1/security/guest_token/ | 
[**apiV1SecurityLoginPost**](SecurityApi.md#apiV1SecurityLoginPost) | **POST** /api/v1/security/login | 
[**apiV1SecurityRefreshPost**](SecurityApi.md#apiV1SecurityRefreshPost) | **POST** /api/v1/security/refresh | 

<a name="apiV1SecurityCsrfTokenGet"></a>
# **apiV1SecurityCsrfTokenGet**
> InlineResponse20045 apiV1SecurityCsrfTokenGet()



Fetch the CSRF token

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.SecurityApi();
apiInstance.apiV1SecurityCsrfTokenGet((error, data, response) => {
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

[**InlineResponse20045**](InlineResponse20045.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1SecurityGuestTokenPost"></a>
# **apiV1SecurityGuestTokenPost**
> InlineResponse20059 apiV1SecurityGuestTokenPost(body)



Fetches a guest token

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.SecurityApi();
let body = new Superset.GuestTokenCreate(); // GuestTokenCreate | Parameters for the guest token

apiInstance.apiV1SecurityGuestTokenPost(body, (error, data, response) => {
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
 **body** | [**GuestTokenCreate**](GuestTokenCreate.md)| Parameters for the guest token | 

### Return type

[**InlineResponse20059**](InlineResponse20059.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1SecurityLoginPost"></a>
# **apiV1SecurityLoginPost**
> InlineResponse20060 apiV1SecurityLoginPost(body)



Authenticate and get a JWT access and refresh token

### Example
```javascript
import {Superset} from 'superset';

let apiInstance = new Superset.SecurityApi();
let body = new Superset.SecurityLoginBody(); // SecurityLoginBody | 

apiInstance.apiV1SecurityLoginPost(body, (error, data, response) => {
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
 **body** | [**SecurityLoginBody**](SecurityLoginBody.md)|  | 

### Return type

[**InlineResponse20060**](InlineResponse20060.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1SecurityRefreshPost"></a>
# **apiV1SecurityRefreshPost**
> InlineResponse20061 apiV1SecurityRefreshPost()



Use the refresh token to get a new JWT access token

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.SecurityApi();
apiInstance.apiV1SecurityRefreshPost((error, data, response) => {
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

[**InlineResponse20061**](InlineResponse20061.md)

### Authorization

[jwt_refresh](../README.md#jwt_refresh)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

