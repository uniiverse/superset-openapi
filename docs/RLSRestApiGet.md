# Superset.RLSRestApiGet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clause** | **String** | This is the condition that will be added to the WHERE clause. For example, to only return rows for a particular client, you might define a regular filter with the clause &#x60;client_id &#x3D; 9&#x60;. To display no rows unless a user belongs to a RLS filter role, a base filter can be created with the clause &#x60;1 &#x3D; 0&#x60; (always false). | [optional] 
**description** | **String** | Detailed description | [optional] 
**filterType** | **String** | Regular filters add where clauses to queries if a user belongs to a role referenced in the filter, base filters apply filters to all queries except the roles defined in the filter, and can be used to define what users can see if no RLS filters within a filter group apply to them. | [optional] 
**groupKey** | **String** | Filters with the same group key will be ORed together within the group, while different filter groups will be ANDed together. Undefined group keys are treated as unique groups, i.e. are not grouped together. For example, if a table has three filters, of which two are for departments Finance and Marketing (group key &#x3D; &#x27;department&#x27;), and one refers to the region Europe (group key &#x3D; &#x27;region&#x27;), the filter clause would apply the filter (department &#x3D; &#x27;Finance&#x27; OR department &#x3D; &#x27;Marketing&#x27;) AND (region &#x3D; &#x27;Europe&#x27;). | [optional] 
**id** | **Number** | Unique if of rls filter | [optional] 
**name** | **String** | Name of rls filter | [optional] 
**roles** | [**[Roles1]**](Roles1.md) |  | [optional] 
**tables** | [**[Tables]**](Tables.md) |  | [optional] 

<a name="FilterTypeEnum"></a>
## Enum: FilterTypeEnum

* `regular` (value: `"Regular"`)
* `base` (value: `"Base"`)

