import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useState } from "react";

const ProductBox = () => {
  const [images, setImages] = useState([
    "https://cdn.lep.vn//2022/07/images/products/1660908378355-4VA1386NAS-compressed-800x800.jpeg",
    "https://cdn.lep.vn//2022/07/images/products/1660908378355-4VA1386NAS-compressed-800x800.jpeg",
  ]);
  const handleChange = () => {
    setImages(images.reverse());
  };
  return (
    <Box>
      <Box
        component="img"
        width="100%"
        src={images[0]}
        onMouseEnter={() => {}}
        onMouseOut={() => {}}
      ></Box>
      <Box>
        <Typography
          variant="h4"
          fontSize={"18px"}
          lineHeight={"20px"}
          my={"4px"}
          textOverflow={"ellipsis"}
          fontFamily="Open Sans"
          fontWeight="300"
        >
          Váy nơ cổ tùng xòe 4VA1386NA
        </Typography>
        <Box
          component="p"
          fontSize={"18px"}
          lineHeight={"20px"}
          fontWeight={"500"}
        >
          750.000 đ
        </Box>
      </Box>
    </Box>
  );
};

export default ProductBox;
