import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Comments from "./Comments";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { __getWishes } from "../redux/modules/wishlists";
import axios from "axios";
import { CheerioAPI } from "cheerio";

function DetailBox() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { wishes, isLoading, error } = useSelector((state) => state.wishlists);
  // const [wishes, setWishes] = useState([]);
  const [crawledItem, setCrawledItem] = useState([]);

  // const fetchTodos = async () => {
  //   const { data } = await axios.get("http://localhost:4000/wishes");
  //   setWishes(data);
  // };
  // const todo = useSelector((state) => state.todos.todo);
  // const { id } = useParams;

  // useEffect(() => {
  //   dispatch(getTodoByID(id));
  // }, [dispatch, id]);

  const { id } = useParams();
  const wish = wishes.find((item) => {
    return String(item.id) === String(id);
  });

  const link = wish.url;

  console.log(link);

  useEffect(() => {
    dispatch(__getWishes());
  }, [dispatch]);

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
            buttonName={"수정"}
            contents={"안녕하세요"}
            buttonSize="large"
            margin="15px"
            buttonGap="10px"
            position="left"
          />
          <CardImage
          // style={{ backgroundImage: `url(${crawledItem.img})` }}
          ></CardImage>
          <h2 style={{ margin: "5px" }}>
            {/* {crawledItem.title} */}
            뭐꼬
          </h2>
          <Button
            style={{ width: "100px", height: "40px" }}
            onClick={() => {
              window.open(link);
            }}
          >
            보러가기
          </Button>
          {/* <h3>{wish.url}</h3> */}
          <p>{wish.contents}</p>
        </DetailWrapper>
        <CommentWrapper>
          <Comments />
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
