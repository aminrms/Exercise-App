import React, { useEffect, useState, useRef } from "react";
import {
  Fade,
  Modal,
  Backdrop,
  IconButton,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
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
                justifyContent: "flex-start",
                py: 2,
                px: 3,
              }}
            >
              <Typography
                variant="p"
                color="InfoText"
                sx={{
                  textAlign: "justify"

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
