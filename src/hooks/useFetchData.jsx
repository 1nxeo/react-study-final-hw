import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function useFetchData(data, func) {
  const dispatch = useDispatch();
  const dpData = JSON.stringify([...data]);

  const effect = useEffect(() => {
    dispatch(func);
  }, [dpData]);

  return { dpData, effect };
}

export default useFetchData;
