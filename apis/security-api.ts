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
import { GuestTokenCreate } from '../models';
import { InlineResponse20043 } from '../models';
import { InlineResponse20054 } from '../models';
import { InlineResponse20055 } from '../models';
import { InlineResponse20056 } from '../models';
import { InlineResponse400 } from '../models';
import { SecurityLoginBody } from '../models';
/**
 * SecurityApi - axios parameter creator
 * @export
 */
export const SecurityApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetch the CSRF token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1SecurityCsrfTokenGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/security/csrf_token/`;
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
         * Fetches a guest token
         * @param {GuestTokenCreate} body Parameters for the guest token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1SecurityGuestTokenPost: async (body: GuestTokenCreate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling apiV1SecurityGuestTokenPost.');
            }
            const localVarPath = `/api/v1/security/guest_token/`;
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
        /**
         * Authenticate and get a JWT access and refresh token
         * @param {SecurityLoginBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1SecurityLoginPost: async (body: SecurityLoginBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling apiV1SecurityLoginPost.');
            }
            const localVarPath = `/api/v1/security/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
        /**
         * Use the refresh token to get a new JWT access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1SecurityRefreshPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/security/refresh`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt_refresh required

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
    }
};

/**
 * SecurityApi - functional programming interface
 * @export
 */
export const SecurityApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Fetch the CSRF token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1SecurityCsrfTokenGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20043>>> {
            const localVarAxiosArgs = await SecurityApiAxiosParamCreator(configuration).apiV1SecurityCsrfTokenGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetches a guest token
         * @param {GuestTokenCreate} body Parameters for the guest token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1SecurityGuestTokenPost(body: GuestTokenCreate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20054>>> {
            const localVarAxiosArgs = await SecurityApiAxiosParamCreator(configuration).apiV1SecurityGuestTokenPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Authenticate and get a JWT access and refresh token
         * @param {SecurityLoginBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1SecurityLoginPost(body: SecurityLoginBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20055>>> {
            const localVarAxiosArgs = await SecurityApiAxiosParamCreator(configuration).apiV1SecurityLoginPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Use the refresh token to get a new JWT access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1SecurityRefreshPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20056>>> {
            const localVarAxiosArgs = await SecurityApiAxiosParamCreator(configuration).apiV1SecurityRefreshPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SecurityApi - factory interface
 * @export
 */
export const SecurityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Fetch the CSRF token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1SecurityCsrfTokenGet(options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20043>> {
            return SecurityApiFp(configuration).apiV1SecurityCsrfTokenGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches a guest token
         * @param {GuestTokenCreate} body Parameters for the guest token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1SecurityGuestTokenPost(body: GuestTokenCreate, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20054>> {
            return SecurityApiFp(configuration).apiV1SecurityGuestTokenPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Authenticate and get a JWT access and refresh token
         * @param {SecurityLoginBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1SecurityLoginPost(body: SecurityLoginBody, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20055>> {
            return SecurityApiFp(configuration).apiV1SecurityLoginPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Use the refresh token to get a new JWT access token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1SecurityRefreshPost(options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20056>> {
            return SecurityApiFp(configuration).apiV1SecurityRefreshPost(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SecurityApi - object-oriented interface
 * @export
 * @class SecurityApi
 * @extends {BaseAPI}
 */
export class SecurityApi extends BaseAPI {
    /**
     * Fetch the CSRF token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public async apiV1SecurityCsrfTokenGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20043>> {
        return SecurityApiFp(this.configuration).apiV1SecurityCsrfTokenGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetches a guest token
     * @param {GuestTokenCreate} body Parameters for the guest token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public async apiV1SecurityGuestTokenPost(body: GuestTokenCreate, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20054>> {
        return SecurityApiFp(this.configuration).apiV1SecurityGuestTokenPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Authenticate and get a JWT access and refresh token
     * @param {SecurityLoginBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public async apiV1SecurityLoginPost(body: SecurityLoginBody, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20055>> {
        return SecurityApiFp(this.configuration).apiV1SecurityLoginPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Use the refresh token to get a new JWT access token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    public async apiV1SecurityRefreshPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20056>> {
        return SecurityApiFp(this.configuration).apiV1SecurityRefreshPost(options).then((request) => request(this.axios, this.basePath));
    }
}