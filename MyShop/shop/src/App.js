import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {
  Content,
  DarkModeToggle,
  FirstHeader,
  Promo,
  SecondHeader,
  SideMenu,
} from './components';
import mobileDevices from './containers/subcategory/mobile-devices';
import pcAndComponents from './containers/subcategory/pc-and-components';
import tvAndMonitors from './containers/subcategory/tv-and-monitors';
import gaming from './containers/subcategory/gaming';
import peripherals from './containers/subcategory/peripherals';
import {getCookieValue, isCookiePresent} from './containers/utility/utility';

function App() {

  //Promo settings user preference
  //region
  const [promoClosed, setPromoClosed] = useState(() => {
    if (isCookiePresent('promoClosed')) {
      return Boolean(getCookieValue('promoClosed'));
    }
    return false;
  });
  const closePromo = () => {
    setPromoClosed(true);
    document.cookie = 'promoClosed=true';
  };
  //endregion

  //Dark Mode user preference
  //region
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    setDarkMode(JSON.parse(window.localStorage.getItem('darkMode')));
  }, []);
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('darkMode', 'true');
      if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
      }
    } else {
      localStorage.setItem('darkMode', 'false');

      if (!document.body.classList.contains('light-mode')) {
        document.body.classList.add('light-mode');
      }
    }
  }, [darkMode]);
  const darkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  //endregion

  return (
      <Router>
        <div className="App">

          <DarkModeToggle onClickHandler={darkModeToggle}/>
          <div className="app">
            <FirstHeader/>
            <div className="wrapper">
              <SideMenu/>
              <div className="main-container">
                <SecondHeader/>
                <div className="content-wrapper">
                  {!promoClosed && <Promo closePromo={closePromo}/>}
                  <Routes>
                    {/*<Route path="/" element={<Home/>}/>*/}
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
                           element={<Content ContentType="Product"
                                             Items={peripherals}/>}/>}/>
                    <Route path="/gift-cards"
                           element={<Content ContentType="Gift-Card"
                                             Items={peripherals}/>}/>}/>
                  </Routes>
                  <Content/>
                </div>
              </div>
            </div>
            <div className="overlay-app"/>
          </div>
        </div>
      </Router>);

}

export default App;