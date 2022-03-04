import React from 'react';
import './subcategory.css';

const Subcategory = ({image, name}) => {
  return (
      <div className="subcategory">
        <div className="image-container">
          <img src={image} loading="lazy"/>
        </div>
        <div className="text-container">
          <h1>{name}</h1>
        </div>
      </div>);
};

export default Subcategory;
