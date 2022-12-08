import React, { useState } from "react";
import {
  Fade,
  Modal,
  Backdrop,
  IconButton,
  Box,
  TextareaAutosize,
  Button,
  Stack,
  Typography,
  InputLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Discard from "./Discard";
import { useDispatch, useSelector } from "react-redux";
import classes from "../../styles/CreateTodo.module.css";
import { addTodo } from "../../feature/reducers/todoSlice";
import { nanoid } from "@reduxjs/toolkit";
import { styleBoxModal } from "../../styles/styles";

const CreateTodo = ({ select }) => {
  const [open, setOpen] = useState(false);
  const [openDiscard, setOpenDiscard] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const formIsValid =
    title.toLocaleLowerCase().trim() && description.toLocaleLowerCase().trim();

  const openHandler = () => {
    setOpen(true);
  };

  const closeHandler = () => {
    if (title || description) {
      setOpenDiscard(true);
    } else {
      setOpenDiscard(false);
      setOpen(false);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        title,
        description,
        id: nanoid(),
        status: "uncompleted",
        time: new Date().toLocaleString(),
      })
    );
    setOpen(false);
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={openHandler}
        disableElevation
        sx={{ borderRadius: "1rem", py: 1.5, px: 2.5, textTransform: "none" }}
      >
        <Typography fontWeight={500} variant="subtitle2" color="white">
          Add Task
        </Typography>
      </Button>
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
                Create Task
              </Typography>
              <IconButton onClick={closeHandler}>
                <CloseIcon />
              </IconButton>
            </Stack>
            <Stack
              sx={{
                width: "100%",
                justifyContent: "space-between",
                py: 1,
                px: 3,
              }}
            >
              <form onSubmit={submitHandler}>
                <Stack sx={{ width: "100%" }} direction={"column"}>
                  <InputLabel htmlFor="task-title">
                    <Typography
                      variant="h6"
                      component="h6"
                      fontSize="18px"
                      color={"#444"}
                      fontWeight="500"
                    >
                      Task Title
                    </Typography>
                  </InputLabel>
                  <input
                    id="task-title"
                    type="text"
                    className={classes["titleInput"]}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Stack>
                <Stack sx={{ width: "100%" }} direction={"column"}>
                  <InputLabel htmlFor="task-description">
                    <Typography
                      variant="h6"
                      component="h6"
                      fontSize="18px"
                      color={"#444"}
                      fontWeight="500"
                    >
                      Description
                    </Typography>
                  </InputLabel>
                  <TextareaAutosize
                    maxRows={6}
                    id="task-description"
                    type="text"
                    className={classes["decorationInput"]}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Stack>
                <Stack
                  sx={{
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    display: "flex",
                  }}
                >
                  <Button
                    type="submit"
                    sx={{
                      width: "100%",
                      textTransform: "unset",
                      borderRadius: "1rem",
                      mt: 1,
                      fontSize: "16px",
                    }}
                    disabled={!formIsValid}
                    variant="contained"
                    onClick={openHandler}
                  >
                    <span>Create</span>
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Fade>
      </Modal>
      <Discard
        openDiscard={openDiscard}
        setOpenDiscard={setOpenDiscard}
        setOpen={setOpen}
        setTitle={setTitle}
        setDescription={setDescription}
      />
    </>
  );
};

export default CreateTodo;
