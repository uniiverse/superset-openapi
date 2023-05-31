"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse410ErrorsLevelEnum = exports.InlineResponse410ErrorsErrorTypeEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var InlineResponse410ErrorsErrorTypeEnum;
(function (InlineResponse410ErrorsErrorTypeEnum) {
    InlineResponse410ErrorsErrorTypeEnum["FRONTENDCSRFERROR"] = "FRONTEND_CSRF_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["FRONTENDNETWORKERROR"] = "FRONTEND_NETWORK_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["FRONTENDTIMEOUTERROR"] = "FRONTEND_TIMEOUT_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["GENERICDBENGINEERROR"] = "GENERIC_DB_ENGINE_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["COLUMNDOESNOTEXISTERROR"] = "COLUMN_DOES_NOT_EXIST_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["TABLEDOESNOTEXISTERROR"] = "TABLE_DOES_NOT_EXIST_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["SCHEMADOESNOTEXISTERROR"] = "SCHEMA_DOES_NOT_EXIST_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["CONNECTIONINVALIDUSERNAMEERROR"] = "CONNECTION_INVALID_USERNAME_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["CONNECTIONINVALIDPASSWORDERROR"] = "CONNECTION_INVALID_PASSWORD_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["CONNECTIONINVALIDHOSTNAMEERROR"] = "CONNECTION_INVALID_HOSTNAME_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["CONNECTIONPORTCLOSEDERROR"] = "CONNECTION_PORT_CLOSED_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["CONNECTIONINVALIDPORTERROR"] = "CONNECTION_INVALID_PORT_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["CONNECTIONHOSTDOWNERROR"] = "CONNECTION_HOST_DOWN_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["CONNECTIONACCESSDENIEDERROR"] = "CONNECTION_ACCESS_DENIED_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["CONNECTIONUNKNOWNDATABASEERROR"] = "CONNECTION_UNKNOWN_DATABASE_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["CONNECTIONDATABASEPERMISSIONSERROR"] = "CONNECTION_DATABASE_PERMISSIONS_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["CONNECTIONMISSINGPARAMETERSERROR"] = "CONNECTION_MISSING_PARAMETERS_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["OBJECTDOESNOTEXISTERROR"] = "OBJECT_DOES_NOT_EXIST_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["SYNTAXERROR"] = "SYNTAX_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["CONNECTIONDATABASETIMEOUT"] = "CONNECTION_DATABASE_TIMEOUT";
    InlineResponse410ErrorsErrorTypeEnum["VIZGETDFERROR"] = "VIZ_GET_DF_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["UNKNOWNDATASOURCETYPEERROR"] = "UNKNOWN_DATASOURCE_TYPE_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["FAILEDFETCHINGDATASOURCEINFOERROR"] = "FAILED_FETCHING_DATASOURCE_INFO_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["TABLESECURITYACCESSERROR"] = "TABLE_SECURITY_ACCESS_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["DATASOURCESECURITYACCESSERROR"] = "DATASOURCE_SECURITY_ACCESS_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["DATABASESECURITYACCESSERROR"] = "DATABASE_SECURITY_ACCESS_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["QUERYSECURITYACCESSERROR"] = "QUERY_SECURITY_ACCESS_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["MISSINGOWNERSHIPERROR"] = "MISSING_OWNERSHIP_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["USERACTIVITYSECURITYACCESSERROR"] = "USER_ACTIVITY_SECURITY_ACCESS_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["BACKENDTIMEOUTERROR"] = "BACKEND_TIMEOUT_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["DATABASENOTFOUNDERROR"] = "DATABASE_NOT_FOUND_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["MISSINGTEMPLATEPARAMSERROR"] = "MISSING_TEMPLATE_PARAMS_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["INVALIDTEMPLATEPARAMSERROR"] = "INVALID_TEMPLATE_PARAMS_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["RESULTSBACKENDNOTCONFIGUREDERROR"] = "RESULTS_BACKEND_NOT_CONFIGURED_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["DMLNOTALLOWEDERROR"] = "DML_NOT_ALLOWED_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["INVALIDCTASQUERYERROR"] = "INVALID_CTAS_QUERY_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["INVALIDCVASQUERYERROR"] = "INVALID_CVAS_QUERY_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["SQLLABTIMEOUTERROR"] = "SQLLAB_TIMEOUT_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["RESULTSBACKENDERROR"] = "RESULTS_BACKEND_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["ASYNCWORKERSERROR"] = "ASYNC_WORKERS_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["ADHOCSUBQUERYNOTALLOWEDERROR"] = "ADHOC_SUBQUERY_NOT_ALLOWED_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["GENERICCOMMANDERROR"] = "GENERIC_COMMAND_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["GENERICBACKENDERROR"] = "GENERIC_BACKEND_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["INVALIDPAYLOADFORMATERROR"] = "INVALID_PAYLOAD_FORMAT_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["INVALIDPAYLOADSCHEMAERROR"] = "INVALID_PAYLOAD_SCHEMA_ERROR";
    InlineResponse410ErrorsErrorTypeEnum["REPORTNOTIFICATIONERROR"] = "REPORT_NOTIFICATION_ERROR";
})(InlineResponse410ErrorsErrorTypeEnum = exports.InlineResponse410ErrorsErrorTypeEnum || (exports.InlineResponse410ErrorsErrorTypeEnum = {}));
/**
    * @export
    * @enum {string}
    */
var InlineResponse410ErrorsLevelEnum;
(function (InlineResponse410ErrorsLevelEnum) {
    InlineResponse410ErrorsLevelEnum["Info"] = "info";
    InlineResponse410ErrorsLevelEnum["Warning"] = "warning";
    InlineResponse410ErrorsLevelEnum["Error"] = "error";
})(InlineResponse410ErrorsLevelEnum = exports.InlineResponse410ErrorsLevelEnum || (exports.InlineResponse410ErrorsLevelEnum = {}));
