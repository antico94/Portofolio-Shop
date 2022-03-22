import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {
  DarkModeToggle,
  FirstHeader,
  Promo,
  SecondHeader,
  SideMenu,
} from './components';
import {getCookieValue, isCookiePresent} from './containers/utility/utility';
import MyRoutes from './components/routes/routes';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from './state/index';
import {depositMoney} from './state/action-creators';

function App() {
  // const account = useSelector((state) => state.account);
  // const currentPage = useSelector((state) => state.page);
  // const dispatch = useDispatch();
  // const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators,
  //     dispatch);
  // const {setPage} = bindActionCreators(actionCreators, dispatch);

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
  // const [showHeader, setShowHeader] = useState(true);

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
                {<SecondHeader/>}
                <div className="content-wrapper">
                  {!promoClosed && <Promo closePromo={closePromo}/>}
                  <MyRoutes/>
                </div>
              </div>
            </div>
            <div className="overlay-app"/>
          </div>
        </div>
      </Router>)
      ;

}

export default App;