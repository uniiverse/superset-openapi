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

  beforeEach(function() {
    instance = new Superset.QueriesApi();
  });

  describe('(package)', function() {
    describe('QueriesApi', function() {
      describe('apiV1QueryDistinctColumnNameGet', function() {
        it('should call apiV1QueryDistinctColumnNameGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1QueryDistinctColumnNameGet call and complete the assertions
          /*
          var opts = {};

          instance.apiV1QueryDistinctColumnNameGet(columnName, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.DistincResponseSchema);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1QueryGet', function() {
        it('should call apiV1QueryGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1QueryGet call and complete the assertions
          /*
          var opts = {};

          instance.apiV1QueryGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse20044);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1QueryPkGet', function() {
        it('should call apiV1QueryPkGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1QueryPkGet call and complete the assertions
          /*
          var opts = {};

          instance.apiV1QueryPkGet(pk, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse20047);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1QueryRelatedColumnNameGet', function() {
        it('should call apiV1QueryRelatedColumnNameGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1QueryRelatedColumnNameGet call and complete the assertions
          /*
          var opts = {};

          instance.apiV1QueryRelatedColumnNameGet(columnName, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.RelatedResponseSchema);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1QueryStopPost', function() {
        it('should call apiV1QueryStopPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1QueryStopPost call and complete the assertions
          /*

          instance.apiV1QueryStopPost(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse20045);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1QueryUpdatedSinceGet', function() {
        it('should call apiV1QueryUpdatedSinceGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1QueryUpdatedSinceGet call and complete the assertions
          /*
          var opts = {};

          instance.apiV1QueryUpdatedSinceGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse20046);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1SavedQueryDelete', function() {
        it('should call apiV1SavedQueryDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1SavedQueryDelete call and complete the assertions
          /*
          var opts = {};

          instance.apiV1SavedQueryDelete(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse400);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1SavedQueryDistinctColumnNameGet', function() {
        it('should call apiV1SavedQueryDistinctColumnNameGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1SavedQueryDistinctColumnNameGet call and complete the assertions
          /*
          var opts = {};

          instance.apiV1SavedQueryDistinctColumnNameGet(columnName, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.DistincResponseSchema);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1SavedQueryExportGet', function() {
        it('should call apiV1SavedQueryExportGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1SavedQueryExportGet call and complete the assertions
          /*
          var opts = {};

          instance.apiV1SavedQueryExportGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Blob);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1SavedQueryGet', function() {
        it('should call apiV1SavedQueryGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1SavedQueryGet call and complete the assertions
          /*
          var opts = {};

          instance.apiV1SavedQueryGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse20056);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1SavedQueryImportPost', function() {
        it('should call apiV1SavedQueryImportPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1SavedQueryImportPost call and complete the assertions
          /*

          instance.apiV1SavedQueryImportPost(formData, overwrite, passwords, sshTunnelPasswords, sshTunnelPrivateKeyPasswords, sshTunnelPrivateKeys, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse400);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1SavedQueryInfoGet', function() {
        it('should call apiV1SavedQueryInfoGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1SavedQueryInfoGet call and complete the assertions
          /*
          var opts = {};

          instance.apiV1SavedQueryInfoGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse2002);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1SavedQueryPkDelete', function() {
        it('should call apiV1SavedQueryPkDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1SavedQueryPkDelete call and complete the assertions
          /*

          instance.apiV1SavedQueryPkDelete(pk, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse400);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1SavedQueryPkGet', function() {
        it('should call apiV1SavedQueryPkGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1SavedQueryPkGet call and complete the assertions
          /*
          var opts = {};

          instance.apiV1SavedQueryPkGet(pk, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse20057);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1SavedQueryPkPut', function() {
        it('should call apiV1SavedQueryPkPut successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1SavedQueryPkPut call and complete the assertions
          /*

          instance.apiV1SavedQueryPkPut(body, pk, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse20058);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1SavedQueryPost', function() {
        it('should call apiV1SavedQueryPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1SavedQueryPost call and complete the assertions
          /*

          instance.apiV1SavedQueryPost(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.InlineResponse20115);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1SavedQueryRelatedColumnNameGet', function() {
        it('should call apiV1SavedQueryRelatedColumnNameGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1SavedQueryRelatedColumnNameGet call and complete the assertions
          /*
          var opts = {};

          instance.apiV1SavedQueryRelatedColumnNameGet(columnName, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Superset.RelatedResponseSchema);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));