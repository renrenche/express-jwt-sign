const expect = require('chai').expect;
const jwtsign = require('../lib');

describe('express-jwt-sign', function () {
    it('should return function', function () {
        expect(jwtsign).to.be.a.function;
        expect(jwtsign()).to.be.a.function;
    });
});
