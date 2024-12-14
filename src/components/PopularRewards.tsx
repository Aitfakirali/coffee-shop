import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useGetPopularRewardsQuery } from '../store/reward';
import { Reward } from './Reward';
import { Grid2 } from '@mui/material';

function PopularRewards() {
    const { data } = useGetPopularRewardsQuery('');

    console.log(data);
    return (
        <Box gap={4} flexDirection={'column'} display={'flex'}>
            <Typography variant='h5' fontFamily={'monospace'} fontWeight={600}>
                Popular Rewards
            </Typography>
            <Grid2 container gap={'20px'}>
                {data?.map((reward) => (
                    <Grid2
                        size={{
                            desktop: 2.5,
                            mobile: 12,
                            tablet: 3.7,
                        }}
                    >
                        <Reward
                            preview={true}
                            key={reward.rewardId}
                            {...reward}
                        />
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}

export default PopularRewards;
