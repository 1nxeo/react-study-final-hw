import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { __getWishes } from "../redux/modules/wishlists";
import useFetchData from "../hooks/useFetchData";

function List() {
  const dispatch = useDispatch();
  const { wishes, isLoading, error } = useSelector((state) => state.wishlists);
  const dpWishes = JSON.stringify([...wishes]);

  // const {dpWishes, __getWishes} = useFetchData()
  useEffect(() => {
    dispatch(__getWishes());
  }, [dpWishes]);

  if (isLoading) {
    return <Message>Loading...</Message>;
  }

  if (error) {
    return <Message>{error.message}</Message>;
  }

  return (
    <>
      <ListHeader>
        <div>사고싶다</div>
        <div>사버렸다</div>
      </ListHeader>
      <ListWrapper>
        <ListBox lined>
          <Lists>
            {wishes.map((item) =>
              item.isDone ? null : <Card key={item.id} wish={item} />
            )}
          </Lists>
        </ListBox>
        <ListBox>
          <Lists>
            {wishes.map((item) =>
              item.isDone ? <Card key={item.id} wish={item} /> : null
            )}
          </Lists>
        </ListBox>
      </ListWrapper>
    </>
  );
}

const Message = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: 65vh;
  justify-content: center;
  align-items: center;
  /* border: 1px solid; */
  margin-top: 10px;
  font-size: larger;
  font-weight: 900;
  color: red;
`;

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  justify-items: center;
  font-size: 30px;
  font-weight: 800;
  margin-top: 10px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: 65vh;
  justify-content: space-around;
  /* border: 1px solid; */
  margin-top: 10px;
`;

const ListBox = styled.div`
  /* border: 1px solid; */
  width: 600px;
  margin: 10px;
  height: 100% auto;
  overflow: scroll;
  border-right: ${(props) => (props.lined ? "1px solid black" : null)};
`;

// const ListTitle = styled.div`
//   position: fixed;
//   font-size: larger;
// `;

const Lists = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  /* background-color: rgba(0, 0, 0, 0.1); */
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

export default List;
