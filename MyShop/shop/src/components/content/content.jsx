import React, {useContext} from 'react';
import ProductsListChild from '../product-list-child/Products-list-child';
import Subcategory from '../subcategory/subcategory';
import Test from '../gift-card/gift';
import {AppContext} from '../../containers/app-context/app-context';
import {UnderConstruction} from '../../pages';

const Content = ({ContentType, Items}) => {
  const {setShowHeader} = useContext(AppContext);
  ContentType === 'Gift-Card' ? setShowHeader(false) : setShowHeader(true);
  if (ContentType === "Construction"){
    return <UnderConstruction/>
  }

  return (
      <div className="content-section">
        <div className="apps-card">
          {
              ContentType === 'Gift-Card' && <Test/>}
          {ContentType === 'Products' && [...Array(100).keys()].map(element => {
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
