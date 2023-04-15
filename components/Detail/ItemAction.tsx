import { Box, Typography, Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HouseboatIcon from "@mui/icons-material/Houseboat";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
const ItemAction = ({
  sizes,
}: {
  sizes: Array<{ price: string; quantity: string; sizeName: string }>;
}) => {
  const hasAvailableQuantity = sizes.some(
    (element) => Number(element.quantity) > 0
  );

  return (
    <Stack direction={"row"} gap={"20px"} width={"100%"}>
      {hasAvailableQuantity && (
        <Button
          fullWidth
          variant="outlined"
          startIcon={<AddShoppingCartIcon />}
          sx={{
            minWidth: "500px",
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
      )}
      {!hasAvailableQuantity && (
        <Button
          fullWidth
          variant="outlined"
          startIcon={<RemoveShoppingCartIcon />}
          sx={{
            minWidth: "500px",
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
      )}
      {!hasAvailableQuantity && (
        <Button
          fullWidth
          variant="outlined"
          startIcon={<BusinessCenterIcon />}
          sx={{
            minWidth: "500px",
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
      )}
      {hasAvailableQuantity && (
        <Button
          fullWidth
          variant="outlined"
          startIcon={<LocalAtmIcon />}
          sx={{
            minWidth: "500px",
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
      )}
    </Stack>
  );
};

export default ItemAction;
