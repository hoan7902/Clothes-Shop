import { getRating } from "@/pages/api";
import { Box, Typography, Stack, Button, Divider } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import { StyledRating } from "./RatingBox";
const CommentBox = ({
  productId,
  change,
}: {
  productId: string;
  change: number;
}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getRating(productId)
      .then((res) => {
        setData(res?.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [change]);
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2} width={"90%"} my={3}>
      <Typography
        variant="h6"
        fontWeight={400}
        lineHeight={{ xs: "1.5rem", md: "1.75rem" }}
        fontSize={{ xs: "0.75rem", md: "1.125rem" }}
        color="#444"
      >
        ĐÁNH GIÁ SẢN PHẨM
      </Typography>

      <Stack>
        {data.length !== 0 ? (
          data.map(
            (
              item: {
                userId: number;
                name: string;
                comment: string;
                time: string;
                star: number;
                avatar: string;
              },
              index
            ) => (
              <Box key={index}>
                <Box display={"flex"} gap={20} alignItems={"center"}>
                  <Stack alignItems={"center"}>
                    <Typography>{item.name}</Typography>
                    <StyledRating value={item.star} readOnly max={5} />
                  </Stack>
                  <Typography>{item.comment}</Typography>
                </Box>
              </Box>
            )
          )
        ) : (
          <Typography
            color="#ff8786"
            lineHeight={{ xs: "1.5rem", md: "1.75rem" }}
            fontSize={{ xs: "0.75rem", md: "1.125rem" }}
          >
            (0 đánh giá)
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default CommentBox;
