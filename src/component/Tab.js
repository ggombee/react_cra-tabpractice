/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';
import TabSearch from './TabSearch';

// 버튼생성
const TabItem = ({ tab, onClick }) => {
  return (
    <button
      className="tab"
      type="button"
      onClick={() => onClick(tab.id)}
      // style={{ tab: active ? tab.id : 'black' }}
    >
      {tab.name}
    </button>
  );
};

const TabRender = ({ value }) => {
  console.log('value', value);

  return (
    <span>
      {value.map((v) => (
        <div key={v.id}>
          <span>
            <p>id = {v.id}</p>
            <p>name = {v.name} </p>
            <p>level = {v.level} </p>
            <p>nickName = {v.nickName} </p>
            <p>phone = {v.phone} </p>
            <p>address = {v.address} </p>
            <p>username = {v.username} </p>
            <p>email = {v.email} </p>
            <p>website = {v.website} </p>
            <p>province = {v.province} </p>
            <p>city = {v.city}</p>
            <p>district = {v.district}</p>
            <p>street = {v.street}</p>
            <p>zipcode = {v.zipcode}</p>
            <p>createdAt = {v.createdAt}</p>
            <p>updatedAt = {v.updatedAt}</p>
            <p>---------------------</p>
          </span>
        </div>
      ))}
    </span>
  );
};

const Tab = (props) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const { tabs } = props;
  console.log('selectedTab :', selectedTab);

  return (
    <>
      <div>
        {tabs.map((tab) => (
          <TabItem
            key={tab.id}
            tab={tab}
            active={selectedTab === tab.id}
            onClick={() => setSelectedTab(tab.id)}
          />
        ))}
      </div>
      <TabSearch tabs={tabs} />
      {tabs.map((tab) => (
        <div key={tab.id}>
          {selectedTab === tab.id && (
            <TabRender key={tab.id} value={tab.value} />
          )}
        </div>
      ))}
    </>
  );
};

/* {seletedTab === 1 &&
        firstTab.map((tab) => (
          <div key={tab.id}>
            <span>
              <p>id = {tab.id}</p>
              <p>name = {tab.name} </p>
              <p>level = {tab.level}</p>
              <p>---------------------</p>
            </span>
          </div>
        ))}
      {seletedTab === 2 &&
        secondTab.map((tab) => (
          <div key={tab.id}>
            <span>
              <p>id = {tab.id}</p>
              <p>nickName = {tab.nickName} </p>
              <p>phone = {tab.phone}</p>
              <p>level = {tab.address}</p>
              <p>---------------------</p>
            </span>
          </div>
        ))}
      {seletedTab === 3 &&
        thirdTab.map((tab) => (
          <TabSearch />
        )}  */

// * 유효성 검사기 (pg.70)
// PropTypes.array - 배열
// PropTypes.bool - 부울
// PropTypes.func - 함수
// PropTypes.number - 숫자
// PropTypes.object - 객체
// PropTypes.string - 문자열
// --------------------------
// PropTypes.oneOfType - 속성이 여러 형식 중 하나
// PropTypes.arrayOf - 특정 형식의 배열
// PropTypes.objectOf - 특정 형식의 속성 값을 가진 객체여야 함
// PropTypes.shape - 특정 형태를 지닌 객체
// ---------------------------
// PropTypes.node - 랜더링 가능한 어떤 값이라도 될 수 있음
// PropTypes.element - 리액트 요소여야함
// PropTypes.instanceOf - 지정한 클래스의 인스턴스여야 함
// PropTypes.oneOf - 열거형과 같이 특정한 범위의 값으로 한정돼야한다.

// 속성 기본값
Tab.defaultProps = {
  tabs: [],
  // firstTab: [],
  // secondTab: [],
  // thirdTab: [],
};

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
  // firstTab: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number,
  //     name: PropTypes.string,
  //     level: PropTypes.string,
  //   }),
  // ),
  // secondTab: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     nickName: PropTypes.string,
  //     id: PropTypes.number,
  //     phone: PropTypes.string,
  //     address: PropTypes.string,
  //   }),
  // ),
  // thirdTab: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number,
  //     name: PropTypes.string,
  //     username: PropTypes.string,
  //     email: PropTypes.string,
  //     phone: PropTypes.string,
  //     website: PropTypes.string,
  //     province: PropTypes.string,
  //     city: PropTypes.string,
  //     district: PropTypes.string,
  //     street: PropTypes.string,
  //     zipcode: PropTypes.string,
  //     createdAt: PropTypes.string,
  //     updatedAt: PropTypes.string,
  //   }),
  // ),
};

// active: false,
TabItem.defaultProps = {
  tab: {},
  onClick: () => {},
};

// active: PropTypes.bool,
TabItem.propTypes = {
  tab: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }),
  onClick: PropTypes.func,
};

TabRender.defaultProps = {
  // index: {},
  value: [],
};

TabRender.propTypes = {
  // index: PropTypes.string,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      level: PropTypes.string,
      username: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      website: PropTypes.string,
      province: PropTypes.string,
      city: PropTypes.string,
      district: PropTypes.string,
      street: PropTypes.string,
      zipcode: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      nickName: PropTypes.string,
      address: PropTypes.string,
    }),
  ),
};

export default Tab;
