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
 * @interface DashboardRestApiPost
 */
export interface DashboardRestApiPost {
    /**
     * Details of the certification
     * @type {string}
     * @memberof DashboardRestApiPost
     */
    certificationDetails?: string | null;
    /**
     * Person or group that has certified this dashboard
     * @type {string}
     * @memberof DashboardRestApiPost
     */
    certifiedBy?: string | null;
    /**
     *
     * @type {string}
     * @memberof DashboardRestApiPost
     */
    css?: string;
    /**
     * A title for the dashboard.
     * @type {string}
     * @memberof DashboardRestApiPost
     */
    dashboardTitle?: string | null;
    /**
     *
     * @type {string}
     * @memberof DashboardRestApiPost
     */
    externalUrl?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof DashboardRestApiPost
     */
    isManagedExternally?: boolean | null;
    /**
     * This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter  specific parameters.
     * @type {string}
     * @memberof DashboardRestApiPost
     */
    jsonMetadata?: string;
    /**
     *
     * @type {Array<number>}
     * @memberof DashboardRestApiPost
     */
    owners?: Array<number>;
    /**
     * This json object describes the positioning of the widgets in the dashboard. It is dynamically generated when adjusting the widgets size and positions by using drag & drop in the dashboard view
     * @type {string}
     * @memberof DashboardRestApiPost
     */
    positionJson?: string;
    /**
     * Determines whether or not this dashboard is visible in the list of all dashboards.
     * @type {boolean}
     * @memberof DashboardRestApiPost
     */
    published?: boolean;
    /**
     *
     * @type {Array<number>}
     * @memberof DashboardRestApiPost
     */
    roles?: Array<number>;
    /**
     * Unique identifying part for the web address of the dashboard.
     * @type {string}
     * @memberof DashboardRestApiPost
     */
    slug?: string | null;
}