"use client";

import styled from "styled-components";
const RenderBoxes = () => {
  <BoxRenderWrapper>
    <BoxRender />
    <BoxRender />
    <BoxRender />
    <BoxRender />
    <BoxRender />
    <BoxRender />
    <BoxRender />
    <BoxRender />
    <BoxRender />
    <BoxRender />
    <BoxRender />
    <BoxRender />
    <BoxRender />
    <BoxRender />
    <BoxRender />
    <BoxRender />
    <BoxRender />
    <BoxRender />
  </BoxRenderWrapper>;
};

export default RenderBoxes;

const BoxRenderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const BoxRender = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid black;
  background-color: white;
  margin: 0 5px;
`;
