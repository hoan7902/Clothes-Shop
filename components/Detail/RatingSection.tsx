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

const RatingSection = ({ num, point }: { num: string; point: string }) => {
  return (
    <Box display="flex">
      <Rating name="read-only" value={parseInt(point)} readOnly />
      <Typography
        lineHeight={"22px"}
        fontWeight={"300px"}
        whiteSpace={"nowrap"}
        color="#c9c9c9"
        paddingLeft={"16px"}
      >
        {num} reviews
      </Typography>
    </Box>
  );
};

export default RatingSection;
