import { Box, Typography } from "@mui/material";
import Category from "./Category";

const Fillter = () => {
  return (
    <Box>
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
        <Box>
          <Category
            title="Danh mục"
            itemList={[
              { name: "Đầm", id: 1 },
              { name: "Áo", id: 2 },
              { name: "Chân váy", id: 3 },
              { name: "Áo khoác", id: 4 },
              { name: "Jumpsuit", id: 5 },
              { name: "Áo dài", id: 6 },
              { name: "Đầm", id: 7 },
              { name: "Đầm", id: 8 },
            ]}
          />
          <Category
            title="Danh mục"
            itemList={[
              { name: "Đầm", id: 1 },
              { name: "Áo", id: 2 },
              { name: "Chân váy", id: 3 },
              { name: "Áo khoác", id: 4 },
              { name: "Jumpsuit", id: 5 },
              { name: "Áo dài", id: 6 },
              { name: "Đầm", id: 7 },
              { name: "Đầm", id: 8 },
            ]}
          />
          <Category
            title="Danh mục"
            itemList={[
              { name: "Đầm", id: 1 },
              { name: "Áo", id: 2 },
              { name: "Chân váy", id: 3 },
              { name: "Áo khoác", id: 4 },
              { name: "Jumpsuit", id: 5 },
              { name: "Áo dài", id: 6 },
              { name: "Đầm", id: 7 },
              { name: "Đầm", id: 8 },
            ]}
          />
          <Category
            title="Danh mục"
            itemList={[
              { name: "Đầm", id: 1 },
              { name: "Áo", id: 2 },
              { name: "Chân váy", id: 3 },
              { name: "Áo khoác", id: 4 },
              { name: "Jumpsuit", id: 5 },
              { name: "Áo dài", id: 6 },
              { name: "Đầm", id: 7 },
              { name: "Đầm", id: 8 },
            ]}
          />
        </Box>
      </Box>
      <Box width={"74%"} maxWidth={"74%"}></Box>
    </Box>
  );
};

export default Fillter;
