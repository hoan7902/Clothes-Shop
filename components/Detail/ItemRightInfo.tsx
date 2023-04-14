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
const ItemRightInfo = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <Box width={"66.6667%"} paddingLeft={"100px"} marginTop={"10px"}>
      <Typography
        variant="h1"
        fontSize={{ xs: "1rem", sm: "1rem", md: "1.5rem" }}
        lineHeight={{ xs: "1rem", sm: "1.5rem", md: "1.75rem" }}
        fontWeight={400}
        paddingY={"30px"}
      >
        Váy Nẹp Cổ Tay Lỡ 2VA01937XT - S
      </Typography>
      <Stack direction={"row"} gap={"20px"}>
        <RatingSection rate={4} />
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
        <CodeSection codeNum={"UCCASCKA1313wwd"} />
      </Stack>
      <Typography
        color={"#ad2526"}
        fontSize={{ xs: "1rem", sm: "1.125rem", md: "1.5rem" }}
        lineHeight={{ xs: "1.75rem", sm: "2rem" }}
        letterSpacing={".1rem"}
        fontWeight={500}
        margin={"18px"}
      >
        31239190 đ
      </Typography>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{ borderLeft: "0.05px solid black" }}
      ></Divider>
      <SizeSection />
      <Divider
        orientation="horizontal"
        flexItem
        sx={{ borderLeft: "0.05px solid black" }}
      ></Divider>
      <MoreInfo />
      <ItemAction />
    </Box>
  );
};

export default ItemRightInfo;
