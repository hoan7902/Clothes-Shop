import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.css";

const OrderItem: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <Grid container borderBottom="0.5px solid #444" p="20px" justifyContent="center" alignItems="center">
        <Grid className={styles.textHeader} xs={6}>
          Sản phẩm
        </Grid>
        <Grid sx={{ display: { xs: "none", md: "block"}}} className={styles.textHeader} xs={2}>
          Đơn giá
        </Grid>
        <Grid sx={{ display: { xs: "none", md: "block"}}} className={styles.textHeader} xs={2}>
          Số lượng
        </Grid>
        <Grid sx={{ display: { xs: "none", md: "block"}}} className={styles.textHeader} xs={2}>
          Số tiền
        </Grid>
      </Grid>

      <Grid container padding="25px" borderBottom="0.5px solid #444" p="20px">
        <Grid md={6} xs={12}>
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

        <Grid sx={{ marginLeft: {xs : "45%", md: "0px"}}} xs={12} md={2}>
          <Typography fontSize="1.1rem" fontWeight="400">
            795.000đ
          </Typography>
        </Grid>
        <Grid sx={{ marginLeft: {xs : "37%", md: "0px"}}} xs={12} md={2}>
          <Stack flexDirection="row" alignItems="center">
            <button
              onClick={handleDecreaseQuantity}
              className={styles.buttonDecreaseQuantity}
            >
              -
            </button>
            <Typography fontSize="1.1rem" fontWeight="400">
              {quantity}
            </Typography>
            <button
              onClick={handleIncreaseQuantity}
              className={styles.buttonIncreaseQuantity}
            >
              +
            </button>
          </Stack>
        </Grid>
        <Grid sx={{ marginLeft: {xs : "37%", md: "0px"}, display: { xs: "none", md: "block"}}} xs={12} md={2}>
          <Stack flexDirection="row" alignItems="center">
            <Typography fontSize="1.1rem" fontWeight="400" color="#9f1110">
              795.000đ
            </Typography>
            <button className={styles.buttonErase}>Xóa</button>
          </Stack>
        </Grid>
      </Grid>

      <Stack flexDirection="row" justifyContent="flex-end" m="40px 0">
        <Typography
          sx={{ width: { xs: "50%", md: "30%"}}}
          textAlign="center"
          fontSize="1.7rem"
          textTransform="uppercase"
          color="#9f1110"
        >
          Tổng Thanh Toán
        </Typography>
        <Stack width="50%" alignItems="center">
          <Typography fontSize="1.5rem" color="#9f1110">
            795.000đ
          </Typography>
          <button className={styles.buttonConfirm}>Đặt hàng</button>
          <Stack flexDirection="row" justifyContent="space-between">
            <img
              className="next"
              src="https://lep.vn/icons/icon-go-back-red.svg"
            />
            <Typography pl="1rem" color="#ad2526;">
              Tiếp tục mua sắm
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default OrderItem;
