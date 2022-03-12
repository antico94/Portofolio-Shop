import React from 'react';
import ProductsListChild from '../product-list-child/Products-list-child';
import Subcategory from '../subcategory/subcategory';
import GiftCard from '../gift-card/gift-card';

const Content = ({ContentType, Items}) => {

    return (
      <div className="content-section">
        <div className="apps-card">
          {ContentType === "Gift-Card" && [...Array(8).keys()].map(element => {
            return (<GiftCard price={element}/>);
          })}
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
