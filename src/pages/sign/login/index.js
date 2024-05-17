import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../../css/globalCss.css';
import './index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const loginSubmit = async () => {
    if (email === '' || pw === '') {
      alert('이메일 또는 비밀번호를 입력해주세요');
      return;
    } else {
      try {
        const res = await fetch('http://localhost:3001/api/loginCheck', {
          method: 'POST',
          body: JSON.stringify({ userEmail: email, userPW: pw }),
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();

        alert(data);
        if (res.status === 200) {
          console.log('ssival');
          sessionStorage.setItem('email', data.userEmail); // 여기서 userid를 저장합니다.
          sessionStorage.setItem('pw', data.userPW); // 여기서 role를 저장합니다.
          sessionStorage.setItem('nickname', data.nickname); // 여기서 role를 저장합니다.
          navigate('/Done');
        } else {
          setEmail('');
          setPw('');
          return;
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const moveSignin = () => {
    navigate('/Signin');
  };

  return (
    <div>
      <div>
        <form onSubmit={loginSubmit}>
          <div className="parent">
            <div className="login">로그인</div>
            <div>
              <div>
                <textarea
                  name="email"
                  id="email"
                  placeholder="이메일 주소"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></textarea>
              </div>
              <div>
                <textarea
                  name="pw"
                  id="pw"
                  placeholder="비밀번호 입력"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div>
              <button className="logbtn" type="submit">
                로그인
              </button>
            </div>
            <div className="bottom">
              <p>아이디 찾기 </p>
              <p> | </p>
              <p>비밀번호 찾기 </p>
              <p> | </p>
              <p onClick={moveSignin}>회원가입</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
