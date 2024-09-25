import  { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({...product,quantity:1});
  };
  
  // console.log(product)
  return (
    <div className="product-card w-72 p-4">
      <NavLink to={`/products/${product.id}`}>
        <div>
        
          <img src={product.thumbnail|| <Skeleton count={5}/>} alt={product.title} className="w-full flex-shrink-0  border-gray-800" />
                     
          </div>
        <p className='text-xl font-switzer truncate max-w-xs'>{product.title || <Skeleton/>}</p>
        {/* <p>{product.description}</p> */}
      </NavLink>
      <div className=' '>
        <p className=' font-ibm '> ${product.price}</p>
        <button onClick={handleAddToCart} className=' bg-gray-800 text-white text-1xl border-solid  px-4 py-1 font-switzer'>Add to Cart</button>
      </div></div>
  );
};

export default ProductCard;