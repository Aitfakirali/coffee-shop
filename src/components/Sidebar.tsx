import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';

const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window?: () => Window;
}

const menus = [
    {
        title: 'Dashboard',
        icon: <HomeIcon />,
        href: '/',
    },
    {
        title: 'Rewards',
        icon: <DashboardIcon />,
        href: '/rewards',
    },
    {
        title: 'Order history',
        icon: <FavoriteOutlinedIcon />,
        href: '#',
    },
    {
        title: 'statistiques',
        icon: <SignalCellularAltOutlinedIcon />,
        href: '#',
    },
];

function Sidebar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const location = useLocation();

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                height: '100vh',
                backgroundColor: 'secondary.main',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar
                    alt='Gunther'
                    src='/profile.jpg'
                    sx={{
                        width: 120,
                        height: 120,
                        margin: 'auto',
                    }}
                />
                <Typography
                    sx={{
                        fontWeight: 'bold',
                    }}
                    color='primary'
                    variant='h6'
                >
                    Gunther
                </Typography>
                <Typography>Owner</Typography>
            </Box>
            <List sx={{ gap: '10px' }}>
                {menus.map(({ title, icon, href }, index) => (
                    <ListItem
                        key={index}
                        sx={{
                            padding: '0px',
                            paddingInline: '20px',
                            paddingBlock: '5px',
                        }}
                    >
                        <ListItemButton
                            sx={{
                                backgroundColor:
                                    location.pathname == href
                                        ? 'primary.main'
                                        : 'transparent',
                                color:
                                    location.pathname == href
                                        ? 'white'
                                        : 'black',
                                borderRadius: '30px',
                                '&:hover': {
                                    color: 'white',
                                    backgroundColor: 'primary.light',
                                    backgroundOpacity: '.2',
                                },
                                '&:hover svg': {
                                    color:
                                        location.pathname == href
                                            ? 'black'
                                            : 'white',
                                },
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                padding: '5px',
                            }}
                            component='a'
                            href={href}
                        >
                            <ListItemIcon
                                sx={{
                                    backgroundColor:
                                        location.pathname == href
                                            ? 'white'
                                            : 'transparent',
                                    borderRadius: '50%',
                                    minWidth: 'fit-content',
                                    padding: '5px',
                                }}
                                color='white'
                            >
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 3,
                }}
            >
                <Avatar
                    src='/logo.webp'
                    alt='logo'
                    sx={{ width: 100, height: 100, margin: 'auto' }}
                />
                <Button
                    sx={{
                        borderRadius: 20,
                    }}
                    variant='contained'
                    color='error'
                    startIcon={<LogoutIcon />}
                >
                    Logout
                </Button>
            </Box>
        </Box>
    );

    // Remove this const when copying and pasting into your project.
    const container =
        window !== undefined ? () => window().document.body : undefined;
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position='fixed'
                    sx={{
                        width: { desktop: `calc(100% - ${drawerWidth}px)` },
                        ml: { desktop: `${drawerWidth}px` },
                    }}
                >
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{
                            mr: 2,
                            display: { desktop: 'none' },
                            maxWidth: '40px',
                            margin: 'auto',
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </AppBar>
                <Box
                    component='nav'
                    sx={{
                        width: { desktop: drawerWidth },
                        flexShrink: { desktop: 0 },
                    }}
                    aria-label='mailbox folders'
                >
                    <Drawer
                        container={container}
                        variant='temporary'
                        open={mobileOpen}
                        onTransitionEnd={handleDrawerTransitionEnd}
                        onClose={handleDrawerClose}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { mobile: 'block', desktop: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant='permanent'
                        sx={{
                            display: { mobile: 'none', desktop: 'block' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                            },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </>
    );
}

export default Sidebar;
