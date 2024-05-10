import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../../../../css/globalCss.css';

const BoardList = () => {
  return (
    <div className="parent" style={{ margin: '100px, 388px, 100px, 388px' }}>
      <div style={{ fontWeight: '700' }}>
        <p style={{ color: '#EE3918', fontSize: '20px' }}>board</p>
        <p style={{ color: '#040404', fontSize: '32px' }}>자유게시판</p>
      </div>

      <div>
        <p>자게, 질게, 질게</p>
      </div>

      <div>
        <table>
          <colgroup>
            <col width={'15%'} />
            <col width={'65%'} />
            <col width={'20%'} />
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
                <Link to={'/list/1'}>공지사항ㅋ</Link>
              </td>
              <td>2023.3.3</td>
            </tr>
          </tbody>
        </table>
        <p>페이지 넘기기</p>
      </div>

      <div>
        <Link to="/list/create">
          <Button children="Write" variant="primary" />{' '}
          {/* 'cihldren' 오타 수정 */}
        </Link>
      </div>
    </div>
  );
};

export default BoardList;
