import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { useRouter } from "next/router";
const SearchLimit = () => {
    const router = useRouter();
    const [limit, setLimit] = useState<string>("20");

    const handleChange = (event: SelectChangeEvent<string>) => {
        setLimit(event.target.value);
        let page = router.query.page;
        delete router.query.page;
        if (page)
            router.push({
                pathname: router.pathname,
                query: { ...router.query, limit: event.target.value, page: page },
            });
        else
            router.push({
                pathname: router.pathname,
                query: { ...router.query, limit: event.target.value },
            });
    };
    return (
        <Box display="flex" alignItems="center">
            <Typography
                variant="h6"
                sx={{
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: "20px",
                    marginLeft: "8px",
                    maxWidth: "260px",
                    color: "rgb(68,68,68)",
                }}
            >
                Hiển thị
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <Select
                    value={limit}
                    onChange={handleChange}
                    autoWidth
                    label="Age"
                    sx={{
                        height: "50px",
                        border: "2px solid black",
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                            border: 0,
                        },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                            border: 0,
                        },
                    }}
                >
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={80}>80</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                </Select>
            </FormControl>
            <Typography
                variant="h6"
                sx={{
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: "20px",
                    marginLeft: "8px",
                    maxWidth: "260px",
                    color: "rgb(68,68,68)",
                }}
            >
                Sản phẩm
            </Typography>
        </Box>
    );
};
export default SearchLimit;
