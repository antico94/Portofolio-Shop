import React from 'react';
import {Link} from 'react-router-dom';
import mobileDevices from './../../../assets/svg/mobileDevices.svg'
import tvMonitorSVG from './../../../assets/svg/monitors.svg'
import PeripheralsSVG from './../../../assets/svg/peripherals.svg'
import PcAndComponentsIcon from './../../../assets/svg/PC & Components.svg'
import GamingSVG from './../../../assets/svg/gaming.svg'


const CategoriesTab = React.memo(({setDisplayList, setShowsProduct}) => {
  return (
      <div className="side-wrapper">
        <div className="side-title">Categories</div>
        <div className="side-menu">
          <Link to="/categories/mobile-devices" >
            <img src={mobileDevices} alt='Mobile_Devices' />
            Mobile Devices
          </Link>

          <Link to="/categories/pc-and-components">
            <img src={PcAndComponentsIcon} alt={'PcAndComponentsIcon'}/>
            PC & Components
          </Link>
          <Link to="/categories/photos-and-videos">
            <svg viewBox="0 0 58 58" fill="currentColor">
              <path
                  d="M57 6H1a1 1 0 00-1 1v44a1 1 0 001 1h56a1 1 0 001-1V7a1 1 0 00-1-1zM10 50H2v-9h8v9zm0-11H2v-9h8v9zm0-11H2v-9h8v9zm0-11H2V8h8v9zm26.537 12.844l-11 7a1.007 1.007 0 01-1.018.033A1.001 1.001 0 0124 36V22a1.001 1.001 0 011.538-.844l11 7a1.003 1.003 0 01-.001 1.688zM56 50h-8v-9h8v9zm0-11h-8v-9h8v9zm0-11h-8v-9h8v9zm0-11h-8V8h8v9z"/>
            </svg>
            Photo & Video
          </Link>
          <Link to="/categories/tv-and-monitors">
            <img src={tvMonitorSVG} alt={'TV and Monitors'}/>
            TV & Monitors
          </Link>
          <Link to="/categories/gaming">
            <img src={GamingSVG} alt={'GamingSVG'}/>
            Gaming
          </Link>
          <Link to="/categories/peripherals">
            <img src={PeripheralsSVG} alt={'Peripherals'}/>
            Peripherals
          </Link>
        </div>
      </div>
  );
});

export default CategoriesTab;
