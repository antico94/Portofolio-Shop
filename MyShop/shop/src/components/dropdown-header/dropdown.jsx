import React, {useState} from 'react';
import css from './dropdown.module.css';

const Dropdown = () => {
  const criteria = 'Brand';
  const [selected, setSelected] = useState("All");
  const options = ['Nvidia', 'Intel', 'AMD', 'ASUS'];
  return (
      <div className={css.dropdownMain}>
        <div className={css.container}>
          <button className={css.btn}><span>{criteria}</span><i
              className={css.materialIcons}>{selected}</i>
            <ul className={css.dropdown}>
              {options.map(option => {
                return <li className={css.active}
                           onClick={(event) => {
                             setSelected(option);
                           }}
                >
                  {/*<input className={css.dropdownCheckbox} type="checkbox"/>*/}
                  <a href="#" onClick={event => event.stopPropagation()}>
                    {option}
                  </a>
                </li>;
              })}
            </ul>
          </button>
        </div>
      </div>);
};

export default Dropdown;
