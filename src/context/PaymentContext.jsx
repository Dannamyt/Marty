// src/context/PaymentContext.jsx
import { createContext, useContext, useState } from 'react';

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
    const [clientSecret, setClientSecret] = useState('');

    return (
        <PaymentContext.Provider value={{ clientSecret, setClientSecret }}>
            {children}
        </PaymentContext.Provider>
    );
};

export const usePayment = () => useContext(PaymentContext);