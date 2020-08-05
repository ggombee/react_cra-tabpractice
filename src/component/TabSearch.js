/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// input창에 입력된 값 버튼클릭시 키워드 검색
const TabSearch = ({ value }) => {
  const [keyword, setKeyWord] = useState('');
  // const [isVisible, setIsVisible] = useState(true);

  const handleChange = (e) => {
    setKeyWord(e.target.value);
  };

  const onClick = () => {
    // try{
    //   if( === "") {
    //     setKeyWord
    //   }
    // }
  };

  return (
    <>
      <input
        type="text"
        name="keyword"
        placeholder="Search"
        value={keyword}
        onChange={handleChange} // 1. input 창에 입력될 때 마다
      />
      <button onClick={() => onClick()} type="button">
        검색
      </button>
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
    </>
  );
};

TabSearch.defaultProps = {
  value: [],
};

TabSearch.propTypes = {
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
export default TabSearch;
