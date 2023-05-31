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
import { QueryRestApiGetDatabase } from './query-rest-api-get-database';
/**
 *
 * @export
 * @interface QueryRestApiGet
 */
export interface QueryRestApiGet {
    /**
     *
     * @type {Date}
     * @memberof QueryRestApiGet
     */
    changedOn?: Date | null;
    /**
     *
     * @type {string}
     * @memberof QueryRestApiGet
     */
    clientId: string;
    /**
     *
     * @type {QueryRestApiGetDatabase}
     * @memberof QueryRestApiGet
     */
    database: QueryRestApiGetDatabase;
    /**
     *
     * @type {number}
     * @memberof QueryRestApiGet
     */
    endResultBackendTime?: number | null;
    /**
     *
     * @type {number}
     * @memberof QueryRestApiGet
     */
    endTime?: number | null;
    /**
     *
     * @type {string}
     * @memberof QueryRestApiGet
     */
    errorMessage?: string | null;
    /**
     *
     * @type {string}
     * @memberof QueryRestApiGet
     */
    executedSql?: string | null;
    /**
     *
     * @type {number}
     * @memberof QueryRestApiGet
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof QueryRestApiGet
     */
    limit?: number | null;
    /**
     *
     * @type {number}
     * @memberof QueryRestApiGet
     */
    progress?: number | null;
    /**
     *
     * @type {string}
     * @memberof QueryRestApiGet
     */
    resultsKey?: string | null;
    /**
     *
     * @type {number}
     * @memberof QueryRestApiGet
     */
    rows?: number | null;
    /**
     *
     * @type {string}
     * @memberof QueryRestApiGet
     */
    schema?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof QueryRestApiGet
     */
    selectAsCta?: boolean | null;
    /**
     *
     * @type {boolean}
     * @memberof QueryRestApiGet
     */
    selectAsCtaUsed?: boolean | null;
    /**
     *
     * @type {string}
     * @memberof QueryRestApiGet
     */
    selectSql?: string | null;
    /**
     *
     * @type {string}
     * @memberof QueryRestApiGet
     */
    sql?: string | null;
    /**
     *
     * @type {string}
     * @memberof QueryRestApiGet
     */
    sqlEditorId?: string | null;
    /**
     *
     * @type {number}
     * @memberof QueryRestApiGet
     */
    startRunningTime?: number | null;
    /**
     *
     * @type {number}
     * @memberof QueryRestApiGet
     */
    startTime?: number | null;
    /**
     *
     * @type {string}
     * @memberof QueryRestApiGet
     */
    status?: string | null;
    /**
     *
     * @type {string}
     * @memberof QueryRestApiGet
     */
    tabName?: string | null;
    /**
     *
     * @type {string}
     * @memberof QueryRestApiGet
     */
    tmpSchemaName?: string | null;
    /**
     *
     * @type {string}
     * @memberof QueryRestApiGet
     */
    tmpTableName?: string | null;
    /**
     *
     * @type {any}
     * @memberof QueryRestApiGet
     */
    trackingUrl?: any;
}