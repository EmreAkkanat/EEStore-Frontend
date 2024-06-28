import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import FullScreenDialogComponent from '../../../components/dialog/FullScreenDialogComponent';
import { createCategory } from '../../../../services/common/CategoryService';
import { Create_Main_Category } from '../../../../contracts/CreateCategoryContract';

// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const CreateCategoryComponent: React.FC = () => {

    const [createMainCategory] = React.useState(new Create_Main_Category());
    const [open, setOpen] = React.useState<boolean>(false);
    const formRef = React.useRef<HTMLFormElement>(null);

    const mutation = useMutation({
        mutationFn: () => createCategory(createMainCategory)
    });

    const { register, handleSubmit, reset } = useForm<Create_Main_Category>();
    const onSubmit = (formData: Create_Main_Category) => {
        createMainCategory.name = formData.name;
        createMainCategory.description = formData.description;
        createMainCategory.metaTitle = formData.metaTitle;
        createMainCategory.metaDescription = formData.metaDescription;

        mutation.mutate();
        setOpen(false);
    };

    return (
        <FullScreenDialogComponent open={open} setOpen={setOpen} formRef={formRef} formReset={reset} title={"emrea"}>
            <Box ref={formRef} component="form" onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" sx={{ m: 2, width: '100%', display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: 'center' }}>
                <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ width: "500px" }}
                    {...register('name')}
                />
                <TextField id="outlined-basic" label="Description" variant="outlined" sx={{ width: "500px" }}
                    {...register('description')}
                />
                <TextField id="outlined-basic" label="Meta Name" variant="outlined" sx={{ width: "500px" }}
                    {...register('metaTitle')}
                />
                <TextField id="outlined-basic" label="Meta Description" variant="outlined" sx={{ width: "500px" }}
                    {...register('metaDescription')}
                />
            </Box>
        </FullScreenDialogComponent>
    );
};

export default CreateCategoryComponent;
