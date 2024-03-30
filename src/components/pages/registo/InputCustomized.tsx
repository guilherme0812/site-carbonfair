"use client";

import styled from "styled-components";
import { NewInput } from "../../ui";

export const InputCustomized = styled(NewInput)`
  display: inline-flex;
  box-shadow: ${(props) => props.theme.shadows[2]};
  border: none;
  outline: none;
  border-radius: 8px 0 0 8px;

  &:focus {
    border: none;
    outline: none;
  }
`;
