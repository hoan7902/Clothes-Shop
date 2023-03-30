import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import SliderImage from "../components/Home/SliderImage";
import { Box } from "@mui/material";
import Breadcrumb from "@/components/BestSeller/Breadscrumb";
import Fillter from "@/components/BestSeller/Fillter";
import Result from "@/components/BestSeller/Result";
import Pagi from "@/components/BestSeller/Pagi";

export default function BestSeller() {
  return (
    <>
      <Layout>
        <Box
          mt="85px"
          maxWidth={{ xs: "540px", sm: "900px", md: "1160px", lg: "1500px", xl: "1567px" }}
          mx="auto"
          pb="3rem"
        >
          <Breadcrumb />
          <Box mx="auto" display="flex">
            <Fillter />
            <Result title="sản phẩm bán chạy" />
          </Box>
          <Pagi total={2} />
        </Box>
      </Layout>
    </>
  );
}
