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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ExplorePermalinkPostSchema } from '../models';
import { InlineResponse20017 } from '../models';
import { InlineResponse2017 } from '../models';
import { InlineResponse400 } from '../models';
/**
 * ExplorePermanentLinkApi - axios parameter creator
 * @export
 */
export const ExplorePermanentLinkApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrives chart state associated with a permanent link.
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ExplorePermalinkKeyGet: async (key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling apiV1ExplorePermalinkKeyGet.');
            }
            const localVarPath = `/api/v1/explore/permalink/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores a new permanent link.
         * @param {ExplorePermalinkPostSchema} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ExplorePermalinkPost: async (body: ExplorePermalinkPostSchema, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling apiV1ExplorePermalinkPost.');
            }
            const localVarPath = `/api/v1/explore/permalink`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ExplorePermanentLinkApi - functional programming interface
 * @export
 */
export const ExplorePermanentLinkApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrives chart state associated with a permanent link.
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1ExplorePermalinkKeyGet(key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20017>>> {
            const localVarAxiosArgs = await ExplorePermanentLinkApiAxiosParamCreator(configuration).apiV1ExplorePermalinkKeyGet(key, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Stores a new permanent link.
         * @param {ExplorePermalinkPostSchema} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1ExplorePermalinkPost(body: ExplorePermalinkPostSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2017>>> {
            const localVarAxiosArgs = await ExplorePermanentLinkApiAxiosParamCreator(configuration).apiV1ExplorePermalinkPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ExplorePermanentLinkApi - factory interface
 * @export
 */
export const ExplorePermanentLinkApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrives chart state associated with a permanent link.
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1ExplorePermalinkKeyGet(key: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20017>> {
            return ExplorePermanentLinkApiFp(configuration).apiV1ExplorePermalinkKeyGet(key, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores a new permanent link.
         * @param {ExplorePermalinkPostSchema} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1ExplorePermalinkPost(body: ExplorePermalinkPostSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2017>> {
            return ExplorePermanentLinkApiFp(configuration).apiV1ExplorePermalinkPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ExplorePermanentLinkApi - object-oriented interface
 * @export
 * @class ExplorePermanentLinkApi
 * @extends {BaseAPI}
 */
export class ExplorePermanentLinkApi extends BaseAPI {
    /**
     * Retrives chart state associated with a permanent link.
     * @param {string} key 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExplorePermanentLinkApi
     */
    public async apiV1ExplorePermalinkKeyGet(key: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20017>> {
        return ExplorePermanentLinkApiFp(this.configuration).apiV1ExplorePermalinkKeyGet(key, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Stores a new permanent link.
     * @param {ExplorePermalinkPostSchema} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExplorePermanentLinkApi
     */
    public async apiV1ExplorePermalinkPost(body: ExplorePermalinkPostSchema, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2017>> {
        return ExplorePermanentLinkApiFp(this.configuration).apiV1ExplorePermalinkPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
