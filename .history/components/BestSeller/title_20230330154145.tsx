import { Typography } from "@mui/material";

const Title = () => {
  return (
    <Typography
      variant="h3"
      fontSize={{ sm: "14px", md: "16px" }}
      lineHeight={{ sm: "18px", md: "22px" }}
      textTransform="uppercase"
      color="rgb(173, 37, 38)"
    ></Typography>
  );
};

export default Title;
