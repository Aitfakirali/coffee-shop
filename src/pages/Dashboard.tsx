import Box from '@mui/material/Box';
import PopularRewards from '../components/PopularRewards';
import LoyalCustomers from '../components/LoyalCustomers';
import DetailStatistics from '../components/DetailStatistics';

function Dashboard() {
    return (
        <Box display={'flex'} gap='40px' flexDirection={'column'}>
            <DetailStatistics />
            <PopularRewards />
            <LoyalCustomers />
        </Box>
    );
}

export default Dashboard;
