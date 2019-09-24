require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers": "Content-Type"
};
exports.handler = function(event, context, callback) {
 // Only allow POST
 if (event.httpMethod !== 'POST') {
    return callback(null, { 
      statusCode: 405, 
      body: 'Method Not Allowed' 
    });
  }

  const data = JSON.parse(event.body);
  console.log(data)

}