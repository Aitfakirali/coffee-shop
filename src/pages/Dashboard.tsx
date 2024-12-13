import { Box, CircularProgress, Grid2, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts';

function Dashboard() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: 'primary.light',
                    borderRadius: 10,
                    width: '100%',
                    padding: 4,
                }}
            >
                <Grid2
                    container
                    spacing={5}
                    justifyContent={'space-between'}
                    sx={{
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <Grid2
                        gap={2}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        size={{
                            sm: 12,
                            lg: 4,
                        }}
                    >
                        <PointsBox
                            points={80}
                            text='Rewarded points this week'
                            size={'80px'}
                        />
                        <PointsBox points={50} text='' size={'80px'} />
                    </Grid2>

                    <Grid2
                        size={{
                            sm: 12,
                            lg: 8,
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: 'secondary.main',
                                height: 300,
                                borderRadius: '20px',
                            }}
                        >
                            <LineChart
                                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                series={[
                                    {
                                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                                    },
                                ]}
                            />
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
        </>
    );
}

const PointsBox = ({
    points,
    text,
    ...props
}: { points: number; text: string } & React.ComponentProps<
    typeof CircularProgress
>) => {
    return (
        <Box
            sx={{
                backgroundColor: 'secondary.main',
                display: 'flex',
                gap: 10,
                height: 140,
                padding: '20px',
                borderRadius: '20px',
                alignItems: 'center',
            }}
        >
            <Typography fontWeight={500} variant='h6' color='primary.main'>
                {text}
            </Typography>
            <CircularProgress {...props} variant='determinate' value={points} />
        </Box>
    );
};

export default Dashboard;
