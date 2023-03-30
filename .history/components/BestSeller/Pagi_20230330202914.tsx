import Pagination from '@mui/material/Pagination';
import { Box } from "@mui/material"
interface PagiProps {
    total: number,
}
const Pagi = ({ total }: PagiProps) => {
    return <Box display="flex" justifyContent={"center"} alignItems="center">
        <Pagination count={total} size="large" />
    </Box>;
}

export default Pagi;