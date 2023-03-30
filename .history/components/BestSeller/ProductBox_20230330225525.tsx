import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useState } from "react";

interface ProductBoxProps {
    images: Array<string>,
    name: string,
    price: string,
}
const ProductBox = ({ images, name, price }: ProductBoxProps) => {

    const [image, setImage] = useState<string>(images[0]);

    return (
        <Box width="100%" height="100%">
            <Box overflow="hidden" width="100%" height="82%">
                <Box
                    width={{ xs: "30%", sm: "70%", md: "100%" }}
                    height={{ xs: "100px", sm: "300px", md: "500px" }}
                    sx={{
                        backgroundImage: `url(${images[0]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            backgroundImage: `url(${images[1]})`,
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
                    {name}
                </Typography>
                <Box
                    component="p"
                    fontSize={"18px"}
                    lineHeight={"20px"}
                    fontWeight={"500"}
                >
                    {price}
                </Box>
            </Box>
        </Box>
    );
};

export default ProductBox;
