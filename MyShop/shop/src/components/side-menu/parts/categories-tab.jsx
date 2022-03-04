import React from 'react';
import devices from '../../../containers/subcategory/mobile-devices';
import pcAndComponents from '../../../containers/subcategory/pc-and-components';
import DisplayDevices from '../../../containers/subcategory/tv-and-monitors';
import GamingCategory from '../../../containers/subcategory/gaming';
import PeripheralsCategory from '../../../containers/subcategory/peripherals';

const CategoriesTab = ({setDisplayList, setShowsProduct}) => {
    const MobileDevicesHandler = () => {
    setDisplayList(devices);
    setShowsProduct(false);
  };

  const PCComponentsHandler = () => {
    setDisplayList(pcAndComponents);
    setShowsProduct(false);
  };

  const FotoVideoHandler = () => {
    setShowsProduct(true);
  };

  const TVMonitorHandler = () => {
    setDisplayList(DisplayDevices);
    setShowsProduct(false);
  };

  const GamingHandler = () => {
    setDisplayList(GamingCategory);
    setShowsProduct(false);
  };

  const PeripheralsHandler = () => {
    setDisplayList(PeripheralsCategory);
    setShowsProduct(false);
  };
  return (
        <div className="side-wrapper">
          <div className="side-title">Categories</div>
          <div className="side-menu">
            <a href="#" id="mobile-devices-category"
               onClick={MobileDevicesHandler}>
              <svg viewBox="0 0 488.455 488.455" fill="currentColor">
                <path
                    d="M287.396 216.317c23.845 23.845 23.845 62.505 0 86.35s-62.505 23.845-86.35 0-23.845-62.505 0-86.35 62.505-23.845 86.35 0"/>
                <path
                    d="M427.397 91.581H385.21l-30.544-61.059H133.76l-30.515 61.089-42.127.075C27.533 91.746.193 119.115.164 152.715L0 396.86c0 33.675 27.384 61.074 61.059 61.074h366.338c33.675 0 61.059-27.384 61.059-61.059V152.639c-.001-33.674-27.385-61.058-61.059-61.058zM244.22 381.61c-67.335 0-122.118-54.783-122.118-122.118s54.783-122.118 122.118-122.118 122.118 54.783 122.118 122.118S311.555 381.61 244.22 381.61z"/>
              </svg>
              Mobile Devices
            </a>
            <a href="#"
               onClick={PCComponentsHandler}>
              <svg viewBox="0 0 512 512" fill="currentColor">
                <circle cx="295.099" cy="327.254" r="110.96"
                        transform="rotate(-45 295.062 327.332)"/>
                <path
                    d="M471.854 338.281V163.146H296.72v41.169a123.1 123.1 0 01121.339 122.939c0 3.717-.176 7.393-.5 11.027zM172.14 327.254a123.16 123.16 0 01100.59-120.915L195.082 73.786 40.146 338.281H172.64c-.325-3.634-.5-7.31-.5-11.027z"/>
              </svg>
              PC & Components
            </a>
            <a href="#"
               onClick={FotoVideoHandler}>
              <svg viewBox="0 0 58 58" fill="currentColor">
                <path
                    d="M57 6H1a1 1 0 00-1 1v44a1 1 0 001 1h56a1 1 0 001-1V7a1 1 0 00-1-1zM10 50H2v-9h8v9zm0-11H2v-9h8v9zm0-11H2v-9h8v9zm0-11H2V8h8v9zm26.537 12.844l-11 7a1.007 1.007 0 01-1.018.033A1.001 1.001 0 0124 36V22a1.001 1.001 0 011.538-.844l11 7a1.003 1.003 0 01-.001 1.688zM56 50h-8v-9h8v9zm0-11h-8v-9h8v9zm0-11h-8v-9h8v9zm0-11h-8V8h8v9z"/>
              </svg>
              Photo & Video
            </a>
            <a href="#"
               onClick={TVMonitorHandler}>
              <svg viewBox="0 0 512 512" fill="currentColor">
                <path
                    d="M499.377 46.402c-8.014-8.006-18.662-12.485-29.985-12.613a41.13 41.13 0 00-.496-.003c-11.142 0-21.698 4.229-29.771 11.945L198.872 275.458c25.716 6.555 47.683 23.057 62.044 47.196a113.544 113.544 0 0110.453 23.179L500.06 106.661C507.759 98.604 512 88.031 512 76.89c0-11.507-4.478-22.33-12.623-30.488zM176.588 302.344a86.035 86.035 0 00-3.626-.076c-20.273 0-40.381 7.05-56.784 18.851-19.772 14.225-27.656 34.656-42.174 53.27C55.8 397.728 27.795 409.14 0 416.923c16.187 42.781 76.32 60.297 115.752 61.24 1.416.034 2.839.051 4.273.051 44.646 0 97.233-16.594 118.755-60.522 23.628-48.224-5.496-112.975-62.192-115.348z"/>
              </svg>
              TV & Monitors
            </a>
            <a href="#"
               onClick={GamingHandler}>

              <svg viewBox="0 0 512 512" fill="currentColor">
                <path
                    d="M497 151H316c-8.401 0-15 6.599-15 15v300c0 8.401 6.599 15 15 15h181c8.401 0 15-6.599 15-15V166c0-8.401-6.599-15-15-15zm-76 270h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15zm0-180h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15z"/>
                <path
                    d="M15 331h196v60h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h135v-30h-30v-60h30V166c0-24.814 20.186-45 45-45h135V46c0-8.284-6.716-15-15-15H15C6.716 31 0 37.716 0 46v270c0 8.284 6.716 15 15 15z"/>
              </svg>
              Gaming
            </a>
            <a href="#"
               onClick={PeripheralsHandler}>
              <svg viewBox="0 0 512 512" fill="currentColor">
                <path
                    d="M0 331v112.295a14.996 14.996 0 007.559 13.023L106 512V391L0 331zM136 391v121l105-60V331zM271 331v121l105 60V391zM406 391v121l98.441-55.682A14.995 14.995 0 00512 443.296V331l-106 60zM391 241l-115.754 57.876L391 365.026l116.754-66.15zM262.709 1.583a15.006 15.006 0 00-13.418 0L140.246 57.876 256 124.026l115.754-66.151L262.709 1.583zM136 90v124.955l105 52.5V150zM121 241L4.246 298.876 121 365.026l115.754-66.15zM271 150v117.455l105-52.5V90z"/>
              </svg>
              Peripherals
            </a>
          </div>
        </div>
  );
};

export default CategoriesTab;
