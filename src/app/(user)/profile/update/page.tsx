'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Link from 'next/link';
import { TextField } from '@mui/material';
const UpdateDetails = () => {
  const schema = z.object({
    email: z.string().email('email is required'),
    username: z.string().min(2, 'username must be greater than 2 character'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema) });
  const onSubmit = async (user: z.infer<typeof schema>) => {
    try {
      console.log(user);
    } catch (error) {
      //show toast
      console.log('errorsss', errors);
      console.log(error);
    }
  };
  return (
    <div className=' h-full flex gap-2'>
      <div className=' flex-1 flex justify-center items-center flex-col'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=' w-full max-w-[400px] flex flex-col gap-6 p-2 '
        >
          <div>
            <h1 className=' font-semibold text-2xl '>
              Update personal information 👋
            </h1>
            <p className=' text-sm text-gray-600'>please enter details</p>
          </div>
          <div className=' flex gap-1 flex-col text-white'>
            <TextField
              error={!!errors.username}
              helperText={errors.username?.message}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: errors.username ? 'tomato' : '#4b5563', // Border color based on error
                  },
                  '&:hover fieldset': {
                    borderColor: errors.username ? 'tomato' : '#4b5563',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: errors.username ? 'tomato' : '#4b5563', // Focused border color based on error
                  },
                },
                '& .MuiInputLabel-root': {
                  color: errors.username ? 'tomato' : '#4b5563', // Label color based on error
                },
                '& .MuiInputBase-input': {
                  color: '#4b5563', // Input text color
                },
              }}
              className=' flex-1 text-white border-white outline-none placeholder:text-white'
              label='username*'
              variant='outlined'
              {...register('username')}
            />
          </div>
          <div className=' flex gap-1 flex-col'>
            <TextField
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: errors.email ? 'tomato' : '#4b5563', // Border color based on error
                  },
                  '&:hover fieldset': {
                    borderColor: errors.email ? 'tomato' : '#4b5563',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: errors.email ? 'tomato' : '#4b5563', // Focused border color based on error
                  },
                },
                '& .MuiInputLabel-root': {
                  color: errors.email ? 'tomato' : '#4b5563', // Label color based on error
                },
                '& .MuiInputBase-input': {
                  color: '#4b5563', // Input text color
                },
              }}
              className=' flex-1'
              label='Email address*'
              variant='outlined'
              {...register('email')}
            />
          </div>

          <div className=' flex items-center text-white'>
            <button
              disabled={isSubmitting}
              className=' p-2 capitalize text-center cursor-pointer bg-black rounded-lg flex-1'
            >
              {isSubmitting ? 'loading' : 'update details'}
            </button>
          </div>
        </form>
        <div>
          <Link
            href='/profile/password-recovery'
            className=' text-sm text-gray-600'
          >
            click here for password recovery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateDetails;
