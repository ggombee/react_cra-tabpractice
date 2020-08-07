import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
      <Link to="/Login">
        <div className="logo">M쿠폰</div>
      </Link>
      <Link to="/Club">
        <div className="menu">클럽</div>
      </Link>
      <Link to="/Coupon">
        <div className="menu">쿠폰</div>
      </Link>
      <Link to="/Notice">
        <div className="menu">지점공지</div>
      </Link>
      <Link to="/Market/MarketMain">
        <div className="menu">매장찾기</div>
      </Link>
      <Link to="/Gift">
        <div className="menu">선물함</div>
      </Link>
    </>
  );
}

export default Header;
