import React from "react";
import styled from "styled-components";

function Comments() {
  return (
    <StCommentWrapper>
      <p>여기에 댓글이 들어갑니다</p>
    </StCommentWrapper>
  );
}

const StCommentWrapper = styled.div`
  height: 92%;
  margin: 10px;
`;

export default Comments;
