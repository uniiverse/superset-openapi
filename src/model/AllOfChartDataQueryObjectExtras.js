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
import {ChartDataExtras} from './ChartDataExtras';
import {ChartDataFilter} from './ChartDataFilter';

/**
 * The AllOfChartDataQueryObjectExtras model module.
 * @module model/AllOfChartDataQueryObjectExtras
 * @version v1
 */
export class AllOfChartDataQueryObjectExtras extends ChartDataExtras {
  /**
   * Constructs a new <code>AllOfChartDataQueryObjectExtras</code>.
   * Extra parameters to add to the query.
   * @alias module:model/AllOfChartDataQueryObjectExtras
   * @class
   * @extends module:model/ChartDataExtras
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfChartDataQueryObjectExtras</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfChartDataQueryObjectExtras} obj Optional instance to populate.
   * @return {module:model/AllOfChartDataQueryObjectExtras} The populated <code>AllOfChartDataQueryObjectExtras</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfChartDataQueryObjectExtras();
      ChartDataExtras.constructFromObject(data, obj);
    }
    return obj;
  }
}