import React from 'react';
import './subcategory.css';
import {Link} from 'react-router-dom';

const Subcategory = ({image, name, subcategoryId}) => {
  // const onClickHandler = () =>{
  //   name.includes(" ") ? window.location = "/" + name.replace(" ", "-").toLowerCase() :  window.location = window.location + "/" + name.toLowerCase()
  // }
  return (
      <Link to={"/products-by-subcategoryId/" + subcategoryId} className="subcategory">
        <div className="image-container">
          <img src={image} loading="lazy"/>
        </div>
        <div className="text-container">
          <h1 className="subcategory-title">{name}</h1>
        </div>
      </Link>);
};

export default Subcategory;
