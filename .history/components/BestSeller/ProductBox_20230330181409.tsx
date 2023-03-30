import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useState } from "react";

const ProductBox = () => {
  const haha: Array<string> = [
    "https://cdn.lep.vn//2022/07/images/products/1660908378355-4VA1386NAS-compressed-800x800.jpeg",
    "https://cdn.lep.vn//2022/07/images/products/1660119057109-_DSC3749-compressed-(1)-800x800.jpeg",
  ];
  const [image, setImage] = useState<string>(haha[0]);
  const handleChange = () => {
    if (image == haha[0]) setImage(haha[1]);
    else setImage(haha[0]);
  };
  return (
    <Box>
      <Box
        component="img"
        width="100%"
        size={800}
        src={image}
        onMouseEnter={() => {
          handleChange();
        }}
        onMouseOut={() => {
          handleChange();
        }}
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
