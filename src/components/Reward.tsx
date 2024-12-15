import { useState } from 'react';
import { TReward } from '../store/reward';
import { Settings } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

export const Reward = ({
    title,
    imageUrl,
    onEdit,
    preview = false,
}: Partial<TReward> &
    (
        | {
              preview?: false;
              onEdit: () => void;
          }
        | {
              preview?: true;
              onEdit?: never;
          }
    )) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box
            sx={{
                backgroundColor: 'secondary.main',
                padding: '15px',
                borderRadius: '20px',
            }}
            display={'flex'}
            flexDirection={'column'}
            gap={'10px'}
        >
            <Box
                width={'180px'}
                height={'180px'}
                sx={{
                    backgroundColor: 'grey.100',
                    borderRadius: '10px',
                    position: 'relative',
                    margin: 'auto',
                }}
            >
                <img
                    src={imageUrl}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />

                {!preview && (
                    <>
                        <Button
                            id='basic-button'
                            sx={{
                                position: 'absolute',
                                top: 0,
                                right: -18,
                                '&:focus': {
                                    outline: 'none',
                                    border: 'none',
                                },
                            }}
                            onClick={handleClick}
                        >
                            <Settings
                                sx={{
                                    color: 'black',
                                }}
                            />
                        </Button>

                        <Menu
                            id='basic-menu'
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                disablePadding: true,
                                sx: {
                                    width: 120,
                                },
                            }}
                        >
                            <MenuItem onClick={() => onEdit?.()}>
                                Update
                            </MenuItem>
                        </Menu>
                    </>
                )}
            </Box>

            <Typography fontSize={18} fontWeight={500}>
                {title}
            </Typography>
        </Box>
    );
};
