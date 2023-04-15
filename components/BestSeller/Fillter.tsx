import { Box, Typography } from "@mui/material";
import Category from "./Category";
<<<<<<< HEAD
import { useRouter } from "next/router";
import {
  GetStaticProps,
} from "next";
import { CategoryTyp } from "@/pages/best-seller";


// export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async (
//   context
// ) => {
//   console.log("verify function")
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//   const posts: Post[] = await res.json()

//   const post: Post = {
//     userId: "1",
//     id: "1",
//     title: "First post",
//     completed: "",
//   };
//   posts[0] = post;
//   return {
//     props: {
//       posts: [post],
//     },
//   }
// }
const Fillter = ({ categories }: { categories: CategoryTyp[] }) => {
=======

const Fillter = () => {
>>>>>>> 99184d73775b7d0e22fd511781ed9db7f0ec4fc2
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
<<<<<<< HEAD
          queryName="categories"
          itemList={categories}
=======
          itemList={[
            { name: "Đầm", id: 1 },
            { name: "Áo", id: 2 },
            { name: "Chân váy", id: 3 },
            { name: "Áo khoác", id: 4 },
            { name: "Jumpsuit", id: 5 },
            { name: "Áo dài", id: 6 },
            { name: "Đầm", id: 7 },
            { name: "Đầm", id: 8 },
          ]}
        />
        <Category
          title="Danh mục"
          itemList={[
            { name: "Đầm", id: 1 },
            { name: "Áo", id: 2 },
            { name: "Chân váy", id: 3 },
            { name: "Áo khoác", id: 4 },
            { name: "Jumpsuit", id: 5 },
            { name: "Áo dài", id: 6 },
            { name: "Đầm", id: 7 },
            { name: "Đầm", id: 8 },
          ]}
        />
        <Category
          title="Danh mục"
          itemList={[
            { name: "Đầm", id: 1 },
            { name: "Áo", id: 2 },
            { name: "Chân váy", id: 3 },
            { name: "Áo khoác", id: 4 },
            { name: "Jumpsuit", id: 5 },
            { name: "Áo dài", id: 6 },
            { name: "Đầm", id: 7 },
            { name: "Đầm", id: 8 },
          ]}
        />
        <Category
          title="Danh mục"
          itemList={[
            { name: "Đầm", id: 1 },
            { name: "Áo", id: 2 },
            { name: "Chân váy", id: 3 },
            { name: "Áo khoác", id: 4 },
            { name: "Jumpsuit", id: 5 },
            { name: "Áo dài", id: 6 },
            { name: "Đầm", id: 7 },
            { name: "Đầm", id: 8 },
          ]}
        />
        <Category
          title="Danh mục"
          itemList={[
            { name: "Đầm", id: 1 },
            { name: "Áo", id: 2 },
            { name: "Chân váy", id: 3 },
            { name: "Áo khoác", id: 4 },
            { name: "Jumpsuit", id: 5 },
            { name: "Áo dài", id: 6 },
            { name: "Đầm", id: 7 },
            { name: "Đầm", id: 8 },
          ]}
        />
        <Category
          title="Danh mục"
          itemList={[
            { name: "Đầm", id: 1 },
            { name: "Áo", id: 2 },
            { name: "Chân váy", id: 3 },
            { name: "Áo khoác", id: 4 },
            { name: "Jumpsuit", id: 5 },
            { name: "Áo dài", id: 6 },
            { name: "Đầm", id: 7 },
            { name: "Đầm", id: 8 },
          ]}
        />
        <Category
          title="Danh mục"
          itemList={[
            { name: "Đầm", id: 1 },
            { name: "Áo", id: 2 },
            { name: "Chân váy", id: 3 },
            { name: "Áo khoác", id: 4 },
            { name: "Jumpsuit", id: 5 },
            { name: "Áo dài", id: 6 },
            { name: "Đầm", id: 7 },
            { name: "Đầm", id: 8 },
          ]}
>>>>>>> 99184d73775b7d0e22fd511781ed9db7f0ec4fc2
        />
      </Box>
    </Box>
  );
};

export default Fillter;
