import { Box, Typography, Collapse } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
interface CategoryProps {
  title: string;
  itemList: Array<string>;
}

const Category = ({ title, itemList }: CategoryProps): JSX.Element => {
  return (
    <Box pl="0.125rem" pb="15px" mt="15px" borderBottom="1px solid #d9d9d9">
      <AddOutlinedIcon />
      <Typography variant="h4">{title}</Typography>
    </Box>
  );
};

export default Category;
