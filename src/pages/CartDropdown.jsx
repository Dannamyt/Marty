import { NavLink } from "react-router-dom";


import del from '../assets/delete.png'
const CartDropdown = ({ cartItems, removeFromCart, cartTotal }) => {
    return (
        <div className="absolute right-0 mt-6 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
            <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Your Cart</h2>
            </div>
            {cartItems.length === 0 ? (
                <p className="p-4 text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <ul className="max-h-48 overflow-y-auto">
                    {cartItems.map(item => (
                        <li key={item.id} className="flex items-center justify-between p-2 border-b border-gray-200">
                            <div className="flex items-center">
                                <div className='w-10 h-10 mr-2'>
                                    <img src={item.images[0]} alt={item.title} className="object-cover w-full h-full" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold">{item.title}</h3>
                                    <p>${item.price.toFixed(2)}</p>
                                    <p>Qty: {item.quantity}</p>
                                </div>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700"><img src={del} alt="" /></button>
                        </li>
                    ))}
                </ul>
            )}
            {cartItems.length > 0 && (
                <div className="p-4 border-t border-gray-200">
                    <h2 className="font-semibold">Total Price: ${cartTotal.toFixed(2)}</h2>
                    {cartItems.length > 0 && (<NavLink to={'checkout'}  >
                        <button 
                                className="bg-blue-500 hover:bg-blue-600 ml-1 mt-6 w-56 text-white font-bold p-2 rounded"
                            >
                            Checkout
                            </button>
                    </NavLink> ) }  
                </div>
            )}
         </div>
    );
};

export default CartDropdown;