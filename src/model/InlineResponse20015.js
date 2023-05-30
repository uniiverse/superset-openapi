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
import {CssTemplateRestApiGet} from './CssTemplateRestApiGet';
import {InlineResponse2001DescriptionColumns} from './InlineResponse2001DescriptionColumns';
import {InlineResponse2001LabelColumns} from './InlineResponse2001LabelColumns';

/**
 * The InlineResponse20015 model module.
 * @module model/InlineResponse20015
 * @version v1
 */
export class InlineResponse20015 {
  /**
   * Constructs a new <code>InlineResponse20015</code>.
   * @alias module:model/InlineResponse20015
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20015</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20015} obj Optional instance to populate.
   * @return {module:model/InlineResponse20015} The populated <code>InlineResponse20015</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20015();
      if (data.hasOwnProperty('description_columns'))
        obj.descriptionColumns = InlineResponse2001DescriptionColumns.constructFromObject(data['description_columns']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('label_columns'))
        obj.labelColumns = InlineResponse2001LabelColumns.constructFromObject(data['label_columns']);
      if (data.hasOwnProperty('result'))
        obj.result = CssTemplateRestApiGet.constructFromObject(data['result']);
      if (data.hasOwnProperty('show_columns'))
        obj.showColumns = ApiClient.convertToType(data['show_columns'], ['String']);
      if (data.hasOwnProperty('show_title'))
        obj.showTitle = ApiClient.convertToType(data['show_title'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/InlineResponse2001DescriptionColumns} descriptionColumns
 */
InlineResponse20015.prototype.descriptionColumns = undefined;

/**
 * The item id
 * @member {String} id
 */
InlineResponse20015.prototype.id = undefined;

/**
 * @member {module:model/InlineResponse2001LabelColumns} labelColumns
 */
InlineResponse20015.prototype.labelColumns = undefined;

/**
 * @member {module:model/CssTemplateRestApiGet} result
 */
InlineResponse20015.prototype.result = undefined;

/**
 * A list of columns
 * @member {Array.<String>} showColumns
 */
InlineResponse20015.prototype.showColumns = undefined;

/**
 * A title to render. Will be translated by babel
 * @member {String} showTitle
 */
InlineResponse20015.prototype.showTitle = undefined;
