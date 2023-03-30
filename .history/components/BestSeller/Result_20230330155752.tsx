import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchGroup from "./SearchGroup";
import Title from "./title";
interface ResultProps {
  title: string;
}
const Result = ({ title }: ResultProps) => {
  return (
    <Box width={"74%"} maxWidth={"74%"}>
      <Title title="sản phẩm bán chạy" />
      <SearchGroup />
    </Box>
  );
};

export default Result;
