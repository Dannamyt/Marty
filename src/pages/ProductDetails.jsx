import { useParams } from "react-router-dom";
import useFetch from '../utils/useFetch';
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Loader from "../components/Loader";

function ProductDetails() {
    const { addToCart, cartItems, updateQuantity } = useContext(CartContext);
    const { id } = useParams();
    const { data: products, error, isPending } = useFetch('https://dummyjson.com/products/' + id);
    
    const [url, setUrl] = useState(products?.images[0]);
    const [orderQty, setOrderQty] = useState(1);
   
    useEffect(() => {
        if (products && products.images && products.images.length > 0) {
            setUrl(products.images[0]);
            const existingItem = cartItems.find(item => item.id === products.id);
            if (existingItem) {
                setOrderQty(existingItem.quantity); 
            }
        }
    }, [products]);

    const handleIncrement = () => {
        setOrderQty(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (orderQty > 1) {
            setOrderQty(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart({ ...products, quantity: orderQty });   
    };

    return (
        <>
            <div className="p-4 md:p-10">
                {isPending && <Loader className='mx-auto' />}
                {error && <div>{error}</div>}
                {products && (
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <div className="md:w-1/2 p-4">
                            {url && <img src={url} alt="" className="w-full h-auto rounded-lg" />}                              
                            <div className="flex justify-center gap-4 mt-4">
                                {products.images.map((image, index) => (
                                    <div 
                                        key={index} 
                                        className="cursor-pointer" 
                                        onClick={() => setUrl(image)}
                                    >
                                        {products.images.length > 1 && 
                                            <img src={image} alt={`Thumbnail ${index + 1}`} className="w-16 border border-gray-800 rounded-xl" />
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="md:w-1/2 p-4">
                            <div className="text w-full">
                                <p className="text-2xl md:text-4xl font-medium font-libre">{products?.title}</p>
                                <h2 className="font-libre text-gray-500 text-xl">$ {products?.price} <span className="font-normal">({products?.stock})</span></h2>
                                <h2 className="py-2 w-full font-switzer text-gray-900">{products?.description}</h2>
                                
                                <div className="flex items-center gap-4 my-4">
                                    <button 
                                        className="px-2 py-1 border border-gray-400 text-lg font-medium font-ibm"
                                        onClick={handleDecrement}
                                    >
                                        -
                                    </button>
                                    <span className="font-medium text-xl font-ibm">{orderQty}</span>
                                    <button 
                                        className="px-2 py-1 border border-gray-400 text-lg font-medium font-ibm"
                                        onClick={handleIncrement}
                                    >
                                        +
                                    </button>
                                </div>
                                <button 
                                    className="bg-gray-900 hover:bg-gray-600 w-full text-white font-bold p-2 rounded transition"
                                    onClick={handleAddToCart}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ProductDetails;