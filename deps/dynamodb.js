const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB();
const dynamoDBFactory = ({ dynamoDb }) => sql.connect( mssql );
module.exports = dynamoDb;