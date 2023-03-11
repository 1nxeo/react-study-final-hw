import React from "react";
import styled from "styled-components";

function Card({ wish }) {
  return (
    <CardWrapper>
      <p>{wish.contents}</p>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 45%;
  height: 300px;
  border: 1px solid;
`;

export default Card;
