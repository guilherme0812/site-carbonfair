"use client";

import styled from "styled-components";

const Container = styled.div`
  max-width: 1100px;
  margin: auto;

  img {
    display: block;
    width: 75%;
    margin: auto;
    border-radius: 2%;
  }

  @media (max-width: 748px) {
    img {
      width: 100%;
    }
  }
`;

const ImageContainer = () => {
  return (
    <Container>
      <img src="/images/2.jpg" alt="Imagem descrição" />
    </Container>
  );
};

export default ImageContainer;
