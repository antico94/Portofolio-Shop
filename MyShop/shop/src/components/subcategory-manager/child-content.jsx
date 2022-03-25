import React from 'react';
import Subcategory from '../subcategory-list/subcategory';

const SubcategoryManager = ({data}) => {
  return (
  data.map(element => {
    return (<Subcategory
        name={element.subcategoryName}
        subcategoryId={element.subcategoryId}
        key={element.subcategoryId}
        image={require('../../../../images/' +
            element.subcategoryImageName)}/>);
  }))
};

export default SubcategoryManager;
