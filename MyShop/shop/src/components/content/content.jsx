import React from 'react';
import ProductsListChild from '../product-list-child/Products-list-child';
import Subcategory from '../subcategory/subcategory';
import Test from '../test-gift-card/test';

const Content = ({ContentType, Items}) => {

    return (
      <div className="content-section">
        <div className="apps-card">


          {/*{ContentType === "Gift-Card" && [5, 10,50, 100, 200, 300, 400, 500].map(element => {*/}
          {/*  return (<GiftCard price={element}/>);*/}
          {/*})}*/}
          {ContentType === 'Gift-Card' && <Test/>}


          {ContentType==="Product" && [...Array(100).keys()].map(element => {
            return (<ProductsListChild/>);
          })}
          {ContentType==="Subcategory" && Items.map(element => {
            return (<Subcategory name={element.name}
                                 image={element.image}/>);
          })}
        </div>
      </div>);


//   if (!displayList){
//     return (      <div className="content-section">
//         <div className="apps-card">
//         </div>
//     </div>)
//   }
//

};

export default Content;
