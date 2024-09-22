// import { useContext } from 'react';
// import { CartContext } from '../context/CartContext';

// const CartPage = () => {
//   // const { cartItems, removeFromCart,cartCount,cartTotal } = useContext(CartContext);

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cartItems.map(item => (
//             <li key={item.id}>
//               <h3>{item.title}</h3>
//               <p>Price: ${item.price}</p>
//               <div className='w-10 h-10'><img src={item.images[0]} alt="" /></div>
//               <p>Quantity: {item.quantity}</p>
//               <button onClick={() => removeFromCart(item.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//        {/* <h2>Total Quantity: {cartCount}</h2> 
//        <h2>Total Price: ${cartTotal.toFixed(2)}</h2>  */}
//     </div>
//   );
// };

// export default CartPage;