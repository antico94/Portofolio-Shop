import React, {useEffect, useState} from 'react';
import Subcategory from '../subcategory-list/subcategory';
import {GiftCardPage} from '../index';
import Product from '../product-page/prod';
import AdminPage from '../../pages/admin-page/admin-page';
import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {actionCreators} from './../../state/index';
import {UnderConstruction} from '../../pages';
import {API} from '../../containers/utility/API';
import {fetchCustomData} from '../../containers/utility/utility';
import SubcategoryManager from '../subcategory-manager/child-content';
import {useLocation} from 'react-router-dom';
import ProductListManager from '../product-list-manager/product-list-manager';

const ContentManager = ({ContentType, Items, CategoryId}) => {

  //State Management Redux
  //region
  const dispatch = useDispatch();
  const {setPage} = bindActionCreators(actionCreators, dispatch);
  const {showHeader, hideHeader} = bindActionCreators(actionCreators, dispatch);
  const location = useLocation();

  //endregion

  //Default states
  //region
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('');
  const [componentRendered, setComponentRendered] = useState(
      <UnderConstruction/>);
  //endregion

  //Fetching Data
  //region
  useEffect(() => {
    setDataLoaded(false);
    if (ContentType === 'Subcategory') {
      setUrl(API.SubcategoryByCategoryId + CategoryId);
    }
    if (ContentType === 'AllProducts') {
      setUrl(API.AllProducts);
    }
    if (ContentType === 'ProductsBySubcategory') {
      let currentId = location.pathname.split('/')[2];
      setUrl(API.ProductBySubcategory + currentId);
    }
    if (ContentType === 'ProductPage') {
      let currentId = location.pathname.split('/')[2];
      setUrl(API.AllProducts + currentId);
    }
  }, [location]);

  useEffect(() => {
    if (url !== '') {
      fetchCustomData(url, 'get').then(response => {
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
  }, [url]);

  useEffect(() => {
    if (dataLoaded) {
      if (ContentType === 'Subcategory') {
        setComponentRendered(<SubcategoryManager data={data}/>);
      }
      if (ContentType === 'AllProducts') {
        setComponentRendered(<ProductListManager data={data}/>);
      }
      if (ContentType === 'ProductsBySubcategory') {
        setComponentRendered(<ProductListManager data={data}/>);
      }
      if (ContentType === 'ProductPage') {
        setComponentRendered(<Product data={data}/>);
      }
    }
  }, [dataLoaded]);

// )

//endregion

   //When ContentType is AllProducts will fetch different data from another source and set the states needed.
//region
//endregion

   //State Management
//region
//ShowHeaderStatus
  if (ContentType === 'ProductsBySubcategory') {
    showHeader();
  } else if (ContentType === 'AllProducts') {
    showHeader();
  } else
    hideHeader();

//First Header Active Tab Control
  ContentType === 'Gift-Card' && setPage('GiftCardPage');
  ContentType === 'Deals' && setPage('DealsPage');
  ContentType === 'Subcategory' && setPage('ProductsPage');
  ContentType === 'Product' && setPage('ProductsPage');
  ContentType === 'Products' && setPage('ProductsPage');
  ContentType === 'AllProducts' && setPage('ProductsPage');
  ContentType === 'CustomerService' && setPage('CustomerServicePage');
//endregion

   //When to render Under Construction page
//region
  if (ContentType === 'Product') {
    return <Product/>;
  } else if (ContentType === 'Admin') {
    return <AdminPage/>;
  } else if (ContentType === 'Gift-Card') {
    return <GiftCardPage/>;
  } else if (ContentType === 'Subcategory') {
  } else if (ContentType === 'Products') {
  } else if (ContentType === 'AllProducts') {
  } else if (ContentType === 'ProductsBySubcategory') {
  } else if (ContentType === 'ProductPage') {
  } else return <UnderConstruction/>;
//endregion

  return (
      <div className="content-section">
        <div className="apps-card">
          {componentRendered}
        </div>
      </div>);
};

export default ContentManager;

