import React from 'react';
import {Link} from 'react-router-dom';
import wishlistSVG from './../../../assets/svg/wishlist.svg'
import heartSVG from './../../../assets/svg/heart.svg'

const AppsTab = React.memo(()=>{
    return (
        <div className="side-wrapper">
          <div className="side-title">Apps</div>
          <div className="side-menu">
            <Link to="/wishlist">
                <img src={wishlistSVG} alt={'wishlistSVG'}/>
              Wishlist
            </Link>
            <Link to="/favorites">
                <img src={heartSVG} alt={'heartSVG'}/>
              Favorites
              <span className="notification-number updates">3</span>
            </Link>
          </div>
        </div>
  );
})





export default AppsTab;
