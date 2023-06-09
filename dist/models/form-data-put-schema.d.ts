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
 * @interface FormDataPutSchema
 */
export interface FormDataPutSchema {
    /**
     * The chart ID
     * @type {number}
     * @memberof FormDataPutSchema
     */
    chartId?: number;
    /**
     * The datasource ID
     * @type {number}
     * @memberof FormDataPutSchema
     */
    datasourceId: number;
    /**
     * The datasource type
     * @type {string}
     * @memberof FormDataPutSchema
     */
    datasourceType: FormDataPutSchemaDatasourceTypeEnum;
    /**
     * Any type of JSON supported text.
     * @type {string}
     * @memberof FormDataPutSchema
     */
    formData: string;
}
/**
    * @export
    * @enum {string}
    */
export declare enum FormDataPutSchemaDatasourceTypeEnum {
    SlTable = "sl_table",
    Table = "table",
    Dataset = "dataset",
    Query = "query",
    SavedQuery = "saved_query",
    View = "view"
}
