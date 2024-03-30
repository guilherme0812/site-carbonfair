"use client";

import styled from "styled-components";

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  /* background-color: #f5f5f5; */
  padding: 10px 20px;
  color: #757575;
  /* border-radius: 0.5rem; */
  border: 2px solid #e0e0e0;
  color-scheme: "light";

  &:focus {
    border: 2px solid #8bd88d;
    outline: none;
  }
`;

export default TextArea;
