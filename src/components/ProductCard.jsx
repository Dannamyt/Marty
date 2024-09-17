import  { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { NavLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({...product,quantity:1});
  };
  
  // console.log(product)
  return (
    <div className="product-card">
      <NavLink to={`/products/${product.id}`}>
        <div><img src={product.thumbnail} alt={product.title} /></div>
        <h3>{product.title}</h3>
        {/* <p>{product.description}</p> */}
      </NavLink>
      <div className='flex'>
        <p>Price: ${product.price}</p>
        <button onClick={handleAddToCart} className='bg-red'>Add to Cart</button>
      </div></div>
  );
};

export default ProductCard;