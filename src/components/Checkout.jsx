import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import PaymentForm from './payment-form';

const CheckoutPage = () => {

    const{cartItems,cartTotal} = useContext(CartContext)
    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., API call)
        console.log('Shipping Info:', shippingInfo);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>

            <div className="bg-white border-solid border-2  p-6">
                <form onSubmit={handleSubmit} >
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul className="mb-4">
                            {cartItems.map((item) => (
                                <li key={item.id} className="flex justify-between items-center mb-2">
                                    <div>
                                        <p className='font-switzer font-bold'>{item.title}</p>
                                        <p className='text-xs text-gray-500'>QTY: {item.quantity}</p>
                                    </div>
                                    <span>${item.price.toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className="flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <h2 className="text-xl font-semibold mt-8">Shipping Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={shippingInfo.name}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={shippingInfo.email}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                required
                                value={shippingInfo.address}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                required
                                value={shippingInfo.city}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP Code</label>
                            <input
                                type="text"
                                id="zip"
                                name="zip"
                                required
                                value={shippingInfo.zip}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                
                </form>
                
            </div>
            <PaymentForm/>

        </div>
    );
};

export default CheckoutPage;