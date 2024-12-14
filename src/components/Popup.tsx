import {
    Autocomplete,
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Typography,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useGetCategoriesQuery } from '../store/category';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { TReward } from '../store/reward';

type PopupProps = {
    onClose: () => void;
    show: boolean;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    defaultValues?: TReward | null;
    edit: boolean;
    onDelete: (rewardId: number | undefined) => void;
};

export function Popup({
    onClose,
    show,
    onSubmit,
    defaultValues,
    edit = false,
    onDelete,
}: PopupProps) {
    const { data } = useGetCategoriesQuery('');
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [uploadedImage, setUploadedImage] = useState<string | null>(
        defaultValues?.imageUrl || null
    );

    useEffect(() => {
        setUploadedImage(defaultValues?.imageUrl || null);
    }, [defaultValues?.imageUrl]);

    const onUploadImage = () => {
        inputFileRef.current?.click();
    };

    return (
        <Dialog
            open={show}
            onClose={onClose}
            maxWidth={'laptop'}
            fullWidth
            PaperProps={{
                component: 'form',
                onSubmit,
                sx: {
                    padding: '20px',
                },
            }}
        >
            <DialogTitle color='primary.main' fontSize={30} fontWeight={600}>
                Add New reward
            </DialogTitle>
            <DialogContent
                sx={{
                    display: 'flex',
                    gap: '70px',
                    flexDirection: {
                        mobile: 'column',
                        laptop: 'row',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        flex: 1,
                    }}
                >
                    <DialogContentText>Reward details</DialogContentText>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                        }}
                    >
                        <TextField
                            defaultValue={defaultValues?.title}
                            autoFocus
                            required
                            id='title'
                            name='title'
                            placeholder='Reward Title'
                            fullWidth
                            variant='outlined'
                            slotProps={{
                                htmlInput: {
                                    disableUnderline: true,
                                    sx: {
                                        padding: '12px',
                                        paddingInline: '20px',
                                    },
                                },
                                input: {
                                    disableUnderline: true,
                                },
                            }}
                            sx={{
                                backgroundColor: 'secondary.main',
                                borderRadius: '20px',
                            }}
                        />

                        <input
                            type='text'
                            defaultValue={defaultValues?.rewardId || undefined}
                            name='rewardId'
                            id='rewardId'
                            style={{
                                padding: 0,
                                height: 0,
                                visibility: 'hidden',
                                display: 'hidden',
                                width: 0,
                            }}
                        />

                        {data && (
                            <Autocomplete
                                defaultValue={
                                    defaultValues?.category
                                        ? {
                                              id: defaultValues?.category
                                                  ?.categoryId,
                                              label: defaultValues?.category
                                                  ?.title,
                                          }
                                        : null
                                }
                                id='category'
                                fullWidth
                                options={data?.map((item) => ({
                                    id: item.categoryId,
                                    label: item.title,
                                }))}
                                autoHighlight
                                slotProps={{
                                    listbox: {
                                        sx: {
                                            padding: 0,
                                        },
                                    },
                                }}
                                // getOptionLabel={(option) => option.title}
                                // getOptionKey={(option) => option.categoryId}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        required
                                        name='category'
                                        variant='outlined'
                                        slotProps={{
                                            htmlInput: {
                                                ...params.inputProps,
                                                disableUnderline: true,
                                                sx: {
                                                    padding: 0,
                                                },
                                            },
                                        }}
                                        sx={{
                                            backgroundColor: 'secondary.main',
                                            borderRadius: '20px',
                                        }}
                                    />
                                )}
                            />
                        )}
                        <TextField
                            defaultValue={defaultValues?.points}
                            autoFocus
                            required
                            id='points'
                            name='points'
                            placeholder='Reward Price'
                            fullWidth
                            variant='outlined'
                            slotProps={{
                                htmlInput: {
                                    disableUnderline: true,
                                    sx: {
                                        padding: '12px',
                                        paddingInline: '20px',
                                    },
                                },
                                input: {
                                    disableUnderline: true,
                                    sx: {
                                        borderRadius: '20px',
                                        borderColor: 'transparent',
                                        outlineColor: 'transparent',
                                    },
                                },
                            }}
                            sx={{
                                backgroundColor: 'secondary.main',
                                borderRadius: '20px',
                            }}
                        />

                        <TextField
                            defaultValue={defaultValues?.description}
                            autoFocus
                            required
                            id='name'
                            name='description'
                            placeholder='Reward Description'
                            fullWidth
                            variant='outlined'
                            multiline
                            rows={3}
                            slotProps={{
                                htmlInput: {
                                    disableUnderline: true,
                                },
                                input: {
                                    disableUnderline: true,
                                },
                            }}
                            sx={{
                                backgroundColor: 'secondary.main',
                                borderRadius: '20px',
                            }}
                        />
                    </Box>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}
                    gap={20}
                >
                    <Box
                        sx={{
                            backgroundColor: 'secondary.main',
                            padding: '20px',
                            borderRadius: '15px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            alignItems: 'center',
                        }}
                    >
                        {uploadedImage ? (
                            <img src={uploadedImage} height={200} width={200} />
                        ) : (
                            <PermMediaIcon
                                sx={{
                                    display: 'block',
                                    width: 80,
                                    height: 80,
                                    color: 'primary.main',
                                }}
                            />
                        )}

                        <Button
                            startIcon={<FileUploadOutlinedIcon />}
                            variant='text'
                            onClick={onUploadImage}
                        >
                            <Typography fontWeight={600} fontSize={14}>
                                Upload image
                            </Typography>
                            <input
                                type='text'
                                defaultValue={
                                    defaultValues?.imageUrl || undefined
                                }
                                name='imageUrl'
                                id='imageUrl'
                                style={{
                                    padding: 0,
                                    height: 0,
                                    visibility: 'hidden',
                                    display: 'hidden',
                                    width: 0,
                                }}
                            />
                            <input
                                ref={inputFileRef}
                                type='file'
                                name='image'
                                onChange={async (event) => {
                                    const file = event.target.files?.[0];
                                    if (!file) return;
                                    const arrayBuffer =
                                        await file.arrayBuffer();
                                    const blob = new Blob(
                                        [new Uint8Array(arrayBuffer)],
                                        { type: file.type }
                                    );
                                    setUploadedImage(
                                        window.URL.createObjectURL(blob)
                                    );
                                }}
                                style={{
                                    padding: 0,
                                    height: 0,
                                    visibility: 'hidden',
                                    display: 'hidden',
                                    width: 0,
                                }}
                            />
                        </Button>

                        <Typography>
                            Upload cover image for the reward
                        </Typography>
                    </Box>
                    <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        gap={'10px'}
                    >
                        {edit ? (
                            <Button
                                variant='contained'
                                color='error'
                                sx={{
                                    borderRadius: '20px',
                                    paddingInline: 6,
                                }}
                                onClick={() =>
                                    onDelete?.(defaultValues?.rewardId)
                                }
                            >
                                Delete
                            </Button>
                        ) : (
                            <Button
                                variant='contained'
                                sx={{
                                    backgroundColor: 'grey.200',
                                    color: 'black',
                                    borderRadius: '20px',
                                    paddingInline: 6,
                                }}
                                onClick={onClose}
                                size='large'
                            >
                                Cancel
                            </Button>
                        )}
                        <Button
                            sx={{
                                borderRadius: '20px',
                                paddingInline: 8,
                            }}
                            variant='contained'
                            type='submit'
                            size='large'
                        >
                            {edit ? 'Update' : 'Save'}
                        </Button>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
}
