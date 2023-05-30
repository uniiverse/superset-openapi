# Superset.ChartDataProphetOptionsSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidenceInterval** | **Number** | Width of predicted confidence interval | 
**monthlySeasonality** | **Object** | Should monthly seasonality be applied. An integer value will specify Fourier order of seasonality, &#x60;None&#x60; will automatically detect seasonality. | [optional] 
**periods** | **Number** | Time periods (in units of &#x60;time_grain&#x60;) to predict into the future | 
**timeGrain** | **String** | Time grain used to specify time period increments in prediction. Supports [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) durations. | 
**weeklySeasonality** | **Object** | Should weekly seasonality be applied. An integer value will specify Fourier order of seasonality, &#x60;None&#x60; will automatically detect seasonality. | [optional] 
**yearlySeasonality** | **Object** | Should yearly seasonality be applied. An integer value will specify Fourier order of seasonality, &#x60;None&#x60; will automatically detect seasonality. | [optional] 

<a name="TimeGrainEnum"></a>
## Enum: TimeGrainEnum

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

