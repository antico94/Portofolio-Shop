import React from 'react';
import Dropdown from '../dropdown-header/dropdown';
import TestComp from '../test/test';

const Header = ({categories}) => {
  return (
      <div className="main-header">
        <div className="header-menu">
          {[1].map((index) => {
            {/*  return <TestComp Key={index} />*/}
            return <Dropdown Key={index}/>;
          })}

          {[1].map((index) => {
            {/*  return <TestComp Key={index} />*/}
            return <TestComp Key={index}/>;
          })}
        </div>
      </div>
  );
};

export default Header;
