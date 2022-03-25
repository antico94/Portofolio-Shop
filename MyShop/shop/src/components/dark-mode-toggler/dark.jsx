import React, {useEffect, useState} from 'react';
import {
  getCookieValue,
  isCookiePresent,
} from '../../containers/utility/utility';

const Dark = ({onClickHandler}) => {
  return (
      <div className="dark-light" onClick={onClickHandler}>
        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"
             fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
      </div>
  );
};

export default Dark;
