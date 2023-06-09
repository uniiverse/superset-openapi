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
import { DatabaseRelatedChart } from './database-related-chart';
/**
 *
 * @export
 * @interface DatabaseRelatedCharts
 */
export interface DatabaseRelatedCharts {
    /**
     * Chart count
     * @type {number}
     * @memberof DatabaseRelatedCharts
     */
    count?: number;
    /**
     * A list of dashboards
     * @type {Array<DatabaseRelatedChart>}
     * @memberof DatabaseRelatedCharts
     */
    result?: Array<DatabaseRelatedChart>;
}
