import { Stack, Button } from "@mui/material";
import { useRouter } from "next/router";
<<<<<<< HEAD
import { useState } from "react";
const SearchGroup = () => {
  const [selected, setSelected] = useState("")
  const router = useRouter();

=======
const SearchGroup = () => {
  const router = useRouter();
>>>>>>> 99184d73775b7d0e22fd511781ed9db7f0ec4fc2
  function handleSortByDefault() {
    let page = router.query.page;
    delete router.query.page;
    if (page)
      router.push({
        pathname: router.pathname,
        query: { ...router.query, order_by: 'asc', sort_by: 'created_at', page: page },
      });
    else
      router.push({
        pathname: router.pathname,
        query: { ...router.query, order_by: 'asc', sort_by: 'created_at' },
      });
  }
  function handleSortByNewest() {
    let page = router.query.page;
    delete router.query.page;
    if (page)
      router.push({
        pathname: router.pathname,
        query: { ...router.query, order_by: 'desc', sort_by: 'created_at', page: page },
      });
    else
      router.push({
        pathname: router.pathname,
        query: { ...router.query, order_by: 'desc', sort_by: 'created_at' },
      });
  }
  function handleSortByHot() {
    let page = router.query.page;
    delete router.query.page;
    if (page)
      router.push({
        pathname: router.pathname,
        query: { ...router.query, order_by: 'desc', sort_by: 'order_count', page: page },
      });
    else
      router.push({
        pathname: router.pathname,
        query: { ...router.query, order_by: 'desc', sort_by: 'order_count' },
      });
  }
  function handleSortLowPrice() {
    let page = router.query.page;
    delete router.query.page;
    if (page)
      router.push({
        pathname: router.pathname,
        query: { ...router.query, order_by: 'asc', sort_by: 'price', page: page },
      });
    else
      router.push({
        pathname: router.pathname,
        query: { ...router.query, order_by: 'asc', sort_by: 'price' },
      });
  }
  function handleSortHighPrice() {
    let page = router.query.page;
    delete router.query.page;
    if (page)
      router.push({
        pathname: router.pathname,
        query: { ...router.query, order_by: 'desc', sort_by: 'price', page: page },
      });
    else
      router.push({
        pathname: router.pathname,
        query: { ...router.query, order_by: 'desc', sort_by: 'price' },
      });
  }
  return (
    <Stack direction="row" gap={2}>
      {["Mặc định", "Mới nhất", "Bán chạy", "Giá thấp", "Giá cao"].map(
        (title, idx) => (
          <Button
            variant="contained"
            sx={{
              borderRadius: "0.01",
<<<<<<< HEAD
              bgcolor: selected === title ? "rgb(173,37,38)" : "white",
              color: selected === title ? "white" : "black",
              border: "1px solid transparent",
              fontSize: { xs: "0.4rem", sm: "0.7rem" },
              boxShadow: "rgba(33,33,33,0.2) 0 0 11px 0px",
              "&:hover": {
                bgcolor: "rgb(173,37,38)",
                color: "white",
                border: "1px solid transparent",
=======
              bgcolor: "white",
              color: "black",
              border: "1px solid rgb(68,68,68)",
              fontSize: { xs: "0.4rem", sm: "0.7rem" },
              "&:hover": {
                bgcolor: "rgb(173,37,38)",
                color: "white",
                border: "1px solid rgb(173,37,38)",
                boxShadow: "rgba(33,33,33,0.2) 0 0 11px 0px",
>>>>>>> 99184d73775b7d0e22fd511781ed9db7f0ec4fc2
                opacity: "0.8",
              },
            }}
            onClick={() => {
<<<<<<< HEAD
              setSelected(title);
=======
>>>>>>> 99184d73775b7d0e22fd511781ed9db7f0ec4fc2
              if (title === "Mặc định") {
                handleSortByDefault();
              }
              if (title === "Mới nhất") {
                handleSortByNewest();
              }
              if (title === "Bán chạy") {
                handleSortByHot();
              }
              if (title === "Giá thấp") {
                handleSortLowPrice();
              }
              if (title === "Giá cao") {
                handleSortHighPrice();
              }
              // add more logic for other buttons
            }}
          >
            {title}
          </Button>
        )
      )}
    </Stack>
  );
};

export default SearchGroup;
