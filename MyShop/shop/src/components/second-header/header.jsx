import React from 'react';
import $ from 'jquery';
import Dropdown from '../dropdown-header/dropdown';
import {TestComp} from '../index';

const Header = ({categories}) => {
  $(function() {
    $('.second-header-link').click(function() {
      $('.second-header-link').removeClass('is-active');
      $(this).addClass('is-active');
    });
  });
  return (
      <div className="main-header">
        <div className="header-menu">
          <TestComp/>
          {/*<Dropdown/>*/}
          {/*<Dropdown/>*/}
          {/*<Dropdown/>*/}
        </div>
      </div>
  );
};

export default Header;
