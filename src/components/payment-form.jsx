import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

function PaymentForm() {
    const { currentUser } = useContext(UserContext);
    const { cartTotal } = useContext(CartContext);
    
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setIsProcessingPayment(true); // Start processing

        try {
            const response = await fetch('/.netlify/functions/create-payment-intent', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: cartTotal * 100 }), // Amount in cents
            });

            console.log(response)

            if (!response.ok) {
                const errorMessage = await response.text(); // Get the raw error message
                console.error('Error creating payment intent:', errorMessage);
                alert('Failed to create payment intent. Please try again.');
                setIsProcessingPayment(false); // Reset processing state
                return;
            }

            const { paymentIntent: { client_secret } } = await response.json();

            const paymentResult = await stripe.confirmCardPayment(client_secret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: currentUser ? currentUser.displayName : 'Visitor',
                    },
                },
            });

            setIsProcessingPayment(false); // Reset processing state

            if (paymentResult.error) {
                alert(paymentResult.error.message);
            } else {
                if (paymentResult.paymentIntent.status === 'succeeded') {
                    alert('Payment successful!');
                    // Optionally clear cart or redirect user
                }
            }
        } catch (error) {
            console.error('Error during payment processing:', error);
            alert('An unexpected error occurred. Please try again.');
            setIsProcessingPayment(false); // Reset processing state
        }
    };

    return (
        <>
            <form onSubmit={paymentHandler}>
                <CardElement />
                <button disabled={!stripe || isProcessingPayment}>
                    {isProcessingPayment ? "Processing..." : "Pay Now"}
                </button>
            </form>
        </>
    );
}

export default PaymentForm;