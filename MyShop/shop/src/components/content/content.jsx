import React from 'react';
import ProductsListChild from '../product-list-child/Products-list-child';
import Subcategory from '../subcategory/subcategory';

const Content = ({displayList, showsProduct}) => {

  return (
      <div className="content-section">
        <div className="apps-card">
          {showsProduct && displayList.map(element => {
            return (<ProductsListChild/>);
          })}
          {!showsProduct && displayList.map(element => {
            return (<Subcategory name={element.name}
                                 image={element.image}/>);
          })}
        </div>
      </div>);
};

export default Content;
