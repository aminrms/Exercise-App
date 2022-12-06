// Material-Components
import { Stack, Box, Button, Typography } from "@mui/material";
// Material_ICONS
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
// redux
const TodoItem = () => {
  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        borderRadius: "0.75rem",
        boxShadow: 3,
      }}
    >
      <Typography variant="subtitle1" color="primary">
        Task 1
      </Typography>
    </Stack>
  );
};

export default TodoItem;
