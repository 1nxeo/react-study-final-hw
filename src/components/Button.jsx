import React from "react";
import styled from "styled-components";

function Button({ children }) {
  return <StButton>{children}</StButton>;
}

const StButton = styled.button`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 100px;
  height: 50px;
`;

export default Button;
