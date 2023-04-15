import {
  Box,
  Typography,
  ImageListItem,
  ImageList,
  sliderClasses,
  Stack,
  Rating,
  Divider,
} from "@mui/material";
import { useState } from "react";
import LikeSection from "./LikeSection";
import RatingSection from "./RatingSection";
import CodeSection from "./CodeSection";
import SizeSection from "./SizeSection";
import MoreInfo from "./MoreInfo";
import ItemAction from "./ItemAction";
const ItemRightInfo = ({
  name,
  numberRating,
  ratingPoint,
  sizes,
  productId,
}: {
  productId: string;
  name: string;
  numberRating: string;
  ratingPoint: string;
  sizes: Array<{ price: string; quantity: string; sizeName: string }>;
}) => {
  const [selectedItem, setSelectedItem] = useState(0);
  console.log("ItemRightInfo", sizes);
  return (
    <Box width={"66.6667%"} paddingLeft={"100px"} marginTop={"10px"}>
      <Typography
        variant="h1"
        fontSize={{ xs: "1rem", sm: "1rem", md: "1.5rem" }}
        lineHeight={{ xs: "1rem", sm: "1.5rem", md: "1.75rem" }}
        fontWeight={400}
        paddingY={"30px"}
      >
        {name}
      </Typography>
      <Stack direction={"row"} gap={"20px"}>
        <RatingSection num={numberRating} point={ratingPoint} />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderLeft: "0.05px solid black" }}
        ></Divider>
        <LikeSection likeNum={4} />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderLeft: "0.05px solid black" }}
        ></Divider>
        <CodeSection codeNum={productId} />
      </Stack>

      <SizeSection sizes={sizes} />
      <Divider
        orientation="horizontal"
        flexItem
        sx={{ borderLeft: "0.05px solid black" }}
      ></Divider>
      <MoreInfo />
      <ItemAction sizes={sizes} />
    </Box>
  );
};

export default ItemRightInfo;
