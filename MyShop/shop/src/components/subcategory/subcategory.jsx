import React from 'react';
import './subcategory.css';

const Subcategory = ({image, name}) => {
  const onClickHandler = () =>{
    name.includes(" ") ? window.location = "/" + name.replace(" ", "-").toLowerCase() :  window.location = window.location + "/" + name.toLowerCase()
  }
  return (
      <div className="subcategory" onClick={onClickHandler}>
        <div className="image-container">
          <img src={image} loading="lazy"/>
        </div>
        <div className="text-container">
          <h1>{name}</h1>
        </div>
      </div>);
};

export default Subcategory;
