import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Palette.css';
import BigText from './BigText';

// *******map 이용 버튼 생성 후 색 변경
const PaletteItem = ({ color, active, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      style={{ color: active ? color : 'black' }}
    >
      {color}
    </button>
  );
};

// state 설정
const Palette = (props) => {
  const [selectedColor, setSelectedColor] = useState('red');
  const { colors } = props;
  // console.log('selectedColor:', selectedColor);

  return (
    <>
      <div>
        <div className="Palette">
          {colors.map((color) => (
            <PaletteItem
              key={color.id}
              color={color.name}
              active={selectedColor === color.name}
              onClick={() => setSelectedColor(color.name)}
            />
          ))}
        </div>
        {colors.map((color) => (
          <div key={color.name}>
            {selectedColor === color.name && (
              <BigText
                key={color.name}
                color={color.name}
                active={selectedColor === color.name}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

/* {selectedColor === 'red' && (
  <div>
    <BigText>Red</BigText>
  </div>
)}
{selectedColor === 'blue' && (
  <div>
    <BigText>Blue</BigText>
  </div>
)}
{selectedColor === 'green' && (
  <div>
    <BigText>Green</BigText>
  </div>
)} */

Palette.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};

Palette.defaultProps = {
  colors: [],
};

PaletteItem.defaultProps = {
  color: '',
  onClick: () => {},
  active: false,
};

PaletteItem.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default Palette;
