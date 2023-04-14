import {
  Box,
  Typography,
  ImageListItem,
  ImageList,
  sliderClasses,
  Stack,
  Rating,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";

const RatingSection = ({ rate }: { rate: number }) => {
  return (
    <Box display="flex">
      <Rating name="read-only" value={4} readOnly />
      <Typography
        lineHeight={"22px"}
        fontWeight={"300px"}
        whiteSpace={"nowrap"}
        color="#c9c9c9"
        paddingLeft={"16px"}
      >
        {rate.toString()} reviews
      </Typography>
    </Box>
  );
};

export default RatingSection;
