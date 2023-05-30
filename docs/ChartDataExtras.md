# Superset.ChartDataExtras

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**having** | **String** | HAVING clause to be added to aggregate queries using AND operator. | [optional] 
**havingDruid** | [**[ChartDataFilter]**](ChartDataFilter.md) | HAVING filters to be added to legacy Druid datasource queries. This field is deprecated | [optional] 
**relativeEnd** | **String** | End time for relative time deltas. Default: &#x60;config[\&quot;DEFAULT_RELATIVE_START_TIME\&quot;]&#x60; | [optional] 
**relativeStart** | **String** | Start time for relative time deltas. Default: &#x60;config[\&quot;DEFAULT_RELATIVE_START_TIME\&quot;]&#x60; | [optional] 
**timeGrainSqla** | **String** | To what level of granularity should the temporal column be aggregated. Supports [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) durations. | [optional] 
**where** | **String** | WHERE clause to be added to queries using AND operator. | [optional] 

<a name="RelativeEndEnum"></a>
## Enum: RelativeEndEnum

* `today` (value: `"today"`)
* `now` (value: `"now"`)


<a name="RelativeStartEnum"></a>
## Enum: RelativeStartEnum

* `today` (value: `"today"`)
* `now` (value: `"now"`)


<a name="TimeGrainSqlaEnum"></a>
## Enum: TimeGrainSqlaEnum

* `pT1S` (value: `"PT1S"`)
* `pT5S` (value: `"PT5S"`)
* `pT30S` (value: `"PT30S"`)
* `pT1M` (value: `"PT1M"`)
* `pT5M` (value: `"PT5M"`)
* `pT10M` (value: `"PT10M"`)
* `pT15M` (value: `"PT15M"`)
* `pT30M` (value: `"PT30M"`)
* `pT1H` (value: `"PT1H"`)
* `pT6H` (value: `"PT6H"`)
* `p1D` (value: `"P1D"`)
* `p1W` (value: `"P1W"`)
* `p1M` (value: `"P1M"`)
* `p3M` (value: `"P3M"`)
* `p1Y` (value: `"P1Y"`)
* `_19691228T000000ZP1W` (value: `"1969-12-28T00:00:00Z/P1W"`)
* `_19691229T000000ZP1W` (value: `"1969-12-29T00:00:00Z/P1W"`)
* `p1W19700103T000000Z` (value: `"P1W/1970-01-03T00:00:00Z"`)
* `p1W19700104T000000Z` (value: `"P1W/1970-01-04T00:00:00Z"`)

