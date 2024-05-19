import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkbox from './Checkbox';
import '../../../css/globalCss.css';
import './index.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [rePw, setRePw] = useState('');
  const [nickname, setNickname] = useState('');
  const [agree, setAgree] = useState('');
  const navigate = useNavigate();

  const signinSubmit = async (event) => {
    event.preventDefault(); // 기본 동작 방지

    if (email === '' || pw === '') {
      alert('아이디 또는 비밀번호를 입력해주시기 바랍니다');
      return;
    }

    if (pw !== rePw) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!agree) {
      alert('개인정보 처리방침 및 데이터 활용 동의에 체크해주세요.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/api/signIn', {
        method: 'POST',
        body: JSON.stringify({
          userEmail: email,
          userPW: pw,
          nickname,
        }),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      alert(data.message);

      if (res.status === 200) {
        navigate('/Done');
      } else {
        alert(data.error);
        setEmail('');
        setPw('');
      }
    } catch (err) {
      console.error(err);
      alert('클라이언트 측 오류가 발생했습니다. 나중에 다시 시도해주세요.');
    }
  };

  return (
    <div className="parent">
      <form onSubmit={signinSubmit}>
        <div className="signin">회원가입</div>
        <div>
          <p className="left">이메일</p>
          <input
            type="text"
            className="left"
            id="email"
            value={email}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>비밀번호</p>
          <input
            type="password"
            id="pw"
            value={pw}
            placeholder="8자 이상, 영문자, 숫자, 특수기호 중 2가지 조합"
            onChange={(e) => setPw(e.target.value)}
          />
          <input
            type="password"
            id="re_pw"
            value={rePw}
            placeholder="비밀번호를 다시 입력해주세요"
            onChange={(e) => setRePw(e.target.value)}
          />
          <p>닉네임</p>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <div>
            <Checkbox checked={agree} onChange={setAgree}>
              체크박스 개인정보 처리방침 / 데이터 활용 동의 (필수)
            </Checkbox>
          </div>
          <button className="sigbtn" type="submit">
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
