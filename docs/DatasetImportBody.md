# Superset.DatasetImportBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formData** | **Blob** | upload file (ZIP or YAML) | [optional] 
**overwrite** | **Boolean** | overwrite existing datasets? | [optional] 
**passwords** | **String** | JSON map of passwords for each featured database in the ZIP file. If the ZIP includes a database config in the path &#x60;databases/MyDatabase.yaml&#x60;, the password should be provided in the following format: &#x60;{\&quot;databases/MyDatabase.yaml\&quot;: \&quot;my_password\&quot;}&#x60;. | [optional] 
**sshTunnelPasswords** | **String** | JSON map of passwords for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path &#x60;databases/MyDatabase.yaml&#x60;, the password should be provided in the following format: &#x60;{\&quot;databases/MyDatabase.yaml\&quot;: \&quot;my_password\&quot;}&#x60;. | [optional] 
**sshTunnelPrivateKeyPasswords** | **String** | JSON map of private_key_passwords for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path &#x60;databases/MyDatabase.yaml&#x60;, the private_key should be provided in the following format: &#x60;{\&quot;databases/MyDatabase.yaml\&quot;: \&quot;my_private_key_password\&quot;}&#x60;. | [optional] 
**sshTunnelPrivateKeys** | **String** | JSON map of private_keys for each ssh_tunnel associated to a featured database in the ZIP file. If the ZIP includes a ssh_tunnel config in the path &#x60;databases/MyDatabase.yaml&#x60;, the private_key should be provided in the following format: &#x60;{\&quot;databases/MyDatabase.yaml\&quot;: \&quot;my_private_key\&quot;}&#x60;. | [optional] 
**syncColumns** | **Boolean** | sync columns? | [optional] 
**syncMetrics** | **Boolean** | sync metrics? | [optional] 
