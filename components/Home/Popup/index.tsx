import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import Login from "./Login";
import Signup from "./Signup";
import styles from "./styles.module.css";

const Popup = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton style={{ marginRight: "20px" }} onClick={handleClickOpen}>
        <PersonIcon />
      </IconButton>
      <Dialog  open={open} onClose={handleClose}>
        <Box className={styles.wrapperPopup}>
          <DialogTitle>
            <Stack
              borderBottom="0.5px solid #444"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ display: { xs: "none", md: "flex"}}}
            >
              <Typography
                padding="10px 100px"
                fontSize="2rem"
                textTransform="uppercase"
                color="#ad2526"
              >
                Tài Khoản
              </Typography>
              <CloseIcon onClick={handleClose} sx={{ "&:hover": { cursor: "pointer"}}} />
            </Stack>
            <Stack
              p="20px 0"
              borderBottom="0.5px solid #444"
              flexDirection="row"
              justifyContent="space-around"
            >
              <Typography
                className={styles.headerTitle}
                tabIndex={0}
                onClick={() => setIsLogin(true)}
              >
                Đăng nhập
              </Typography>
              <Typography
                className={styles.headerTitle}
                tabIndex={0}
                onClick={() => setIsLogin(false)}
              >
                Đăng ký
              </Typography>
            </Stack>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {isLogin ? <Login /> : <Signup />}
            </DialogContentText>
          </DialogContent>
        </Box>
      </Dialog>
    </div>
  );
};

export default Popup;
