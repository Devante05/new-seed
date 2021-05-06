// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({
  region: 'us-east-2',
  endpoint: 'http://localhost:8080'
});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  AttributeDefinitions: [
    {
      AttributeName: '_id',
      AttributeType: 'S'
    },
    {
      AttributeName: 'plantName',
      AttributeType: 'S'
    },
    {
      AttributeName: 'location',
      AttributeType: 'S'
    },
    {
      AttributeName: 'cost',
      AttributeType: 'N'
    },
    {
      AttributeName: 'description',
      AttributeType: 'S'
    },
    {
      AttributeName: 'createdAt',
      AttributeType: 'S'
    }
  ],
  KeySchema: [
    {
      AttributeName: '_id',
      KeyType: 'HASH'
    },
    {
        AttributeName: 'plantName',
        AttributeType: 'HASH'
      },
      {
        AttributeName: 'location',
        AttributeType: 'HASH'
      },
      {
        AttributeName: 'cost',
        AttributeType: 'RANGE'
      },
      {
        AttributeName: 'description',
        AttributeType: 'RANGE'
      },
    
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'PlantPosts2',
  StreamSpecification: {
    StreamEnabled: false
  }
};

// Call DynamoDB to create the table
ddb.createTable(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Table Created", data);
  }
});