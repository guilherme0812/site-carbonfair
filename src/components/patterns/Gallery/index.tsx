"use client";

import * as React from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton/IconButton";
import { motion } from "framer-motion";
import { useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface GalleryProps {
  imageList: GalleryImage[];
}

export interface GalleryContainerProps {
  qtdImages: number;
}

export interface GalleryImage {
  id: number | string;
  des_url: string;
  bol_ativo: boolean;
  num_ordem: number;
}

interface ImageModalProps {
  onClick(): void;
}

export const Container = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
  }
`;

const GalleryContainer = styled.section<GalleryContainerProps>`
  .gallery {
    figure {
      margin: 0;
    }
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(
      ${({ qtdImages }) => (qtdImages > 5 ? 8 : qtdImages > 3 ? 2 : 1)},
      5vw
    );
    grid-gap: 5px;

    .gallery-item {
      transition: 300ms;
      cursor: pointer;
    }

    .gallery-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .gallery-item-1 {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
      background-color: blue;
    }
    .gallery-item-2 {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    .gallery-item-3 {
      grid-column-start: 5;
      grid-column-end: 9;
      grid-row-start: 1;
      grid-row-end: 6;
    }
    .gallery-item-4 {
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 3;
      grid-row-end: 6;
    }
    .gallery-item-5 {
      grid-column-start: 1;
      grid-column-end: 6;
      grid-row-start: 6;
      grid-row-end: 9;
    }
    .gallery-item-6 {
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 6;
      grid-row-end: 9;
    }
  }

  .button-container {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    transform: rotate(-90deg);
    transition: 300ms;
  }
  .button-container.ative {
    transform: rotate(0deg);
  }

  @media (max-width: 748px) {
  }
`;

const ImageModal = styled.div<ImageModalProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  transition: 2s;
  z-index: 1000;
  overflow: none;

  .image-content {
    box-sizing: border-box;
    border-radius: 8px;
    img {
      display: block;
      width: 100%;
      max-height: 100vh;
      padding: 2rem 0;
    }
  }
`;

const variants = {
  closed: { opacity: 0, scale: 0 },
  open: { opacity: 1, scale: 1 },
};

const Gallery = ({ imageList }: GalleryProps) => {
  // const [allImages, setAllImages] = React.useState<GalleryImage[]>([])
  const [images, setImages] = React.useState<GalleryImage[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [imageSelected, setImageSelected] = React.useState<string>();
  const [viewMore, setViewMore] = React.useState(false);

  const handleSelectImage = (value: string) => {
    setImageSelected(value);
    setIsOpen(true);
  };

  const handleClickViewMore = () => {
    setViewMore(!viewMore);
  };

  const handleClickOutSideModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (imageList) {
      const imagesFiltered = imageList.filter(
        (item) => item.bol_ativo != false
      );

      imagesFiltered.sort((a, b) => {
        return a.num_ordem < b.num_ordem
          ? -1
          : a.num_ordem > b.num_ordem
          ? 1
          : 0;
      });

      if (viewMore) {
        setImages(imagesFiltered);
      } else {
        setImages(imagesFiltered.slice(0, 6));
      }
    }
  }, [imageList, viewMore]);

  return (
    <Container>
      <motion.div animate={isOpen ? "open" : "closed"} variants={variants}>
        {isOpen && (
          <ImageModal onClick={handleClickOutSideModal}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
              }}
            >
              <div className="image-content">
                <img src={imageSelected} alt="Image 1" />
              </div>
            </motion.div>
          </ImageModal>
        )}
      </motion.div>

      <GalleryContainer qtdImages={images.length ?? 0}>
        <div className="gallery">
          {images?.map((image, index) => {
            return (
              <figure
                className={`gallery-item gallery-item-${index + 1}`}
                key={index}
              >
                <img
                  src={image.des_url}
                  className="gallery-img"
                  alt={image.des_url}
                  onClick={() => handleSelectImage(image.des_url)}
                />
              </figure>
            );
          })}
        </div>

        {imageList.length > 6 && (
          <div className="button-container">
            <IconButton
              onClick={handleClickViewMore}
              sx={{
                transition: "300ms",
                transform: viewMore ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          </div>
        )}
      </GalleryContainer>
    </Container>
  );
};

export default Gallery;
