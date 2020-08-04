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
      <Link to="/Vicmarket">
        <div className="menu">빅마켓</div>
      </Link>
      <Link to="/Event">
        <div className="menu">이벤트</div>
      </Link>
      <Link to="/Leaflet">
        <div className="menu">전단</div>
      </Link>
    </>
  );
}

export default Header;
