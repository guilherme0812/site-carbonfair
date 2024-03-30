"use client";

import * as React from "react";
import { Modal, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IoCloseOutline } from "react-icons/io5";

interface VariantsModal {
  variant?: "popUp" | "comment";
}

export const ModalContainer = styled("div")<VariantsModal>(
  ({ theme, variant }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.background.default,
    boxShadow: "24px",

    borderRadius: theme.shape.borderRadius * 2,
    minWidth: "400px",
    overflowY: "auto",
    maxHeight: "90vh",

    "& > .header": {
      backgroundColor: theme.palette.grey[200],
      padding: "1rem 2rem",
    },
    "& > .body": {
      padding: "2rem",
    },

    [theme.breakpoints.up("md")]: {
      width:
        variant === "popUp" ? "400px" : variant === "comment" ? "50%" : "85%",
    },

    [theme.breakpoints.down("md")]: {
      width:
        variant === "popUp" ? "300px" : variant === "comment" ? "70%" : "90%",
    },
  })
);

export interface ICarbonModal extends VariantsModal {
  open: boolean;
  handleClose(): void;
  title: string;
  children: React.ReactNode;
}

const CarbonModal = ({
  open,
  handleClose,
  title,
  children,
  variant,
}: ICarbonModal) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer variant={variant}>
        <div className="header">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>{title}</h3>
            <Box sx={{ cursor: "pointer" }}>
              <IoCloseOutline size={25} onClick={handleClose} />
            </Box>
          </Box>
        </div>
        <div className="body">{children}</div>
        {/* <Divider sx={{ my: 2 }} /> */}
      </ModalContainer>
    </Modal>
  );
};

export default CarbonModal;
