import "styled-components";
import { Theme } from "@mui/material";
type Theme = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
