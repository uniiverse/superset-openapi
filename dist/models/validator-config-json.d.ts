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
 * @interface ValidatorConfigJSON
 */
export interface ValidatorConfigJSON {
    /**
     * The operation to compare with a threshold to apply to the SQL output
     * @type {string}
     * @memberof ValidatorConfigJSON
     */
    op?: ValidatorConfigJSONOpEnum;
    /**
     *
     * @type {number}
     * @memberof ValidatorConfigJSON
     */
    threshold?: number;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ValidatorConfigJSONOpEnum {
    LessThan = "<",
    LessThanOrEqualTo = "<=",
    GreaterThan = ">",
    GreaterThanOrEqualTo = ">=",
    '==',
    NotEqual = "!="
}
