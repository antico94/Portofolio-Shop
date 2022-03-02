import React, {useEffect} from 'react';
import $ from 'jquery';

const Dark = () => {
  useEffect(() => {
    document.body.classList.toggle('light-mode');
    const toggleButton = document.querySelector('.dark-light');
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });
  }, []);

  return (
      <div className="dark-light">
        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"
             fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
      </div>
  );
};

export default Dark;
