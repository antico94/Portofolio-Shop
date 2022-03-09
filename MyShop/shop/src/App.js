import './App.css';
import React, {useState} from 'react';
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

function App() {
  const [displayList, setDisplayList] = useState([]);
  const [showsProduct, setShowsProduct] = useState(true);

  return (
      <Router>
        <div className="App">

          <DarkModeToggle/>
          <div className="app">
            <FirstHeader/>
            <div className="wrapper">
              <SideMenu/>
              <div className="main-container">
                <SecondHeader/>
                <div className="content-wrapper">
                  <Promo/>
                  <Routes>
                    {/*<Route path="/" element={<Home/>}/>*/}
                    <Route path="/categories/mobile-devices"
                           element={<Content showsProduct={false}
                                             displayList={mobileDevices}/>}/>
                    <Route path="/categories/pc-and-components"
                           element={<Content showsProduct={false}
                                             displayList={pcAndComponents}/>}/>}/>
                    <Route path="/categories/foto-and-video"
                           element={<Content showsProduct={false}
                                             displayList={mobileDevices}/>}/>}/>
                    <Route path="/categories/tv-and-monitors"
                           element={<Content showsProduct={false}
                                             displayList={tvAndMonitors}/>}/>}/>
                    <Route path="/categories/gaming" element={<Content showsProduct={false}
                                             displayList={gaming}/>}/>}/>
                    <Route path="/categories/peripherals" element={<Content showsProduct={false}
                                             displayList={peripherals}/>}/>}/>

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
