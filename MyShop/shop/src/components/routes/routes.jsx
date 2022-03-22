import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Content} from '../index';
import mobileDevices from '../../containers/subcategory/mobile-devices';
import pcAndComponents from '../../containers/subcategory/pc-and-components';
import tvAndMonitors from '../../containers/subcategory/tv-and-monitors';
import gaming from '../../containers/subcategory/gaming';
import peripherals from '../../containers/subcategory/peripherals';
import {Home} from '../../pages';

const MyRoutes = () => {
  return (
      <Routes>

        <Route path="/categories/mobile-devices"
               element={<Content ContentType="Subcategory"
                                 Items={mobileDevices}
                                 CategoryId={1}/>}/>
        <Route path="/categories/pc-and-components"
               element={<Content ContentType="Subcategory"
                                 Items={pcAndComponents}
                                 CategoryId={2}/>}/>}/>
        <Route path="/categories/foto-and-video"
               element={<Content ContentType="Subcategory"
                                 Items={mobileDevices}
                                 CategoryId={3}/>}/>}/>
        <Route path="/categories/tv-and-monitors"
               element={<Content ContentType="Subcategory"
                                 Items={tvAndMonitors}
                                 CategoryId={4}/>}/>}/>
        <Route path="/categories/gaming"
               element={<Content ContentType="Subcategory"
                                 Items={gaming}
                                 CategoryId={5}/>}/>}/>
        <Route path="/categories/peripherals"
               element={<Content ContentType="Subcategory"
                                 CategoryId={6}
                                 Items={peripherals}/>}/>}/>
        <Route path="/categories/photos-and-videos/products"
               element={<Content ContentType="Products"
                                 Items={peripherals}/>}/>}/>

        <Route path="/gift-cards"
               element={<Content ContentType="Gift-Card"
                                 Items={peripherals}/>}/>}/>
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
               element={<Content ContentType="Product"
               />}/>}/>
        <Route path="/admin"
               element={<Content ContentType="Admin"
               />}/>}/>
        <Route path="/"
               element={<Content ContentType="Subcategory"
                                 Items={mobileDevices}
                                 CategoryId={1}/>}/>
        {/*<Route path="/"*/}
        {/*       element={Home}/>*/}
      </Routes>
  );
};

export default MyRoutes;
