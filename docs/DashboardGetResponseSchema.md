# Superset.DashboardGetResponseSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificationDetails** | **String** | Details of the certification | [optional] 
**certifiedBy** | **String** | Person or group that has certified this dashboard | [optional] 
**changedBy** | [**User**](User.md) |  | [optional] 
**changedByName** | **String** |  | [optional] 
**changedByUrl** | **String** |  | [optional] 
**changedOn** | **Date** |  | [optional] 
**changedOnDeltaHumanized** | **String** |  | [optional] 
**charts** | **[String]** |  | [optional] 
**css** | **String** | Override CSS for the dashboard. | [optional] 
**dashboardTitle** | **String** | A title for the dashboard. | [optional] 
**id** | **Number** |  | [optional] 
**isManagedExternally** | **Boolean** |  | [optional] 
**jsonMetadata** | **String** | This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter  specific parameters. | [optional] 
**owners** | [**[User]**](User.md) |  | [optional] 
**positionJson** | **String** | This json object describes the positioning of the widgets in the dashboard. It is dynamically generated when adjusting the widgets size and positions by using drag &amp; drop in the dashboard view | [optional] 
**published** | **Boolean** |  | [optional] 
**roles** | [**[Roles]**](Roles.md) |  | [optional] 
**slug** | **String** |  | [optional] 
**tags** | [**[Tag1]**](Tag1.md) |  | [optional] 
**thumbnailUrl** | **String** |  | [optional] 
**url** | **String** |  | [optional] 
