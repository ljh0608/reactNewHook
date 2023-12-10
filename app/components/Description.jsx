"use client";

import { useId, useState } from "react";

import styled from "styled-components";
import uuid from "react-uuid";

const Description = () => {
  // const uuid1 = uuid();
  // // console.log(uuid1);
  // const id = useId();
  return (
    <div>
      <UseIdContainer>
        <label htmlFor={"desc"}>정보 입력:</label>
        <input id={"desc"} type="text" />
      </UseIdContainer>
    </div>
  );
};

export default Description;

const UseIdContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
