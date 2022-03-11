import React from 'react';
import PromoImg from './../../assets/images/promo/glass.png';
import xButton from "./../../assets/images/promo/x.png"
import "./promo.css"

const Promo = React.memo(({closePromo}) => {
  const closeHandler = () =>{
    closePromo()
  }
  return (<div className="content-wrapper-header">
    <div className="content-wrapper-context">
      <h3 className="img-content">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 195.803 195.803"
            style={{
              enableBackground: 'new 0 0 195.803 195.803',
            }}
            xmlSpace="preserve">
          <path
              style={{
                fill: '#010002',
              }}
              d="m195.803 104.175-15.958-18.141 9.688-19.612-19.494-9.616 1.525-23.685-24.182-1.557-7.315-21.616-20.915 7.086L104.173.002 86.504 15.541 65.146 4.991 54.939 25.648l-21.82-1.396L31.68 46.67 8.668 54.461l7.716 22.769L0 91.628l14.315 16.277-10.604 21.48 21.978 10.851-1.442 22.457 21.552 1.385 7.383 21.777 22.887-7.748 15.561 17.694 16.745-14.731 19.727 9.742 10.275-20.815 24.322 1.568 1.492-23.313 20.389-6.907-7.125-21.033 18.348-16.137zm-37.5 39.568-1.364 21.273-22.268-1.424-9.369 18.975-17.898-8.84-15.21 13.378-14.208-16.162-20.947 7.097-6.735-19.852-19.512-1.249 1.306-20.414-20.135-9.942 9.706-19.644L8.7 92.197l14.838-13.048-7.054-20.829 21.083-7.143 1.303-20.392 19.784 1.267 9.284-18.814 19.541 9.656L103.62 8.697l13.618 15.489 18.975-6.428 6.671 19.687 22.139 1.417-1.385 21.638 17.654 8.722L172.504 87l14.609 16.617-16.813 14.784 6.471 19.082-18.468 6.26z"
          />
          <path
              style={{
                fill: '#010002',
              }}
              d="M120.707 90.797c-9.18 0-16.763 7.791-16.763 21.784.1 13.879 7.58 20.818 16.23 20.818 8.868 0 16.552-7.258 16.552-21.895.004-13.234-6.295-20.707-16.019-20.707zm-.318 36.945c-5.766 0-9.183-6.725-9.076-15.582 0-8.761 3.203-15.7 9.076-15.7 6.51 0 8.965 7.047 8.965 15.489 0 9.172-2.77 15.793-8.965 15.793zM91.558 82.791c0-13.238-6.406-20.722-16.123-20.722-9.183 0-16.763 7.802-16.763 21.681.107 13.983 7.58 20.922 16.23 20.922 8.968.004 16.656-7.257 16.656-21.881zm-25.414.641c0-8.761 3.103-15.7 8.969-15.7 6.514 0 8.969 7.047 8.969 15.489 0 9.176-2.777 15.797-8.969 15.797-5.866-.004-9.183-6.728-8.969-15.586zm48.905-21.362-40.791 71.759h5.976L121.03 62.07z"
          />
        </svg>
        Today's Promotion
      </h3>
      <div className="content-text">Grab yourself 10 free images
        from Adobe Stock in a 30-day free trial plan and find
        perfect image, that will help you with your new project.
      </div>
      <button className="content-button">Start free trial</button>
    </div>
        <img id="x-button-promo"
         src={xButton}
         loading="lazy"
         alt="close"
        onClick={closeHandler}/>
    <img className="content-wrapper-img"
         src={PromoImg}
         loading="lazy"
         alt=""/>
  </div>);
});

export default Promo;
