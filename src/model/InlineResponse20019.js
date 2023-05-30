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
 * The InlineResponse20019 model module.
 * @module model/InlineResponse20019
 * @version v1
 */
export class InlineResponse20019 {
  /**
   * Constructs a new <code>InlineResponse20019</code>.
   * @alias module:model/InlineResponse20019
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20019</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20019} obj Optional instance to populate.
   * @return {module:model/InlineResponse20019} The populated <code>InlineResponse20019</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20019();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('json_metadata'))
        obj.jsonMetadata = ApiClient.convertToType(data['json_metadata'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('owner_id'))
        obj.ownerId = ApiClient.convertToType(data['owner_id'], 'Number');
      if (data.hasOwnProperty('owner_type'))
        obj.ownerType = ApiClient.convertToType(data['owner_type'], 'Number');
      if (data.hasOwnProperty('parameters'))
        obj.parameters = ApiClient.convertToType(data['parameters'], Object);
    }
    return obj;
  }
}

/**
 * A description field of the filter set
 * @member {String} description
 */
InlineResponse20019.prototype.description = undefined;

/**
 * metadata of the filter set
 * @member {String} jsonMetadata
 */
InlineResponse20019.prototype.jsonMetadata = undefined;

/**
 * Name of the Filter set
 * @member {String} name
 */
InlineResponse20019.prototype.name = undefined;

/**
 * A description field of the filter set
 * @member {Number} ownerId
 */
InlineResponse20019.prototype.ownerId = undefined;

/**
 * the Type of the owner ( Dashboard/User)
 * @member {Number} ownerType
 */
InlineResponse20019.prototype.ownerType = undefined;

/**
 * JSON schema defining the needed parameters
 * @member {Object} parameters
 */
InlineResponse20019.prototype.parameters = undefined;
