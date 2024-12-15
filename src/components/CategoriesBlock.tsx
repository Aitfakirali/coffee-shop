import Grid2 from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useGetCategoriesQuery } from '../store/category';

function CategoriesBlock() {
    const { data } = useGetCategoriesQuery('');
    return (
        <Box gap={2} flexDirection={'column'} display={'flex'}>
            <Typography variant='h5' fontFamily={'monospace'} fontWeight={600}>
                Category
            </Typography>

            <Grid2 container spacing={3} sx={{ placeContent: 'start' }}>
                {data?.map((item) => (
                    <Grid2
                        key={item.categoryId}
                        size={{
                            mobile: 12,
                            tablet: 4,
                            laptop: 3.5,
                        }}
                    >
                        <Category key={item.categoryId} {...item} />
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}

const Category = ({ title, imageUrl }: { title: string; imageUrl: string }) => {
    return (
        <Box
            sx={{
                width: '100%',
                aspectRatio: 16 / 9,
                position: 'relative',
                backgroundColor: 'secondary.main',
                borderRadius: '20px',
                boxShadow: 1,
                display: 'flex',
                alignItems: 'flex-end',
                padding: '20px',
                overflow: 'hidden',
                '&:hover > img': {
                    scale: 1.06,
                },
            }}
        >
            <img
                style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    inset: 0,
                    transition: 'scale 300ms',
                }}
                src={imageUrl}
            />

            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'linear-gradient(to top,rgba(0,0,0,1), rgba(0,0,0,.6) 30%, transparent 100%)',
                }}
            />

            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <Typography color='white' fontSize={20} fontWeight={500}>
                    {title}
                </Typography>
            </Box>
        </Box>
    );
};

export default CategoriesBlock;
