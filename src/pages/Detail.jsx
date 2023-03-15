import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Form from "../components/Form";
import DetailBox from "../components/DetailBox";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../GlobalStyle";

function Detail() {
  const navigate = useNavigate();

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
