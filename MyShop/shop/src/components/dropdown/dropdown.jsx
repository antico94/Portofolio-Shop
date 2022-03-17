import React, {useState} from 'react';
import './dropdown.css';
import $ from 'jquery';

const Dropdown = ({criteria, Key}) => {
  criteria = {
    name: 'Brands', options: ['Samsung', 'Apple', 'Sonny'],
  };

  const [selection, setSelection] = useState([]);

  const onClickHandler = () => {
    let menu = $('#glass-menu-' + Key);
    menu.css('height', (criteria.options.length * 42) + 'px');
    menu.css('overflow', 'visible');
  };

  const onMouseLeaveHandler = () => {
    let menu = $('#glass-menu-' + Key);
    menu.mouseleave(() => {
      menu.css('height', '0px');
      menu.css('overflow', 'hidden');
    });
  };

  const onClickSelection = (evt) => {
    let brand = evt.innerText;

    if (!selection.includes(brand)) {
      setSelection(selection => [...selection, brand]);
    } else {
      setSelection(selection.filter(item => item !== brand));
    }
  };

  return (
      <div className="side-wrapper-glass">
        <div className="side-title-glass"
             onClick={onClickHandler}
             onMouseOut={onMouseLeaveHandler}
        >{criteria.name}:
          <span className="glass-selection-span">{selection.length !== 0
              ? selection.length === 1 ? selection[0] : selection[0] + '...'
              : 'All'}</span>
          <i className="bx bxs-down-arrow"/></div>
        <ul className="side-menu-glass" id={'glass-menu-' + Key}>
          {criteria.options.map((element, index) => {
            return <li
                key={index}
                onClick={e => onClickSelection(e.target)}
            ><a href="#">
              {!selection.includes(element) &&
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                       viewBox="0 0 24 24">
                    <path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24z"/>
                  </svg>}
              {selection.includes(element) &&
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                       viewBox="0 0 24 24">
                    <path d="M24 0h-24v24h24v-24z"/>
                  </svg>}
              {element}
            </a></li>;
          })}
        </ul>
      </div>);
};

export default Dropdown;
