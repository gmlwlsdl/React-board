import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

const BoardDetail = () => {
  const { num } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/post/${num}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [num]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="parent">
      <div className="F1000004037">
        <div className="F1000004369">
          <div className="F1000004361">
            <div className="F1000004368">
              <div className="F1000004357">
                <div className="chevron">
                  <FaChevronLeft className="Vector" />
                </div>
                <p className="Posttitle">{post.title}</p>
              </div>
              <div className="F816639">
                <p>{post.writer}</p>
                <p>{post.created_at}</p>
                <p>{post.views}</p>
              </div>
              {/* .. */}
              <div />
            </div>
            <div className="contents">{post.contents}</div>
            <div className="F1000004372">첨부 파일</div>
            <div className="F1000004359">
              <div className="F1000004353">#유머</div>
              <div className="F1000004358">#해시태그</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
