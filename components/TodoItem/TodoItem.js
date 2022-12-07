import { useEffect, useState } from "react";
// Material-Components
import {
  Stack,
  Box,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  Fade,
} from "@mui/material";
// Material_ICONS
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import EditIcon from "@mui/icons-material/Edit";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { motion } from "framer-motion";
import { deleteTodo, editTodo } from "../../feature/reducers/todoSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Description from "../Modals/Description";
import EditTodo from "../Modals/EditTodo";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const checkHandler = () => {
    setCheck((prev) => !prev);

    dispatch(
      editTodo({
        ...todo,
        status: check ? " uncompleted" : "completed",
      })
    );
  };
  useEffect(() => {
    if (todo.status === "completed") {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, []);
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1, transformX: 0 }}
      initial={{ opacity: 0, scale: 1, translateX: "0%" }}
      exit={{
        opacity: 0,
      }}
      transition={{ duration: 0.65 }}
    >
      <Stack
        direction="row"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          // boxShadow: "rgba(50, 50, 50, 0.2) 0px 8px 15px 0px ",
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
          borderRadius: "1rem",
          my: 1,
          py: 2,
          px: { xs: 1.2, sm: 2, md: 3 },
          background: "rgba(255, 255, 255, 0.2)",
          opacity: check ? "0.5" : "1",
          transition: "all 0.2s",
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            background: "rgba(230,230,230 ,0.2)",
            width: "100%",
            borderRadius: "0.8rem",
            py: 1,
            px: { xs: 1, sm: 1.5, md: 3 },
            minHeight: "40px",
            mr: 1,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <FormControlLabel
              control={<Checkbox checked={check} onChange={checkHandler} />}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                mt: "0.2rem",
              }}
            >
              <Typography
                variant="subtitle1"
                fontSize="18px"
                fontWeight="bold"
                color="ButtonText"
              >
                {todo?.title}
              </Typography>

              <Typography
                variant="subtitle2"
                color="InfoText"
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  gap: 1,
                  mt: 1,
                  color: "#555",
                  fontSize: { sm: "12px", md: "14px" },
                }}
              >
                <AccessTimeIcon
                  sx={{ padding: 0, color: "#555", fontSize: "15px" }}
                />
                {todo?.time}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Description description={todo?.description} />
          </Box>
        </Stack>
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <SettingsIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          sx={{}}
        >
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              dispatch(deleteTodo({ id: todo?.id }));
            }}
            sx={{
              display: "flex",
              gap: "0.2rem",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <DeleteIcon sx={{ padding: 0, color: "#555" }} />
            <Typography variant="subtitle2" color={"text-secondary"}>
              Delete
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              setOpenModal(true);
            }}
            sx={{
              display: "flex",
              gap: "0.2rem",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
            }}
          >
            <EditIcon sx={{ padding: 0, color: "#555" }} />
            <Typography variant="subtitle2" color={"text-secondary"}>
              Edit
            </Typography>
          </MenuItem>
        </Menu>
        <EditTodo open={openModal} setOpen={setOpenModal} todo={todo} />
      </Stack>
    </motion.div>
  );
};

export default TodoItem;
