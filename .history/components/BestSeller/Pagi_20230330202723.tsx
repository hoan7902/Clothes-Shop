import Pagination from '@mui/material/Pagination';
interface PagiProps {
    total: number,
}
const Pagi = ({ total }: PagiProps) => {
    return <Pagination count={total} size="large" />;
}

export default Pagi;