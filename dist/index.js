'use strict';

var jwt = require('jsonwebtoken');
var querystring = require('querystring');

/**
 * 给请求生成1个 jsonwebtoken，放在前端可用或者后端调用其他服务可用
 */
module.exports = function (appId, appSecret) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var isPathMatch = options.pathPattern ? options.pathPattern.test(req.path) : true;
    var expireInSeconds = Number(options.expireInSeconds) ? Number(options.expireInSeconds) : 60 * 60 * 2;
    var key = options.key || '__jwtsignature';

    return function (req, res, next) {
        if (isPathMatch) {
            var timeInSeconds = Math.round(Date.now() / 1000);
            var token = jwt.sign({
                iss: appId,
                iat: timeInSeconds,
                nbf: timeInSeconds,
                exp: timeInSeconds + 60 * 60
            }, appSecret);

            res.cookie(key, token);
            req[key] = token;
        }

        next();
    };
};