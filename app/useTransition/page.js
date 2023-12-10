"use client";

import { useState, useTransition } from "react";

import styled from "styled-components";

const UseTransition = () => {
  const [inputText, setText] = useState("");
  const [boxCount, setBoxCount] = useState(0);
  const [isPending, startTransition] = useTransition();
  const handleInput = (e) => {
    setText(e.target.value);
    startTransition(() => {
      setBoxCount(inputText.length);
    });
  };

  return (
    <TransitionWrapper>
      <input type="text" onChange={handleInput} value={inputText} />

      {isPending ? (
        <TransitionContainer>Loading...</TransitionContainer>
      ) : (
        <TransitionContainer>
          {Array(boxCount)
            .fill(null)
            .map((_, index) => (
              <BoxRenderWrapper key={index}>
                <BoxRender />
                <BoxRender />
                <BoxRender />
                <BoxRender />
                <BoxRender />
                <BoxRender />
                <BoxRender />
                <BoxRender />
                <BoxRender />
              </BoxRenderWrapper>
            ))}
        </TransitionContainer>
      )}
      {/* <TransitionContainer>
        {Array(boxCount)
          .fill(null)
          .map((_, index) => (
            <BoxRenderWrapper key={index}>
              <BoxRender />
              <BoxRender />
              <BoxRender />
              <BoxRender />
              <BoxRender />
              <BoxRender />
              <BoxRender />
              <BoxRender />
              <BoxRender />
            </BoxRenderWrapper>
          ))}
      </TransitionContainer> */}
    </TransitionWrapper>
  );
};

export default UseTransition;

const TransitionWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
  font-size: x-large;
`;

const TransitionContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  /* white-space: nowrap; */
  flex-wrap: wrap;
  width: 100%;
`;

const BoxRenderWrapper = styled.div`
  display: flex;
`;

const BoxRender = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid black;
  background-color: white;
  margin: 0 5px;
`;
