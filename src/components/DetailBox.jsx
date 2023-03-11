import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

function DetailBox() {
  const navigate = useNavigate();
  return (
    <>
      <ListWrapper>
        <DetailWrapper>
          <CardImage></CardImage>
          <h1>이거 사고싶다</h1>
          <h3>상품 링크</h3>
          <p>코멘트</p>
        </DetailWrapper>
        <CommentWrapper>
          {" "}
          <div style={{ height: "92%", margin: "10px" }}>
            여기에 댓글이 들어갑니다
          </div>
          <div
            style={{
              height: "8%",
              width: "95%",
              margin: "10px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <StInput
              type="text"
              style={{ width: "75%" }}
              placeholder="댓글을 입력하세요"
            />
            <Button>등록</Button>
          </div>
        </CommentWrapper>
      </ListWrapper>
    </>
  );
}

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 65vh;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  margin-top: 10px;
  overflow: scroll;
`;

const DetailWrapper = styled.div`
  /* border: 1px solid; */
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CommentWrapper = styled.div`
  /* border: 1px solid; */
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`;

const CardImage = styled.div`
  background-image: url(https://moncler-cdn.thron.com/delivery/public/image/moncler/H20921A00024M2017S94_X/dpx6uv/std/0x0/H20921A00024M2017S94_X.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  color: transparent;
  height: 350px;
  width: 250px;
  margin-top: 10px;
`;

const StInput = styled.input`
  width: 500px;
  height: 30px;
  border: 1px solid;
`;

export default DetailBox;
