let jwt = require('jsonwebtoken');
const config = require('./config.js');

let checkToken = (token) => {
        return new Promise((resolve, reject) => {
            if (token && token.startsWith('Bearer ')) {
                token = token.slice(7, token.length);
            }

            if (token) {
                jwt.verify(token, config.secret, (err, decoded) => {
                    if (err) {
                        return reject({
                            success: false,
                            message: 'Token is not valid'
                        });
                    } else {

                        return resolve(decoded);
                    }
                });
            } else {
                return reject({
                    success: false,
                    message: 'Auth token is not supplied'
                });
            }
        })
    }

module.exports = {
    checkToken: checkToken
}
