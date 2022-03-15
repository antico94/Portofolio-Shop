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
import {Home} from './pages';
import {AppContext} from './containers/app-context/app-context';
import MyRoutes from './components/routes/routes';

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

  // Show/Hide the second header
  //region
  const [showHeader, setShowHeader] = useState(true);

  //endregion

  return (
      <Router>
        <AppContext.Provider value={{showHeader, setShowHeader}}>
          <div className="App">
            <DarkModeToggle onClickHandler={darkModeToggle}/>
            <div className="app">
              <FirstHeader/>
              <div className="wrapper">
                <SideMenu/>
                <div className="main-container">
                  {showHeader && <SecondHeader/>}
                  <div className="content-wrapper">
                    {!promoClosed && <Promo closePromo={closePromo}/>}
                    <MyRoutes/>
                  </div>
                </div>
              </div>
              <div className="overlay-app"/>
            </div>

          </div>
        </AppContext.Provider>
      </Router>)
      ;

}

export default App;