"use client";
import React, { useState } from "react";
import { Box, Button, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility"; // Importing preview icon

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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="text"
        color="primary"
        onClick={handleOpen}
        sx={{
          fontSize: "0.75rem", // Smaller font size for the text
          display: "flex", // Align icon and text horizontally
          alignItems: "center",
          textTransform: "none", // Keep normal casing
          padding: "0", // Reduce padding for a more compact look
          "&:hover": {
            backgroundColor: "transparent", // Disable hover background effect
          },
        }}
        startIcon={<VisibilityIcon sx={{ fontSize: "1.1rem" }} />} // Preview icon (smaller size)
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
          <iframe
            src={document}
            title="Resume Preview"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          ></iframe>
        </Box>
      </Modal>
    </>
  );
};

export default PreviewModal;
