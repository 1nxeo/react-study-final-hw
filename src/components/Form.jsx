import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addWish } from "../redux/modules/wishlists";

function Form() {
  const dispatch = useDispatch();
  const [wish, setWish] = useState({
    url: "",
    contents: "",
    isDone: false,
  });

  const [wishes, setWishes] = useState([]);
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:4000/wishes");
    setWishes(data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const onSubmitHandler = async (wish) => {
    dispatch(addWish(wish));
    await axios.post("http://localhost:4000/wishes", wish);
    fetchTodos();
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
        });
        setWishes([...wishes, wish]);
        window.location.reload();
      }}
    >
      <StInput
        type="text"
        placeholder="상품 url"
        label="url"
        // value={url}
        required
        onChange={(e) => {
          const { value } = e.target;
          setWish({
            ...wish,
            url: value,
          });
        }}
      />
      <StInput
        type="text"
        placeholder="why?"
        label="내용"
        // value={contents}
        required
        onChange={(e) => {
          const { value } = e.target;
          setWish({
            ...wish,
            contents: value,
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
