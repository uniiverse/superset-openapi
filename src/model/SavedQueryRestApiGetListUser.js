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
 * The SavedQueryRestApiGetListUser model module.
 * @module model/SavedQueryRestApiGetListUser
 * @version v1
 */
export class SavedQueryRestApiGetListUser {
  /**
   * Constructs a new <code>SavedQueryRestApiGetListUser</code>.
   * @alias module:model/SavedQueryRestApiGetListUser
   * @class
   * @param firstName {String} 
   * @param lastName {String} 
   */
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * Constructs a <code>SavedQueryRestApiGetListUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SavedQueryRestApiGetListUser} obj Optional instance to populate.
   * @return {module:model/SavedQueryRestApiGetListUser} The populated <code>SavedQueryRestApiGetListUser</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SavedQueryRestApiGetListUser();
      if (data.hasOwnProperty('first_name'))
        obj.firstName = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('last_name'))
        obj.lastName = ApiClient.convertToType(data['last_name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} firstName
 */
SavedQueryRestApiGetListUser.prototype.firstName = undefined;

/**
 * @member {Number} id
 */
SavedQueryRestApiGetListUser.prototype.id = undefined;

/**
 * @member {String} lastName
 */
SavedQueryRestApiGetListUser.prototype.lastName = undefined;
