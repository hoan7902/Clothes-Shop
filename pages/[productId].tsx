import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout";
import ItemLeftInfo from "@/components/Detail/ItemLeftInfo";
import ItemRightInfo from "@/components/Detail/ItemRightInfo";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getProduct, getProducts } from "./api";
import { GetStaticProps } from "next";

const Items = ({ productInfo }: { productInfo: ProductInfoTyp }) => {
  console.log("productInfo", productInfo);
  return (
    <Layout>
      <Box
        width={"100%"}
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
        display="flex"
      >
        <Box
          width={{ xs: "100%", sm: "100%", md: "33.333%" }}
          bgcolor={"white"}
        >
          <ItemLeftInfo images={productInfo.images} />
        </Box>
        <ItemRightInfo
          productId={productInfo.productId}
          name={productInfo.name}
          numberRating={productInfo.numberRating}
          ratingPoint={productInfo.ratingPoint}
          sizes={productInfo.sizes}
        />
      </Box>
    </Layout>
  );
};

export default Items;

export const getStaticProps: GetStaticProps<{
  productInfo: ProductInfoTyp;
}> = async (context) => {
  console.log("productid getStaticProps", context);
  let res = null;
  if (context !== undefined && context.params !== undefined) {
    res = (await getProduct(context.params.productId)).data;
  }
  console.log("productid getStaticProps Res", res);

  return {
    props: {
      productInfo: res,
    },
  };
};
export async function getStaticPaths() {
  const result = await getProducts("");
  console.log("getStaticPaths: ", result.data);

  const paths = result.data.data.map((product: ProductTyp) => ({
    params: { productId: product.productId.toString() },
  }));

  return { paths, fallback: false };
}

type ProductInfoTyp = {
  status: string;
  productId: string;
  description: string;
  sizes: Array<{ price: string; quantity: string; sizeName: string }>;
  images: string[];
  numberRating: string;
  ratingPoint: string;
  categories: string[];
  name: string;
};
type ProductTyp = {
  createdAt: string;
  description: string;
  images: string[];
  maxPrice: string;
  minPrice: string;
  name: string;
  productId: string;
  soldQuantity: string;
};
