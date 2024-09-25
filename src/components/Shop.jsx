import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard';
import CategoryList from '../CategoryList';

function Shop() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            
            setProducts(data.products);
            // Extract unique categories from products
            const uniqueCategories = [...new Set(data.products.map(product => product.category))];
            setCategories(uniqueCategories);
        };
        fetchProducts();
    }, []);

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return (
        <>
            <h1 className='text-center text-4xl mt-10 font-libre'>New Arrivals</h1>

            <CategoryList categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

            <div className="flex flex-wrap justify-center gap-4 mt-10">
                {filteredProducts.map(product => (
                    <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Shop;