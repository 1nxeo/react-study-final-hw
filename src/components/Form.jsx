import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { __addWishes } from "../redux/modules/wishlists";

function Form() {
  const dispatch = useDispatch();
  const [wish, setWish] = useState({
    url: "",
    contents: "",
    isDone: false,
    comments: null,
  });

  const onSubmitHandler = async (wish) => {
    await dispatch(__addWishes(wish));
    setWish({
      url: "",
      contents: "",
      isDone: false,
      comments: null,
    });
  };

  return (
    <FormWrapper
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler(wish);
        alert("등록 완료!");
        setWish({
          url: "",
          contents: "",
          isDone: false,
          comments: null,
        });
      }}
    >
      <StInput
        type="text"
        placeholder="상품 url"
        value={wish.url}
        required
        onChange={(e) => {
          setWish({
            ...wish,
            url: e.target.value,
          });
        }}
      />
      <StInput
        type="text"
        placeholder="why?"
        label="내용"
        value={wish.contents}
        required
        onChange={(e) => {
          setWish({
            ...wish,
            contents: e.target.value,
          });
        }}
      />
      <Button>등록</Button>
    </FormWrapper>
  );
}

const StInput = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid;
`;

const FormWrapper = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  height: 30px;
  margin: 20px;
`;

export default Form;
