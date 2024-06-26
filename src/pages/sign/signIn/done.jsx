import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../css/globalCss.css';
import './index.css';

const SigninDone = () => {
  const navigate = useNavigate();

  const gotoLogin = () => {
    navigate('/Login');
  };

  return (
    <div>
      <div className="parent">
        <div className="contents">
          <img src="img/circle.png" alt="circle" className="circle" />
          <p className="doneMsg">회원가입이 완료되었습니다.</p>
          <p className="congrMsg">축하드려요!</p>
        </div>
        <div className="gologbtn">
          <button className="logbtn" type="button" onClick={gotoLogin}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default SigninDone;
