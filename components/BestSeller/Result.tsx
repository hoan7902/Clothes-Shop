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
    const result = await getProducts(query);
    setAllProduct(result.data.data);
    let limit;
    if (router.query.limit && typeof router.query.limit == "string")
      limit = parseInt(router.query.limit);
    else limit = 24;
    setTotal(Math.ceil(result.data.count / limit));
    return result;
  };

  useEffect(() => {
    fetchData(router.query);
  }, [router.query]);

  return (
    <Box width={"74%"} maxWidth={"74%"}>
      <Title title="sản phẩm bán chạy" />
      <Stack
        direction={{ sx: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <SearchGroup />
        <SearchLimit />
      </Stack>
      <Box
        mt={"25px"}
        display="grid"
        gridTemplateRows={"1fr"}
        gridTemplateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        rowGap={{ xs: "5px", sm: "6px", md: "35px" }}
        columnGap={{ xs: "5px", sm: "10px", md: "25px" }}
        justifyContent={"center"}
      >
        {allProducts &&
          allProducts.map((product, index) => {
            return (
              <Link
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

        <ProductBox
          images={[
            "https://cdn.lep.vn//2022/07/images/products/1660908378355-4VA1386NAS-compressed-800x800.jpeg",
            "https://cdn.lep.vn//2022/07/images/products/1660119057109-_DSC3749-compressed-\\(1\\)-800x800.jpeg",
          ]}
          name={"Váy nơ cổ tùng xòe 4VA1386NA"}
          price={"750.000 đ"}
        />
      </Box>
    </Box>
  );
};

export default Result;
