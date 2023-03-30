import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
const SearchLimit = () => {
  const [limit, setLimit] = useState<string>("20");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setLimit(event.target.value);
  };
  return (
    <Box display="flex" alignItems="center">
      <Typography variant="h6"></Typography>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Limit</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={limit}
          onChange={handleChange}
          autoWidth
          label="Age"
          sx={{
            height: "50px",
          }}
        >
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={80}>80</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
      sản phẩm
    </Box>
  );
};
export default SearchLimit;
