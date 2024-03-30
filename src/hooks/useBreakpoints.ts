"use client";

import { useMediaQuery, useTheme } from "@mui/material";

export default function useBreakpoints() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const xlDown = useMediaQuery(theme.breakpoints.down("xl"));

  return { smDown, mdDown, lgDown, xlDown };
}
