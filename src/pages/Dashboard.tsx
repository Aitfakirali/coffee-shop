import Box from '@mui/material/Box';
import PopularRewards from '../components/PopularRewards';

function Dashboard() {
    return (
        <Box display={'flex'} gap='60px' flexDirection={'column'}>
            <Box
                sx={{
                    backgroundColor: 'primary.light',
                    borderRadius: 10,
                    width: '100%',
                    padding: 4,
                }}
            ></Box>

            <PopularRewards />
        </Box>
    );
}

export default Dashboard;
