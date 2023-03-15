import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getComments } from "../redux/modules/comments";
import axios from "axios";

function Comments({ wish }) {
  const dispatch = useDispatch();

  const { comments, isLoading, error } = useSelector((state) => state.comments);

  // const fetchComments = async () => {
  //   const { data } = await axios.get("http://localhost:4000/comments");
  //   console.log("data", data);
  // };

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  if (isLoading) {
    return <Message>Loading...</Message>;
  }

  if (error) {
    return <Message>{error.message}</Message>;
  }

  return (
    <StCommentWrapper>
      {comments.map((item) =>
        item.postId == wish.id ? <div>{item.body}</div> : null
      )}
      {/* {comments.map((item) => {item.id === 
        return <div>{item.body}</div>;
      })} */}
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
