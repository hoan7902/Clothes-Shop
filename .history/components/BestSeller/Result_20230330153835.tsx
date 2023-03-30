import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Result = () => {
  return (
    <Box width={"74%"} maxWidth={"74%"}>
      <Typography
        variant="h3"
        fontSize={{ sm: "14px", md: "16px" }}
        lineHeight={{ sm: "18px", md: "22px" }}
        textTransform="uppercase"
      >
        Sản phẩm bán chạy
      </Typography>
    </Box>
  );
};

export default Result;
