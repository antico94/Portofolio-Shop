import React from 'react';
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


return <div className="homepage">
  <DarkModeToggle/>
  <div className="app">
    <FirstHeader/>
    <div className="wrapper">
      <SideMenu/>
      <div className="main-container">
        <SecondHeader/>
        <div className="content-wrapper">
          <Promo/>
          <Content/>
        </div>
      </div>
    </div>
    <div className="overlay-app"/>
  </div>
</div>
}
export default Home;
