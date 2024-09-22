import { Routes, Route } from 'react-router-dom';
// import CartPage from './pages/CartPage';
import './index.css'

import HomePage from './pages/Homepage';
import NavBar from './components/NavBar';
import ProductDetails from './pages/ProductDetails';
import SignIn from './components/authentication/sign-in';
import SignUp from './components/authentication/sign-up';
import PaymentForm from './components/payment-form';
import { SkeletonTheme } from 'react-loading-skeleton';
import Footer from './components/Footer';
import CheckoutPage from './components/Checkout';
import Authentication from './components/authentication/authentication';
import Shop from './components/Shop';
import WelcomePage from './pages/WelcomePage';



const App = () => {


;
  return (
      <div className='pt-14 min-h-screen flex flex-col'>
      <SkeletonTheme>
        <NavBar/>
          <Routes>
              {/* <Route path="/" element={<NavBar/>} /> */}
              <Route path="/" element={<HomePage/>} />
              <Route path="/shop" element={<Shop/>} />
              {/* <Route path="/cart" element={<CartPage/>} /> */}
              <Route path="/sign-in" element={<SignIn/>} />
              <Route path="/welcome" element={<WelcomePage/>} />
              <Route path="/sign-up" element={<SignUp/>} />
              <Route path="/checkout" element={<CheckoutPage/>} />
              <Route path="/authentication" element={<Authentication/>} />
              <Route path="/stripe" element={<PaymentForm />} />
              <Route path ='/products/:id' element ={<ProductDetails/>}/>
          </Routes>
          <Footer/>
      </SkeletonTheme>
      </div>
      
  );
};

export default App;