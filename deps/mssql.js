const sql = require("mssql");
const mssqlFactory = ({ mssql }) => sql.connect( mssql );
module.exports = mssqlFactory;