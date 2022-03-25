import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Content} from '../index';

const MyRoutes = () => {
  return (
      <Routes>

        <Route path="/categories/mobile-devices"
               element={<Content ContentType="Subcategory"
                                 CategoryId={1}/>}/>
        <Route path="/categories/pc-and-components"
               element={<Content ContentType="Subcategory"
                                 CategoryId={2}/>}/>}/>
        <Route path="/categories/photos-and-videos"
               element={<Content ContentType="Subcategory"
                                 CategoryId={3}/>}/>}/>
        <Route path="/categories/tv-and-monitors"
               element={<Content ContentType="Subcategory"
                                 CategoryId={4}/>}/>}/>
        <Route path="/categories/gaming"
               element={<Content ContentType="Subcategory"
                                 CategoryId={5}
               />}/>}/>
        <Route path="/categories/peripherals"
               element={<Content ContentType="Subcategory"
                                 CategoryId={6}
               />}/>}/>
        <Route path="/products-by-subcategoryId/:int"
               element={<Content ContentType="ProductsBySubcategory"
               />}/>}/>

        <Route path="/all-products"
               element={<Content ContentType="AllProducts"
               />}/>}/>

        <Route path="/gift-cards"
               element={<Content ContentType="Gift-Card"
               />}/>}/>
        <Route path="/deals"
               element={<Content ContentType="Deals"
               />}/>}/>
        <Route path="/customer-service"
               element={<Content ContentType="CustomerService"
               />}/>}/>
        <Route path="/wishlist"
               element={<Content ContentType="Construction"
               />}/>}/>
        <Route path="/favorites"
               element={<Content ContentType="Construction"
               />}/>}/>
        <Route path="/build-a-pc"
               element={<Content ContentType="Construction"
               />}/>}/>
        <Route path="/product/:int"
               element={<Content ContentType="ProductPage"
               />}/>}/>
        <Route path="/test"
               element={<Content ContentType="AllProducts"
               />}/>}/>
        <Route path="/admin"
               element={<Content ContentType="Admin"
               />}/>}/>
        <Route path="/"
               element={<Content ContentType="Subcategory"
                                 CategoryId={1}/>}/>
        {/*<Route path="/"*/}
        {/*       element={Home}/>*/}
      </Routes>
  );
};

export default MyRoutes;
