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
import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { DashboardPermalinkPostSchema } from '../models';
import { InlineResponse20017 } from '../models';
import { InlineResponse2017 } from '../models';
/**
 * DashboardPermanentLinkApi - axios parameter creator
 * @export
 */
export declare const DashboardPermanentLinkApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Retrives dashboard state associated with a permanent link.
     * @param {string} key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DashboardPermalinkKeyGet: (key: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Stores a new permanent link.
     * @param {DashboardPermalinkPostSchema} body
     * @param {string} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DashboardPkPermalinkPost: (body: DashboardPermalinkPostSchema, pk: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * DashboardPermanentLinkApi - functional programming interface
 * @export
 */
export declare const DashboardPermanentLinkApiFp: (configuration?: Configuration) => {
    /**
     * Retrives dashboard state associated with a permanent link.
     * @param {string} key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DashboardPermalinkKeyGet(key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20017>>>;
    /**
     * Stores a new permanent link.
     * @param {DashboardPermalinkPostSchema} body
     * @param {string} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DashboardPkPermalinkPost(body: DashboardPermalinkPostSchema, pk: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2017>>>;
};
/**
 * DashboardPermanentLinkApi - factory interface
 * @export
 */
export declare const DashboardPermanentLinkApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Retrives dashboard state associated with a permanent link.
     * @param {string} key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DashboardPermalinkKeyGet(key: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20017>>;
    /**
     * Stores a new permanent link.
     * @param {DashboardPermalinkPostSchema} body
     * @param {string} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DashboardPkPermalinkPost(body: DashboardPermalinkPostSchema, pk: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2017>>;
};
/**
 * DashboardPermanentLinkApi - object-oriented interface
 * @export
 * @class DashboardPermanentLinkApi
 * @extends {BaseAPI}
 */
export declare class DashboardPermanentLinkApi extends BaseAPI {
    /**
     * Retrives dashboard state associated with a permanent link.
     * @param {string} key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DashboardPermanentLinkApi
     */
    apiV1DashboardPermalinkKeyGet(key: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20017>>;
    /**
     * Stores a new permanent link.
     * @param {DashboardPermalinkPostSchema} body
     * @param {string} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DashboardPermanentLinkApi
     */
    apiV1DashboardPkPermalinkPost(body: DashboardPermalinkPostSchema, pk: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2017>>;
}
