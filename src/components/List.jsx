import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "./Card";

function List() {
  const wishes = useSelector((state) => state.wishlists.wishes);
  return (
    <ListWrapper>
      <ListBox>
        <h1>사고싶다</h1>
        <Lists>
          {wishes.map((item) =>
            item.isDone ? null : <Card key={item.id} wish={item} />
          )}
        </Lists>
      </ListBox>
      <ListBox>
        <h1>사버렸다</h1>
        <Lists>
          {wishes.map((item) =>
            item.isDone ? <Card key={item.id} wish={item} /> : null
          )}
        </Lists>
      </ListBox>
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 65vh;
  justify-content: space-around;
  border: 1px solid;
  margin-top: 10px;
  overflow: scroll;
`;

const ListBox = styled.div`
  border: 1px solid;
  width: 100%;
  margin: 20px;
  height: auto;
  flex-wrap: wrap;
`;

// const ListTitle = styled.div`
//   position: fixed;
//   font-size: larger;
// `;

const Lists = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
`;

export default List;
