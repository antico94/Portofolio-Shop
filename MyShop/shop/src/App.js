import './App.css';
import React, {useState} from 'react';
import {
  Content,
  DarkModeToggle,
  FirstHeader,
  Promo,
  SecondHeader,
  SideMenu,
} from './components';

function App() {
  const [displayList, setDisplayList] = useState([]);
  const [showsProduct, setShowsProduct] = useState(true);

  const setDisplayListFunction = (list) => {
    setDisplayList(list);
  };
  const setShowsProductFunction = (bool) => {
    setShowsProduct(bool);
  };

  return (<div className="App">


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
    </div>
    );

  </div>);
}

export default App;
