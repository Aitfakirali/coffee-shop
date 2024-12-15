import CircularProgress from '@mui/material/CircularProgress';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useGetPointsForCurrentWeekQuery } from '../store/reward';

function DetailStatistics() {
    const { data: pointsForCurrentWeek } = useGetPointsForCurrentWeekQuery();

    return (
        <Box
            sx={{
                backgroundColor: 'primary.light',
                borderRadius: '20px',
                width: '100%',
                padding: '20px',
            }}
        >
            <Grid2 container spacing={3}>
                <Grid2
                    size={{
                        mobile: 12,
                        tablet: 6,
                        desktop: 4,
                    }}
                    display={'flex'}
                    flexDirection={'column'}
                    gap={2}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: 120,
                            backgroundColor: 'secondary.main',
                            borderRadius: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'primary.main',
                            gap: '20px',
                            padding: '20px',
                        }}
                    >
                        <Typography sx={{ flex: 1 }} variant='h5'>
                            Redeemed points this week
                        </Typography>
                        <Box display={'flex'} position={'relative'}>
                            <CircularProgress
                                color='primary'
                                size={80}
                                variant='determinate'
                                value={30}
                                thickness={3}
                                sx={{
                                    position: 'relative',
                                    zIndex: 2,
                                    '& svg > circle': {
                                        strokeLinecap: 'round',
                                    },
                                }}
                            />
                            <CircularProgress
                                size={80}
                                variant='determinate'
                                value={100}
                                thickness={3}
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    zIndex: 1,
                                    '& svg > circle': {
                                        stroke: '#DCF6DB',
                                    },
                                }}
                            />
                            <Typography
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    fontSize: 20,
                                }}
                                variant='caption'
                                component='div'
                            >
                                {450}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            height: 120,
                            backgroundColor: 'secondary.main',
                            borderRadius: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'error.main',
                            gap: '20px',
                            padding: '20px',
                        }}
                    >
                        <Typography sx={{ flex: 1 }} variant='h5'>
                            Rewarded points this week
                        </Typography>
                        <Box display={'flex'} position={'relative'}>
                            <CircularProgress
                                color='error'
                                size={80}
                                variant='determinate'
                                value={
                                    (pointsForCurrentWeek?.[0]?.points || 0) /
                                    100
                                }
                                thickness={3}
                                sx={{
                                    position: 'relative',
                                    zIndex: 2,
                                    '& svg > circle': {
                                        strokeLinecap: 'round',
                                    },
                                }}
                            />
                            <CircularProgress
                                size={80}
                                variant='determinate'
                                value={100}
                                thickness={3}
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    zIndex: 1,
                                    '& svg > circle': {
                                        stroke: '#FAE8E2',
                                    },
                                }}
                            />
                            <Typography
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    fontSize: 20,
                                }}
                                variant='caption'
                                component='div'
                            >
                                {pointsForCurrentWeek?.[0]?.points}
                            </Typography>
                        </Box>
                    </Box>
                </Grid2>

                <Grid2
                    size={{
                        mobile: 12,
                        tablet: 6,
                        desktop: 8,
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'secondary.main',
                            borderRadius: '10px',
                        }}
                    ></Box>
                </Grid2>
            </Grid2>
        </Box>
    );
}

export default DetailStatistics;
