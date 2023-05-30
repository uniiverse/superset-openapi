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
 * The DatasetRestApiGetDatabase model module.
 * @module model/DatasetRestApiGetDatabase
 * @version v1
 */
export class DatasetRestApiGetDatabase {
  /**
   * Constructs a new <code>DatasetRestApiGetDatabase</code>.
   * @alias module:model/DatasetRestApiGetDatabase
   * @class
   * @param databaseName {String} 
   */
  constructor(databaseName) {
    this.databaseName = databaseName;
  }

  /**
   * Constructs a <code>DatasetRestApiGetDatabase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DatasetRestApiGetDatabase} obj Optional instance to populate.
   * @return {module:model/DatasetRestApiGetDatabase} The populated <code>DatasetRestApiGetDatabase</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DatasetRestApiGetDatabase();
      if (data.hasOwnProperty('backend'))
        obj.backend = ApiClient.convertToType(data['backend'], Object);
      if (data.hasOwnProperty('database_name'))
        obj.databaseName = ApiClient.convertToType(data['database_name'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Object} backend
 */
DatasetRestApiGetDatabase.prototype.backend = undefined;

/**
 * @member {String} databaseName
 */
DatasetRestApiGetDatabase.prototype.databaseName = undefined;

/**
 * @member {Number} id
 */
DatasetRestApiGetDatabase.prototype.id = undefined;
