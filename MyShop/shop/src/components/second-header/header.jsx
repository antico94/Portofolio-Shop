import React, {useEffect} from 'react';
import Dropdown from '../dropdown/dropdown';
import $ from 'jquery';

const Header = ({categories}) => {


  return (
      <div className="main-header">
        <div className="header-menu">
          {[1, 2, 3].map((index) => {
            {/*  return <Dropdown Key={index} />*/}
            return <Dropdown Key={index}/>;
          })}
        </div>
      </div>
  );
};

export default Header;
