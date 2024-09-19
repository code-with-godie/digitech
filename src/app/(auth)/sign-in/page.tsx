'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Link from 'next/link';
import { IconButton, TextField } from '@mui/material';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
const SignIn = () => {
  const schema = z.object({
    email: z.string().email('email is required'),
    password: z.string().min(8, 'password must be greater than 7 character'),
  });
  const router = useRouter();

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
    <div className=' h-screen flex gap-2'>
      <div className=' hidden md:block flex-1 bg-gray-200'>
        <IconButton
          onClick={() => router.push('/')}
          className=' absolute z-10 top-4 left-4 bg-white'
        >
          <KeyboardArrowLeft className=' text-black text-2xl' />
        </IconButton>
      </div>
      <div className=' flex-1 flex justify-center items-center flex-col'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=' w-full max-w-[400px] flex flex-col gap-6 p-2 '
        >
          <IconButton
            onClick={() => router.push('/')}
            className=' absolute z-10 top-4 left-4 bg-gray-200 md:hidden'
          >
            <KeyboardArrowLeft className=' text-black text-2xl' />
          </IconButton>
          <div>
            <h1 className=' font-semibold text-2xl '>
              Sign in to your Account 👋
            </h1>
            <p className=' text-sm text-gray-600'>please enter details</p>
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
          <div className=' flex gap-1 flex-col text-white'>
            <TextField
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: errors.password ? 'tomato' : '#4b5563', // Border color based on error
                  },
                  '&:hover fieldset': {
                    borderColor: errors.password ? 'tomato' : '#4b5563',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: errors.password ? 'tomato' : '#4b5563', // Focused border color based on error
                  },
                },
                '& .MuiInputLabel-root': {
                  color: errors.password ? 'tomato' : '#4b5563', // Label color based on error
                },
                '& .MuiInputBase-input': {
                  color: '#4b5563', // Input text color
                },
              }}
              className=' flex-1 text-white border-white outline-none placeholder:text-white'
              label='password*'
              type='password'
              variant='outlined'
              {...register('password')}
            />
          </div>
          <div className=' flex items-center text-white'>
            <button
              disabled={isSubmitting}
              className=' p-2 capitalize text-center cursor-pointer bg-black rounded-lg flex-1'
            >
              {isSubmitting ? 'loading' : 'sign in'}
            </button>
          </div>
        </form>
        <div>
          <Link
            href='/sign-up'
            className=' text-sm text-gray-600'
          >
            Don&apos;t have an account?{' '}
            <span className=' text-blue-900'>sing-up</span>
          </Link>
        </div>
        <div>
          <p className=' text-gray-400 text-xs'>
            &copy;{' '}
            {`All rights reserved.digitech 2023 -${new Date().getFullYear()}`}{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
