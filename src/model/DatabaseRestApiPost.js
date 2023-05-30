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
 * The DatabaseRestApiPost model module.
 * @module model/DatabaseRestApiPost
 * @version v1
 */
export class DatabaseRestApiPost {
  /**
   * Constructs a new <code>DatabaseRestApiPost</code>.
   * @alias module:model/DatabaseRestApiPost
   * @class
   * @param databaseName {String} A database name to identify this connection.
   */
  constructor(databaseName) {
    this.databaseName = databaseName;
  }

  /**
   * Constructs a <code>DatabaseRestApiPost</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DatabaseRestApiPost} obj Optional instance to populate.
   * @return {module:model/DatabaseRestApiPost} The populated <code>DatabaseRestApiPost</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DatabaseRestApiPost();
      if (data.hasOwnProperty('allow_ctas'))
        obj.allowCtas = ApiClient.convertToType(data['allow_ctas'], 'Boolean');
      if (data.hasOwnProperty('allow_cvas'))
        obj.allowCvas = ApiClient.convertToType(data['allow_cvas'], 'Boolean');
      if (data.hasOwnProperty('allow_dml'))
        obj.allowDml = ApiClient.convertToType(data['allow_dml'], 'Boolean');
      if (data.hasOwnProperty('allow_file_upload'))
        obj.allowFileUpload = ApiClient.convertToType(data['allow_file_upload'], 'Boolean');
      if (data.hasOwnProperty('allow_run_async'))
        obj.allowRunAsync = ApiClient.convertToType(data['allow_run_async'], 'Boolean');
      if (data.hasOwnProperty('cache_timeout'))
        obj.cacheTimeout = ApiClient.convertToType(data['cache_timeout'], 'Number');
      if (data.hasOwnProperty('configuration_method'))
        obj.configurationMethod = ApiClient.convertToType(data['configuration_method'], Object);
      if (data.hasOwnProperty('database_name'))
        obj.databaseName = ApiClient.convertToType(data['database_name'], 'String');
      if (data.hasOwnProperty('driver'))
        obj.driver = ApiClient.convertToType(data['driver'], 'String');
      if (data.hasOwnProperty('engine'))
        obj.engine = ApiClient.convertToType(data['engine'], 'String');
      if (data.hasOwnProperty('expose_in_sqllab'))
        obj.exposeInSqllab = ApiClient.convertToType(data['expose_in_sqllab'], 'Boolean');
      if (data.hasOwnProperty('external_url'))
        obj.externalUrl = ApiClient.convertToType(data['external_url'], 'String');
      if (data.hasOwnProperty('extra'))
        obj.extra = ApiClient.convertToType(data['extra'], 'String');
      if (data.hasOwnProperty('force_ctas_schema'))
        obj.forceCtasSchema = ApiClient.convertToType(data['force_ctas_schema'], 'String');
      if (data.hasOwnProperty('impersonate_user'))
        obj.impersonateUser = ApiClient.convertToType(data['impersonate_user'], 'Boolean');
      if (data.hasOwnProperty('is_managed_externally'))
        obj.isManagedExternally = ApiClient.convertToType(data['is_managed_externally'], 'Boolean');
      if (data.hasOwnProperty('masked_encrypted_extra'))
        obj.maskedEncryptedExtra = ApiClient.convertToType(data['masked_encrypted_extra'], 'String');
      if (data.hasOwnProperty('parameters'))
        obj.parameters = ApiClient.convertToType(data['parameters'], {'String': Object});
      if (data.hasOwnProperty('server_cert'))
        obj.serverCert = ApiClient.convertToType(data['server_cert'], 'String');
      if (data.hasOwnProperty('sqlalchemy_uri'))
        obj.sqlalchemyUri = ApiClient.convertToType(data['sqlalchemy_uri'], 'String');
      if (data.hasOwnProperty('ssh_tunnel'))
        obj.sshTunnel = ApiClient.convertToType(data['ssh_tunnel'], Object);
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
    }
    return obj;
  }
}

/**
 * Allow CREATE TABLE AS option in SQL Lab
 * @member {Boolean} allowCtas
 */
DatabaseRestApiPost.prototype.allowCtas = undefined;

/**
 * Allow CREATE VIEW AS option in SQL Lab
 * @member {Boolean} allowCvas
 */
DatabaseRestApiPost.prototype.allowCvas = undefined;

/**
 * Allow users to run non-SELECT statements (UPDATE, DELETE, CREATE, ...) in SQL Lab
 * @member {Boolean} allowDml
 */
DatabaseRestApiPost.prototype.allowDml = undefined;

/**
 * Allow to upload CSV file data into this databaseIf selected, please set the schemas allowed for csv upload in Extra.
 * @member {Boolean} allowFileUpload
 */
DatabaseRestApiPost.prototype.allowFileUpload = undefined;

/**
 * Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.
 * @member {Boolean} allowRunAsync
 */
DatabaseRestApiPost.prototype.allowRunAsync = undefined;

/**
 * Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires. Note this defaults to the global timeout if undefined.
 * @member {Number} cacheTimeout
 */
DatabaseRestApiPost.prototype.cacheTimeout = undefined;

/**
 * Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.
 * @member {Object} configurationMethod
 */
DatabaseRestApiPost.prototype.configurationMethod = undefined;

/**
 * A database name to identify this connection.
 * @member {String} databaseName
 */
DatabaseRestApiPost.prototype.databaseName = undefined;

/**
 * SQLAlchemy driver to use
 * @member {String} driver
 */
DatabaseRestApiPost.prototype.driver = undefined;

/**
 * SQLAlchemy engine to use
 * @member {String} engine
 */
DatabaseRestApiPost.prototype.engine = undefined;

/**
 * Expose this database to SQLLab
 * @member {Boolean} exposeInSqllab
 */
DatabaseRestApiPost.prototype.exposeInSqllab = undefined;

/**
 * @member {String} externalUrl
 */
DatabaseRestApiPost.prototype.externalUrl = undefined;

/**
 * <p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href=\"https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine\" rel=\"noopener noreferrer\">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href=\"https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData\" rel=\"noopener noreferrer\">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>\"metadata_cache_timeout\": {\"schema_cache_timeout\": 600, \"table_cache_timeout\": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_file_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>\"schemas_allowed_for_file_upload\": [\"public\", \"csv_upload\"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. The <code>version</code> field is a string specifying the this db's version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.<br>6. The <code>disable_data_preview</code> field is a boolean specifying whether or not data preview queries will be run when fetching table metadata in SQL Lab.</p>
 * @member {String} extra
 */
DatabaseRestApiPost.prototype.extra = undefined;

/**
 * When allowing CREATE TABLE AS option in SQL Lab, this option forces the table to be created in this schema
 * @member {String} forceCtasSchema
 */
DatabaseRestApiPost.prototype.forceCtasSchema = undefined;

/**
 * If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.
 * @member {Boolean} impersonateUser
 */
DatabaseRestApiPost.prototype.impersonateUser = undefined;

/**
 * @member {Boolean} isManagedExternally
 */
DatabaseRestApiPost.prototype.isManagedExternally = undefined;

/**
 * <p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>
 * @member {String} maskedEncryptedExtra
 */
DatabaseRestApiPost.prototype.maskedEncryptedExtra = undefined;

/**
 * DB-specific parameters for configuration
 * @member {Object.<String, Object>} parameters
 */
DatabaseRestApiPost.prototype.parameters = undefined;

/**
 * <p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>
 * @member {String} serverCert
 */
DatabaseRestApiPost.prototype.serverCert = undefined;

/**
 * <p>Refer to the <a href=\"https://docs.sqlalchemy.org/en/rel_1_2/core/engines.html#database-urls\" rel=\"noopener noreferrer\">SqlAlchemy docs</a> for more information on how to structure your URI.</p>
 * @member {String} sqlalchemyUri
 */
DatabaseRestApiPost.prototype.sqlalchemyUri = undefined;

/**
 * @member {Object} sshTunnel
 */
DatabaseRestApiPost.prototype.sshTunnel = undefined;

/**
 * @member {String} uuid
 */
DatabaseRestApiPost.prototype.uuid = undefined;
