/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';
// import TabRender from './TabRender';
// import Articles from './Articles';

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

const TabRender = (props) => {
  const { index, firstTab, secondTab, thirdTab } = props;
  console.log(props);
  const indexTab = [
    {
      id: 1,
      name: firstTab,
    },
    {
      id: 2,
      name: secondTab,
    },
    {
      id: 3,
      name: thirdTab,
    },
  ];

  return (
    <>
      {indexTab.map((i) => (
        <div key={i.id}>
          {index === i.id && (
            <span>
              <p>id = {i.id}</p>
              <p>name = {i.name} </p>
              <p>level = {i.level} </p>
              <p>nickName = {i.nickName} </p>
              <p>phone = {i.phone} </p>
              <p>address = {i.address} </p>
              <p>username = {i.username} </p>
              <p>email = {i.email} </p>
              <p>website = {i.website} </p>
              <p>province = {i.province} </p>
              <p>city = {i.city}</p>
              <p>district = {i.district}</p>
              <p>street = {i.street}</p>
              <p>zipcode = {i.zipcode}</p>
              <p>createdAt = {i.createdAt}</p>
              <p>updatedAt = {i.updatedAt}</p>
              <p>---------------------</p>
            </span>
          )}
        </div>
      ))}
    </>
  );
};

const Tab = (props) => {
  const [selectedTab, setSelectedTab] = useState('1');
  const { tabs, firstTab, secondTab, thirdTab } = props;

  return (
    <div>
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

      <TabRender
        index={selectedTab}
        // active={selectedTab === tab.id}
        firstTab={firstTab}
        secondTab={secondTab}
        thirdTab={thirdTab}
        // onClick={() => setSelectedTab(tab.id)}
      />
    </div>
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
  firstTab: [],
  secondTab: [],
  thirdTab: [],
};

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
  firstTab: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      level: PropTypes.string,
    }),
  ),
  secondTab: PropTypes.arrayOf(
    PropTypes.shape({
      nickName: PropTypes.string,
      id: PropTypes.number,
      phone: PropTypes.string,
      address: PropTypes.string,
    }),
  ),
  thirdTab: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
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
    }),
  ),
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
  index: {},
  firstTab: [],
  secondTab: [],
  thirdTab: [],
};

TabRender.propTypes = {
  index: PropTypes.string,
  firstTab: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      level: PropTypes.string,
    }),
  ),
  secondTab: PropTypes.arrayOf(
    PropTypes.shape({
      nickName: PropTypes.string,
      id: PropTypes.number,
      phone: PropTypes.string,
      address: PropTypes.string,
    }),
  ),
  thirdTab: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
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
    }),
  ),
};

export default Tab;
