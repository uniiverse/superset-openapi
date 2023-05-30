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
import {DeleteTagsSchema} from '../model/DeleteTagsSchema';
import {GetInfoSchema} from '../model/GetInfoSchema';
import {GetItemSchema} from '../model/GetItemSchema';
import {GetListSchema} from '../model/GetListSchema';
import {GetRelatedSchema} from '../model/GetRelatedSchema';
import {InlineResponse2002} from '../model/InlineResponse2002';
import {InlineResponse20062} from '../model/InlineResponse20062';
import {InlineResponse20063} from '../model/InlineResponse20063';
import {InlineResponse20064} from '../model/InlineResponse20064';
import {InlineResponse20065} from '../model/InlineResponse20065';
import {InlineResponse20116} from '../model/InlineResponse20116';
import {InlineResponse400} from '../model/InlineResponse400';
import {ObjectTypeObjectIdBody} from '../model/ObjectTypeObjectIdBody';
import {RelatedResponseSchema} from '../model/RelatedResponseSchema';
import {TagRestApiPost} from '../model/TagRestApiPost';
import {TagRestApiPut} from '../model/TagRestApiPut';

/**
* Tags service.
* @module api/TagsApi
* @version v1
*/
export class TagsApi {

    /**
    * Constructs a new TagsApi. 
    * @alias module:api/TagsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the apiV1TagDelete operation.
     * @callback moduleapi/TagsApi~apiV1TagDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse400{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes multiple Tags. This will remove all tagged objects with this tag
     * @param {Object} opts Optional parameters
     * @param {module:model/DeleteTagsSchema} opts.q 
     * @param {module:api/TagsApi~apiV1TagDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1TagDelete(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'q': opts['q']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse400;

      return this.apiClient.callApi(
        '/api/v1/tag/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiV1TagGet operation.
     * @callback moduleapi/TagsApi~apiV1TagGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20062{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of tags, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetListSchema} opts.q 
     * @param {module:api/TagsApi~apiV1TagGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1TagGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'q': opts['q']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20062;

      return this.apiClient.callApi(
        '/api/v1/tag/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiV1TagGetObjectsGet operation.
     * @callback moduleapi/TagsApi~apiV1TagGetObjectsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20063{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets all objects associated with a Tag.
     * @param {Number} tagId 
     * @param {module:api/TagsApi~apiV1TagGetObjectsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1TagGetObjectsGet(tagId, callback) {
      
      let postBody = null;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling apiV1TagGetObjectsGet");
      }

      let pathParams = {
        'tag_id': tagId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20063;

      return this.apiClient.callApi(
        '/api/v1/tag/get_objects/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiV1TagInfoGet operation.
     * @callback moduleapi/TagsApi~apiV1TagInfoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Several metadata information about tag API endpoints.
     * @param {Object} opts Optional parameters
     * @param {module:model/GetInfoSchema} opts.q 
     * @param {module:api/TagsApi~apiV1TagInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1TagInfoGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'q': opts['q']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/api/v1/tag/_info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiV1TagObjectTypeObjectIdPost operation.
     * @callback moduleapi/TagsApi~apiV1TagObjectTypeObjectIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add tags to an object..
     * @param {module:model/ObjectTypeObjectIdBody} body Tag schema
     * @param {Number} objectType 
     * @param {Number} objectId 
     * @param {module:api/TagsApi~apiV1TagObjectTypeObjectIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiV1TagObjectTypeObjectIdPost(body, objectType, objectId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling apiV1TagObjectTypeObjectIdPost");
      }
      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling apiV1TagObjectTypeObjectIdPost");
      }
      // verify the required parameter 'objectId' is set
      if (objectId === undefined || objectId === null) {
        throw new Error("Missing the required parameter 'objectId' when calling apiV1TagObjectTypeObjectIdPost");
      }

      let pathParams = {
        'object_type': objectType,'object_id': objectId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['jwt'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/v1/tag/{object_type}/{object_id}/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiV1TagObjectTypeObjectIdTagDelete operation.
     * @callback moduleapi/TagsApi~apiV1TagObjectTypeObjectIdTagDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse400{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a Tagged Object.
     * @param {String} tag 
     * @param {Number} objectType 
     * @param {Number} objectId 
     * @param {module:api/TagsApi~apiV1TagObjectTypeObjectIdTagDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1TagObjectTypeObjectIdTagDelete(tag, objectType, objectId, callback) {
      
      let postBody = null;
      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling apiV1TagObjectTypeObjectIdTagDelete");
      }
      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling apiV1TagObjectTypeObjectIdTagDelete");
      }
      // verify the required parameter 'objectId' is set
      if (objectId === undefined || objectId === null) {
        throw new Error("Missing the required parameter 'objectId' when calling apiV1TagObjectTypeObjectIdTagDelete");
      }

      let pathParams = {
        'tag': tag,'object_type': objectType,'object_id': objectId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse400;

      return this.apiClient.callApi(
        '/api/v1/tag/{object_type}/{object_id}/{tag}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiV1TagPkDelete operation.
     * @callback moduleapi/TagsApi~apiV1TagPkDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse400{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} pk 
     * @param {module:api/TagsApi~apiV1TagPkDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1TagPkDelete(pk, callback) {
      
      let postBody = null;
      // verify the required parameter 'pk' is set
      if (pk === undefined || pk === null) {
        throw new Error("Missing the required parameter 'pk' when calling apiV1TagPkDelete");
      }

      let pathParams = {
        'pk': pk
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse400;

      return this.apiClient.callApi(
        '/api/v1/tag/{pk}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiV1TagPkGet operation.
     * @callback moduleapi/TagsApi~apiV1TagPkGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20064{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a tag detail information.
     * @param {Number} pk 
     * @param {Object} opts Optional parameters
     * @param {module:model/GetItemSchema} opts.q 
     * @param {module:api/TagsApi~apiV1TagPkGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1TagPkGet(pk, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'pk' is set
      if (pk === undefined || pk === null) {
        throw new Error("Missing the required parameter 'pk' when calling apiV1TagPkGet");
      }

      let pathParams = {
        'pk': pk
      };
      let queryParams = {
        'q': opts['q']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20064;

      return this.apiClient.callApi(
        '/api/v1/tag/{pk}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiV1TagPkPut operation.
     * @callback moduleapi/TagsApi~apiV1TagPkPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20065{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/TagRestApiPut} body Model schema
     * @param {Number} pk 
     * @param {module:api/TagsApi~apiV1TagPkPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1TagPkPut(body, pk, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling apiV1TagPkPut");
      }
      // verify the required parameter 'pk' is set
      if (pk === undefined || pk === null) {
        throw new Error("Missing the required parameter 'pk' when calling apiV1TagPkPut");
      }

      let pathParams = {
        'pk': pk
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['jwt'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20065;

      return this.apiClient.callApi(
        '/api/v1/tag/{pk}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiV1TagPost operation.
     * @callback moduleapi/TagsApi~apiV1TagPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20116{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/TagRestApiPost} body Model schema
     * @param {module:api/TagsApi~apiV1TagPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1TagPost(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling apiV1TagPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['jwt'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20116;

      return this.apiClient.callApi(
        '/api/v1/tag/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiV1TagRelatedColumnNameGet operation.
     * @callback moduleapi/TagsApi~apiV1TagRelatedColumnNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedResponseSchema{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} columnName 
     * @param {Object} opts Optional parameters
     * @param {module:model/GetRelatedSchema} opts.q 
     * @param {module:api/TagsApi~apiV1TagRelatedColumnNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1TagRelatedColumnNameGet(columnName, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'columnName' is set
      if (columnName === undefined || columnName === null) {
        throw new Error("Missing the required parameter 'columnName' when calling apiV1TagRelatedColumnNameGet");
      }

      let pathParams = {
        'column_name': columnName
      };
      let queryParams = {
        'q': opts['q']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['jwt'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RelatedResponseSchema;

      return this.apiClient.callApi(
        '/api/v1/tag/related/{column_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}