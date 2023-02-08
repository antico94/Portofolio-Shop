import React from 'react';
import {Link} from 'react-router-dom';
import buildSVG from './../../../assets/svg/build.svg'

const BuildTab = React.memo(()=>{
    return (
        <div className="side-wrapper">
          <div className="side-title">Services</div>
          <div className="side-menu">
            <Link to="/build-a-pc">
                <img src={buildSVG} alt={'buildSVG'}/>
              Build a PC
            </Link>
          </div>
        </div>
  );
})



export default BuildTab;
