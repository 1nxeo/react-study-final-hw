import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

function DetailBox() {
  const navigate = useNavigate();
  return (
    <>
      <ListWrapper>
        <Button onClick={(e) => navigate("/")}>홈</Button>
        <CardImage></CardImage>
        <h1>이거 사고싶다</h1>
        <h4>상품 링크</h4>
        <p>코멘트</p>
      </ListWrapper>
    </>
  );
}

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 65vh;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  margin-top: 10px;
  overflow: scroll;
`;

const CardImage = styled.div`
  background-image: url(https://moncler-cdn.thron.com/delivery/public/image/moncler/H20921A00024M2017S94_X/dpx6uv/std/0x0/H20921A00024M2017S94_X.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  color: transparent;
  height: 300px;
  width: 200px;
`;

export default DetailBox;
