/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';
import Articles from './Articles';

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

const Tab = (props) => {
  const [seletedTab, setSelectedTab] = useState('');
  const { tabs, firstTab, secondTab } = props;

  return (
    <div>
      <div>
        {tabs.map((tab) => (
          <TabItem
            key={tab.id}
            tab={tab}
            active={seletedTab === tab.id}
            onClick={() => setSelectedTab(tab.id)}
          />
        ))}
      </div>
      {seletedTab === 1 &&
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
              <p>name = {tab.nickName} </p>
              <p>level = {tab.phone}</p>
              <p>level = {tab.address}</p>
              <p>---------------------</p>
            </span>
          </div>
        ))}
      {setSelectedTab === 3 && <Articles />}
    </div>
  );
};

Tab.defaultProps = {
  tabs: [],
  firstTab: [],
  secondTab: [],
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

export default Tab;
