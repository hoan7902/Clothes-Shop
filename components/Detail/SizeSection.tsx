import { Box, Typography, Stack, Button } from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";
const SizeSection = () => {
  return (
    <Box display="flex" m={"24px 0px"}>
      <Typography
        lineHeight={"22px"}
        fontWeight={"500px"}
        whiteSpace={"nowrap"}
        color="fff"
        paddingLeft={"16px"}
        textTransform={"uppercase"}
        fontSize={"1.125rem"}
        width={"16.66667%"}
      >
        size
      </Typography>
      <Stack display="flex" width={"83.333333%"} justifyContent={"center"}>
        <Stack direction={"row"} gap={"24px"} paddingBottom={"24px"}>
          <Button
            variant="outlined"
            sx={{
              color: "black",
              border: "1px solid black",
              width: "fit-content",
              "&:hover": {
                background: "#ad2526",
                color: "white",
                border: "transparent",
              },
            }}
          >
            S
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "black",
              border: "1px solid black",
              width: "fit-content",
              "&:hover": {
                background: "#ad2526",
                color: "white",
                border: "transparent",
              },
            }}
          >
            M
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "black",
              border: "1px solid black",
              width: "fit-content",
              "&:hover": {
                background: "#ad2526",
                color: "white",
                border: "transparent",
              },
            }}
          >
            L
          </Button>
        </Stack>
        <Button
          variant="outlined"
          startIcon={<CheckroomIcon />}
          sx={{
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
          SIZECHART
        </Button>
      </Stack>
    </Box>
  );
};

export default SizeSection;
