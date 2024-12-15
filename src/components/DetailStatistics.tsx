import CircularProgress from '@mui/material/CircularProgress';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useGetPointsForCurrentWeekQuery } from '../store/reward';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/material';
import { useGetSalesCurrentMonthQuery } from '../store/product';

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 10000, 10000, 200];

const useResize = () => {
    const [chartWidth, setChartWidth] = useState(0);
    const [chartHeight, setChartHeight] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleResize() {
            if (containerRef.current) {
                const { width, height } =
                    containerRef.current.getBoundingClientRect();
                setChartWidth(width);
                setChartHeight(height);
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { containerRef, chartHeight, chartWidth };
};

function DetailStatistics() {
    const { data: pointsForCurrentWeek } = useGetPointsForCurrentWeekQuery();
    const { data: salesCurrentMonth } = useGetSalesCurrentMonthQuery();

    const { containerRef, chartHeight, chartWidth } = useResize();

    console.log(salesCurrentMonth?.map((sale) => sale.sales));

    return (
        <Box
            sx={{
                backgroundColor: '#25A956',
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
                            height: '50%',
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
                            height: '50%',
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
                    ref={containerRef}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '300px',
                            backgroundColor: 'secondary.main',
                            borderRadius: '10px',
                            position: 'relative',
                        }}
                    >
                        <Box
                            padding={'20px'}
                            position={'absolute'}
                            top={'-10px'}
                            display={'flex'}
                            justifyContent={'center'}
                            gap={'20px'}
                        >
                            <Typography variant='subtitle1' fontWeight={600}>
                                Sales per month
                            </Typography>
                        </Box>
                        {salesCurrentMonth && (
                            <LineChart
                                width={chartWidth}
                                height={chartHeight}
                                margin={{
                                    top: 60,
                                    right: 10,
                                    bottom: 40,
                                    left: 10,
                                }}
                                series={[
                                    {
                                        data: salesCurrentMonth.map((sale) =>
                                            Number(sale.sales)
                                        ),
                                        showMark: false,
                                    },
                                ]}
                                xAxis={[
                                    {
                                        data: salesCurrentMonth.map((sale) => {
                                            const date = new Date(sale.date);

                                            return date.getDate();
                                        }),
                                        scaleType: 'band',
                                        disableLine: true,
                                        disableTicks: true,
                                        hideTooltip: true,
                                        valueFormatter: (val) => val.toString(),
                                        slotProps: {
                                            axisLine: {
                                                strokeWidth: 10,
                                            },
                                        },
                                    },
                                ]}
                                yAxis={[
                                    {
                                        disableLine: true,
                                        disableTicks: true,
                                        hideTooltip: true,
                                        valueFormatter: () => '',
                                        slotProps: {
                                            axisTickLabel: {
                                                fontFamily: 'Arial',
                                                fontSize: 20,
                                                fontWeight: '600',
                                            },
                                        },
                                    },
                                ]}
                                colors={['#A4FBBD']}
                                axisHighlight={{
                                    x: 'band',
                                }}
                                sx={{
                                    width: '100%',
                                    margin: 'auto',
                                    flex: 1,
                                    '& .MuiLineElement-root': {
                                        strokeWidth: 5,
                                        overflow: 'visible',
                                    },
                                }}
                                // onMouseMove={(point) => setHoveredIndex(point?.index ?? null)}
                                // onMouseLeave={() => setHoveredIndex(null)}
                            />
                        )}
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
}

export default DetailStatistics;
