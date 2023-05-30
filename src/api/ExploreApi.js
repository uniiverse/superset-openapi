/*
 * Superset
 * Superset
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.44
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {ExploreContextSchema} from '../model/ExploreContextSchema';
import {InlineResponse400} from '../model/InlineResponse400';

/**
* Explore service.
* @module api/ExploreApi
* @version v1
*/
export class ExploreApi {

    /**
    * Constructs a new ExploreApi. 
    * @alias module:api/ExploreApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the apiV1ExploreGet operation.
     * @callback moduleapi/ExploreApi~apiV1ExploreGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExploreContextSchema{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assembles Explore related information (form_data, slice, dataset)\\n in a single endpoint.
     * Assembles Explore related information (form_data, slice, dataset)\\n in a single endpoint.&lt;br/&gt;&lt;br/&gt;\\nThe information can be assembled from:&lt;br/&gt; - The cache using a form_data_key&lt;br/&gt; - The metadata database using a permalink_key&lt;br/&gt; - Build from scratch using dataset or slice identifiers.
     * @param {Object} opts Optional parameters
     * @param {String} opts.formDataKey 
     * @param {String} opts.permalinkKey 
     * @param {Number} opts.sliceId 
     * @param {Number} opts.datasourceId 
     * @param {String} opts.datasourceType 
     * @param {module:api/ExploreApi~apiV1ExploreGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1ExploreGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'form_data_key': opts['formDataKey'],'permalink_key': opts['permalinkKey'],'slice_id': opts['sliceId'],'datasource_id': opts['datasourceId'],'datasource_type': opts['datasourceType']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ExploreContextSchema;

      return this.apiClient.callApi(
        '/api/v1/explore/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}