# AWS SNS SMS
A quick example of sending an SMS with AWS SNS and NodeJS

Download this repository

`git clone https://github.com/mindang900/aws-sns-sms.git`

`$ cd aws-sns-sms`

`$ npm install`

Create a specific AWS IAM user and add to group 'AmazonSNSFullAccess'

Rename the `.env.example` file to `.env` and enter your correct AWS access key, secret and region.

`$ npm start`

Open browser and visit something like,

`http://localhost:3000/?message=[The Message]&number=[The Number]&subject=[The Subject]`

The mobile number should be E.164 format but without the + character.

eg, 

You want to send a message to a number,

The country code is 84

The mobile number is (0)7700 900123

The E.164 format would be +847700900123

Remove the + character

Then Visit 

`http://localhost:3000/?message=my message&number=447700900123&subject=My Subject`



