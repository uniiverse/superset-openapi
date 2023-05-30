# Superset.AnnotationLayer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotationType** | **String** | Type of annotation layer | [optional] 
**color** | **String** | Layer color | [optional] 
**descriptionColumns** | **[String]** | Columns to use as the description. If none are provided, all will be shown. | [optional] 
**hideLine** | **Boolean** | Should line be hidden. Only applies to line annotations | [optional] 
**intervalEndColumn** | **String** | Column containing end of interval. Only applies to interval layers | [optional] 
**name** | **String** | Name of layer | 
**opacity** | **String** | Opacity of layer | [optional] 
**overrides** | **{String: Object}** | which properties should be overridable | [optional] 
**show** | **Boolean** | Should the layer be shown | 
**showLabel** | **Boolean** | Should the label always be shown | [optional] 
**showMarkers** | **Boolean** | Should markers be shown. Only applies to line annotations. | 
**sourceType** | **String** | Type of source for annotation data | [optional] 
**style** | **String** | Line style. Only applies to time-series annotations | [optional] 
**timeColumn** | **String** | Column with event date or interval start date | [optional] 
**titleColumn** | **String** | Column with title | [optional] 
**value** | **Object** | For formula annotations, this contains the formula. For other types, this is the primary key of the source object. | 
**width** | **Number** | Width of annotation line | [optional] 

<a name="AnnotationTypeEnum"></a>
## Enum: AnnotationTypeEnum

* `FORMULA` (value: `"FORMULA"`)
* `INTERVAL` (value: `"INTERVAL"`)
* `EVENT` (value: `"EVENT"`)
* `TIME_SERIES` (value: `"TIME_SERIES"`)


<a name="OpacityEnum"></a>
## Enum: OpacityEnum

* `empty` (value: `""`)
* `opacityLow` (value: `"opacityLow"`)
* `opacityMedium` (value: `"opacityMedium"`)
* `opacityHigh` (value: `"opacityHigh"`)


<a name="SourceTypeEnum"></a>
## Enum: SourceTypeEnum

* `empty` (value: `""`)
* `line` (value: `"line"`)
* `NATIVE` (value: `"NATIVE"`)
* `table` (value: `"table"`)


<a name="StyleEnum"></a>
## Enum: StyleEnum

* `dashed` (value: `"dashed"`)
* `dotted` (value: `"dotted"`)
* `solid` (value: `"solid"`)
* `longDashed` (value: `"longDashed"`)

