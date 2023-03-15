import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getComments } from "../redux/modules/comments";
import axios from "axios";

function Comments({ wish }) {
  const dispatch = useDispatch();
  const [viewComments, setComments] = useState();
  const { comments, isLoading, error } = useSelector((state) => state.comments);

  const commentList = comments.filter((item) => item.postId === wish.id);
  console.log(commentList);
  const fetchComments = async () => {
    const { data } = await axios.get("http://localhost:4000/comments");
    console.log(data);
  };

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  // -----------------------------
  // const [comments, setComments] = useState(null);
  // // 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다.
  // const fetchComments = async () => {
  //   const { data } = await axios.get("http://localhost:4000/comments");
  //   console.log(data);
  //   setComments(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  // };

  // // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
  // useEffect(() => {
  //   // effect 구문에 생성한 함수를 넣어 실행합니다.
  //   fetchComments();
  //   console.log(comments);
  // }, []);
  // const commentList = comments.filter((item) => item.id === wish.id);
  // console.log(commentList);
  if (isLoading) {
    return <Message>Loading...</Message>;
  }

  if (error) {
    return <Message>{error.message}</Message>;
  }

  return (
    <StCommentWrapper>
      <p>여기에 댓글이 들어갑니다</p>
      {commentList.map((item) => {
        return <div>{item.body}</div>;
      })}
    </StCommentWrapper>
  );
}

const StCommentWrapper = styled.div`
  height: 92%;
  margin: 10px;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 92%;
  /* justify-content: center;
  align-items: center; */
  /* border: 1px solid; */
  /* margin-top: 10px; */
  font-size: larger;
  font-weight: 900;
  color: red;
`;

export default Comments;
