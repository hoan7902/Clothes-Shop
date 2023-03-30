import Pagination from '@mui/material/Pagination';
interface PagiProps {
    total: number,
}
const Pagi = ({ total }: PagiProps) => {
    return <Pagination count={10} size="large" />;
}

export default Pagi;