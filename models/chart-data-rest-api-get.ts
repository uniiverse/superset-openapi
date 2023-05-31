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
import { ChartDataRestApiGetDashboard } from './chart-data-rest-api-get-dashboard';
import { ChartDataRestApiGetUser } from './chart-data-rest-api-get-user';
/**
 * 
 * @export
 * @interface ChartDataRestApiGet
 */
export interface ChartDataRestApiGet {
    /**
     * 
     * @type {number}
     * @memberof ChartDataRestApiGet
     */
    cacheTimeout?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ChartDataRestApiGet
     */
    certificationDetails?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChartDataRestApiGet
     */
    certifiedBy?: string | null;
    /**
     * 
     * @type {any}
     * @memberof ChartDataRestApiGet
     */
    changedOnDeltaHumanized?: any;
    /**
     * 
     * @type {ChartDataRestApiGetDashboard}
     * @memberof ChartDataRestApiGet
     */
    dashboards?: ChartDataRestApiGetDashboard;
    /**
     * 
     * @type {string}
     * @memberof ChartDataRestApiGet
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ChartDataRestApiGet
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ChartDataRestApiGet
     */
    isManagedExternally?: boolean;
    /**
     * 
     * @type {ChartDataRestApiGetUser}
     * @memberof ChartDataRestApiGet
     */
    owners?: ChartDataRestApiGetUser;
    /**
     * 
     * @type {string}
     * @memberof ChartDataRestApiGet
     */
    params?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChartDataRestApiGet
     */
    queryContext?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChartDataRestApiGet
     */
    sliceName?: string | null;
    /**
     * 
     * @type {any}
     * @memberof ChartDataRestApiGet
     */
    thumbnailUrl?: any;
    /**
     * 
     * @type {any}
     * @memberof ChartDataRestApiGet
     */
    url?: any;
    /**
     * 
     * @type {string}
     * @memberof ChartDataRestApiGet
     */
    vizType?: string | null;
}