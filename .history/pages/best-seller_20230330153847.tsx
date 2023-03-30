import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import SliderImage from "../components/Home/SliderImage";
import { Box } from "@mui/material";
import Breadcrumb from "@/components/BestSeller/Breadscrumb";
import Fillter from "@/components/BestSeller/Fillter";
import Result from "@/components/BestSeller/Result";

export default function BestSeller() {
  return (
    <>
      <Layout>
        <Box
          mt="85px"
          maxWidth={{ sm: "540px", md: "850px", lg: "932px" }}
          mx="auto"
        >
          <Breadcrumb />
          <Box mx="auto" display="flex">
            <Fillter />
            <Result />
          </Box>
        </Box>
      </Layout>
    </>
  );
}
