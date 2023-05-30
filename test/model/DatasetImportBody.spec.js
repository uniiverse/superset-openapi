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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Superset);
  }
}(this, function(expect, Superset) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('DatasetImportBody', function() {
      beforeEach(function() {
        instance = new Superset.DatasetImportBody();
      });

      it('should create an instance of DatasetImportBody', function() {
        // TODO: update the code to test DatasetImportBody
        expect(instance).to.be.a(Superset.DatasetImportBody);
      });

      it('should have the property formData (base name: "formData")', function() {
        // TODO: update the code to test the property formData
        expect(instance).to.have.property('formData');
        // expect(instance.formData).to.be(expectedValueLiteral);
      });

      it('should have the property overwrite (base name: "overwrite")', function() {
        // TODO: update the code to test the property overwrite
        expect(instance).to.have.property('overwrite');
        // expect(instance.overwrite).to.be(expectedValueLiteral);
      });

      it('should have the property passwords (base name: "passwords")', function() {
        // TODO: update the code to test the property passwords
        expect(instance).to.have.property('passwords');
        // expect(instance.passwords).to.be(expectedValueLiteral);
      });

      it('should have the property sshTunnelPasswords (base name: "ssh_tunnel_passwords")', function() {
        // TODO: update the code to test the property sshTunnelPasswords
        expect(instance).to.have.property('sshTunnelPasswords');
        // expect(instance.sshTunnelPasswords).to.be(expectedValueLiteral);
      });

      it('should have the property sshTunnelPrivateKeyPasswords (base name: "ssh_tunnel_private_key_passwords")', function() {
        // TODO: update the code to test the property sshTunnelPrivateKeyPasswords
        expect(instance).to.have.property('sshTunnelPrivateKeyPasswords');
        // expect(instance.sshTunnelPrivateKeyPasswords).to.be(expectedValueLiteral);
      });

      it('should have the property sshTunnelPrivateKeys (base name: "ssh_tunnel_private_keys")', function() {
        // TODO: update the code to test the property sshTunnelPrivateKeys
        expect(instance).to.have.property('sshTunnelPrivateKeys');
        // expect(instance.sshTunnelPrivateKeys).to.be(expectedValueLiteral);
      });

      it('should have the property syncColumns (base name: "sync_columns")', function() {
        // TODO: update the code to test the property syncColumns
        expect(instance).to.have.property('syncColumns');
        // expect(instance.syncColumns).to.be(expectedValueLiteral);
      });

      it('should have the property syncMetrics (base name: "sync_metrics")', function() {
        // TODO: update the code to test the property syncMetrics
        expect(instance).to.have.property('syncMetrics');
        // expect(instance.syncMetrics).to.be(expectedValueLiteral);
      });

    });
  });

}));