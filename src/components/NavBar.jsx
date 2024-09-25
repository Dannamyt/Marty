import { Suspense, useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { signOutUser } from "../utils/firebase.utils";
import { CartContext } from "../context/CartContext";
import CartDropdown from "../pages/CartDropdown";
import bag from '../assets/bag.png';
import Loader from "./Loader";

function NavBar() {
    const { currentUser } = useContext(UserContext);
    const { cartItems, removeFromCart, cartCount, cartTotal } = useContext(CartContext);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className="flex justify-between items-center p-4 border-b border-gray-900 bg-white fixed top-0 w-full z-50">
                <NavLink to={'/'} className="text-xl font-bold font-libre">AuraLuxe</NavLink>
                <div className="hidden md:flex space-x-4">
                    <NavLink to="/" className="font-ibm hover:text-gray-500">HOME</NavLink>
                    <NavLink to="/shop" className="font-ibm hover:text-gray-500">SHOP</NavLink>
                    {currentUser ? (
                        <NavLink onClick={signOutUser} className="font-ibm hover:text-gray-500">SIGN OUT</NavLink>
                    ) : (
                        <NavLink to="/authentication" className="font-ibm hover:text-gray-500">SIGN IN</NavLink>
                    )}
                    <button onClick={toggleCart} className="relative flex items-center">
                        <img src={bag} className="h-6 w-auto" alt="" />
                        CART
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-10 bg-red-500 text-white rounded-full text-xs px-1">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-gray-600 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-400 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-end p-4">
                    {cartCount > 0 && (
                            <span className="absolute top-0 right-7 bg-red-500 text-white rounded-full text-xs px-1">
                                {cartCount}
                            </span>)} <button onClick={toggleMobileMenu} className="text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center mt-10">
                        <NavLink to="/" className="block px-4 py-2 hover:bg-gray-200 w-full text-center">HOME</NavLink>
                        <NavLink to="/shop" className="block px-4 py-2 hover:bg-gray-200 w-full text-center">SHOP</NavLink>
                        {currentUser ? (
                            <NavLink onClick={signOutUser} className="block px-4 py-2 hover:bg-gray-200 w-full text-center">SIGN OUT</NavLink>
                        ) : (
                            <NavLink to="/authentication" className="block px-4 py-2 hover:bg-gray-200 w-full text-center">SIGN IN</NavLink>
                        )}
                        <NavLink to={'/cart'} className={`block px-4 py-2 hover:bg-gray-200 w-full text-center`}>
                            CART({cartCount})
                        </NavLink>
                    </div>
                </div>
            )}

            {isCartOpen && (
                <CartDropdown 
                    cartItems={cartItems} 
                    removeFromCart={removeFromCart} 
                    cartTotal={cartTotal}
                />
            )}

            <Suspense fallback={<Loader />}><Outlet /></Suspense>
        </>
    );
}

export default NavBar;