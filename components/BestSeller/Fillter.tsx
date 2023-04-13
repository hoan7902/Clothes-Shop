import { Box, Typography } from "@mui/material";
import Category from "./Category";
import { useRouter } from 'next/router'
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';


const Fillter = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  return (
    <Box width="25%" maxWidth="305px" mr="24px">
      <Typography
        variant="h3"
        fontSize={{ xs: "1rem", sm: "1rem", md: "1.125rem" }}
        lineHeight={{ xs: "1rem", sm: "1.5rem", md: "1.75rem" }}
        textTransform="uppercase"
        borderBottom="1px solid #d9d9d9"
        fontWeight={500}
        pb={"15px"}
      >
        Bộ lọc sản phẩm
      </Typography>
      <Box>
        <Category
          title="Danh mục"
          queryName="categories"
          itemList={[
            { name: "Đầm", id: 1 },
            { name: "Áo", id: 2 },
            { name: "Chân váy", id: 3 },
            { name: "Áo khoác", id: 4 },
            { name: "Jumpsuit", id: 5 },
            { name: "Áo dài", id: 6 },
            { name: "Đầm", id: 7 },
          ]}
        />

      </Box>
    </Box>
  );
};
type Data = {}
export const getServerSideProps: GetServerSideProps<{ data: Data }> = async () => {
  console.log("tai k bit lam")
  const res = await fetch('https://.../data')
  const data: Data = await res.json()

  return {
    props: {
      data,
    },
  }
}
export default Fillter;

