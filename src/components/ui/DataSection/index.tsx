"use client";

import styled from "styled-components";

const DataSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  text-align: center;

  h1,
  h2,
  h3 {
    color: #517430;
  }

  .value {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .value {
    color: #517430;
  }
  .label {
    font-weight: 500;
    color: #757575;
    font-style: italic;
  }

  .text {
    color: #9e9e9e;
  }
`;

export default DataSection;
