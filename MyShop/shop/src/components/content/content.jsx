import React, {useEffect, useState} from 'react';
import Subcategory from '../subcategory/subcategory';
import {GiftCardPage, ProductList} from '../index';
import {UnderConstruction} from '../../pages';
import Product from '../product-page/prod';
import AdminPage from '../../pages/admin-page/admin-page';
import {fetchCustomData} from '../../containers/utility/utility';
import Pc from '../../assets/images/gaming/pc.png';
import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {actionCreators} from './../../state/index';

const Content = ({ContentType, Items, CategoryId}) => {

  const dispatch = useDispatch();
  const {setPage} = bindActionCreators(actionCreators, dispatch);
  const {showHeader, hideHeader} = bindActionCreators(actionCreators, dispatch)
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);

  //State Management
  //region
  //ShowHeaderStatus
  ContentType === "Products" ? showHeader() : hideHeader()

  //First Header Active Tab Control
    ContentType === "Gift-Card" && setPage("GiftCardPage")
    ContentType === "Deals" && setPage("DealsPage")
    ContentType === "Subcategory" && setPage("ProductsPage")
    ContentType === "Product" && setPage("ProductsPage")
    ContentType === "CustomerService" && setPage('CustomerServicePage');

  //endregion

  useEffect(() => {
    if (ContentType === 'Subcategory') {
      setDataLoaded(false);
      fetchCustomData(
          'https://localhost:7085/api/Subcategory/category-id/' + CategoryId,
          'get').then(response => {
        if (response.ok) {
          response.json().then(response => {
            setData(response);
            setDataLoaded(true);
          });

        } else {
          response.json().then(error => console.log(error));
        }
      });
    }
  }, [CategoryId]);

  if (ContentType === 'Deals') {
    return <UnderConstruction/>;
  }

    if (ContentType === 'CustomerService') {
    return <UnderConstruction/>;
  }

  if (ContentType === 'Product') {

    return <Product/>;
  }

  if (ContentType === 'Admin') {
    return <AdminPage/>;
  }

  if (ContentType === 'Gift-Card') {
    return <GiftCardPage/>;
  }

  return (<div className="content-section">
    <div className="apps-card">
      {ContentType === 'Products' && [...Array(100).keys()].map(element => {
        return (<ProductList
            Key={element}
            Title="Sistem Desktop PC Serioux cu procesor AMD Athlon™ PRO 300GE 3.40GHz, 4GB DDR4, 256GB SSD M.2 PCIe, Radeon™ Vega 3, No OS"
            Price="5.499"
            Image={Pc}
            Id={element}
        />);
      })}


      {/*{dataLoaded && ContentType === 'Products' && data.map(element => {*/}
      {/*  return (<ProductsListChild*/}
      {/*      Key={element.productId}*/}
      {/*      Title={element.title}*/}
      {/*      Description={element.description}*/}
      {/*      Price={element.price}*/}
      {/*      image={require(*/}
      {/*          '../../../../images/' + element.subcategoryImageName)}*/}
      {/*      Id={element.productId}*/}
      {/*  />);*/}
      {/*})}*/}


      {dataLoaded && ContentType === 'Subcategory' && data.map(element => {
        return (<Subcategory name={element.subcategoryName}
                             key={element.subcategoryId}
                             image={require('../../../../images/' +
                                 element.subcategoryImageName)}/>);
      })}
    </div>
  </div>);
};

export default Content;
