import { Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import './index.css'

import HomePage from './pages/Homepage';
import NavBar from './components/NavBar';
import ProductDetails from './pages/ProductDetails';
import SignIn from './components/authentication/sign-in';
import SignUp from './components/authentication/sign-up';
import PaymentForm from './components/payment-form';
const App = () => {
  return (
      <Routes>
          <Route index path="/" element={<HomePage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/stripe" element={<PaymentForm/>} />
          <Route path ='/products/:id' element ={<ProductDetails/>}/>
      </Routes>
      
  );
};

export default App;