import { Box, Typography } from "@mui/material";
import Category from "./Category";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
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
  return (
    <Box width={{ xs: "100%", md: "25%" }} maxWidth={{ md: "305px" }} mr="24px">
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
          itemList={categories}
        />
      </Box>
    </Box>
  );
};

export default Fillter;
