import React from 'react';

import Tabs from './Tab';
import './Tabs.css';

const firstTab = [
  {
    id: 0,
    name: 'Kim',
    level: '대리',
  },
  {
    id: 1,
    name: 'Ko',
    level: '이사',
  },
];

const secondTab = [
  {
    id: 0,
    nickName: 'Kim',
    phone: '000',
    address: '성남',
  },

  {
    id: 1,
    nickName: 'Ko',
    phone: '010',
    address: '홍대',
  },
];
const tabs = [
  { name: '상품쿠폰', id: 1 },
  { name: '금액쿠폰', id: 2 },
  { name: '전체쿠폰', id: 3 },
];

function Coupon() {
  return (
    <>
      <Tabs tabs={tabs} firstTab={firstTab} secondTab={secondTab} />
    </>
  );
}

export default Coupon;

/*
const buttonClick = (tabs) => {
  if (tabs.id === 1) {
    return <firstTab id={Tabs.id} name={Tabs.name} level={Tabs.level} />;
  }
  return (
    <secondTab
      id={Tabs.id}
      nickName={Tabs.nickName}
      phone={Tabs.phone}
      address={Tabs.address}
    />
  );
};
*/
