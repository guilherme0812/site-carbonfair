"use client";

import styled from "styled-components";
import { NewButton } from "../../ui";

export const CustomButton = styled(NewButton)`
  border-radius: 0 8px 8px 0;
  box-shadow: ${(props) => props.theme.shadows[2]};
`;
