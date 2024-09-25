import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    const { currentUser } = useContext(UserContext); 

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold font-libre mb-4">Welcome to AuraLuxe!</h1>
            {currentUser ? (
                <>
                    <p className="text-lg mb-2 font-switzer">Hello 👋 {currentUser.displayName}!</p>
                    <p className="text-md font-switzer">You have successfully logged in.</p>
                    <Link to="/" className="bg-gray-800 text-white mt-4 py-2 px-4 rounded hover:bg-gray-600 transition duration-200">
                Go to Homepage
            </Link>                </>
            ) : (
                <p className="text-lg mb-2">Please log in to see your details.</p>
            )}
        </div>
    );
};

export default WelcomePage;