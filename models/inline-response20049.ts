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
import { ReportExecutionLogRestApiGetList } from './report-execution-log-rest-api-get-list';
/**
 * 
 * @export
 * @interface InlineResponse20049
 */
export interface InlineResponse20049 {
    /**
     * The total record count on the backend
     * @type {number}
     * @memberof InlineResponse20049
     */
    count?: number;
    /**
     * A list of log ids
     * @type {Array<string>}
     * @memberof InlineResponse20049
     */
    ids?: Array<string>;
    /**
     * The result from the get list query
     * @type {Array<ReportExecutionLogRestApiGetList>}
     * @memberof InlineResponse20049
     */
    result?: Array<ReportExecutionLogRestApiGetList>;
}
