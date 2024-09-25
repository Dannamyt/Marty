import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { usePayment } from "../context/PaymentContext.jsx";
import { useNavigate } from 'react-router-dom'

function PaymentForm() {
    const { currentUser } = useContext(UserContext);
    const { cartTotal,clearCart } = useContext(CartContext);
    
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const navigate = useNavigate()
    
    const paymentHandler = async (e) => {
        e.preventDefault();
    
        if (!stripe || !elements) return;
    
        setIsProcessingPayment(true); // Start processing
    
        // Calculate amount in cents and round it
        const amountInCents = Math.round(cartTotal * 100); // Convert total to cents and round
        console.log('Amount being charged:', amountInCents); // Log for debugging
    
        const minimumChargeAmount = 50; // Minimum charge in cents
    
        if (amountInCents < minimumChargeAmount) {
            alert(`The minimum charge amount is $${minimumChargeAmount / 100}. Please add more items to your cart.`);
            setIsProcessingPayment(false); // Reset processing state
            return;
        }
    
        try {
            const response = await fetch('/.netlify/functions/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: amountInCents }), // Amount in cents
            });
    
            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Error creating payment intent:', errorMessage);
                alert('Failed to create payment intent. Please try again.');
                setIsProcessingPayment(false);
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
                
            }
        
        
        );
    
            setIsProcessingPayment(false); // Reset processing state
    
            if (paymentResult.error) {
                alert(paymentResult.error.message);
            } else {
                if (paymentResult.paymentIntent.status === 'succeeded') {
                    console.log('Payment successful!');
                    clearCart()
                    navigate('/payment-successful')
                }
            }
        } catch (error) {
            console.error('Error during payment processing:', error);
            alert('An unexpected error occurred. Please try again.');
            setIsProcessingPayment(false);
        }
    };
    return (
        <>
           <form onSubmit={paymentHandler} className="flex flex-col space-y-4">
    <div className="w-full">
        <CardElement className="border border-gray-300  p-2" />
    </div>
    <button 
        type="submit" 
        disabled={!stripe || isProcessingPayment} 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
    >
        {isProcessingPayment ? "Processing..." : "Pay Now"}
    </button>
</form>
        </>
    );
}

export default PaymentForm;