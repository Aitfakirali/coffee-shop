import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import { TLoyalCustomers, useGetLoyalCustomersQuery } from '../store/customer';

function LoyalCustomers() {
    const { data } = useGetLoyalCustomersQuery('');
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
                    Loyal Customers
                </Typography>
                <Link href='#' underline='none' fontSize={16} fontWeight={600}>
                    View All
                </Link>
            </Box>
            <Grid2 container spacing={5}>
                {data?.map((customer) => (
                    <Grid2 key={customer.customerId}>
                        <LoyalCustomerItem {...customer} />
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}

const LoyalCustomerItem = ({ profileImage }: TLoyalCustomers) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderWidth: '2px',
                borderColor: 'success.main',
                borderStyle: 'solid',
                borderRadius: '50%',
                padding: '2px',
            }}
        >
            <Avatar
                src={profileImage}
                sx={{
                    width: 90,
                    height: 90,
                }}
            />
        </Box>
    );
};

export default LoyalCustomers;
