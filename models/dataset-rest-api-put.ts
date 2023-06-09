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
import { DatasetColumnsPut } from './dataset-columns-put';
import { DatasetMetricsPut } from './dataset-metrics-put';
/**
 * 
 * @export
 * @interface DatasetRestApiPut
 */
export interface DatasetRestApiPut {
    /**
     * 
     * @type {number}
     * @memberof DatasetRestApiPut
     */
    cacheTimeout?: number | null;
    /**
     * 
     * @type {Array<DatasetColumnsPut>}
     * @memberof DatasetRestApiPut
     */
    columns?: Array<DatasetColumnsPut>;
    /**
     * 
     * @type {number}
     * @memberof DatasetRestApiPut
     */
    databaseId?: number;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiPut
     */
    defaultEndpoint?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiPut
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiPut
     */
    externalUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiPut
     */
    extra?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiPut
     */
    fetchValuesPredicate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetRestApiPut
     */
    filterSelectEnabled?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetRestApiPut
     */
    isManagedExternally?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetRestApiPut
     */
    isSqllabView?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiPut
     */
    mainDttmCol?: string | null;
    /**
     * 
     * @type {Array<DatasetMetricsPut>}
     * @memberof DatasetRestApiPut
     */
    metrics?: Array<DatasetMetricsPut>;
    /**
     * 
     * @type {number}
     * @memberof DatasetRestApiPut
     */
    offset?: number | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof DatasetRestApiPut
     */
    owners?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiPut
     */
    schema?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiPut
     */
    sql?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiPut
     */
    tableName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiPut
     */
    templateParams?: string | null;
}
