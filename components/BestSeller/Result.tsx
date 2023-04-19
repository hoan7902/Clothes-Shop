import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProductBox from "./ProductBox";
import SearchGroup from "./SearchGroup";
import SearchLimit from "./SearchLimit";
import { useRouter } from "next/router";
import Title from "./Title";
import { getProducts } from "@/pages/api";
import { ReactNode, useEffect, useState } from "react";
import { count } from "console";
import { type } from "os";
import Link from "next/link";

interface ResultProps {
  title: string;
  setTotal: (value: number) => void;
}

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

const Result = ({ title, setTotal }: ResultProps) => {
  const CustomLink = ({
    href,
    children,
  }: {
    href: string;
    children: ReactNode;
  }) => (
    <Link href={href}>
      <a className="custom-link">{children}</a>
    </Link>
  );

  const router = useRouter();
  const [allProducts, setAllProduct] = useState<ProductTyp[]>([]);

  const fetchData = async (query: any) => {
    await getProducts(query)
      .then((res) => {
        setAllProduct(res?.data.data);
        let limit;
        if (router.query.limit && typeof router.query.limit == "string")
          limit = parseInt(router.query.limit);
        else limit = 24;
        setTotal(Math.floor(res?.data.count / limit) + 1);
        return res;
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData(router.query);
  }, [router.query]);

  return (
    <>
      <Title title={title} />
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <SearchGroup />
        <SearchLimit />
      </Stack>
      <Box
        mt={"25px"}
        mb={"25px"}
        display="grid"
        gridTemplateRows={"1fr"}
        gridTemplateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        rowGap={{ xs: "35px", sm: "36px", md: "35px" }}
        columnGap={{ xs: "5px", sm: "10px", md: "25px" }}
        justifyContent={"center"}
        justifyItems={"center"}
      >
        {allProducts &&
          allProducts.map((product, index) => {
            return (
              <Link
                key={index}
                href={`${product.productId}`}
                className="link"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <ProductBox
                  images={product.images ? product.images : [""]}
                  name={product.name}
                  price={product.minPrice + " đ"}
                />
              </Link>
            );
          })}
      </Box>
    </>
  );
};

export default Result;
