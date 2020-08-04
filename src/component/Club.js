import React from 'react';

import Palette from './Palette';
import './Header.css';

const colors = [
  { name: 'red', id: 0 },
  { name: 'blue', id: 1 },
  { name: 'green', id: 2 },
];

const handleClick = () => {
  document.location.href = './Coupon';
};

function Club() {
  return (
    <>
      <Palette colors={colors} />
      <button onClick={handleClick} type="button">
        Click!
      </button>
    </>
  );
}

export default Club;

// *******개별 버튼에 클릭 이벤트 생성
// function Body2() {
//   const [selectedColor, setSelectedColor] = useState('');

//   return (
//     <div className="colors">
//       <button type="button" style={{ color: 'yellow' }}>
//         yellow
//       </button>
//       <button
//         type="button"
//         style={{ color: selectedColor === 'red' && 'red' }}
//         onClick={() => setSelectedColor('red')}
//       >
//         red
//       </button>
//       <button
//         type="button"
//         style={{ color: selectedColor === 'blue' && 'blue' }}
//         onClick={() => setSelectedColor('blue')}
//       >
//         blue
//       </button>
//       <button
//         type="button"
//         style={{ color: selectedColor === 'green' && 'green' }}
//         onClick={() => setSelectedColor('green')}
//       >
//         green
//       </button>
//     </div>
//   );
// }
