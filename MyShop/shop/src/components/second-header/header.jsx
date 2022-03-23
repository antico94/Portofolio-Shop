import React from 'react';
import {Dropdown} from '../index';

const Header = () => {
  return (
      <div className="main-header">
        <div className="header-menu">
          {/*{[1, 2, 3].map((index) => {*/}
          {/*  return <Dropdown key={index}/>;*/}
          {/*})}*/}
          <Dropdown Key={1}/>
        </div>
      </div>
  );
};

export default Header;
