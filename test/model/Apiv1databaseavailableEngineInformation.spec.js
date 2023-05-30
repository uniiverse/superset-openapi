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
    describe('Apiv1databaseavailableEngineInformation', function() {
      beforeEach(function() {
        instance = new Superset.Apiv1databaseavailableEngineInformation();
      });

      it('should create an instance of Apiv1databaseavailableEngineInformation', function() {
        // TODO: update the code to test Apiv1databaseavailableEngineInformation
        expect(instance).to.be.a(Superset.Apiv1databaseavailableEngineInformation);
      });

      it('should have the property disableSshTunneling (base name: "disable_ssh_tunneling")', function() {
        // TODO: update the code to test the property disableSshTunneling
        expect(instance).to.have.property('disableSshTunneling');
        // expect(instance.disableSshTunneling).to.be(expectedValueLiteral);
      });

      it('should have the property supportsFileUpload (base name: "supports_file_upload")', function() {
        // TODO: update the code to test the property supportsFileUpload
        expect(instance).to.have.property('supportsFileUpload');
        // expect(instance.supportsFileUpload).to.be(expectedValueLiteral);
      });

    });
  });

}));