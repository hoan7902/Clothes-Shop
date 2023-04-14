import React, { useState } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import styles from "./styles.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Signup = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisibility, setIsVisibility] = useState(false);
  const handleChangeVisibility = () => {
    setIsVisibility(!isVisibility);
  };
  return (
    <div>
      <form className={styles.form}>
        <Stack alignItems="center">
          <Stack
            className={styles.wrapInput}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <input
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              name="email"
              type="text"
            />
          </Stack>
          <span></span>
        </Stack>
        <Stack alignItems="center">
          <Stack
            className={styles.wrapInput}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <input
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mật khẩu"
              name="email"
              type={isVisibility ? "text" : "password"}
            />
            <Box onClick={handleChangeVisibility}>
              {isVisibility ? (
                <VisibilityOffIcon sx={{ marginTop: "30px" }} />
              ) : (
                <VisibilityIcon sx={{ marginTop: "30px" }} />
              )}
            </Box>
          </Stack>
          <span></span>
        </Stack>
        <Stack alignItems="center">
          <Stack
            className={styles.wrapInput}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <input
              className={styles.input}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Nhập lại mật khẩu"
              name="email"
              type={isVisibility ? "text" : "password"}
            />
            <Box onClick={handleChangeVisibility}>
              {isVisibility ? (
                <VisibilityOffIcon sx={{ marginTop: "30px" }} />
              ) : (
                <VisibilityIcon sx={{ marginTop: "30px" }} />
              )}
            </Box>
          </Stack>
          <span></span>
          <button className={styles.buttonLogin}>Đăng kí</button>
        </Stack>
      </form>
    </div>
  );
};

export default Signup;
