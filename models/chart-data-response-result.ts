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
 * @interface ChartDataResponseResult
 */
export interface ChartDataResponseResult {
    /**
     * All requested annotation data
     * @type {Array<{ [key: string]: string; }>}
     * @memberof ChartDataResponseResult
     */
    annotationData?: Array<{ [key: string]: string; }> | null;
    /**
     * A list with applied filters
     * @type {Array<any>}
     * @memberof ChartDataResponseResult
     */
    appliedFilters?: Array<any>;
    /**
     * Unique cache key for query object
     * @type {string}
     * @memberof ChartDataResponseResult
     */
    cacheKey: string | null;
    /**
     * Cache timeout in following order: custom timeout, datasource timeout, cache default timeout, config default cache timeout.
     * @type {number}
     * @memberof ChartDataResponseResult
     */
    cacheTimeout: number | null;
    /**
     * Cache timestamp
     * @type {string}
     * @memberof ChartDataResponseResult
     */
    cachedDttm: string | null;
    /**
     * A list of column names
     * @type {Array<string>}
     * @memberof ChartDataResponseResult
     */
    colnames?: Array<string>;
    /**
     * A list of generic data types of each column
     * @type {Array<number>}
     * @memberof ChartDataResponseResult
     */
    coltypes?: Array<number>;
    /**
     * A list with results
     * @type {Array<any>}
     * @memberof ChartDataResponseResult
     */
    data?: Array<any>;
    /**
     * Error
     * @type {string}
     * @memberof ChartDataResponseResult
     */
    error?: string | null;
    /**
     * Start timestamp of time range
     * @type {number}
     * @memberof ChartDataResponseResult
     */
    fromDttm?: number | null;
    /**
     * Is the result cached
     * @type {boolean}
     * @memberof ChartDataResponseResult
     */
    isCached: boolean;
    /**
     * The executed query statement
     * @type {string}
     * @memberof ChartDataResponseResult
     */
    query: string;
    /**
     * A list with rejected filters
     * @type {Array<any>}
     * @memberof ChartDataResponseResult
     */
    rejectedFilters?: Array<any>;
    /**
     * Amount of rows in result set
     * @type {number}
     * @memberof ChartDataResponseResult
     */
    rowcount?: number;
    /**
     * Stacktrace if there was an error
     * @type {string}
     * @memberof ChartDataResponseResult
     */
    stacktrace?: string | null;
    /**
     * Status of the query
     * @type {string}
     * @memberof ChartDataResponseResult
     */
    status?: ChartDataResponseResultStatusEnum;
    /**
     * End timestamp of time range
     * @type {number}
     * @memberof ChartDataResponseResult
     */
    toDttm?: number | null;
}

/**
    * @export
    * @enum {string}
    */
export enum ChartDataResponseResultStatusEnum {
    Stopped = 'stopped',
    Failed = 'failed',
    Pending = 'pending',
    Running = 'running',
    Scheduled = 'scheduled',
    Success = 'success',
    TimedOut = 'timed_out'
}

