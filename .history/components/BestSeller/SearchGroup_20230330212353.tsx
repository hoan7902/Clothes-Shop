import { Stack, Button } from "@mui/material";
import { useRouter } from "next/router";
const SearchGroup = () => {
  function handleSortByNewest() {
    const router = useRouter();
    router.push({
      pathname: router.pathname,
      query: { ...router.query, sort: 'newest' },
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
              bgcolor: "white",
              color: "black",
              border: "1px solid rgb(68,68,68)",
              "&:hover": {
                bgcolor: "rgb(173,37,38)",
                color: "white",
                border: "1px solid rgb(173,37,38)",
                boxShadow: "rgba(33,33,33,0.2) 0 0 11px 0px",
                opacity: "0.8",
              },
            }}
            onClick={() => {
              if (title === "Mới nhất") {
                handleSortByNewest();
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
