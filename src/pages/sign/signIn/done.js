import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../css/globalCss.css';

const SigninDone = () => {
  const sessionEmail = window.sessionStorage.getItem('email');

  return (
    <div>
      <div>
        <div>
          <p>회원가입이 완료되었습니다.</p>
          <p>축하드려요!</p>
          <p>{sessionEmail}</p>
        </div>
        <div>
          <button className="logbtn">로그인</button>
        </div>
      </div>
    </div>
  );
};

export default SigninDone;
