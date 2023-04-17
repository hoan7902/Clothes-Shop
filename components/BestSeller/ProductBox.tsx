import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useState } from "react";
import { formatNumber } from "../Detail/SizeSection";

interface ProductBoxProps {
  images: Array<string>;
  name: string;
  price: string;
}
const ProductBox = ({ images, name, price }: ProductBoxProps) => {
  const [image, setImage] = useState<string>(images[0]);

  return (
    <Box width="100%">
      <Box
        overflow="hidden"
        width="100%"
        height={{ xs: "50%", sm: "60%", md: "82%" }}
      >
        <Box
          width={{ xs: "300px", sm: "400px", md: "250px" }}
          height={{ xs: "500px", sm: "300px", md: "400px" }}
          sx={{
            backgroundImage: `url(${images[0]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundImage: `url(${images[images.length - 1]})`,
            },
          }}
          style={{}}
        ></Box>
      </Box>
      <Box>
        <Typography
          variant="h4"
          fontSize={{ xs: "10px", sm: "15px", md: "18px" }}
          lineHeight={"20px"}
          textOverflow={"ellipsis"}
          fontFamily="Open Sans"
          fontWeight="300"
          textAlign={{ xs: "center", md: "start" }}
          sx={{
            marginBlock: { xs: "3px", sm: "5px", md: "10px" },
          }}
        >
          {name}
        </Typography>
        <Box
          component="p"
          fontSize={{ xs: "10px", sm: "15px", md: "18px" }}
          lineHeight={"20px"}
          fontWeight={"500"}
          textAlign={{ xs: "center", md: "start" }}
        >
          {formatNumber(price)}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductBox;
