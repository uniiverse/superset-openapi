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

/**
 * The AdvancedDataTypeSchema model module.
 * @module model/AdvancedDataTypeSchema
 * @version v1
 */
export class AdvancedDataTypeSchema {
  /**
   * Constructs a new <code>AdvancedDataTypeSchema</code>.
   * @alias module:model/AdvancedDataTypeSchema
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AdvancedDataTypeSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdvancedDataTypeSchema} obj Optional instance to populate.
   * @return {module:model/AdvancedDataTypeSchema} The populated <code>AdvancedDataTypeSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AdvancedDataTypeSchema();
      if (data.hasOwnProperty('display_value'))
        obj.displayValue = ApiClient.convertToType(data['display_value'], 'String');
      if (data.hasOwnProperty('error_message'))
        obj.errorMessage = ApiClient.convertToType(data['error_message'], 'String');
      if (data.hasOwnProperty('valid_filter_operators'))
        obj.validFilterOperators = ApiClient.convertToType(data['valid_filter_operators'], ['String']);
      if (data.hasOwnProperty('values'))
        obj.values = ApiClient.convertToType(data['values'], ['String']);
    }
    return obj;
  }
}

/**
 * The string representation of the parsed values
 * @member {String} displayValue
 */
AdvancedDataTypeSchema.prototype.displayValue = undefined;

/**
 * @member {String} errorMessage
 */
AdvancedDataTypeSchema.prototype.errorMessage = undefined;

/**
 * @member {Array.<String>} validFilterOperators
 */
AdvancedDataTypeSchema.prototype.validFilterOperators = undefined;

/**
 * @member {Array.<String>} values
 */
AdvancedDataTypeSchema.prototype.values = undefined;
