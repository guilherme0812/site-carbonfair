"use client";

import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { NewButton } from "..";

interface NewCardProps {
  title: string | React.ReactNode;
  description: string;
  urlImage: string;
  link: string;
  imageSize?: number;
}

interface ContainerProps {
  urlImage: string;
  imageSize?: number;
}

const Container = styled.div<ContainerProps>`
  .background-container {
    /* background-color: ${(props) => props.theme.palette.grey[400]}; */
    background-image: url(${(props) => props.urlImage});
    background-size: ${(props) => (props.imageSize ? props.imageSize : 100)}%;
    background-position: center;
    background-repeat: no-repeat;
    /* background-size: cover; */
    display: block;
    border-radius: 8px;
    max-width: 270px;
    height: 270px;
    margin: auto;
    /* width: 100px;
        height: 100px; */
  }

  .card-container {
    padding: 20px;

    .card-paper {
      padding: 20px;
      background-color: ${(props) => props.theme.palette.background.paper};
      box-shadow: ${(props) => props.theme.shadows[15]};
      border-radius: 8px;
      transform: translateY(-80px);

      .card-paper-content {
        display: grid;
        align-content: space-between;
        min-height: 140px;
      }
    }
  }
`;

const NewCard = ({
  description,
  link,
  title,
  urlImage,
  imageSize,
}: NewCardProps) => {
  return (
    <Container urlImage={urlImage} imageSize={imageSize}>
      <div className="background-container"></div>
      <div className="card-container">
        <div className="card-paper">
          <Box className="card-paper-content">
            <h3
              className="text-lg text-center font-semibold"
              dangerouslySetInnerHTML={{ __html: title as string }}
            />
            {/* <Typography
              component="h3"
              variant="h5"
              align="center"
              fontWeight="bold"
            >
              {title}
            </Typography> */}

            <p className="text-gray-500 text-center">{description}</p>
          </Box>

          <Box sx={{ mt: "20px" }}>
            <a href={link}>
              <NewButton>SAIBA MAIS</NewButton>
            </a>
          </Box>
        </div>
      </div>
    </Container>
  );
};

export default NewCard;
