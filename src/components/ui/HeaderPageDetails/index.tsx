"use client";

import styled, { css } from "styled-components";

type HeaderPageDetailsProps = {
  vh?: number;
  url?: string;
};

const HeaderPageDetails = styled.header<HeaderPageDetailsProps>`
  background-repeat: no-repeat;
  background-size: cover;

  ${(props) =>
    props.url
      ? css`
                  background-image: url(${props.url});
                  background-position: : center center;
              `
      : css`
          background-image: url("/background/florest.jpg");
        `}

  @media screen and (max-width: 640px) {
    background-image: url("/background/florest-mobile.jpg");
  }

  .gradient {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    background: linear-gradient(
      0deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 30%,
      rgba(9, 9, 121, 0) 305%
    );

    .header-page-content {
      display: grid;
      align-content: space-between;
      gap: 50px;

      ${(props) =>
        props.vh
          ? css`
              min-height: ${props.vh}vh;
            `
          : css`
              min-height: calc(110vh - 90px);
            `}

      .social-container {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
      }

      .initial-information-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        .logo_image {
          max-width: 250px;
          border-radius: 0.5rem;
          background-color: #fff;
          padding: 10px;
        }

        h1 {
          text-align: center;
          font-size: 3rem;
          margin: 0;
          color: #fff;
          text-shadow: 2px 2px 3px #424242;
        }

        p {
          margin: 0;
          text-align: center;
          color: #fff;
          text-shadow: 2px 2px 3px #424242;
        }
      }

      .other-information {
        margin-bottom: 2rem;
        p {
          margin: 0.5rem;
        }
      }
    }
  }
`;

export default HeaderPageDetails;
