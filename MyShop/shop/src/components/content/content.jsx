import React, {useEffect, useState} from 'react';
import Subcategory from '../subcategory/subcategory';
import Test from '../../pages/gift-card/gift';
import {UnderConstruction} from '../../pages';
import Product from '../product-page/prod';
import AdminPage from '../../pages/admin-page/admin-page';
import {fetchCustomData} from '../../containers/utility/utility';
import ProductsListChild from '../product-list-child/Products-list-child';
import Pc from '../../assets/images/gaming/pc.png';
import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {actionCreators} from './../../state/index';

const Content = ({ContentType, Items, CategoryId}) => {

  const dispatch = useDispatch();
  const {setPage} = bindActionCreators(actionCreators, dispatch);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (ContentType === 'Subcategory') {
      setDataLoaded(false);
      setPage('ProductsPage');
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
    setPage('DealsPage');
    return <UnderConstruction/>;
  }

    if (ContentType === 'CustomerService') {
    setPage('CustomerServicePage');
    return <UnderConstruction/>;
  }

  if (ContentType === 'Product') {
    setPage('ProductsPage');
    return <Product/>;
  }

  if (ContentType === 'Admin') {
    return <AdminPage/>;
  }

  if (ContentType === 'Gift-Card') {
    setPage('GiftCardPage');
    return <Test/>;
  }

  return (<div className="content-section">
    <div className="apps-card">
      {ContentType === 'Products' && [...Array(100).keys()].map(element => {
        setPage("ProductsPage")
        return (<ProductsListChild
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
