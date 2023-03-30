import { Box } from "@mui/material";

interface CategoryProps {
  title: string;
  itemList: Array<string>;
}

const Category = ({ title, itemList }: CategoryProps): JSX.Element => {
  return (
    <Box
      pl="0.125rem"
      pb="15px"
      mt="15px"
      borderBottom="1px solid #d9d9d9"
    ></Box>
  );
};

export default Category;
