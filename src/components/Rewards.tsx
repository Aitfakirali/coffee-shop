import Grid2 from '@mui/material/Grid2';
import { TReward, useGetRewardsQuery } from '../store/reward';
import { Reward } from './Reward';

export const Rewards = ({ onEdit }: { onEdit: (infos: TReward) => void }) => {
    const { data } = useGetRewardsQuery('');

    return (
        <Grid2 container gap={'20px'}>
            {data?.map((item) => (
                <Grid2
                    size={{
                        desktop: 2.5,
                        mobile: 12,
                        tablet: 3.7,
                    }}
                >
                    <Reward
                        onEdit={() => onEdit(item)}
                        key={item.rewardId}
                        {...item}
                    />
                </Grid2>
            ))}
        </Grid2>
    );
};
