import { Box, Divider, Typography } from "@mui/material";
import Layout from "../components/Layout";
import ItemLeftInfo from "@/components/Detail/ItemLeftInfo";
import ItemRightInfo from "@/components/Detail/ItemRightInfo";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getProduct, getProducts } from "./api";
import { GetStaticProps } from "next";
import RatingBox from "@/components/Detail/RatingBox";
import CommentBox from "@/components/Detail/CommentBox";
import { createContext } from "react";

export const UserContext = createContext({
  userChange: 0,
  handleClick: () => {},
});
const Items = ({ productInfo }: { productInfo: ProductInfoTyp }) => {
  const [change, setChange] = useState(0);
  const [userChange, setUserChange] = useState(0);
  const handleClick = () => {
    setUserChange(userChange + 1);
  };
  return (
    <UserContext.Provider value={{ userChange, handleClick }}>
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
          mx="6%"
          pb="3rem"
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            pb="3rem"
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
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ borderLeft: "0.05px solid black" }}
          ></Divider>
          <CommentBox productId={productInfo.productId} change={change} />
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ borderLeft: "0.05px solid black" }}
          ></Divider>
          <RatingBox productId={productInfo.productId} setChange={setChange} />
        </Box>
      </Layout>
    </UserContext.Provider>
  );
};

export default Items;

export const getStaticProps: GetStaticProps<{
  productInfo: ProductInfoTyp;
}> = async (context) => {
  let res = null;
  if (context !== undefined && context.params !== undefined) {
    res = (await getProduct(context.params.productId)).data;
  }

  return {
    props: {
      productInfo: res,
    },
  };
};
export async function getStaticPaths() {
  const result = await getProducts("");

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
