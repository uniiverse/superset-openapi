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
 * The DashboardRestApiGetListTag model module.
 * @module model/DashboardRestApiGetListTag
 * @version v1
 */
export class DashboardRestApiGetListTag {
  /**
   * Constructs a new <code>DashboardRestApiGetListTag</code>.
   * @alias module:model/DashboardRestApiGetListTag
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DashboardRestApiGetListTag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DashboardRestApiGetListTag} obj Optional instance to populate.
   * @return {module:model/DashboardRestApiGetListTag} The populated <code>DashboardRestApiGetListTag</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DashboardRestApiGetListTag();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], Object);
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
DashboardRestApiGetListTag.prototype.id = undefined;

/**
 * @member {String} name
 */
DashboardRestApiGetListTag.prototype.name = undefined;

/**
 * @member {Object} type
 */
DashboardRestApiGetListTag.prototype.type = undefined;
