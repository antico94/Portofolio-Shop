import React, {useContext} from 'react';
import ProductsListChild from '../product-list-child/Products-list-child';
import Subcategory from '../subcategory/subcategory';
import Test from '../../pages/gift-card/gift';
import {AppContext} from '../../containers/app-context/app-context';
import {UnderConstruction} from '../../pages';
import Pc from "./../../assets/images/gaming/pc.png"
import Product from '../product-page/prod';
import AdminPage from "../../pages/admin-page/admin-page";

const Content = ({ContentType, Items}) => {
    // const {setShowHeader} = useContext(AppContext);
    // ContentType === 'Gift-Card' ? setShowHeader(false) : setShowHeader(true);
    if (ContentType === 'Construction') {
        return <UnderConstruction/>;
    }

    if (ContentType === 'Product') {
        return <Product/>;
    }

    if (ContentType === 'Admin') {
        return <AdminPage/>;
    }

    return (
        <div className="content-section">
            <div className="apps-card">
                {
                    ContentType === 'Gift-Card' && <Test/>}
                {ContentType === 'Products' && [...Array(100).keys()].map(element => {
                    return (<ProductsListChild
                            key={element}
                            Title='Sistem Desktop PC Serioux cu procesor AMD Athlon™ PRO 300GE 3.40GHz, 4GB DDR4, 256GB SSD M.2 PCIe, Radeon™ Vega 3, No OS'
                            Price="5.499"
                            Image={Pc}
                            Id={element}
                        />
                    )
                        ;
                })}
                {ContentType === 'Subcategory' && Items.map(element => {
                    return (<Subcategory name={element.name}
                                         key={element.name}
                                         image={element.image}/>);
                })}
            </div>
        </div>)
        ;
};

export default Content;
