import React, {useState} from 'react';
import {CategoriesTab, AppsTab, BuildTab, BrandsTab} from './parts';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


const SideMenu = ({setDisplayList, setShowsProduct}) => {




  return (
      <div className="left-side">
        <AppsTab/>
        <CategoriesTab setDisplayList={setDisplayList} setShowsProduct={setShowsProduct}/>
        <BuildTab/>
        <BrandsTab/>
      </div>
  );
};

export default SideMenu;
