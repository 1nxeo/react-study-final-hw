import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "./Button";

function Comments({ wish, comments }) {
  const dispatch = useDispatch();

  // const fetchComments = async () => {
  //   const { data } = await axios.get("http://localhost:4000/comments");
  //   console.log("data", data);
  // };
  return (
    <StCommentWrapper>
      <>
        {comments.map((item) => (
          <div key={item.id}>
            {item.body}{" "}
            <Button style={{ width: "38px", height: "20px" }}>삭제</Button>
          </div>
        ))}
      </>
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
