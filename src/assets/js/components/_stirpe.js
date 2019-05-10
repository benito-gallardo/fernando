var stripe = Stripe('pk_test_Hb9kr62XGJAnzYJsAoqtT83H00AGcW9Ok3');

  var checkoutButton = document.getElementById('checkout-button-plan_F27SRsrCLQiueQ');
  checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      items: [
        // {plan: 'plan_F27SRsrCLQiueQ', quantity: 1},
        {sku: 'sku_F28VJO6aAYqt46', quantity: 1},
        {plan: 'plan_F27SRsrCLQiueQ', quantity: 1}
        
      ],

      // Note that it is not guaranteed your customers will be redirected to this
      // URL *100%* of the time, it's possible that they could e.g. close the
      // tab between form submission and the redirect.
      successUrl: 'https://testbiz.netlify.com/success',
      cancelUrl: 'https://testbiz.netlify.com/canceled',
    })
    .then(function (result) {
      console.log(result)
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });


// import uuid from 'uuid/v4';

// const amount = 1000;
// const $messageBox = document.getElementById('messageBox');
// const $button = document.querySelector('.buy');

// function resetButtonText() {
//   $button.innerHTML = 'Click to Buy! <strong>$10</strong>';
// }

// const handler = StripeCheckout.configure({
//   key: STRIPE_PUBLISHABLE_KEY,
//   image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
//   locale: 'auto',
//   closed: function () {
//     resetButtonText();
//   },
//   token: function(token) {

//     fetch(`${LAMBDA_ENDPOINT}purchase`, {
//       method: 'POST',
//       body: JSON.stringify({
//         token,
//         amount,
//         idempotency_key: uuid()
//       }),
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       })
//     })
//     .then(res => res.json())
//     .catch(error => console.error(error))
//     .then(response => {

//       resetButtonText();

//       let message = typeof response === 'object' && response.status === 'succeeded'
//         ? 'Charge was successful!'
//         : 'Charge failed.'
//       $messageBox.querySelector('h2').innerHTML = message;

//       console.log(response);
//     });
//   }
// });

// $button.addEventListener('click', () => {

//   setTimeout(() => {
//     $button.innerHTML = 'Waiting for response...';
//   }, 500);

//   handler.open({
//     amount,
//     name: 'Test Shop',
//     description: 'A Fantastic New Widget'
//   });
// });