import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
// import useInput from "../hooks/useInput";
// import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
// import { addWish } from "../redux/modules/wishlists";

function Form() {
  //   const [url, onChangeUrlHander] = useInput();
  //   const [contents, onChangeContentsHandler] = useInput();
  const [wish, setWish] = useState({
    url: "",
    contents: "",
    isDone: false,
  });

  // const [url, setUrl] = useState("");
  // const [contents, setContents] = useState("");
  // const wishes = useSelector((state) => state.wishlists.wishes);
  // const dispatch = useDispatch();

  const [wishes, setWishes] = useState([]);
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:4000/wishes");
    setWishes(data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  console.log(wishes);

  const onSubmitHandler = async (wish) => {
    //1.  이때 todos는 [{투두하나}]임
    await axios.post("http://localhost:4000/wishes", wish); // 이때 서버에 있는 todos도 [{투두하나}]임
    // 근데 여기서 서버 요청이 끝나고 서버는 [{투두가},{두개임}]
    setWishes([...wishes, wish]);
  };

  // useEffect(() => {
  //   fetchTodos();
  // }, []);

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
