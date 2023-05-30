# Superset.FilterSetRestApiApi

All URIs are relative to *http://localhost:8088/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1DashboardDashboardIdFiltersetsGet**](FilterSetRestApiApi.md#apiV1DashboardDashboardIdFiltersetsGet) | **GET** /api/v1/dashboard/{dashboard_id}/filtersets | 
[**apiV1DashboardDashboardIdFiltersetsPkDelete**](FilterSetRestApiApi.md#apiV1DashboardDashboardIdFiltersetsPkDelete) | **DELETE** /api/v1/dashboard/{dashboard_id}/filtersets/{pk} | 
[**apiV1DashboardDashboardIdFiltersetsPkPut**](FilterSetRestApiApi.md#apiV1DashboardDashboardIdFiltersetsPkPut) | **PUT** /api/v1/dashboard/{dashboard_id}/filtersets/{pk} | 
[**apiV1DashboardDashboardIdFiltersetsPost**](FilterSetRestApiApi.md#apiV1DashboardDashboardIdFiltersetsPost) | **POST** /api/v1/dashboard/{dashboard_id}/filtersets | 

<a name="apiV1DashboardDashboardIdFiltersetsGet"></a>
# **apiV1DashboardDashboardIdFiltersetsGet**
> [InlineResponse20019] apiV1DashboardDashboardIdFiltersetsGet(dashboardId)



Get a dashboard&#x27;s list of filter sets

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.FilterSetRestApiApi();
let dashboardId = 56; // Number | The id of the dashboard

apiInstance.apiV1DashboardDashboardIdFiltersetsGet(dashboardId, (error, data, response) => {
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
 **dashboardId** | **Number**| The id of the dashboard | 

### Return type

[**[InlineResponse20019]**](InlineResponse20019.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DashboardDashboardIdFiltersetsPkDelete"></a>
# **apiV1DashboardDashboardIdFiltersetsPkDelete**
> InlineResponse400 apiV1DashboardDashboardIdFiltersetsPkDelete(dashboardId, pk)



Deletes a Dashboard.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.FilterSetRestApiApi();
let dashboardId = 56; // Number | 
let pk = 56; // Number | 

apiInstance.apiV1DashboardDashboardIdFiltersetsPkDelete(dashboardId, pk, (error, data, response) => {
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
 **dashboardId** | **Number**|  | 
 **pk** | **Number**|  | 

### Return type

[**InlineResponse400**](InlineResponse400.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DashboardDashboardIdFiltersetsPkPut"></a>
# **apiV1DashboardDashboardIdFiltersetsPkPut**
> InlineResponse20020 apiV1DashboardDashboardIdFiltersetsPkPut(body, dashboardId, pk)



Changes a Dashboard&#x27;s Filter set.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.FilterSetRestApiApi();
let body = new Superset.FilterSetRestApiPut(); // FilterSetRestApiPut | Filter set schema
let dashboardId = 56; // Number | 
let pk = 56; // Number | 

apiInstance.apiV1DashboardDashboardIdFiltersetsPkPut(body, dashboardId, pk, (error, data, response) => {
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
 **body** | [**FilterSetRestApiPut**](FilterSetRestApiPut.md)| Filter set schema | 
 **dashboardId** | **Number**|  | 
 **pk** | **Number**|  | 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="apiV1DashboardDashboardIdFiltersetsPost"></a>
# **apiV1DashboardDashboardIdFiltersetsPost**
> InlineResponse2015 apiV1DashboardDashboardIdFiltersetsPost(body, dashboardId)



Create a new Dashboard&#x27;s Filter Set.

### Example
```javascript
import {Superset} from 'superset';
let defaultClient = Superset.ApiClient.instance;


let apiInstance = new Superset.FilterSetRestApiApi();
let body = new Superset.FilterSetRestApiPost(); // FilterSetRestApiPost | Filter set schema
let dashboardId = 56; // Number | The id of the dashboard

apiInstance.apiV1DashboardDashboardIdFiltersetsPost(body, dashboardId, (error, data, response) => {
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
 **body** | [**FilterSetRestApiPost**](FilterSetRestApiPost.md)| Filter set schema | 
 **dashboardId** | **Number**| The id of the dashboard | 

### Return type

[**InlineResponse2015**](InlineResponse2015.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

