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
import {DashboardRestApiGetList} from './DashboardRestApiGetList';
import {InlineResponse2001DescriptionColumns} from './InlineResponse2001DescriptionColumns';
import {InlineResponse2001LabelColumns} from './InlineResponse2001LabelColumns';

/**
 * The InlineResponse20017 model module.
 * @module model/InlineResponse20017
 * @version v1
 */
export class InlineResponse20017 {
  /**
   * Constructs a new <code>InlineResponse20017</code>.
   * @alias module:model/InlineResponse20017
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20017</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20017} obj Optional instance to populate.
   * @return {module:model/InlineResponse20017} The populated <code>InlineResponse20017</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20017();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
      if (data.hasOwnProperty('description_columns'))
        obj.descriptionColumns = InlineResponse2001DescriptionColumns.constructFromObject(data['description_columns']);
      if (data.hasOwnProperty('ids'))
        obj.ids = ApiClient.convertToType(data['ids'], ['String']);
      if (data.hasOwnProperty('label_columns'))
        obj.labelColumns = InlineResponse2001LabelColumns.constructFromObject(data['label_columns']);
      if (data.hasOwnProperty('list_columns'))
        obj.listColumns = ApiClient.convertToType(data['list_columns'], ['String']);
      if (data.hasOwnProperty('list_title'))
        obj.listTitle = ApiClient.convertToType(data['list_title'], 'String');
      if (data.hasOwnProperty('order_columns'))
        obj.orderColumns = ApiClient.convertToType(data['order_columns'], ['String']);
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], [DashboardRestApiGetList]);
    }
    return obj;
  }
}

/**
 * The total record count on the backend
 * @member {Number} count
 */
InlineResponse20017.prototype.count = undefined;

/**
 * @member {module:model/InlineResponse2001DescriptionColumns} descriptionColumns
 */
InlineResponse20017.prototype.descriptionColumns = undefined;

/**
 * A list of item ids, useful when you don't know the column id
 * @member {Array.<String>} ids
 */
InlineResponse20017.prototype.ids = undefined;

/**
 * @member {module:model/InlineResponse2001LabelColumns} labelColumns
 */
InlineResponse20017.prototype.labelColumns = undefined;

/**
 * A list of columns
 * @member {Array.<String>} listColumns
 */
InlineResponse20017.prototype.listColumns = undefined;

/**
 * A title to render. Will be translated by babel
 * @member {String} listTitle
 */
InlineResponse20017.prototype.listTitle = undefined;

/**
 * A list of allowed columns to sort
 * @member {Array.<String>} orderColumns
 */
InlineResponse20017.prototype.orderColumns = undefined;

/**
 * The result from the get list query
 * @member {Array.<module:model/DashboardRestApiGetList>} result
 */
InlineResponse20017.prototype.result = undefined;
