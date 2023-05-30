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
import {DistinctResultResponse} from './DistinctResultResponse';

/**
 * The DistincResponseSchema model module.
 * @module model/DistincResponseSchema
 * @version v1
 */
export class DistincResponseSchema {
  /**
   * Constructs a new <code>DistincResponseSchema</code>.
   * @alias module:model/DistincResponseSchema
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DistincResponseSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DistincResponseSchema} obj Optional instance to populate.
   * @return {module:model/DistincResponseSchema} The populated <code>DistincResponseSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DistincResponseSchema();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], [DistinctResultResponse]);
    }
    return obj;
  }
}

/**
 * The total number of distinct values
 * @member {Number} count
 */
DistincResponseSchema.prototype.count = undefined;

/**
 * @member {Array.<module:model/DistinctResultResponse>} result
 */
DistincResponseSchema.prototype.result = undefined;
