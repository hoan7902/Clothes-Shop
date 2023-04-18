import { Stack, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./style.module.css"

const SearchGroup = () => {
  const [selected, setSelected] = useState("Mặc định");
  const router = useRouter();

  function handleSortByDefault() {
    let page = router.query.page;
    delete router.query.page;
    if (page)
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          order_by: "asc",
          sort_by: "created_at",
          page: page,
        },
      });
    else
      router.push({
        pathname: router.pathname,
        query: { ...router.query, order_by: "asc", sort_by: "created_at" },
      });
  }
  function handleSortByNewest() {
    let page = router.query.page;
    delete router.query.page;
    if (page)
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          order_by: "desc",
          sort_by: "created_at",
          page: page,
        },
      });
    else
      router.push({
        pathname: router.pathname,
        query: { ...router.query, order_by: "desc", sort_by: "created_at" },
      });
  }
  function handleSortByHot() {
    let page = router.query.page;
    delete router.query.page;
    if (page)
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          order_by: "desc",
          sort_by: "order_count",
          page: page,
        },
      });
    else
      router.push({
        pathname: router.pathname,
        query: { ...router.query, order_by: "desc", sort_by: "order_count" },
      });
  }
  function handleSortLowPrice() {
    let page = router.query.page;
    delete router.query.page;
    if (page)
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          order_by: "asc",
          sort_by: "price",
          page: page,
        },
      });
    else
      router.push({
        pathname: router.pathname,
        query: { ...router.query, order_by: "asc", sort_by: "price" },
      });
  }
  function handleSortHighPrice() {
    let page = router.query.page;
    delete router.query.page;
    if (page)
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          order_by: "desc",
          sort_by: "price",
          page: page,
        },
      });
    else
      router.push({
        pathname: router.pathname,
        query: { ...router.query, order_by: "desc", sort_by: "price" },
      });
  }
  return (
    <Box
      mt={"25px"}
      mb={"25px"}
      display="grid"
      gridTemplateRows={"1fr"}
      gridTemplateColumns={{
        xs: "repeat(3, 1fr)",
        sm: "repeat(4, 1fr)",
        md: "repeat(5, 1fr)",
        lg: "repeat(5, 1fr)",
        xl: "repeat(5, 1fr)",
      }}
      rowGap={{ xs: "5px", sm: "6px", md: "35px" }}
      columnGap={{ xs: "5px", sm: "10px", md: "25px" }}
      justifyContent={"center"}
    >
      {["Mặc định", "Mới nhất", "Bán chạy", "Giá thấp", "Giá cao"].map(
        (title, idx) => (
          <button
            // variant="contained"
            // sx={{
            //   borderRadius: "0.01",
            //   bgcolor: selected === title ? "rgb(173,37,38)" : "white",
            //   color: selected === title ? "white" : "black",
            //   border: "1px solid transparent",
            //   fontSize: { xs: "0.7rem", sm: "0.7rem" },
            //   // boxShadow: "rgba(33,33,33,0.2) 0 0 11px 0px",
            //   "&:hover": {
            //     bgcolor: "rgb(173,37,38)",
            //     color: "white",
            //     border: "1px solid transparent",
            //     opacity: "0.8",
            //   },
            // }}
            className={styles.button}
            style={{
              backgroundColor: selected === title ? "#ad2526" : "white",
              color: selected === title ? "white" : "black",
              borderColor: selected === title ? "#ad2526" : "black",
              opacity: selected === title ? "0.82" : "1"
            }}
            onClick={() => {
              setSelected(title);
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
          </button>
        )
      )}
    </Box>
    // <Stack direction={{ xs: "row", md: "row" }} gap={{ xs: 1, md: 2 }}>
    //   {["Mặc định", "Mới nhất", "Bán chạy", "Giá thấp", "Giá cao"].map(
    //     (title, idx) => (
    //       <Button
    //         variant="contained"
    //         sx={{
    //           borderRadius: "0.01",
    //           bgcolor: selected === title ? "rgb(173,37,38)" : "white",
    //           color: selected === title ? "white" : "black",
    //           border: "1px solid transparent",
    //           fontSize: { xs: "0.3rem", sm: "0.7rem" },
    //           boxShadow: "rgba(33,33,33,0.2) 0 0 11px 0px",
    //           "&:hover": {
    //             bgcolor: "rgb(173,37,38)",
    //             color: "white",
    //             border: "1px solid transparent",
    //             opacity: "0.8",
    //           },
    //         }}
    //         onClick={() => {
    //           setSelected(title);
    //           if (title === "Mặc định") {
    //             handleSortByDefault();
    //           }
    //           if (title === "Mới nhất") {
    //             handleSortByNewest();
    //           }
    //           if (title === "Bán chạy") {
    //             handleSortByHot();
    //           }
    //           if (title === "Giá thấp") {
    //             handleSortLowPrice();
    //           }
    //           if (title === "Giá cao") {
    //             handleSortHighPrice();
    //           }
    //           // add more logic for other buttons
    //         }}
    //       >
    //         {title}
    //       </Button>
    //     )
    //   )}
    // </Stack>
  );
};

export default SearchGroup;
