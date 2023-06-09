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
/**
 * OpenApiApi - axios parameter creator
 * @export
 */
export declare const OpenApiApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Get the OpenAPI spec for a specific API version
     * @param {string} version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiVersionOpenapiGet: (version: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * OpenApiApi - functional programming interface
 * @export
 */
export declare const OpenApiApiFp: (configuration?: Configuration) => {
    /**
     * Get the OpenAPI spec for a specific API version
     * @param {string} version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiVersionOpenapiGet(version: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>>;
};
/**
 * OpenApiApi - factory interface
 * @export
 */
export declare const OpenApiApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Get the OpenAPI spec for a specific API version
     * @param {string} version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiVersionOpenapiGet(version: string, options?: AxiosRequestConfig): Promise<AxiosResponse<any>>;
};
/**
 * OpenApiApi - object-oriented interface
 * @export
 * @class OpenApiApi
 * @extends {BaseAPI}
 */
export declare class OpenApiApi extends BaseAPI {
    /**
     * Get the OpenAPI spec for a specific API version
     * @param {string} version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpenApiApi
     */
    apiVersionOpenapiGet(version: string, options?: AxiosRequestConfig): Promise<AxiosResponse<any>>;
}
