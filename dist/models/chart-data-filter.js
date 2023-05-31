"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartDataFilterOpEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var ChartDataFilterOpEnum;
(function (ChartDataFilterOpEnum) {
    ChartDataFilterOpEnum[ChartDataFilterOpEnum["=="] = 0] = "==";
    ChartDataFilterOpEnum["NotEqual"] = "!=";
    ChartDataFilterOpEnum["GreaterThan"] = ">";
    ChartDataFilterOpEnum["LessThan"] = "<";
    ChartDataFilterOpEnum["GreaterThanOrEqualTo"] = ">=";
    ChartDataFilterOpEnum["LessThanOrEqualTo"] = "<=";
    ChartDataFilterOpEnum["LIKE"] = "LIKE";
    ChartDataFilterOpEnum["ILIKE"] = "ILIKE";
    ChartDataFilterOpEnum["ISNULL"] = "IS NULL";
    ChartDataFilterOpEnum["ISNOTNULL"] = "IS NOT NULL";
    ChartDataFilterOpEnum["IN"] = "IN";
    ChartDataFilterOpEnum["NOTIN"] = "NOT IN";
    ChartDataFilterOpEnum["REGEX"] = "REGEX";
    ChartDataFilterOpEnum["ISTRUE"] = "IS TRUE";
    ChartDataFilterOpEnum["ISFALSE"] = "IS FALSE";
    ChartDataFilterOpEnum["TEMPORALRANGE"] = "TEMPORAL_RANGE";
})(ChartDataFilterOpEnum = exports.ChartDataFilterOpEnum || (exports.ChartDataFilterOpEnum = {}));
