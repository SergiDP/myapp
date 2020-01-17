const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    jsonwebtoken: {
        secret: process.env.SECRET,
        mockedusername: process.env.MOCKEDUSERNAME,
        mockedpassword: process.env.MOCKEDPASSWORD
    }

};