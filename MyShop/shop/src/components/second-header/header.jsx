import React from 'react';
import Dropdown from '../dropdown/dropdown';

const Header = () => {
  return (
      <div className="main-header">
        <div className="header-menu">
          {[1, 2, 3].map((index) => {
            return <Dropdown key={index}/>;
          })}
        </div>
      </div>
  );
};

export default Header;
