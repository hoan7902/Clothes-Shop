import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.css";

const OrderItem: React.FC = () => {
  return (
    <>
      <Grid container borderBottom="0.5px solid #444" p="20px">
        <Grid className={styles.textHeader} xs={6}>
          Sản phẩm
        </Grid>
        <Grid className={styles.textHeader} xs={2}>
          Đơn giá
        </Grid>
        <Grid className={styles.textHeader} xs={2}>
          Số lượng
        </Grid>
        <Grid className={styles.textHeader} xs={2}>
          Số tiền
        </Grid>
      </Grid>

      <Grid container padding="25px">
        <Grid xs={6}>
          <Stack flexDirection="row">
            <div className={styles.wrapImage}>
              <img
                width="100%"
                height="100%"
                src="https://cdn.lep.vn/2022/09/images/products/1663057005975-1VA01940HO-compressed.jpeg"
              />
            </div>
            <Stack ml="30px">
              <Typography
                fontSize="1.25rem"
                fontWeight="100"
                lineHeight="1.75rem"
                color="#444"
                marginBottom="12px"
              >
                Váy phối ren tùng xòe 1VA01940HO - S
              </Typography>
              <Typography fontSize="1.1rem" fontWeight="400">
                Size S
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid xs={2}>
          <Typography fontSize="1.1rem" fontWeight="400">795.000đ</Typography>
        </Grid>
        <Grid xs={2}>
          <Stack flexDirection="row">
            <button>-</button>
            <Typography fontSize="1.1rem" fontWeight="400">2</Typography>
            <button>+</button>
          </Stack>
        </Grid>
        <Grid xs={2}>
          <Stack flexDirection="row">
            <Typography fontSize="1.1rem" fontWeight="400" color="#9f1110">795.000đ</Typography>
            <button>Xóa</button>
          </Stack>
        </Grid>
      </Grid>

      <Stack flexDirection="row">
        <Typography width="70%">Tổng Thanh Toán</Typography>
        <Stack width="30%">
          <Typography fontSize="1.1rem" color="#9f1110">795.000đ</Typography>
          <button>Đặt hàng</button>
          <Typography>Tiếp tục mua sắm</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default OrderItem;
