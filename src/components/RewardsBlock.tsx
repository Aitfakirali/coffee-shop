import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Link } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import {
    TReward,
    useDeleteRewardMutation,
    useSaveRewardMutation,
    useUpdateRewardMutation,
} from '../store/reward';
import { useState } from 'react';
import { Popup } from './Popup';
import * as Bytescale from '@bytescale/sdk';
import { Category, useGetCategoriesQuery } from '../store/category';
import { Rewards } from './Rewards';

const uploadFile = async (image: File) => {
    const uploadManager = new Bytescale.UploadManager({
        apiKey: 'public_FW25cK62J42q1UUygg3NrKwMDKqz', // This is your API key.
    });

    if (image && image?.name) {
        const { fileUrl } = await uploadManager.upload({
            data: image,
        });

        return fileUrl;
    }

    return null;
};

const getCategoryID = (categories: Category[] | undefined, name: string) => {
    return categories?.find((category) => category.title == name)?.categoryId;
};

function RewardsBlock() {
    const [show, setShow] = useState(false);
    const onClose = () => {
        setShow(false);
        setCurrentReward(null);
        setEdit(false);
    };
    const onOpen = () => setShow(true);
    const [edit, setEdit] = useState(false);
    const [currentReward, setCurrentReward] = useState<TReward | null>(null);

    const [saveMutation] = useSaveRewardMutation();
    const [updateMutation] = useUpdateRewardMutation();
    const { data } = useGetCategoriesQuery('');
    const [deleteMutation] = useDeleteRewardMutation();

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // @TODO extract this to an env file

        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());

        const imageUrl =
            (await uploadFile(formJson.image as File)) || formJson.imageUrl;
        const categoryId = getCategoryID(data, formJson.category as string);

        const body = {
            ...formJson,
            imageUrl,
            categoryId,
        };

        if (edit) updateMutation(body);
        else saveMutation(body);
        onClose();
    };

    return (
        <Box gap={4} flexDirection={'column'} display={'flex'}>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                gap={'10px'}
                flexDirection={{
                    mobile: 'column',
                    tablet: 'row',
                }}
            >
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
                        Manage Rewards
                    </Typography>

                    <Link href='#' underline='none' fontSize={16}>
                        View All
                    </Link>
                </Box>

                <Button
                    onClick={onOpen}
                    variant='contained'
                    sx={{
                        borderRadius: 20,
                        textTransform: 'capitalize',
                        width: {
                            mobile: '100%',
                            tablet: 'fit-content',
                        },
                    }}
                    startIcon={<AddCircleRoundedIcon />}
                >
                    <Typography sx={{}}>Add Reward</Typography>
                </Button>
            </Box>
            <Popup
                defaultValues={currentReward}
                onSubmit={onSubmit}
                show={show}
                onClose={onClose}
                edit={edit}
                onDelete={(id) => {
                    if (!id) return;
                    deleteMutation(id);
                    onClose();
                }}
            />
            <Rewards
                onEdit={(infos: TReward) => {
                    setEdit(true);
                    setCurrentReward(infos);
                    setShow(true);
                }}
            />
        </Box>
    );
}

export default RewardsBlock;
