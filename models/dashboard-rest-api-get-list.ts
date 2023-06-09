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
import { DashboardRestApiGetListRole } from './dashboard-rest-api-get-list-role';
import { DashboardRestApiGetListUser } from './dashboard-rest-api-get-list-user';
import { DashboardRestApiGetListUser1 } from './dashboard-rest-api-get-list-user1';
import { DashboardRestApiGetListUser2 } from './dashboard-rest-api-get-list-user2';
/**
 * 
 * @export
 * @interface DashboardRestApiGetList
 */
export interface DashboardRestApiGetList {
    /**
     * 
     * @type {string}
     * @memberof DashboardRestApiGetList
     */
    certificationDetails?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DashboardRestApiGetList
     */
    certifiedBy?: string | null;
    /**
     * 
     * @type {DashboardRestApiGetListUser2}
     * @memberof DashboardRestApiGetList
     */
    changedBy?: DashboardRestApiGetListUser2;
    /**
     * 
     * @type {any}
     * @memberof DashboardRestApiGetList
     */
    changedByName?: any;
    /**
     * 
     * @type {any}
     * @memberof DashboardRestApiGetList
     */
    changedByUrl?: any;
    /**
     * 
     * @type {any}
     * @memberof DashboardRestApiGetList
     */
    changedOnDeltaHumanized?: any;
    /**
     * 
     * @type {any}
     * @memberof DashboardRestApiGetList
     */
    changedOnUtc?: any;
    /**
     * 
     * @type {DashboardRestApiGetListUser1}
     * @memberof DashboardRestApiGetList
     */
    createdBy?: DashboardRestApiGetListUser1;
    /**
     * 
     * @type {any}
     * @memberof DashboardRestApiGetList
     */
    createdOnDeltaHumanized?: any;
    /**
     * 
     * @type {string}
     * @memberof DashboardRestApiGetList
     */
    css?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DashboardRestApiGetList
     */
    dashboardTitle?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DashboardRestApiGetList
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof DashboardRestApiGetList
     */
    isManagedExternally?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DashboardRestApiGetList
     */
    jsonMetadata?: string | null;
    /**
     * 
     * @type {DashboardRestApiGetListUser}
     * @memberof DashboardRestApiGetList
     */
    owners?: DashboardRestApiGetListUser;
    /**
     * 
     * @type {string}
     * @memberof DashboardRestApiGetList
     */
    positionJson?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DashboardRestApiGetList
     */
    published?: boolean | null;
    /**
     * 
     * @type {DashboardRestApiGetListRole}
     * @memberof DashboardRestApiGetList
     */
    roles?: DashboardRestApiGetListRole;
    /**
     * 
     * @type {string}
     * @memberof DashboardRestApiGetList
     */
    slug?: string | null;
    /**
     * 
     * @type {any}
     * @memberof DashboardRestApiGetList
     */
    status?: any;
    /**
     * 
     * @type {any}
     * @memberof DashboardRestApiGetList
     */
    thumbnailUrl?: any;
    /**
     * 
     * @type {any}
     * @memberof DashboardRestApiGetList
     */
    url?: any;
}
