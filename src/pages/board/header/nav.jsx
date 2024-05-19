import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './nav.css';

function Nav() {
  const [sessionName, setSessionName] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const storedSessionName = window.sessionStorage.getItem('nickname');

    if (storedSessionName) {
      setSessionName(storedSessionName);
    }
  }, []);

  const handleLogout = () => {
    // 세션 정보 삭제
    window.sessionStorage.removeItem('email');
    window.sessionStorage.removeItem('pw');
    window.sessionStorage.removeItem('nickname');
    window.sessionStorage.removeItem('login');

    navigate('/board');
    window.location.reload();
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleBoard = () => {
    navigate('/board');
  };

  const handleDash = () => {
    navigate('/dash');
  };

  return (
    <div>
      <div className="gnb">
        <div className="F1000004324">
          <div className="Content3">
            {sessionName ? (
              <div className="logout">
                {sessionName} 님
                <p
                  className="ButtonText3"
                  onClick={handleLogout}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleLogout();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  로그아웃
                </p>
              </div>
            ) : (
              <p
                className="ButtonText3"
                onClick={handleLogin}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleLogin();
                  }
                }}
                role="button"
                tabIndex={0}
              >
                로그인
              </p>
            )}
          </div>
        </div>
        <div className="F1000003051">
          <p className="Testsite">Testsite</p>
          <div className="F1000003053">
            <div className="GNB_Button">
              <div className="Content">
                <p
                  className="ButtonText"
                  onClick={handleBoard}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleBoard();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  게시판
                </p>
              </div>
            </div>
            <div className="GNB_Button2">
              <div className="Content2">
                <p
                  className="ButtonText2"
                  onClick={handleDash}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleDash();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  대시보드
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
