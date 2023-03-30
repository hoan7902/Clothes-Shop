import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import SliderImage from "../components/Home/SliderImage";
import { Box } from "@mui/material";
import Breadcrumb from "@/components/BestSeller/Breadscrumb";

export default function Home() {
  return (
    <>
      <Layout>
        <Breadcrumb/>
        <Box mx="auto">

        </Box>
        </Layout>
    </>
  );
}
