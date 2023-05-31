"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartDataAdhocMetricSchemaExpressionTypeEnum = exports.ChartDataAdhocMetricSchemaAggregateEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var ChartDataAdhocMetricSchemaAggregateEnum;
(function (ChartDataAdhocMetricSchemaAggregateEnum) {
    ChartDataAdhocMetricSchemaAggregateEnum["AVG"] = "AVG";
    ChartDataAdhocMetricSchemaAggregateEnum["COUNT"] = "COUNT";
    ChartDataAdhocMetricSchemaAggregateEnum["COUNTDISTINCT"] = "COUNT_DISTINCT";
    ChartDataAdhocMetricSchemaAggregateEnum["MAX"] = "MAX";
    ChartDataAdhocMetricSchemaAggregateEnum["MIN"] = "MIN";
    ChartDataAdhocMetricSchemaAggregateEnum["SUM"] = "SUM";
})(ChartDataAdhocMetricSchemaAggregateEnum = exports.ChartDataAdhocMetricSchemaAggregateEnum || (exports.ChartDataAdhocMetricSchemaAggregateEnum = {}));
/**
    * @export
    * @enum {string}
    */
var ChartDataAdhocMetricSchemaExpressionTypeEnum;
(function (ChartDataAdhocMetricSchemaExpressionTypeEnum) {
    ChartDataAdhocMetricSchemaExpressionTypeEnum["SIMPLE"] = "SIMPLE";
    ChartDataAdhocMetricSchemaExpressionTypeEnum["SQL"] = "SQL";
})(ChartDataAdhocMetricSchemaExpressionTypeEnum = exports.ChartDataAdhocMetricSchemaExpressionTypeEnum || (exports.ChartDataAdhocMetricSchemaExpressionTypeEnum = {}));
