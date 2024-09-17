import { useParams } from "react-router-dom"
import useFetch from '../utils/useFetch'
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
CartContext
function ProductDetails(){
   

   const{addToCart,cartItems,updateQuantity} = useContext(CartContext)

    const {id} = useParams()
   const {data:products,error,isPending} = useFetch('https://dummyjson.com/products/'+id)
    
   const [url,setUrl] = useState(products?.images[0])
    const [orderQty, setOrderQty] = useState(1)
   
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
    updateQuantity(products.id, orderQty + 1); 
  };

  const handleDecrement = () => {
    if (orderQty > 1) {
      setOrderQty(prevQuantity => prevQuantity - 1);
      updateQuantity(products.id, orderQty - 1); 
    }
  };

     console.log(url)
console.log(orderQty)

   const handleAddToCart = () => {
    addToCart({ ...products, quantity: orderQty });   
     console.log(orderQty,products.id)  

  };




    return(
        <>
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {  products && (
                <div>
                    <div className="flex justify-center  h-screen basis-1/2 w-full ">
                        <div className="basis-1/2 p-32">
                            {url &&     <img src={url} alt="" className="w-full" />}                              
                                <div className="flex justify-center gap-4">
                                    {products.images.map((image, index) => (
                                    <div 
                                        key={index} 
                                        className=" cursor-pointer" 
                                        onClick={() => setUrl(image)}
                                    >
                                        <img src={image} alt={`Thumbnail ${index + 1}`} className="w-20" />
                                    </div>
                                    ))}
                               </div>
                        </div>
                        <div className="  basis-1/2">
                            <div className="text    w-full">
                                <h1 className="  text-4xl font-bold font-ibm "  > {products?.title}</h1>
                                <h2 className=" font-semibold font-ibm text-red-600">$ {products?.price} <span className="font-normal">({products?.stock})</span></h2>
                                <h2 className="  text-gray-500 w-3/5 font-ibm"> {products?.description}</h2>
                                <div className="flex gap-16">
                                    <div>
                                        <button className="px-4 py-4  bg-gray-400 text-white text-2xl font-medium font-ibm"
                                            onClick={handleDecrement}>
                                                -
                                        </button>
                                        <span className="px-4 py-2 font-medium text-2xl font-ibm">{orderQty}</span>
                                        <button 
                                            className="px-4 py-4  bg-gray-400 text-white  text-2xl font-medium font-ibm"
                                            onClick={handleIncrement}
                                            >+
                                        </button>
                                     </div>
                                   <button onClick={handleAddToCart}>Add To Cart</button>
                                    </div>
                            </div>
                           
                        </div>
                       
                    </div>
               
                </div>
            )}
            
           {/* { products && <div>
                {products.reviews.map((product)=>
                <div key={product.id}>
                    <p>{product.rating}</p>
                    <p>{product.comment}</p>
                    <p>{product.reviewerName}</p>
                </div>
                )}
            </div>} */}
        </div>
        
        </>
    )
}
export default ProductDetails