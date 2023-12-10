"use client";

import Description from "../components/Description";
import React from "react";
import styled from "styled-components";
const page = () => {
  return (
    <UseIdWrapper>
      <Description />
    </UseIdWrapper>
  );
};

export default page;

const UseIdWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
