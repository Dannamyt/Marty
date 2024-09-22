import { useContext, useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { signOutUser } from "../utils/firebase.utils"
import { CartContext } from "../context/CartContext"
import CartDropdown from "../pages/CartDropdown"
import bag from '../assets/bag.png'

function NavBar(){
    
    const {currentUser} = useContext(UserContext)
    // const{cartCount} = useContext(CartContext)
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    const { cartItems, removeFromCart,cartCount,cartTotal } = useContext(CartContext);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    
    return(
        <>
        <div className="flex border-solid border-b border-gray-900 top-0 fixed z-50 justify-between mb-8 items-center p-4  w-full bg-white ">
                <h1 className=" text-xl font-bold ">ShopSyDee</h1>
            <nav className="flex space-x-4 ">
                <NavLink to="/" className="font-ibm hover:text-gray-500">HOME</NavLink>
                <NavLink to="/shop" className="font-ibm hover:text-gray-500">SHOP</NavLink>
              
                <div>
                    {/* <NavLink to="/sign-up" className="font-ibm hover:text-gray-500">SIGN UP</NavLink> */}
                </div>
                {currentUser ? (
                    <NavLink onClick={signOutUser} className="font-ibm hover:text-gray-500">SIGN OUT</NavLink>
                ) : (
                    <NavLink to="/authentication" className="font-ibm hover:text-gray-500">SIGN IN</NavLink>
                )}
                {/* <NavLink to="/cart" className=" hover:text-gray-500 font-ibm">
                    Cart({cartCount})
                </NavLink> */
                }
                     <button onClick={toggleCart} className="relative">
                
                        <div className="material-icons flex font-ibm"><img src={bag} className="h-6 w-auto" alt="" />CART</div>
                        
                    
                    {cartCount > 0 && (
                        <span className="absolute top-0 right-10 bg-red-500 text-white rounded-full text-xs px-1">
                            {cartCount}
                        </span>
                    )}
                </button>
                {isCartOpen && (
                    <CartDropdown 
                        cartItems={cartItems} 
                        removeFromCart={removeFromCart} 
                        cartTotal={cartTotal}
                    />
                )}
            </nav>
        </div>
{/* <Outlet/> */}

        </>
    )
}
export default NavBar