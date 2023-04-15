import {
  Box,
  Typography,
  ImageListItem,
  ImageList,
  sliderClasses,
} from "@mui/material";
import { useState } from "react";
const ItemLeftInfo = ({ images }: { images: string[] }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Box>
      <Box width={"100%"}>
        <ImageListItem sx={{ width: "100%", cursor: "pointer" }}>
          <img
            src={items[selectedItem].src}
            alt={"Room"}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              transition: "opacity .3s ease-out 0s",
            }}
          />
        </ImageListItem>
        <ImageList
          sx={{ width: "100%", marginTop: "18px" }}
          cols={4}
          rowHeight={180}
          gap={20}
        >
          {items.map((item, index) => {
            return (
              <ImageListItem
                sx={{
                  width: "100%",
                  border:
                    selectedItem == item.id
                      ? "1px solid #ad2526"
                      : "transparent",
                  cursor: "pointer",
                }}
                key={item.id}
                onClick={() => {
                  setSelectedItem(item.id);
                  scrollToTop();
                }}
              >
                <img
                  src={item.src}
                  alt={"itemref"}
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
    </Box>
  );
};
const items = [
  {
    id: 0,
    src: "https://cdn.lep.vn/2022/07/images/products/1659070809046-2VA01937XT-01.jpeg",
  },
  {
    id: 1,
    src: "https://cdn.lep.vn/2022/07/images/products/1659070812434-2VA01937XT-02-(1).jpeg",
  },
  {
    id: 2,
    src: "https://cdn.lep.vn/2022/07/images/products/1659070815144-2VA01937XT-03.jpeg",
  },
  {
    id: 3,
    src: "https://cdn.lep.vn/2022/07/images/products/1659070818665-2VA01937XT-04.jpeg",
  },
];
export default ItemLeftInfo;
