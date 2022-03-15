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
  return (<>
        <Routes>

          <Route path="/categories/mobile-devices"
                 element={<Content ContentType="Subcategory"
                                   Items={mobileDevices}/>}/>
          <Route path="/categories/pc-and-components"
                 element={<Content ContentType="Subcategory"
                                   Items={pcAndComponents}/>}/>}/>
          <Route path="/categories/foto-and-video"
                 element={<Content ContentType="Subcategory"
                                   Items={mobileDevices}/>}/>}/>
          <Route path="/categories/tv-and-monitors"
                 element={<Content ContentType="Subcategory"
                                   Items={tvAndMonitors}/>}/>}/>
          <Route path="/categories/gaming"
                 element={<Content ContentType="Subcategory"
                                   Items={gaming}/>}/>}/>
          <Route path="/categories/peripherals"
                 element={<Content ContentType="Subcategory"
                                   Items={peripherals}/>}/>}/>
          <Route path="/categories/photos-and-videos/products"
                 element={<Content ContentType="Products"
                                   Items={peripherals}/>}/>}/>

          <Route path="/gift-cards"
                 element={<Content ContentType="Gift-Card"
                                   Items={peripherals}/>}/>}/>
          <Route path="/deals"
                 element={<Content ContentType="Construction"
                 />}/>}/>
          <Route path="/customer-service"
                 element={<Content ContentType="Construction"
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
          <Route path="/"
                 element={Home}/>

        </Routes>
      </>
  );
};

export default MyRoutes;
