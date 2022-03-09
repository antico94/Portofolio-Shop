import React, {useState} from 'react';
import {CategoriesTab, AppsTab, BuildTab, BrandsTab} from './parts';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


const SideMenu = () => {




  return (
      <div className="left-side">
        <AppsTab/>
        <CategoriesTab/>
        <BuildTab/>
        <BrandsTab/>
      </div>
  );
};

export default SideMenu;
