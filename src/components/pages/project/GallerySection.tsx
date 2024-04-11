"use client";

import { Box } from "@mui/material";
import { Gallery } from "carbonfair-ui";

function GallerySection({ options }: { options: string[] }) {
  return (
    <Box className="container">
      {/* <Gallery imageList={[...imageList]} /> */}
      <Gallery options={options} />
    </Box>
  );
}

export default GallerySection;
