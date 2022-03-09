import React from 'react';
import {AppsTab, BrandsTab, BuildTab, CategoriesTab} from './parts';

const SideMenu = React.memo(() => {
  return (
      <div className="left-side">
        <AppsTab/>
        <CategoriesTab/>
        <BuildTab/>
        <BrandsTab/>
      </div>
  );
});

export default SideMenu;
