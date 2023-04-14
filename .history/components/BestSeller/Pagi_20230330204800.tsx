import Pagination from '@mui/material/Pagination';
import { Box } from "@mui/material"
interface PagiProps {
    total: number,
}
const Pagi = ({ total }: PagiProps) => {
    const [page, setPage] = React.useState(1);
    const handlePageChange = (e, value) => {
        setPage(value);
    };
    return <Box display="flex" justifyContent={"center"} alignItems="center">
        <Pagination count={total} size="large"
            onChange={handlePageChange} />
    </Box>;
}

export default Pagi;