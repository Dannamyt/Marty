import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'; 

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data.products); 
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const categories = [...new Set(products.map(product => product.category))];

    return (
        <div className="max-w-7xl w-full p-4">
            <h2 className="text-3xl font-libre mb-4">Featured Products</h2>
            <div className="flex flex-wrap justify-center">
                {categories.map(category => {
                    const productFromCategory = products.find(product => product.category === category);
                    return (
                        productFromCategory && (
                            <div key={category} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                                <ProductCard product={productFromCategory} />
                            </div>
                        )
                    );
                })}
            </div>
        </div>
    );
};

export default FeaturedProducts;