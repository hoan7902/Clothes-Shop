import { Box, Divider, Typography } from "@mui/material";
import Layout from "../components/Layout";
import ItemLeftInfo from "@/components/Detail/ItemLeftInfo";
import ItemRightInfo from "@/components/Detail/ItemRightInfo";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getProduct } from "./api";
import RatingBox from "@/components/Detail/RatingBox";
import CommentBox from "@/components/Detail/CommentBox";
import { createContext } from "react";

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

export const UserContext = createContext({
  userChange: 0,
  handleClick: () => {},
});

const Items = () => {
  const [change, setChange] = useState(0);
  const [userChange, setUserChange] = useState(0);
  const [productInfo, setProductInfo] = useState<ProductInfoTyp>({
    status: "",
    productId: "",
    description: "",
    sizes: [],
    images: [],
    numberRating: "",
    ratingPoint: "",
    categories: [],
    name: "",
  });

  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    console.log("check productId: ", productId);
    const fetchData = async () => {
      if (productId) {
        const res = await getProduct(productId);
        console.log("check res: ", res?.data);
        setProductInfo(res?.data);
      }
    };
    fetchData();
  }, [productId]);

  const handleClick = () => {
    setUserChange(userChange + 1);
  };

  return (
    // <h2>hello</h2>
    productInfo.sizes.length !== 0 ? (
      <UserContext.Provider value={{ userChange, handleClick }}>
        <Layout>
          <Box
            width="100%"
            mt="85px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
          >
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              pb="3rem"
              width="80%"
            >
              <Box
                width={{ xs: "100%", sm: "100%", md: "33.333%" }}
                bgcolor={"white"}
              >
                <ItemLeftInfo images={productInfo.images} />
              </Box>
              <Box width="100%">
                <ItemRightInfo
                  productId={productInfo.productId}
                  name={productInfo.name}
                  numberRating={productInfo.numberRating}
                  ratingPoint={productInfo.ratingPoint}
                  sizes={productInfo.sizes}
                />
              </Box>
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
            <RatingBox
              productId={productInfo.productId}
              setChange={setChange}
            />
          </Box>
        </Layout>
      </UserContext.Provider>
    ) : (
      <h2> vcl</h2>
    )
  );
};

export default Items;
