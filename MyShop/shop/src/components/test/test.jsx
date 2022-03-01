import React, {useEffect} from 'react';
import './test.css';
import $ from 'jquery';

const TestComp = ({criteria}) => {
  criteria = {
    name: "Brands",
    options: ["Samsung", "Apple", "Sonny"]
  }
  useEffect(() => {
    const menu = $('.side-menu-glass');
    const dropdownButton = $('.side-wrapper-glass');
    dropdownButton.click(() => {
      menu.css('height', (criteria.options.length * 42) + 'px');
      console.log(menu.css("height"))
      console.log(criteria.options.length * 42);
    });
    menu.mouseleave(()=>{
      menu.css('height', '0px');
    })
  }, []);

  return (
      <div className="side-wrapper-glass">
        <div className="side-title-glass">{criteria.name}<i
    className="bx bxs-down-arrow"/></div>
        <ul className="side-menu-glass">
          {criteria.options.map((element) => {
            return <li><a href="#">
              <svg viewBox="0 0 512 512" fill="currentColor">
                <path
                    d="M467 0H45C20.186 0 0 20.186 0 45v422c0 24.814 20.186 45 45 45h422c24.814 0 45-20.186 45-45V45c0-24.814-20.186-45-45-45zM181 241c41.353 0 75 33.647 75 75s-33.647 75-75 75-75-33.647-75-75c0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45zm180 120h30c8.291 0 15 6.709 15 15s-6.709 15-15 15h-30c-24.814 0-45-20.186-45-45V211h-15c-8.291 0-15-6.709-15-15s6.709-15 15-15h15v-45c0-8.291 6.709-15 15-15s15 6.709 15 15v45h45c8.291 0 15 6.709 15 15s-6.709 15-15 15h-45v135c0 8.276 6.724 15 15 15z"/>
              </svg>
              {element}
            </a></li>;
          })}
        </ul>

      </div>
  );
};

export default TestComp;
