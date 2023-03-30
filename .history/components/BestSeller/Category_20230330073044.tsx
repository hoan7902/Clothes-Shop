import { Box } from "@mui/material";

interface CategoryProps {
  title: string;
  itemList: Array<string>;
}

const Category = ({ title, itemList }: CategoryProps): JSX.Element => {
  return <Box pl="0.125rem" pb="15px" mt="15px"></Box>;
};

export default Category;
