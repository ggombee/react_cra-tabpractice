import React from 'react';
import '../Detail.css';
import MarketSearch from './MarketSearch';

const market = [
  {
    id: 1,
    name: '강변점',
    newAddress: '서울특별시 광진구광나루로 56길 85',
    address: '서울 광진구 구의3동546',
    call: '02-3424-2500',
  },
  {
    id: 2,
    name: '거제점',
    newAddress: '경상남도 거제시 서간도길9-9(옥포동)',
    address: '경남 거제시 옥포동241-1',
    call: '055-641-2500',
  },
  {
    id: 3,
    name: '검단점',
    newAddress: '인천 서구 원당대로 581581',
    address: '인천 서구 마전동626-7',
    call: '032-560-2500',
  },
  {
    id: 4,
    name: '경기양평점',
    newAddress: '경기 양평군 양평읍 남북로 76-0',
    address: '경기 양평군 양평읍 공흥리468-33',
    call: '031-8079-2500',
  },
  {
    id: 1,
    name: '계양점',
    newAddress: '인천 계양구 장제로 822',
    address: '인천 계양구 계산동1059-1',
    call: '032-550-2500',
  },
];

const local = [
  {
    id: 1,
    name: '대전',
  },
  {
    id: 2,
    name: '서울',
  },
  {
    id: 3,
    name: '인천',
  },
  {
    id: 4,
    name: '경기',
  },
  {
    id: 5,
    name: '강원',
  },
  {
    id: 6,
    name: '충남',
  },
  {
    id: 7,
    name: '충북',
  },
  {
    id: 8,
    name: '경북',
  },
  {
    id: 9,
    name: '대구',
  },
  {
    id: 10,
    name: '전북',
  },
  {
    id: 11,
    name: '광주',
  },
  {
    id: 12,
    name: '전남',
  },
  {
    id: 13,
    name: '경남',
  },
  {
    id: 14,
    name: '울산',
  },
  {
    id: 15,
    name: '부산',
  },
  {
    id: 16,
    name: '제주',
  },
];

const search = [
  {
    id: 1,
    name: '매장검색',
  },
  {
    id: 2,
    name: '지역검색',
  },
];

function MarketMain() {
  return (
    <>
      <div>
        <p className="marketmain">매장찾기</p>
      </div>
      <div>
        <MarketSearch market={market} local={local} search={search} />
      </div>
    </>
  );
}

export default MarketMain;
