import { Stack, Button } from "@mui/material";
const SearchGroup = () => {
  return (
    <Stack direction="row" gap={1}>
      <Button
        variant="contained"
        sx={{
          borderRadius: "0",
          bgcolor: "white",
          color: "black",
        }}
      >
        Contained
      </Button>
    </Stack>
  );
};

export default SearchGroup;
