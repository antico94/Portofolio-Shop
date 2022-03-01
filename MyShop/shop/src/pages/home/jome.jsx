import React, {useState} from 'react';
import './home.css';
import {
  Content,
  DarkModeToggle,
  FirstHeader,
  Promo,
  SecondHeader,
  SideMenu,
} from '../../components';

const Home = () => {
      const [displayList, setDisplayList] = useState([]);
      const [showsProduct, setShowsProduct] = useState(true);

      const setDisplayListFunction = (list) => {
        setDisplayList(list);
      };
      const setShowsProductFunction = (bool) => {
        setShowsProduct(bool);
      };

      return (
          <div className="homepage">
            <DarkModeToggle/>
            <div className="app">
              <FirstHeader/>
              <div className="wrapper">
                <SideMenu setShowsProduct={setShowsProductFunction}
                          setDisplayList={setDisplayListFunction}/>
                <div className="main-container">
                  <SecondHeader/>
                  <div className="content-wrapper">
                    <Promo/>
                    <Content showsProduct={showsProduct} displayList={displayList}/>
                  </div>
                </div>
              </div>
              <div className="overlay-app"/>
            </div>
          </div>);
    }
;

export default Home;
