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
 * @interface Slice
 */
export interface Slice {
    /**
     * Duration (in seconds) of the caching timeout for this chart.
     * @type {number}
     * @memberof Slice
     */
    cacheTimeout?: number;
    /**
     * Details of the certification.
     * @type {string}
     * @memberof Slice
     */
    certificationDetails?: string;
    /**
     * Person or group that has certified this dashboard.
     * @type {string}
     * @memberof Slice
     */
    certifiedBy?: string;
    /**
     * Timestamp of the last modification.
     * @type {string}
     * @memberof Slice
     */
    changedOn?: string;
    /**
     * Timestamp of the last modification in human readable form.
     * @type {string}
     * @memberof Slice
     */
    changedOnHumanized?: string;
    /**
     * Datasource identifier.
     * @type {string}
     * @memberof Slice
     */
    datasource?: string;
    /**
     * Slice description.
     * @type {string}
     * @memberof Slice
     */
    description?: string;
    /**
     * Sanitized HTML version of the chart description.
     * @type {string}
     * @memberof Slice
     */
    descriptionMarkeddown?: string;
    /**
     * The URL for editing the slice.
     * @type {string}
     * @memberof Slice
     */
    editUrl?: string;
    /**
     * Form data associated with the slice.
     * @type {any}
     * @memberof Slice
     */
    formData?: any;
    /**
     * If the chart is managed outside externally.
     * @type {boolean}
     * @memberof Slice
     */
    isManagedExternally?: boolean;
    /**
     * Last modification in human readable form.
     * @type {string}
     * @memberof Slice
     */
    modified?: string;
    /**
     * Owners identifiers.
     * @type {Array<number>}
     * @memberof Slice
     */
    owners?: Array<number>;
    /**
     * The context associated with the query.
     * @type {any}
     * @memberof Slice
     */
    queryContext?: any;
    /**
     * The slice ID.
     * @type {number}
     * @memberof Slice
     */
    sliceId?: number;
    /**
     * The slice name.
     * @type {string}
     * @memberof Slice
     */
    sliceName?: string;
    /**
     * The slice URL.
     * @type {string}
     * @memberof Slice
     */
    sliceUrl?: string;
}
