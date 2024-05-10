import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../../../css/globalCss.css';
import './nav.css';

function Nav() {
  return (
    <div>
      <div className="NavBar">
        <div className="Menu0">
          <div className="Menu1">
            <div className="Menu2">
              <Link
                to={'/'}
                style={{
                  color: '#EE3918',
                  fontWeight: 700,
                  fontSize: '24px',
                  marginRight: '20px',
                }}
              >
                Testsite
              </Link>
              <div className="Menu3">
                <div className="child1">
                  <Link
                    to={'/board'}
                    style={{
                      width: '47px',
                      height: '24px',
                    }}
                  >
                    게시판
                  </Link>
                </div>

                <div className="child2">
                  <Link
                    to={'/dashboard'}
                    style={{
                      width: '62px',
                      height: '24px',
                    }}
                  >
                    대시보드
                  </Link>
                </div>
              </div>
            </div>

            <div className="loginMenu">
              <Link to="/list/create">
                <Button children="로그인" variant="primary" />{' '}
                {/* 'cihldren' 오타 수정 */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
