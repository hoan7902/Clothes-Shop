import { Box, Typography, Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HouseboatIcon from "@mui/icons-material/Houseboat";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
const ItemAction = () => {
  return (
    <Stack direction={"row"} gap={"20px"} width={"100%"}>
      <Button
        fullWidth
        variant="outlined"
        sx={{
          height: "73px",
          color: "black",
          border: "1px solid black",
          width: "fit-content",
          "&:hover": {
            background: "#ad2526",
            color: "white",
            border: "1px solid transparent",
          },
        }}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<AddShoppingCartIcon />}
        sx={{
          height: "73px",
          color: "black",
          border: "1px solid black",
          width: "fit-content",
          "&:hover": {
            background: "#ad2526",
            color: "white",
            border: "1px solid transparent",
          },
        }}
      >
        Thêm vào giỏ hàng
      </Button>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<RemoveShoppingCartIcon />}
        sx={{
          height: "73px",
          color: "black",
          border: "1px solid black",
          width: "fit-content",
          "&:hover": {
            background: "#ad2526",
            color: "white",
            border: "1px solid transparent",
          },
        }}
      >
        Tạm hết hàng
      </Button>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<HouseboatIcon />}
        sx={{
          height: "73px",
          color: "black",
          border: "1px solid black",
          width: "fit-content",
          "&:hover": {
            background: "#ad2526",
            color: "white",
            border: "1px solid transparent",
          },
        }}
      >
        {} còn sản phẩm
      </Button>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<BusinessCenterIcon />}
        sx={{
          height: "73px",
          color: "black",
          border: "1px solid black",
          width: "fit-content",
          "&:hover": {
            background: "#ad2526",
            color: "white",
            border: "1px solid transparent",
          },
        }}
      >
        Thông báo khi có hàng
      </Button>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<LocalAtmIcon />}
        sx={{
          height: "73px",
          color: "black",
          border: "1px solid black",
          width: "fit-content",
          "&:hover": {
            background: "#ad2526",
            color: "white",
            border: "1px solid transparent",
          },
        }}
      >
        Mua ngay
      </Button>
    </Stack>
  );
};

export default ItemAction;
