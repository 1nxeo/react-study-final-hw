import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
// import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addWish } from "../redux/modules/wishlists";

function Form() {
  //   const [url, onChangeUrlHander] = useInput();
  //   const [contents, onChangeContentsHandler] = useInput();
  const [url, setUrl] = useState("");
  const [contents, setContents] = useState("");
  const wishes = useSelector((state) => state.wishlists.wishes);
  const dispatch = useDispatch();

  const handleWishSubmitBtn = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      url,
      contents,
      isDone: false,
    };
    console.log(newTodo);
    dispatch(addWish(newTodo));
    alert("등록 완료!");
    setUrl("");
    setContents("");
  };
  return (
    <FormWrapper onSubmit={handleWishSubmitBtn}>
      <StInput
        type="text"
        placeholder="상품 url"
        label="url"
        value={url}
        required
        onChange={(e) => setUrl(e.target.value)}
      />
      <StInput
        type="text"
        placeholder="why?"
        label="내용"
        value={contents}
        required
        onChange={(e) => setContents(e.target.value)}
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
  width: 80%;
  height: 70px;
`;

export default Form;
