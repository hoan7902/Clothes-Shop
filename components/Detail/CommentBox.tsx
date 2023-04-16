import { getRating } from "@/pages/api";
import { Box, Typography, Stack, Button, Divider } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
const CommentBox = ({ productId }: { productId: string }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getRating(productId)
      .then((res) => {
        console.log("Rating Product", res.data.data);
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={10}
      mt={3}
      marginY={3}
      marginX={3}
      width={"90%"}
    >
      <Typography
        variant="h6"
        fontWeight={400}
        lineHeight={"1.75rem"}
        fontSize={{ xs: "0.75rem", md: "1.125rem" }}
        color="#444"
      >
        ĐÁNH GIÁ SẢN PHẨM
      </Typography>
      <Stack>
        {data.map(
          (item: {
            userId: number;
            name: string;
            comment: string;
            time: string;
            star: number;
            avatar: string;
          }) => (
            <Box display={"flex"} gap={20}>
              <Stack alignItems={"center"}>
                <Typography>{item.name}</Typography>
                <Rating value={item.star} readOnly max={5} />
              </Stack>
              <Typography>{item.comment}</Typography>
            </Box>
          )
        )}
      </Stack>
    </Box>
  );
};

export default CommentBox;
