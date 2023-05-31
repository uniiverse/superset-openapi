"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorConfigJSONOpEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var ValidatorConfigJSONOpEnum;
(function (ValidatorConfigJSONOpEnum) {
    ValidatorConfigJSONOpEnum["LessThan"] = "<";
    ValidatorConfigJSONOpEnum["LessThanOrEqualTo"] = "<=";
    ValidatorConfigJSONOpEnum["GreaterThan"] = ">";
    ValidatorConfigJSONOpEnum["GreaterThanOrEqualTo"] = ">=";
    ValidatorConfigJSONOpEnum[ValidatorConfigJSONOpEnum["=="] = void 0] = "==";
    ValidatorConfigJSONOpEnum["NotEqual"] = "!=";
})(ValidatorConfigJSONOpEnum = exports.ValidatorConfigJSONOpEnum || (exports.ValidatorConfigJSONOpEnum = {}));
