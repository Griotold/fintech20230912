import React from "react";
import styled from "styled-components";
const BodyBlock = styled.div`
  font-size: 30px;
  -webkit-box-shadow: 5px 10px 15px 5px #000000;
  box-shadow: 5px 10px 15px 5px #000000;
  color: rgb(255, 255, 255);
  background-color: rgb(247, 193, 193);
  text-shadow: rgb(122, 122, 122) 4px 3px 0px;
`;

const StyledComponents = () => {
  return (
    <div>
      <BodyBlock>StyledComponents</BodyBlock>
    </div>
  );
};

export default StyledComponents;
