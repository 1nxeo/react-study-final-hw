import React from "react";
import styled from "styled-components";

function Header() {
  return <StHeader>@1nxeo Archive</StHeader>;
}

const StHeader = styled.div`
  height: 100px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 20px;
`;

export default Header;
