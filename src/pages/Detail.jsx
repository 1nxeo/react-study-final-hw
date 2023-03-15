import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Form from "../components/Form";
import DetailBox from "../components/DetailBox";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../GlobalStyle";
import axios from "axios";

function Detail() {
  const navigate = useNavigate();

  const [wishes, setWishes] = useState([]);
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:4000/wishes");
    setWishes(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Wrapper>
      <GlobalStyle />
      <Header onClick={(e) => navigate("/")} />
      <Form />
      <DetailBox />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;

export default Detail;
