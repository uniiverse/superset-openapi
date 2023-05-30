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
import {ApiClient} from '../ApiClient';
import {RLSRestApiPost} from './RLSRestApiPost';

/**
 * The InlineResponse20114 model module.
 * @module model/InlineResponse20114
 * @version v1
 */
export class InlineResponse20114 {
  /**
   * Constructs a new <code>InlineResponse20114</code>.
   * @alias module:model/InlineResponse20114
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20114</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20114} obj Optional instance to populate.
   * @return {module:model/InlineResponse20114} The populated <code>InlineResponse20114</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20114();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('result'))
        obj.result = RLSRestApiPost.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
InlineResponse20114.prototype.id = undefined;

/**
 * @member {module:model/RLSRestApiPost} result
 */
InlineResponse20114.prototype.result = undefined;
