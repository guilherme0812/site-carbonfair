"use client";

import { Box } from "@mui/material";
import { Gallery } from "carbonfair-ui";

function GalleryCarbonFair({ options }: { options: string[] }) {
  return <Gallery options={options} />;
}

export default GalleryCarbonFair;
