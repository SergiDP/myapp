const jwt = require('jsonwebtoken');

const checkToken = ({jsonwebtoken}) => token => {
    return new Promise((resolve, reject) => {
        if (token && token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }

        if (token) {
            jwt.verify(token, jsonwebtoken.secret, (err, decoded) => {
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

const login = ({jsonwebtoken}) => (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    // For the given username fetch user from DB

    if (username && password) {
        if (username === jsonwebtoken.mockedusername && password === jsonwebtoken.mockedpassword) {
            let token = jwt.sign({username: username},
                jsonwebtoken.secret,
                { expiresIn: '24h' // expires in 24 hours
                }
            );
            // return the JWT token for the future API calls
            res.json({
                success: true,
                message: 'Authentication successful!',
                token: token
            });
        } else {
            res.send(403).json({
                success: false,
                message: 'Incorrect username or password'
            });
        }
    } else {
        res.send(400).json({
            success: false,
            message: 'Authentication failed! Please check the request'
        });
    }
}

module.exports = {
    checkToken: checkToken,
    login:login
}

