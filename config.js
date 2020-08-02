require('dotenv').config();
module.exports = {
    jsonwebtoken: {
        secret: process.env.SECRET,
    },
    mssql: {
        server: process.env.SERVER,
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD
    }

};