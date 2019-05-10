require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

console.log(stripe)
// stripe.products.list(
//   { limit: 3 },
//   function(err, products) {
//     console.log(products)
//     // asynchronously called
//   }
// );