import React from "react";
import styled from "styled-components";

type Props = {};

const FlushButton = (props: Props) => {
  const flushLocalStorage = () => {
    localStorage.clear();
    location.reload();
  };
  return (
    <Button onClick={flushLocalStorage}>
      <svg width="100%" height="100%" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z"
        ></path>
      </svg>
    </Button>
  );
};

const Button = styled.button`
  width: 50px;
  height: 50px;
  padding: 10px;
  background-color: #fafafa;
  cursor: pointer;
  border-radius: 100%;
  color: #000;
  border: none;
  :hover {
    background-color: #f6ffa4;
  }
`;

export default FlushButton;
