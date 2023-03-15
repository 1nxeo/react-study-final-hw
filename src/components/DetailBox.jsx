import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Comments from "./Comments";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { __getWishes } from "../redux/modules/wishlists";

// import { CheerioAPI } from "cheerio";

function DetailBox() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { wishes, isLoading, error } = useSelector((state) => state.wishlists);
  const wish = wishes.find((item) => {
    return String(item.id) === String(id);
  });

  const [newComments, setNewComments] = useState({});

  useEffect(() => {
    dispatch(__getWishes());
  }, [dispatch]);

  const commentSaveHandler = async (item) => {
    await axios.post("http://localhost:4000/comments", item);
    alert("댓글 등록 완료!");
  };

  if (isLoading) {
    return <Message>Loading...</Message>;
  }

  if (error) {
    return <Message>{error.message}</Message>;
  }

  return (
    <>
      <ListWrapper>
        <DetailWrapper>
          <Modal
            wish={wish}
            buttonName={"수정"}
            buttonSize="large"
            margin="15px"
            buttonGap="10px"
            position="left"
          />
          <CardImage></CardImage>
          <h3 style={{ margin: "5px" }}>여기에 상품 이름이 들어갑니다.</h3>
          <Button
            style={{ width: "90px", height: "30px" }}
            onClick={() => {
              window.open(wish.url);
            }}
          >
            보러가기
          </Button>
          <p>{wish.contents}</p>
        </DetailWrapper>
        <CommentWrapper>
          <Comments wish={wish} />
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
              onChange={(e) =>
                setNewComments({ ...newComments, body: e.target.value })
              }
            />
            <Button
              onClick={(e) => {
                commentSaveHandler(newComments);
                setNewComments({
                  body: "",
                  postId: wish.id,
                });
              }}
            >
              등록
            </Button>
          </div>
        </CommentWrapper>
      </ListWrapper>
    </>
  );
}

const Message = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: 65vh;
  justify-content: center;
  align-items: center;
  /* border: 1px solid; */
  margin-top: 10px;
  font-size: larger;
  font-weight: 900;
  color: red;
`;

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
