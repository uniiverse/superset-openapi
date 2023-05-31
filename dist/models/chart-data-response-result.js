"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartDataResponseResultStatusEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var ChartDataResponseResultStatusEnum;
(function (ChartDataResponseResultStatusEnum) {
    ChartDataResponseResultStatusEnum["Stopped"] = "stopped";
    ChartDataResponseResultStatusEnum["Failed"] = "failed";
    ChartDataResponseResultStatusEnum["Pending"] = "pending";
    ChartDataResponseResultStatusEnum["Running"] = "running";
    ChartDataResponseResultStatusEnum["Scheduled"] = "scheduled";
    ChartDataResponseResultStatusEnum["Success"] = "success";
    ChartDataResponseResultStatusEnum["TimedOut"] = "timed_out";
})(ChartDataResponseResultStatusEnum = exports.ChartDataResponseResultStatusEnum || (exports.ChartDataResponseResultStatusEnum = {}));
