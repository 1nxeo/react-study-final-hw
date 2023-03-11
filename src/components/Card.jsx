import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { switchWish } from "../redux/modules/wishlists";
import Button from "./Button";

function Card({ wish }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const switchWishHandler = (id) => {
  //   dispatch(switchWish(id));
  // };
  console.log(wish);
  return (
    <CardWrapper
      key={wish.id}
      onClick={(e) => {
        navigate(`/detail/${wish.id}`);
      }}
    >
      <CardImage></CardImage>
      <div>
        <p>{wish.contents}</p>
        <Button
          onClick={() => {
            alert("에라이");
            dispatch(switchWish(wish.id));
          }}
        >
          {wish.isDone ? "못삼" : "삼"}
        </Button>
      </div>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 200px;
  height: 330px;
  border: 1px solid;
  overflow: hidden;
  margin: 10px;
  padding: 5px;
`;

const CardImage = styled.div`
  background-image: url(https://moncler-cdn.thron.com/delivery/public/image/moncler/H20921A00024M2017S94_X/dpx6uv/std/0x0/H20921A00024M2017S94_X.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  color: transparent;
  height: 220px;
`;

export default Card;
