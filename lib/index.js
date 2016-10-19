const jwt = require('jsonwebtoken');
const querystring = require('querystring');

/**
 * 给请求生成1个 jsonwebtoken，放在前端可用或者后端调用其他服务可用
 */
module.exports = (appId, appSecret, options = {}) => {
    const isPathMatch = options.pathPattern ? options.pathPattern.test(req.path) : true;
    const expireInSeconds = Number(options.expireInSeconds) ? Number(options.expireInSeconds) : 60 * 60 * 2;
    const key = options.key || '__jwtsignature';

    return function (req, res, next) {
        if (isPathMatch) {
            const timeInSeconds = Math.round(Date.now() / 1000);
            const token = jwt.sign({
                iss: appId,
                iat: timeInSeconds,
                nbf: timeInSeconds,
                exp: timeInSeconds + 60 * 60,
            }, appSecret);

            res.cookie(key, token);
            req[key] = token;
        }

        next();
    };
};
