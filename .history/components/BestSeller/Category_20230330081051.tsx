import { Box, Typography, Collapse, Button } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
interface CategoryProps {
  title: string;
  itemList: Array<string>;
}

const Category = ({ title, itemList }: CategoryProps): JSX.Element => {
  return (
    <Box pl="0.125rem" pb="15px" mt="15px" borderBottom="1px solid #d9d9d9">
      <Box display="flex" alignItems="center" gap={0.5}>
        <AddOutlinedIcon fontSize="small" component={<Button>} />
        <Typography
          variant="h4"
          fontSize="15px"
          lineHeight="22px"
          fontWeight="400"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Category;
