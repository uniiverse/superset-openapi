/* tslint:disable */
/* eslint-disable */
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
import { LogRestApiGetListUser } from './log-rest-api-get-list-user';
/**
 * 
 * @export
 * @interface LogRestApiGetList
 */
export interface LogRestApiGetList {
    /**
     * 
     * @type {string}
     * @memberof LogRestApiGetList
     */
    action?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LogRestApiGetList
     */
    dashboardId?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof LogRestApiGetList
     */
    dttm?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof LogRestApiGetList
     */
    durationMs?: number | null;
    /**
     * 
     * @type {string}
     * @memberof LogRestApiGetList
     */
    json?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LogRestApiGetList
     */
    referrer?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LogRestApiGetList
     */
    sliceId?: number | null;
    /**
     * 
     * @type {LogRestApiGetListUser}
     * @memberof LogRestApiGetList
     */
    user?: LogRestApiGetListUser;
    /**
     * 
     * @type {number}
     * @memberof LogRestApiGetList
     */
    userId?: number | null;
}
