import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./styles.module.css";

interface OrderData {
    address: string;
    cost: number | string; // Depending on how the data is used, the cost can be represented as either a number or a string
    deliveryTime: Date | null;
    note: string;
    orderId: string;
    orderTime: string;
    phone: string;
    status: string;
    userId: string;
  }
  
  interface Props {
    order: OrderData;
  }

const PersonalPopup: React.FC<Props> = ({ order }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={handleOpen} className={styles.button}>
        Chi tiết
      </button>

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle className={styles.wrapForm}>Chi tiết đơn hàng</DialogTitle>
        <DialogContent>
          <Stack>
            <Typography>Status: {order?.status}</Typography>
            <Typography>Số điện thoại: {order?.phone}</Typography>
            <Typography>Tổng chi phí: {order?.cost}</Typography>
            <Typography>Note: {order?.note}</Typography>
            <Typography>Địa chỉ: {order?.address}</Typography>
            <Typography>Thời gian đặt hàng: {order?.orderTime}</Typography>
          </Stack>
        </DialogContent>
        <DialogActions>
          <button className={styles.button} onClick={handleClose}>
            Tắt
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PersonalPopup;
