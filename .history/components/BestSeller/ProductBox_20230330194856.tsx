import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useState } from "react";

const ProductBox = () => {
    const haha: Array<string> = [
        "https://cdn.lep.vn//2022/07/images/products/1660908378355-4VA1386NAS-compressed-800x800.jpeg",
        "https://cdn.lep.vn//2022/07/images/products/1660119057109-_DSC3749-compressed-\\(1\\)-800x800.jpeg",
    ];
    const [image, setImage] = useState<string>(haha[0]);
    const handleChange = () => {
        if (image == haha[0]) setImage(haha[1]);
        else setImage(haha[0]);
    };
    return (
        <Box width="100%" height="100%">
            <Box overflow="hidden" width="100%" height="85%">
                {/* <Box
          component="img"
          width="100%"
          height="100%"
          src={image}
          onMouseEnter={() => {
            handleChange();
          }}
          onMouseOut={() => {
            handleChange();
          }}
          sx={{
            transition: "all 10s linear",
          }}
        ></Box> */}
                <Box
                    width="100%"
                    height="500px"
                    sx={{
                        backgroundImage: `url(${haha[0]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                            backgroundImage: ``,
                        },
                    }}
                    style={{

                    }}
                ></Box>
            </Box>
            <Box>
                <Typography
                    variant="h4"
                    fontSize={"18px"}
                    lineHeight={"20px"}
                    textOverflow={"ellipsis"}
                    fontFamily="Open Sans"
                    fontWeight="300"
                    sx={{
                        marginBlock: "10px",
                    }}
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
