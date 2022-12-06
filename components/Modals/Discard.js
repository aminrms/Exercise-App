import {
  Modal,
  Fade,
  Backdrop,
  IconButton,
  Stack,
  Box,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styledDiscardModal } from "../../styles/styles";

const Discard = ({
  openDiscard,
  setOpenDiscard,
  setOpen,
  setTitle,
  setDescription,
}) => {
  const closeHandler = () => {
    setOpenDiscard(false);
  };
  const closeAllModal = () => {
    setOpenDiscard(false);
    setOpen(false);
    setTitle("");
    setDescription("");
  };
  const closeWithSave = () => {
    setOpenDiscard(false);
    setOpen(false);
  };
  return (
    <Modal
      open={openDiscard}
      onClose={closeHandler}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 600,
      }}
    >
      <Fade in={openDiscard}>
        <Box sx={styledDiscardModal}>
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
              fontSize="17px"
              color={"primary"}
              fontWeight="600"
            >
              Save this task as a draft?
            </Typography>
            <IconButton onClick={closeHandler}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack
            direction="row"
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-end",
              textTransform: "none",
              py: 1,
              px: 2,
              display: "flex",
              gap: "0.5rem",
              mt: 1,
            }}
          >
            <Button
              onClick={closeAllModal}
              variant="contained"
              sx={{ borderRadius: "0.6rem", py: 1, px: 2 }}
            >
              <Typography fontWeight={500} variant="subtitle2" color="white">
                Discard
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "0.6rem",
                boxShadow: 0,
                py: 1,
                px: 2,
                bgcolor: "#ffff",
                textTransform: "none",
              }}
              onClick={closeWithSave}
            >
              <Typography fontWeight={500} variant="subtitle2">
                Save as default
              </Typography>
            </Button>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
};

export default Discard;
