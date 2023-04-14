import { Typography, Box } from "@mui/material";
interface TitleProps {
  title: string;
}
const Title = ({ title }: TitleProps) => {
  return (
    <Box paddingBottom="20px">
      <Typography
        variant="h3"
        fontSize={{ xs: "1rem", sm: "14px", md: "16px" }}
        lineHeight={{ sm: "18px", md: "22px" }}
        textTransform="uppercase"
        color="rgb(173, 37, 38)"
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Title;