import React from 'react';
import Pc from './../../assets/images/gaming/pc.png'

const ProductsListChild = ({
  Title = "Sistem Desktop PC Serioux cu procesor AMD Athlon™ PRO 300GE 3.40GHz, 4GB DDR4, 256GB SSD M.2 PCIe, Radeon™ Vega 3, No OS",
  Price = "5.499",
  Image = Pc,
  Id= 0}) => {
  return (
      <div className="app-card">
       <span>
        <img src={Image}/>
       </span>
        <div className="app-card__subtext">{Title}
        </div>
        <div className="app-card-buttons">
          <button
              className="content-button status-button">Add to Cart
          </button>
        </div>
      </div>);
};

export default ProductsListChild;
