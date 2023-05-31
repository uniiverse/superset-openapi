"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnotationLayerStyleEnum = exports.AnnotationLayerSourceTypeEnum = exports.AnnotationLayerOpacityEnum = exports.AnnotationLayerAnnotationTypeEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var AnnotationLayerAnnotationTypeEnum;
(function (AnnotationLayerAnnotationTypeEnum) {
    AnnotationLayerAnnotationTypeEnum["FORMULA"] = "FORMULA";
    AnnotationLayerAnnotationTypeEnum["INTERVAL"] = "INTERVAL";
    AnnotationLayerAnnotationTypeEnum["EVENT"] = "EVENT";
    AnnotationLayerAnnotationTypeEnum["TIMESERIES"] = "TIME_SERIES";
})(AnnotationLayerAnnotationTypeEnum = exports.AnnotationLayerAnnotationTypeEnum || (exports.AnnotationLayerAnnotationTypeEnum = {}));
/**
    * @export
    * @enum {string}
    */
var AnnotationLayerOpacityEnum;
(function (AnnotationLayerOpacityEnum) {
    AnnotationLayerOpacityEnum["Empty"] = "";
    AnnotationLayerOpacityEnum["OpacityLow"] = "opacityLow";
    AnnotationLayerOpacityEnum["OpacityMedium"] = "opacityMedium";
    AnnotationLayerOpacityEnum["OpacityHigh"] = "opacityHigh";
})(AnnotationLayerOpacityEnum = exports.AnnotationLayerOpacityEnum || (exports.AnnotationLayerOpacityEnum = {}));
/**
    * @export
    * @enum {string}
    */
var AnnotationLayerSourceTypeEnum;
(function (AnnotationLayerSourceTypeEnum) {
    AnnotationLayerSourceTypeEnum["Empty"] = "";
    AnnotationLayerSourceTypeEnum["Line"] = "line";
    AnnotationLayerSourceTypeEnum["NATIVE"] = "NATIVE";
    AnnotationLayerSourceTypeEnum["Table"] = "table";
})(AnnotationLayerSourceTypeEnum = exports.AnnotationLayerSourceTypeEnum || (exports.AnnotationLayerSourceTypeEnum = {}));
/**
    * @export
    * @enum {string}
    */
var AnnotationLayerStyleEnum;
(function (AnnotationLayerStyleEnum) {
    AnnotationLayerStyleEnum["Dashed"] = "dashed";
    AnnotationLayerStyleEnum["Dotted"] = "dotted";
    AnnotationLayerStyleEnum["Solid"] = "solid";
    AnnotationLayerStyleEnum["LongDashed"] = "longDashed";
})(AnnotationLayerStyleEnum = exports.AnnotationLayerStyleEnum || (exports.AnnotationLayerStyleEnum = {}));
