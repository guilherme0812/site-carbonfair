"use client";

import { Button } from "../../ui";
import { Box, Modal, Typography } from "@mui/material";
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 1,
  p: 4,
};

interface ConfirmModalProps {
  open: boolean;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  handleClose(): void;
  handleExclude(): void;
}

export default function ConfirmModal({
  open,
  handleClose,
  handleExclude,
  message,
  cancelLabel = "Cancelar",
  confirmLabel = "Confirmar",
}: ConfirmModalProps) {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: "2rem" }}
          >
            {message}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={() => handleClose()}
              sx={(theme) => ({ color: theme.palette.text.primary })}
            >
              {cancelLabel}
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                handleExclude();
                handleClose();
              }}
            >
              {confirmLabel}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
