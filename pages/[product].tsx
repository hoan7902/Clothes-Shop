import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout";
import ItemLeftInfo from "@/components/Detail/ItemLeftInfo";
import ItemRightInfo from "@/components/Detail/ItemRightInfo";
const Items = () => {
    return <Layout>
        <Box width={"100%"} mt="85px"
            maxWidth={{ xs: "540px", sm: "800px", md: "1000px", lg: "1500px", xl: "1567px" }}
            mx="auto"
            pb="3rem"
            display="flex">
            <Box width={{ xs: "100%", sm: "100%", md: "33.333%" }} bgcolor={"white"}>
                <ItemLeftInfo />
            </Box>
            <ItemRightInfo />
        </Box>
    </Layout>
}

export default Items;