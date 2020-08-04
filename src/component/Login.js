import React, { useState, useRef, useEffect } from 'react';

// const [inputs, setInputs] = useState('');
// const { id, password } = inputs;
// const input = [{ id: '' }, { password: '' }];
function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // ...?
  const inputRef = useRef(null);
  // id에 입력된 값 setId에...
  const onChangeId = (e) => {
    setId(e.target.value);
  };

  // password에 입력된 값 setPassword에...
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // id가 user일때 실행
  const onClick = () => {
    if (id === 'user') {
      setIsVisible(true);
      document.location.href = './Club';
    } else {
      alert('아이디가 잘못되었습니다.');
      inputRef.current.focus();
    }
  };

  // 초기화면 렌더링 시 id inputbox focus
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          name="id"
          placeholder="아이디"
          ref={inputRef}
          // ref={(input) => input && input.focus()}
          onChange={onChangeId}
          value={id}
          required
        />
        <input
          type="text"
          name="password"
          placeholder="비밀번호"
          onChange={onChangePassword}
          value={password}
          required
        />
        <button onClick={() => onClick()} type="button">
          okay
        </button>
      </div>
      {isVisible && (
        <div>
          <span>이름 : </span>
          <span>{id}</span>
          &nbsp;&nbsp;
          <span>비밀번호 : </span>
          <span>{password}</span>
        </div>
      )}
    </>
  );
}

export default Login;

/* <button onClick={() => onClick() && { onChange }} type="button"> */

// const login = function (state) {
//   state = {
//     id: '',
//     password: '',
//     list: [],
//   };
//   num = 0;

//   const { onChange, onCreate } = this;

//   onChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   onCreate = () => {
//       const { id, password, list } = this.State;
//       this.setState({
//         list: list.concat({
//           id,
//           password
//         }),
//         id: '',
//         password: ''
//       });
//     };

//     return (
//       <>
//         <>
//           <input
//             name="id"
//             type="text"
//             ref={(input) => input && input.focus()}
//             onChange={onChange}
//             value={login.id}
//             required
//             placeholder="아이디"
//           />
//           <input
//             name="password"
//             type="text"
//             onChange={onChange}
//             value={login.password}
//             required
//             placeholder="비밀번호"
//           />
//           {/* onClick={onSave} */}
//           <button onClick={onCreate} type="button">
//             okay
//           </button>
//         </>
//         <div>
//           <ul>
//             {list.map((item, index) => {
//             return (
//               <li key={index}>
//                 {item.id}
//                 /
//                 {item.password}
//               </li>
//             );
//           })}
//           </ul>
//         </div>
//       </>
//   );
// }
