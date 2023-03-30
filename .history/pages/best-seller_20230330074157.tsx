import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import SliderImage from "../components/Home/SliderImage";
import { Box } from "@mui/material";
import Breadcrumb from "@/components/BestSeller/Breadscrumb";
import Fillter from "@/components/BestSeller/Fillter";

export default function Home() {
  return (
    <>
      <Layout>
        <Box mt="85px">
          <Breadcrumb />
          <Box mx="auto">
            <Fillter />
          </Box>
        </Box>
      </Layout>
    </>
  );
}
