import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StrikeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Gx0eOGvRmmEYGMWlKRMiT5F06sViOPpVo6toXpti2sFBNLlLTiGUtqgWDrUxfFwKlqyyDg4tB85VSqzZnD0o1h600UUuNVngk';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Devs Clothing Ltd."
      billingAddress
      shippingAddress
      currency="PHP"
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StrikeCheckoutButton;
