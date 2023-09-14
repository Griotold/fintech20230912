import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { QRCodeSVG } from "qrcode.react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import queryString from "query-string";

const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const QrCodePage = () => {
  const queryParams = useLocation().search;
  const parsed = queryString.parse(queryParams);
  const fintechNo = parsed.fintechUseNo;

  console.log(queryParams);
  console.log(parsed);
  console.log(fintechNo);
  return (
    <div>
      <HeaderComponent title={"QR code"}></HeaderComponent>
      <QRBlock>
        <QRCodeSVG size={256} value={fintechNo} />
        <p>{fintechNo}</p>
      </QRBlock>
    </div>
  );
};

export default QrCodePage;
