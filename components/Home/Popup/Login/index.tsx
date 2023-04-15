import React, { useState } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import styles from "./styles.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <Typography sx={{ "&:hover": { cursor: "pointer", opacity: "0.9"}}} color="#ad2526" p="20px 0">Quên mật khẩu</Typography>
          <button className={styles.buttonLogin}>Đăng nhập</button>
        </Stack>
      </form>
    </div>
  );
};

export default Login;
