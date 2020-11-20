import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripePaymentButton = ({discountPrice}) => {
    const priceForStripe = discountPrice*100;
    const publishableKey = "pk_test_51HpdpEFFoNYV8eGQ9Dklx4W7uwkDr7bebycqvtFnxIOyX9aaVFLxUjAjtz49Xe36zTrulRcCAHmgBxJAhP2U4mT800Y8ewEjZa";

    const onToken = token => {
        console.log(token)
        alert("Payment Successfull")
    }
    return (
        <StripeCheckout
            label = "Buy Now"
            name = "Clothing Bazar"
            currency="INR"
            billingAddress
            shippingAddress
            description = {`Your total is Rs. ${discountPrice}`}
            amount={priceForStripe}
            panelLabel="Pay Now "
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripePaymentButton;