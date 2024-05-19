import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './index.css'; // 스타일 파일을 불러옵니다.

const QuestList = () => {
  const changeBtn = (e) => {
    const btns = document.querySelectorAll('.boardbtn');
    btns.forEach((boardbtn) => {
      if (e.currentTarget === boardbtn) {
        boardbtn.classList.add('active');
      } else {
        boardbtn.classList.remove('active');
      }
    });
    console.log(e.currentTarget);
  };

  return (
    <div className="parent" style={{ margin: '100px, 388px, 100px, 388px' }}>
      <div style={{ fontWeight: '700' }}>
        <p style={{ color: '#EE3918', fontSize: '20px' }}>board</p>
        <p style={{ color: '#040404', fontSize: '32px' }}>질문게시판</p>
      </div>

      <div className="boardButton">
        <div>
          <Link to="/board">
            <Button variant="primary" className="boardbtn" onClick={changeBtn}>
              자유게시판
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/quest">
            <Button
              variant="primary"
              className="boardbtn"
              style={{ backgroundColor: '#ee3918', color: '#eeeeee' }}
              onClick={changeBtn}
            >
              질문게시판
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/quest">
            <Button variant="primary" className="boardbtn" onClick={changeBtn}>
              질문 게시판
            </Button>
          </Link>
        </div>
      </div>

      <div className="tableContainer">
        <div className="tableCss">
          <table>
            <colgroup>
              <col width={'5%'} />
              <col width={'50%'} />
              <col width={'15%'} />
              <col width={'15%'} />
              <col width={'15%'} />
            </colgroup>

            <thead>
              <tr>
                <th>No</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>작성시간</th>
                <th>조회수</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <Link to={'/quest/1'}>질문임</Link>
                </td>
                <td>2023.3.3</td>
                <td>관리자</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <p>페이지 넘기기</p>
        </div>
      </div>

      <div>
        <Link to="/list/create">
          <Button variant="primary">Write</Button>
        </Link>
      </div>
    </div>
  );
};

export default QuestList;
