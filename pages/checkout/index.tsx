import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import SliderImage from "../../components/Home/SliderImage";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";
import CollectionItem from "@/components/Collection/CollectionItem";
import OrderItem from "@/components/Checkout/OrderItem";

export default function Checkout() {
  return (
    <>
      <Layout>
        <Box className="container">
          <Typography className={styles.title}>Giỏ hàng</Typography>
          <OrderItem />
        </Box>
      </Layout>
    </>
  );
}
