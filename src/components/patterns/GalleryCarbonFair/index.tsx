"use client";

import { Box } from "@mui/material";
import { Gallery } from "carbonfair-ui";

function GalleryCarbonFair({
  options,
  imagesInLayout,
}: {
  options: string[];
  imagesInLayout?: number;
}) {
  return <Gallery options={options} imagesInLayout={imagesInLayout} />;
}

export default GalleryCarbonFair;
