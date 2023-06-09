/* tslint:disable */
/* eslint-disable */
/**
 * Superset
 * Superset
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ReportRecipientConfigJSON } from './report-recipient-config-json';
/**
 * 
 * @export
 * @interface ReportRecipient
 */
export interface ReportRecipient {
    /**
     * 
     * @type {ReportRecipientConfigJSON}
     * @memberof ReportRecipient
     */
    recipientConfigJson?: ReportRecipientConfigJSON;
    /**
     * The recipient type, check spec for valid options
     * @type {string}
     * @memberof ReportRecipient
     */
    type: ReportRecipientTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum ReportRecipientTypeEnum {
    Email = 'Email',
    Slack = 'Slack'
}

