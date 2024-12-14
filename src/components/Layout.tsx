import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Container from '@mui/material/Container';

export default function Layout() {
    return (
        <div className='layout-container'>
            <Sidebar />
            <Container
                maxWidth='desktop'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    justifyContent: 'center',
                    paddingTop: {
                        mobile: '50px',
                        tablet: '20px',
                    },
                    paddingBottom: '20px',
                }}
            >
                <Outlet />
            </Container>
        </div>
    );
}
