"use client";
import React, { useState } from "react";
import { Box, Button, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

const PreviewModal: React.FC<{ document: string }> = ({ document }) => {
  const [open, setOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setIframeLoaded(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="text"
        color="primary"
        onClick={handleOpen}
        sx={{
          fontSize: "0.75rem",
          display: "flex",
          alignItems: "center",
          textTransform: "none",
          padding: "0",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        startIcon={<VisibilityIcon sx={{ fontSize: "1.1rem" }} />}
      >
        Preview CV
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 2,
              right: 8,
              color: "black",
            }}
          >
            <CloseIcon />
          </IconButton>

          {iframeLoaded && (
            <iframe
              src={document}
              title="Resume Preview"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            ></iframe>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default PreviewModal;
