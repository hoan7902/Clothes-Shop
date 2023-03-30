import { Stack, Button } from "@mui/material";
const SearchGroup = () => {
  return (
    <Stack direction="row" gap={1}>
      <Button
        variant="contained"
        sx={{
          borderRadius: "0.5",
          bgcolor: "white",
          color: "black",
          border: "1px solid rgb(68,68,68)",
          "&:hover": {
            bgcolor: "rgb(173,37,38)",
            color: "white",
            border: "1px solid rgb(173,37,38)",
          },
        }}
      >
        Contained
      </Button>
    </Stack>
  );
};

export default SearchGroup;
