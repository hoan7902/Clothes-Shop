import Pagination from '@mui/material/Pagination';
import { Box } from "@mui/material"
import { useState } from 'react';
interface PagiProps {
    total: number,
}
const Pagi = ({ total }: PagiProps) => {
    const [page, setPage] = useState(1);
    const handlePageChange = (e: React.ChangeEvent<number>, page: number) => {
        setPage(page);
    };
    return <Box display="flex" justifyContent={"center"} alignItems="center">
        <Pagination count={total} size="large"
            onChange={handlePageChange} />
    </Box>;
}

export default Pagi;