import './App.css';
import React, { Suspense } from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import i18nSettings from './i18nSettings';



const Login = React.lazy(() => import('./pages/Login/Login'));
const Register = React.lazy(() => import('./pages/Register/Register'));
const ShippingPolicy = React.lazy(() => import('./pages/Shipping-Policy/ShippingPolicy'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const AboutUs = React.lazy(() => import('./pages/About-Us/AboutUs'));
const BarProductsCategory = React.lazy(() => import('./pages/Bar-Products/BarProductsCategory'));
const CocktailsCategory = React.lazy(() => import('./pages/Cocktails/CocktailsCategory'));
const Orders = React.lazy(() => import('./components/admin/Orders'));
const Users = React.lazy(() => import('./components/admin/Users'));
const Summary = React.lazy(() => import('./components/admin/Summary'));
const Products = React.lazy(() => import('./components/admin/Products'));
const Dashboard = React.lazy(() => import('./components/admin/Dashboard'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));
const Home = React.lazy(() => import('./pages/Home/Home'));

i18nSettings();

// WEBP
// categories 

const App = () => {

  let routes = (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/product-category/cocktails' element={<CocktailsCategory />} />
      <Route path='/product-category/bar-products' element={<BarProductsCategory />} />

      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/shipping-policy' element={<ShippingPolicy />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />

      <Route path='/admin' element={<Dashboard />}>
        <Route path='summary' element={<Summary />} />
        <Route path='products' element={<Products />} />
        <Route path='users' element={<Users />} />
        <Route path='orders' element={<Orders />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )

  return (

    <Suspense >
      <Header />
      <main>
        <Suspense fallback={<div className='center' style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>} >{routes}</Suspense>
      </main>
    </Suspense>

  )
}
export default App
