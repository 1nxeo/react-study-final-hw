import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { switchWish } from "../redux/modules/wishlists";
import Button from "./Button";
import axios from "axios";
import { switchWish, deleteWish } from "../redux/modules/wishlists";

function Card({ wish }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickDeleteButtonHandler = (wish) => {
    dispatch(deleteWish(wish.id));
    axios.delete(`http://localhost:4000/wishes/${wish.id}`);
  };

  const onClickDoneButtonHandler = (wish) => {
    dispatch(switchWish(wish.id));
    axios.patch(`http://localhost:4000/wishes/${wish.id}`, {
      ...wish,
      isDone: !wish.isDone,
    });
  };

  return (
    <CardWrapper key={wish.id}>
      <CardImage onClick={(e) => navigate(`/detail/${wish.id}`)}></CardImage>
      <div>
        <p>{wish.contents}</p>
        <Button
          onClick={() => {
            alert(`${wish.isDone ? "에라이" : "아좌잣"}`);
            onClickDoneButtonHandler(wish);
          }}
        >
          {wish.isDone ? "못삼" : "삼"}
        </Button>
        <Button
          onClick={() => {
            onClickDeleteButtonHandler(wish);
            alert("삭제 완료!");
          }}
        >
          삭제
        </Button>
      </div>
    </CardWrapper>
  );
}

// const CardToDetail = styled.div``;

const CardWrapper = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid;
  overflow: hidden;
  margin: 10px;
  padding: 5px;
  background-color: white;
  font-size: small;
`;

const CardImage = styled.div`
  background-image: url(https://moncler-cdn.thron.com/delivery/public/image/moncler/H20921A00024M2017S94_X/dpx6uv/std/0x0/H20921A00024M2017S94_X.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  color: transparent;
  height: 220px;
`;

export default Card;
