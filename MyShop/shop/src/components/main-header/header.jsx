import React from 'react';
import $ from 'jquery';
import Dropdown from '../dropdown-header/dropdown';

const Header = ({categories}) => {
  $(function() {
    $('.main-header-link').click(function() {
      $('.main-header-link').removeClass('is-active');
      $(this).addClass('is-active');
    });
  });
  return (
      <div className="main-header">
        {/*<a className="menu-link-main" href="#"></a>*/}
        <div className="header-menu">
          <Dropdown/>
          <Dropdown/>
          <Dropdown/>
        </div>
      </div>
  );
};

export default Header;
