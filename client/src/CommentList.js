import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = useCallback(async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setComments(res.data);
  }, [postId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
