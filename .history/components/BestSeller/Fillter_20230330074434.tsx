import { Box, Typography } from "@mui/material";

const Fillter = () => {
  return (
    <Box width="25%" maxWidth="305px" mr="24px">
      <Typography
        variant="h3"
        fontSize={{ sm: "1rem", md: "1.125rem" }}
        lineHeight={{ sm: "1.5rem", md: "1.75rem" }}
        textTransform="uppercase"
        borderBottom="1px solid #d9d9d9"
        fontWeight={600}
        pb={"15px"}
      >
        Bộ lọc sản phẩm
      </Typography>
      <Box></Box>
    </Box>
  );
};

export default Fillter;
