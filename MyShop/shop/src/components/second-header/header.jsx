import React, {useEffect} from 'react';
import TestComp from '../test/test';
import $ from 'jquery';

const Header = ({categories}) => {


  return (
      <div className="main-header">
        <div className="header-menu">
          {[1, 2, 3].map((index) => {
            {/*  return <TestComp Key={index} />*/}
            return <TestComp Key={index}/>;
          })}
        </div>
      </div>
  );
};

export default Header;
