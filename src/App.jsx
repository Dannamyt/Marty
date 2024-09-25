import { Routes, Route } from 'react-router-dom';
import './index.css';

import NavBar from './components/NavBar';

import { SkeletonTheme } from 'react-loading-skeleton';
import Footer from './components/Footer';

import { lazy, Suspense } from 'react';

// import Shop from './components/Shop';
import Loader from './components/Loader';



const Shop = lazy(()=>wait(2500).then(()=>import('./components/Shop')))
const HomePage = lazy(()=>wait(2500).then(()=>import('./pages/Homepage')))
const ProductDetails = lazy(()=>wait(2500).then(()=>import('./pages/ProductDetails')))
const SignUp = lazy(()=>wait(2500).then(()=>import('./components/authentication/sign-up')))
const SignIn = lazy(()=>wait(2500).then(()=>import('./components/authentication/sign-in')))
const PaymentForm = lazy(()=>wait(2500).then(()=>import('./components/payment-form')))
const CheckoutPage = lazy(()=>wait(2500).then(()=>import('./components/Checkout')))
const Authentication = lazy(()=>wait(2500).then(()=>import('./components/authentication/authentication')))
const PaymentSuccessful = lazy(()=>wait(2500).then(()=>import('./pages/PaymentSuccessful')))
const WelcomePage = lazy(()=>wait(2500).then(()=>import('./pages/WelcomePage')))






const App = () => {
    return (
          <div className='pt-14 min-h-screen flex flex-col'>
              <SkeletonTheme>
                  {/* <NavBar /> */}
                  <Routes>
                      <Route  path="/" element={<NavBar />}>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/shop"
                            element={
                                <Suspense fallback={<Loader/>}>
                                    <Shop />
                                </Suspense>
                            }
                        />
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/payment-successful" element={<PaymentSuccessful />} />
                        <Route path="/welcome" element={<WelcomePage />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/authentication" element={<Authentication />} />
                        <Route path="/stripe" element={<PaymentForm />} />
                        <Route path='/products/:id' element={<ProductDetails />} />
                      </Route>
                  </Routes>
                  <Footer />
              </SkeletonTheme>
          </div>   
           );
};

export default App;

function wait(time){
return new Promise(resolve =>{
  setTimeout(resolve,time)
})
}