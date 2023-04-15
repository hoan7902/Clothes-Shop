import {
  Box,
  Typography,
  ImageListItem,
  ImageList,
  sliderClasses,
  Stack,
  Rating,
} from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Link from "next/link";

const MoreInfo = () => {
  return (
    <Box display="flex" paddingY={"27px"} gap={"100px"}>
      <Stack
        width={"40%"}
        alignItems={"center"}
        paddingX={"15px"}
        rowGap={"20px"}
        marginLeft={"35px"}
      >
        <AddCardIcon fontSize="large" />
        <Typography
          lineHeight={"1.75rem"}
          fontWeight={"300px"}
          color="rbg(68,68,68)"
          textAlign={"center"}
          fontSize={"18px"}
        >
          Miễn phí giao hàng cho đơn từ 1.500.000 VND trở lên
        </Typography>
      </Stack>
      <Stack
        width={"40%"}
        alignItems={"center"}
        paddingX={"15px"}
        rowGap={"20px"}
      >
        <AutorenewIcon fontSize="large" />
        <Stack alignItems={"center"}>
          <Typography
            lineHeight={"1.75rem"}
            fontWeight={"300px"}
            color="rbg(68,68,68)"
            textAlign={"center"}
            fontSize={"18px"}
          >
            Đổi trả trong 7 ngàys
          </Typography>

          <Link href="/about/return" passHref legacyBehavior>
            <a
              className="link"
              style={{
                color: "#ad2526",
                textDecoration: "none",
                fontSize: "18px",
                lineHeight: "1.75rem",
              }}
            >
              Xem chi tiết
            </a>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MoreInfo;
