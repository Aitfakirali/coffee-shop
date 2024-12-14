import Box from '@mui/material/Box';
import CategoriesBlock from '../components/CategoriesBlock';
import RewardsBlock from '../components/RewardsBlock';

function Rewards() {
    return (
        <Box display={'flex'} gap='60px' flexDirection={'column'}>
            <CategoriesBlock />
            <RewardsBlock />
        </Box>
    );
}

export default Rewards;
