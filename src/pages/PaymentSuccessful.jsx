import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import check from '../assets/check.png'
const PaymentSuccessful = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-green-100">
            {/* Checkmark Icon */}
            <div className="text-green-600 text-6xl mb-4">
              <img src={check} alt="" />
            </div>
            {/* Thank You Message */}
            <h1 className="text-3xl font-bold font-switzer text-green-600 mb-2">Payment Successful!</h1>
            <p className="text-lg text-gray-700 mb-6">Thank you for your purchase!</p>
            <p className='font-switzer'>Your order is on its way!</p>
            {/* Button to Homepage */}
            <Link to="/" className="bg-gray-800 text-white mt-4 py-2 px-4 rounded hover:bg-gray-600 transition duration-200">
                Go to Homepage
            </Link>
        </div>
    );
};

export default PaymentSuccessful;