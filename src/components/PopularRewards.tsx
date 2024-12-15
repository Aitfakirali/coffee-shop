import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useGetPopularRewardsQuery } from '../store/reward';
import { Reward } from './Reward';
import Grid2 from '@mui/material/Grid2';
import Link from '@mui/material/Link';

function PopularRewards() {
    const { data } = useGetPopularRewardsQuery('');
    return (
        <Box gap={2} flexDirection={'column'} display={'flex'}>
            <Box
                display={'flex'}
                gap={{
                    tablet: '80px',
                    mobile: '10px',
                }}
                alignItems={'center'}
            >
                <Typography
                    variant='h5'
                    fontFamily={'monospace'}
                    fontWeight={600}
                >
                    Popular Rewards
                </Typography>
                <Link
                    href='#'
                    color='primary'
                    underline='none'
                    fontSize={16}
                    fontWeight={600}
                    sx={{
                        '&:hover': {
                            color: 'primary.dark',
                        },
                    }}
                >
                    View All
                </Link>
            </Box>
            <Grid2 container gap={'20px'}>
                {data?.map((reward) => (
                    <Grid2
                        key={reward.rewardId}
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
