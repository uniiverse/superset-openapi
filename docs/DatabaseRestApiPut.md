# Superset.DatabaseRestApiPut

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowCtas** | **Boolean** | Allow CREATE TABLE AS option in SQL Lab | [optional] 
**allowCvas** | **Boolean** | Allow CREATE VIEW AS option in SQL Lab | [optional] 
**allowDml** | **Boolean** | Allow users to run non-SELECT statements (UPDATE, DELETE, CREATE, ...) in SQL Lab | [optional] 
**allowFileUpload** | **Boolean** | Allow to upload CSV file data into this databaseIf selected, please set the schemas allowed for csv upload in Extra. | [optional] 
**allowRunAsync** | **Boolean** | Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information. | [optional] 
**cacheTimeout** | **Number** | Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires. Note this defaults to the global timeout if undefined. | [optional] 
**configurationMethod** | **Object** | Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri. | [optional] 
**databaseName** | **String** | A database name to identify this connection. | [optional] 
**driver** | **String** | SQLAlchemy driver to use | [optional] 
**engine** | **String** | SQLAlchemy engine to use | [optional] 
**exposeInSqllab** | **Boolean** | Expose this database to SQLLab | [optional] 
**externalUrl** | **String** |  | [optional] 
**extra** | **String** | &lt;p&gt;JSON string containing extra configuration elements.&lt;br&gt;1. The &lt;code&gt;engine_params&lt;/code&gt; object gets unpacked into the &lt;a href&#x3D;\&quot;https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;sqlalchemy.create_engine&lt;/a&gt; call, while the &lt;code&gt;metadata_params&lt;/code&gt; gets unpacked into the &lt;a href&#x3D;\&quot;https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;sqlalchemy.MetaData&lt;/a&gt; call.&lt;br&gt;2. The &lt;code&gt;metadata_cache_timeout&lt;/code&gt; is a cache timeout setting in seconds for metadata fetch of this database. Specify it as &lt;strong&gt;\&quot;metadata_cache_timeout\&quot;: {\&quot;schema_cache_timeout\&quot;: 600, \&quot;table_cache_timeout\&quot;: 600}&lt;/strong&gt;. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.&lt;br&gt;3. The &lt;code&gt;schemas_allowed_for_file_upload&lt;/code&gt; is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as &lt;strong&gt;\&quot;schemas_allowed_for_file_upload\&quot;: [\&quot;public\&quot;, \&quot;csv_upload\&quot;]&lt;/strong&gt;. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty&lt;br&gt;4. The &lt;code&gt;version&lt;/code&gt; field is a string specifying the this db&#x27;s version. This should be used with Presto DBs so that the syntax is correct&lt;br&gt;5. The &lt;code&gt;allows_virtual_table_explore&lt;/code&gt; field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.&lt;br&gt;6. The &lt;code&gt;disable_data_preview&lt;/code&gt; field is a boolean specifying whether or not data preview queries will be run when fetching table metadata in SQL Lab.&lt;/p&gt; | [optional] 
**forceCtasSchema** | **String** | When allowing CREATE TABLE AS option in SQL Lab, this option forces the table to be created in this schema | [optional] 
**impersonateUser** | **Boolean** | If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.&lt;br/&gt;If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property. | [optional] 
**isManagedExternally** | **Boolean** |  | [optional] 
**maskedEncryptedExtra** | **String** | &lt;p&gt;JSON string containing additional connection configuration.&lt;br&gt;This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.&lt;/p&gt; | [optional] 
**parameters** | **{String: Object}** | DB-specific parameters for configuration | [optional] 
**serverCert** | **String** | &lt;p&gt;Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.&lt;/p&gt; | [optional] 
**sqlalchemyUri** | **String** | &lt;p&gt;Refer to the &lt;a href&#x3D;\&quot;https://docs.sqlalchemy.org/en/rel_1_2/core/engines.html#database-urls\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;SqlAlchemy docs&lt;/a&gt; for more information on how to structure your URI.&lt;/p&gt; | [optional] 
**sshTunnel** | **AllOfDatabaseRestApiPutSshTunnel** |  | [optional] 
**uuid** | **String** |  | [optional] 
