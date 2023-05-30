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
    describe('RlsRule', function() {
      beforeEach(function() {
        instance = new Superset.RlsRule();
      });

      it('should create an instance of RlsRule', function() {
        // TODO: update the code to test RlsRule
        expect(instance).to.be.a(Superset.RlsRule);
      });

      it('should have the property clause (base name: "clause")', function() {
        // TODO: update the code to test the property clause
        expect(instance).to.have.property('clause');
        // expect(instance.clause).to.be(expectedValueLiteral);
      });

      it('should have the property dataset (base name: "dataset")', function() {
        // TODO: update the code to test the property dataset
        expect(instance).to.have.property('dataset');
        // expect(instance.dataset).to.be(expectedValueLiteral);
      });

    });
  });

}));