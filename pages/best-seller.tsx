import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import SliderImage from "../components/Home/SliderImage";
import { Box } from "@mui/material";
import Breadcrumb from "@/components/BestSeller/Breadscrumb";
import Fillter from "@/components/BestSeller/Fillter";
import Result from "@/components/BestSeller/Result";
import Pagi from "@/components/BestSeller/Pagi";
import { GetStaticProps } from "next";
import { getCategories } from "./api";
import { useState } from "react";

export type CategoryTyp = {
  categoryId: string;
  name: string;
  description: string;
};

export default function BestSeller({
  categories,
}: {
  categories: CategoryTyp[];
}) {
  const [totalPage, setTotalPage] = useState(0);
  return (
    <>
      <Layout>
        <Box
          mt="85px"
          maxWidth={{
            xs: "540px",
            sm: "800px",
            md: "1000px",
            lg: "1500px",
            xl: "1567px",
          }}
          mx="auto"
          pb="3rem"
        >
          <Breadcrumb />
          <Box mx="auto" display="flex">
            <Fillter categories={categories} />
            <Result title="sản phẩm bán chạy" setTotal={setTotalPage} />
          </Box>
          <Pagi total={totalPage} />
        </Box>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  categories: CategoryTyp[];
}> = async (context) => {
  const res = (await getCategories()).data.categories;
  console.log(res);

  return {
    props: {
      categories: res,
    },
  };
};
