import  { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import CategoryList from '../CategoryList';
import NavBar from '../components/NavBar';
import SignIn from '../components/authentication/sign-in';
import SignUp from '../components/authentication/sign-up';

const HomePage = () => {
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
    <div>
      <NavBar/>
      
      <h1>Our Products</h1>


      <CategoryList categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className=" flex flex-wrap">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* <SignIn/>
      <SignUp/> */}

    </div>
    
  );
};

export default HomePage;