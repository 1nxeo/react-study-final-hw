import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import List from "../components/List";
import GlobalStyle from "../GlobalStyle";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <GlobalStyle />
      <Header onClick={(e) => navigate("/")} />
      <Form />
      <List />
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

export default Home;
