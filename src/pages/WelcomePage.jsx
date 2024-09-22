import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


const WelcomePage = () => {
    const { currentUser } = useContext(UserContext); // Access current user from context

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to ShopSyDee!</h1>
            {currentUser ? (
                <>
                    <p className="text-lg mb-2">Hello, {currentUser.displayName}!</p>
                    <p className="text-md">You have successfully logged in.</p>
                    <img src={currentUser.photoURL} alt={`${currentUser.displayName}`} className="rounded-full mt-4 w-32 h-32" />
                </>
            ) : (
                <p className="text-lg mb-2">Please log in to see your details.</p>
            )}
        </div>
    );
};

export default WelcomePage;