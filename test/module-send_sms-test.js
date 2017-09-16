/**
 * @file test/module-send_sms-test.js
 * @author leggetter@vonage.com
 * @description Send an SMS 
 *
 * Generated by the converse-cli tool for use with the Converse AI
 * Plugins SDK. https://developers.converse.ai/
 */

const request     = require('supertest');
const expect      = require('chai').expect;
const server      = require('./lib/express');

describe('Send Sms', function () {

  it('base', function(done) {
    request(server)
      .post('/')
      .send({
        event: 'MODULE_EXEC',
        payload: {
          moduleId: 'send_sms',
          moduleParam: {
            from: '447666666666',
            to: '447777777777',
            text: 'Hello from Nexmo'
          },
          registrationData: {
            api_key: 'test-key',
            api_secret: 'test-secret',
            application_id: undefined,
            application_private_key: undefined
          }
        }
      })
      .set('X_CONVERSE_APP_TOKEN', require('../app-token'))
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.have.property('status').to.equal(0);
        expect(res.body).to.have.property('value');
        done();
      });
  })

});
