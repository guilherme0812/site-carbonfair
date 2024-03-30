"use client";

import Image, { ImageProps } from "next/image";
import styled from "styled-components";

interface ResponsiveImageProps extends Partial<ImageProps> {
  alt: string;
  src: string;
  width?: number;
  height?: number;
  imageProps?: ImageProps;
}

const ResponsiveImageContainer = styled.div`
  max-width: 100%;
  height: auto;
`;

function ResponsiveImage(props: ResponsiveImageProps) {
  const { width, height, src, alt } = props;
  return (
    <ResponsiveImageContainer>
      <Image
        {...props}
        src={src ? src : "/"}
        alt={alt ? alt : "Descrição da imagem"}
        width={width ? width : 100}
        height={height ? height : 100}
      />
    </ResponsiveImageContainer>
  );
}

export default ResponsiveImage;
