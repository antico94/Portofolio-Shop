import React, {useContext} from 'react';
import ProductsListChild from '../product-list-child/Products-list-child';
import Subcategory from '../subcategory/subcategory';
import Test from '../test-gift-card/test';
import {AppContext} from '../../containers/app-context/app-context';

const Content = ({ContentType, Items}) => {
  const {setShowHeader} = useContext(AppContext);
  ContentType === 'Gift-Card' ? setShowHeader(false) : setShowHeader(true);

  return (
      <div className="content-section">
        <div className="apps-card">
          {
              ContentType === 'Gift-Card' && <Test/>}
          {ContentType === 'Product' && [...Array(100).keys()].map(element => {
            return (<ProductsListChild/>);
          })}
          {ContentType === 'Subcategory' && Items.map(element => {
            return (<Subcategory name={element.name}
                                 image={element.image}/>);
          })}
        </div>
      </div>);
};

export default Content;
