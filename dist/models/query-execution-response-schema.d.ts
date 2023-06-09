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
import { QueryResult } from './query-result';
/**
 *
 * @export
 * @interface QueryExecutionResponseSchema
 */
export interface QueryExecutionResponseSchema {
    /**
     *
     * @type {Array<any>}
     * @memberof QueryExecutionResponseSchema
     */
    columns?: Array<any>;
    /**
     *
     * @type {Array<any>}
     * @memberof QueryExecutionResponseSchema
     */
    data?: Array<any>;
    /**
     *
     * @type {Array<any>}
     * @memberof QueryExecutionResponseSchema
     */
    expandedColumns?: Array<any>;
    /**
     *
     * @type {QueryResult}
     * @memberof QueryExecutionResponseSchema
     */
    query?: QueryResult;
    /**
     *
     * @type {number}
     * @memberof QueryExecutionResponseSchema
     */
    queryId?: number;
    /**
     *
     * @type {Array<any>}
     * @memberof QueryExecutionResponseSchema
     */
    selectedColumns?: Array<any>;
    /**
     *
     * @type {string}
     * @memberof QueryExecutionResponseSchema
     */
    status?: string;
}
