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
    // updateQuantity(products.id, orderQty + 1); 
  };

  const handleDecrement = () => {
    if (orderQty > 1) {
      setOrderQty(prevQuantity => prevQuantity - 1);
    //   updateQuantity(products.id, orderQty - 1); 
    }
  };

     console.log(url)
console.log(orderQty)

   const handleAddToCart = () => {
    addToCart({ ...products, quantity: orderQty });   
     console.log(orderQty,products.id)  

  };

console.log(products?.reviews)


    return(
        <>
        <div className="p-10">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {  products && (
                <div>
                    <div className="flex justify-center items-center  h-screen basis-1/2 w-full ">
                        <div className="basis-1/2 p-32">
                            {url &&     <img src={url} alt="" className="w-full" />}                              
                                <div className="flex justify-center gap-4">
                                    {products.images.map((image, index) => (
                                    <div 
                                        key={index} 
                                        className=" cursor-pointer" 
                                        onClick={() => setUrl(image)}
                                    >
{                           products.images.length>1 &&             <img src={image} alt={`Thumbnail ${index + 1}`} className="w-16 border-solid border-2 rounded-xl border-gray-800" />
}                                    </div>
                                    ))}
                               </div>
                        </div>
                        <div className="  basis-1/2 p-8">
                            <div className="text    w-full">
                                <p className="  text-4xl font-medium font-libre "  > {products?.title}helo</p>
                                <h2 className="  font-libre text-gray-500">$ {products?.price} <span className="font-normal">({products?.stock})</span></h2>
                                <h2 className="   py-2 w-4/5 font-switzer text-gray-900"> {products?.description}</h2>
                                
                                
                                <div className=" gap-16">
                                    <div className="my-4">
                                        <button className="px-2 py-1 border-solid border-2 text-2xl font-medium font-ibm"
                                            onClick={handleDecrement}>
                                                -
                                        </button>
                                        <span className="px-4 py-4 font-medium text-xl font-ibm">{orderQty}</span>
                                        <button 
                                            className="px-2 py-1 border-solid border-2    text-2xl font-medium font-ibm"
                                            onClick={handleIncrement}
                                            >+
                                        </button>
                                     </div>
                                   <button  className="bg-gray-900 ease-in delay-200 hover:bg-gray-600 m
                                    w-56 text-white font-bold p-2 my-3 rounded" onClick={handleAddToCart}>Add To Cart</button>
                                    </div>
                            </div>
                           
                        </div>
                       
                    </div>
               
                </div>
            )}
            
        </div>
      
        
        </>
    )
}
export default ProductDetails