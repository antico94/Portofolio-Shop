import React, {useState} from 'react';
import Pc from './../../assets/images/gaming/pc.png';
import './product.css';

const ProductsListChild = ({
  Title = 'Sistem Desktop PC Serioux cu procesor AMD Athlon™ PRO 300GE 3.40GHz, 4GB DDR4, 256GB SSD M.2 PCIe, Radeon™ Vega 3, No OS',
  Price = '5.499',
  Image = Pc,
  Id = 0,
}) => {
  const [loved, setLoved] = useState(false);

  const onLoveHandler = () => {
    setLoved(!loved);
  };




  return (<div className="app-card">
    {!loved && <a href="#"><svg
        onClick={onLoveHandler}
        width="24" height="24" xmlns="http://www.w3.org/2000/svg"
         fillRule="evenodd" clipRule="evenodd">
      <path
          d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"

      />
    </svg></a>}

    {loved && <a href="#"> <svg
        onClick={onLoveHandler}
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg></a>}
    <span>
                <img src={Image} loading="lazy"/>
       </span>
    <div className="app-card__subtext">{Title}
    </div>
    <div className="app-card-lower">
      <span>1099.99 Lei</span>
      <div className="app-card-buttons">
        <button
            className="content-button status-button">Add to Cart
        </button>
      </div>
    </div>
  </div>);
};

export default ProductsListChild;
