import React, {useEffect, useRef, useState} from 'react';
import $ from 'jquery';
import ProfilePic from './../../assets/images/profile/profile.png';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

const FirstHeader = React.memo(() => {
  //region Refs
  const ProductPage = useRef();
  const DealsPage = useRef();
  const CustomerServicePage = useRef();
  const GiftCardPage = useRef();
  //endregion

  //region States
  const [active, setActive] = useState(ProductPage);
  const currentPage = useSelector((state) => state.page);
  // setInterval(() => console.log(currentPage), 1000)

  //endregion


  //region Search Bar
  useEffect(() => {
    // Search bar effect
    $('.search-bar input').focus(function() {
      $('.header').addClass('wide');
    }).blur(function() {
      $('.header').removeClass('wide');
    });
  }, []);
  //endregion




  //region Set Active Page
  useEffect(() => {
    currentPage === 'ProductsPage'
        ? setActive(ProductPage)
        : ProductPage.current.classList.contains('is-active') &&
        ProductPage.current.classList.remove('is-active');
    currentPage === 'GiftCardPage'
        ? setActive(GiftCardPage)
        : GiftCardPage.current.classList.contains('is-active') &&
        GiftCardPage.current.classList.remove('is-active');
    currentPage === 'DealsPage'
        ? setActive(DealsPage)
        : DealsPage.current.classList.contains('is-active') &&
        DealsPage.current.classList.remove('is-active');
    currentPage === 'CustomerServicePage'
        ? setActive(CustomerServicePage)
        : CustomerServicePage.current.classList.contains('is-active') &&
        CustomerServicePage.current.classList.remove('is-active');
  }, [currentPage]);

  useEffect(() => {
    active.current.classList.add('is-active');
  }, [active]);
  //endregion


  return (
      <Link to={"/categories/mobile-devices"} className="header">
        <div className="logo-top-container">
          <h1 className="logo-top-text">
            <span className="logo-top-text-first">PRIME</span>
            <span className="logo-top-text-second">STORE</span>
          </h1>
        </div>
        <div className="header-menu">
          <Link ref={ProductPage} className="menu-link"
                to="/all-products">Products</Link>
          <Link ref={DealsPage} to="/deals" className="menu-link notify">Today's
            Deals</Link>
          <Link ref={CustomerServicePage} to="/customer-service"
                className="menu-link">Customer Service</Link>
          <Link ref={GiftCardPage} className="menu-link notify"
                to="/gift-cards">Gift Cards</Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search"/>
        </div>
        <div className="header-menu">        <Link className="menu-link"
              to="/admin">Admin</Link></div>

        <div className="header-profile">
          <div className="notification">
            <span className="notification-number">3</span>
            <svg viewBox="0 0 24 24" fill="currentColor"
                 stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round"
                 className="feather feather-bell">
              <path
                  d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
            </svg>
          </div>
          <svg viewBox="0 0 512 512" fill="currentColor">
            <path
                d="M448.773 235.551A135.893 135.893 0 00451 211c0-74.443-60.557-135-135-135-47.52 0-91.567 25.313-115.766 65.537-32.666-10.59-66.182-6.049-93.794 12.979-27.612 19.013-44.092 49.116-45.425 82.031C24.716 253.788 0 290.497 0 331c0 7.031 1.703 13.887 3.006 20.537l.015.015C12.719 400.492 56.034 436 106 436h300c57.891 0 106-47.109 106-105 0-40.942-25.053-77.798-63.227-95.449z"/>
          </svg>
          <img className="profile-img"
               src={ProfilePic}
               alt=""/>
        </div>
      </Link>);
});

export default FirstHeader;
