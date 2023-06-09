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
/**
 * 
 * @export
 * @interface DatasetImportBody
 */
export interface DatasetImportBody {
    /**
     * upload file (ZIP or YAML)
     * @type {Blob}
     * @memberof DatasetImportBody
     */
    formData?: Blob;
    /**
     * overwrite existing datasets?
     * @type {boolean}
     * @memberof DatasetImportBody
     */
    overwrite?: boolean;
    /**
     * JSON map of passwords for each featured database in the ZIP file. If the ZIP includes a database config in the path `databases/MyDatabase.yaml`, the password should be provided in the following format: `{\"databases/MyDatabase.yaml\": \"my_password\"}`.
     * @type {string}
     * @memberof DatasetImportBody
     */
    passwords?: string;
    /**
     * sync columns?
     * @type {boolean}
     * @memberof DatasetImportBody
     */
    syncColumns?: boolean;
    /**
     * sync metrics?
     * @type {boolean}
     * @memberof DatasetImportBody
     */
    syncMetrics?: boolean;
}
