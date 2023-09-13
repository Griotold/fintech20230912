import React from "react";
import axios from "axios";

const AxiosComponent = () => {
  const handleClick = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-08-13&sortBy=publishedAt&apiKey=baf72d0592de4810aa8beb988be8537e"
      )
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div>
      <button onClick={handleClick}>요청 생성</button>
    </div>
  );
};

export default AxiosComponent;
