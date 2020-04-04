const AWS = require('aws-sdk')
require('dotenv').config();

const params = {
  attributes: {
    DefaultSMSType: 'Transactional', 
    DefaultSenderID: 'Techbee', 
    MonthlySpendLimit: '5' // in USD
  }
}

const sns = new AWS.SNS({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
})

sns.setSMSAttributes(params)

module.exports = sns