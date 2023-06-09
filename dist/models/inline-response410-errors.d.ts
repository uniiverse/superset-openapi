/**
 * Superset
 * Superset
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface InlineResponse410Errors
 */
export interface InlineResponse410Errors {
    /**
     *
     * @type {string}
     * @memberof InlineResponse410Errors
     */
    errorType?: InlineResponse410ErrorsErrorTypeEnum;
    /**
     *
     * @type {any}
     * @memberof InlineResponse410Errors
     */
    extra?: any;
    /**
     *
     * @type {string}
     * @memberof InlineResponse410Errors
     */
    level?: InlineResponse410ErrorsLevelEnum;
    /**
     *
     * @type {string}
     * @memberof InlineResponse410Errors
     */
    message?: string;
}
/**
    * @export
    * @enum {string}
    */
export declare enum InlineResponse410ErrorsErrorTypeEnum {
    FRONTENDCSRFERROR = "FRONTEND_CSRF_ERROR",
    FRONTENDNETWORKERROR = "FRONTEND_NETWORK_ERROR",
    FRONTENDTIMEOUTERROR = "FRONTEND_TIMEOUT_ERROR",
    GENERICDBENGINEERROR = "GENERIC_DB_ENGINE_ERROR",
    COLUMNDOESNOTEXISTERROR = "COLUMN_DOES_NOT_EXIST_ERROR",
    TABLEDOESNOTEXISTERROR = "TABLE_DOES_NOT_EXIST_ERROR",
    SCHEMADOESNOTEXISTERROR = "SCHEMA_DOES_NOT_EXIST_ERROR",
    CONNECTIONINVALIDUSERNAMEERROR = "CONNECTION_INVALID_USERNAME_ERROR",
    CONNECTIONINVALIDPASSWORDERROR = "CONNECTION_INVALID_PASSWORD_ERROR",
    CONNECTIONINVALIDHOSTNAMEERROR = "CONNECTION_INVALID_HOSTNAME_ERROR",
    CONNECTIONPORTCLOSEDERROR = "CONNECTION_PORT_CLOSED_ERROR",
    CONNECTIONINVALIDPORTERROR = "CONNECTION_INVALID_PORT_ERROR",
    CONNECTIONHOSTDOWNERROR = "CONNECTION_HOST_DOWN_ERROR",
    CONNECTIONACCESSDENIEDERROR = "CONNECTION_ACCESS_DENIED_ERROR",
    CONNECTIONUNKNOWNDATABASEERROR = "CONNECTION_UNKNOWN_DATABASE_ERROR",
    CONNECTIONDATABASEPERMISSIONSERROR = "CONNECTION_DATABASE_PERMISSIONS_ERROR",
    CONNECTIONMISSINGPARAMETERSERROR = "CONNECTION_MISSING_PARAMETERS_ERROR",
    OBJECTDOESNOTEXISTERROR = "OBJECT_DOES_NOT_EXIST_ERROR",
    SYNTAXERROR = "SYNTAX_ERROR",
    CONNECTIONDATABASETIMEOUT = "CONNECTION_DATABASE_TIMEOUT",
    VIZGETDFERROR = "VIZ_GET_DF_ERROR",
    UNKNOWNDATASOURCETYPEERROR = "UNKNOWN_DATASOURCE_TYPE_ERROR",
    FAILEDFETCHINGDATASOURCEINFOERROR = "FAILED_FETCHING_DATASOURCE_INFO_ERROR",
    TABLESECURITYACCESSERROR = "TABLE_SECURITY_ACCESS_ERROR",
    DATASOURCESECURITYACCESSERROR = "DATASOURCE_SECURITY_ACCESS_ERROR",
    DATABASESECURITYACCESSERROR = "DATABASE_SECURITY_ACCESS_ERROR",
    QUERYSECURITYACCESSERROR = "QUERY_SECURITY_ACCESS_ERROR",
    MISSINGOWNERSHIPERROR = "MISSING_OWNERSHIP_ERROR",
    USERACTIVITYSECURITYACCESSERROR = "USER_ACTIVITY_SECURITY_ACCESS_ERROR",
    BACKENDTIMEOUTERROR = "BACKEND_TIMEOUT_ERROR",
    DATABASENOTFOUNDERROR = "DATABASE_NOT_FOUND_ERROR",
    MISSINGTEMPLATEPARAMSERROR = "MISSING_TEMPLATE_PARAMS_ERROR",
    INVALIDTEMPLATEPARAMSERROR = "INVALID_TEMPLATE_PARAMS_ERROR",
    RESULTSBACKENDNOTCONFIGUREDERROR = "RESULTS_BACKEND_NOT_CONFIGURED_ERROR",
    DMLNOTALLOWEDERROR = "DML_NOT_ALLOWED_ERROR",
    INVALIDCTASQUERYERROR = "INVALID_CTAS_QUERY_ERROR",
    INVALIDCVASQUERYERROR = "INVALID_CVAS_QUERY_ERROR",
    SQLLABTIMEOUTERROR = "SQLLAB_TIMEOUT_ERROR",
    RESULTSBACKENDERROR = "RESULTS_BACKEND_ERROR",
    ASYNCWORKERSERROR = "ASYNC_WORKERS_ERROR",
    ADHOCSUBQUERYNOTALLOWEDERROR = "ADHOC_SUBQUERY_NOT_ALLOWED_ERROR",
    GENERICCOMMANDERROR = "GENERIC_COMMAND_ERROR",
    GENERICBACKENDERROR = "GENERIC_BACKEND_ERROR",
    INVALIDPAYLOADFORMATERROR = "INVALID_PAYLOAD_FORMAT_ERROR",
    INVALIDPAYLOADSCHEMAERROR = "INVALID_PAYLOAD_SCHEMA_ERROR",
    REPORTNOTIFICATIONERROR = "REPORT_NOTIFICATION_ERROR"
}
/**
    * @export
    * @enum {string}
    */
export declare enum InlineResponse410ErrorsLevelEnum {
    Info = "info",
    Warning = "warning",
    Error = "error"
}
