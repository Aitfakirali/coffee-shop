import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Container from '@mui/material/Container';

export default function Layout() {
    return (
        <div className='layout-container'>
            <Sidebar />
            <Container
                maxWidth='lg'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    justifyContent: 'center',
                }}
            >
                <Outlet />
            </Container>
        </div>
    );
}
