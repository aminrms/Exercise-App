import React, { useEffect, useState, useRef } from "react";
import {
  Fade,
  Modal,
  Backdrop,
  IconButton,
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
  InputLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import classes from "../../styles/CreateTodo.module.css";
import { styleBoxModal } from "../../styles/styles";

const Description = ({ description }) => {
  const [open, setOpen] = useState(false);

  const openHandler = () => {
    setOpen(true);
  };

  const closeHandler = () => {
    setOpen(false);
  };
  return (
    <>
      <IconButton onClick={openHandler}>
        <MenuOpenIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={closeHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 600,
        }}
      >
        <Fade in={open}>
          <Box sx={styleBoxModal}>
            <Stack
              direction={"row"}
              sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px #ddd solid",
                py: 1,
                px: 2,
              }}
            >
              <Typography
                variant="h6"
                component="h6"
                color={"primary"}
                fontWeight="700"
              >
                Description
              </Typography>
              <IconButton onClick={closeHandler}>
                <CloseIcon />
              </IconButton>
            </Stack>
            <Stack
              direction={"column"}
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: 1,
                px: 3,

                minHeight: "120px",
              }}
            >
              <Typography
                variant="body1"
                color="InfoText"
                sx={{
                  overflowY: "auto",
                  overflowX: "hidden",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  minHeight: "120px",
                  justifyContent: "center",
                }}
              >
                {description}
              </Typography>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Description;
