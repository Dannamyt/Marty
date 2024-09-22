import { useMemo } from 'react';

const useOptions = () => {
   
    return useMemo(() => ({
        style: {
            base: {
                color: '#32325d',
                fontFamily: 'Arial, sans-serif',
                fontSize: '16px',
                fontSmoothing: 'antialiased',
                fontWeight: '400',
                letterSpacing: '0.025em',
                lineHeight: '24px',
                padding: '10px',
                border: '1px solid #ccc', // Border color
                borderRadius: '4px', // Rounded corners
                backgroundColor: '#f8f8f8', // Background color
            },
            placeholder: {
                color: '#aab7c4', // Placeholder text color
            },
            invalid: {
                color: '#fa755a', // Color for invalid input
                iconColor: '#fa755a', // Icon color for invalid input
            },
        },
    }), []);
};
export default useOptions