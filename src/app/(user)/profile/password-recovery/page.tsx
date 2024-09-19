'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { TextField } from '@mui/material';
const PasswordRecovery = () => {
  const schema = z.object({
    password: z.string().min(8, 'password must be more than 7 charactors'),
    confirmPassword: z
      .string()
      .min(8, 'confrim password must be more than 7 charactors'),
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
            <h1 className=' font-semibold text-2xl '>password recovery</h1>
          </div>
          <div className=' flex gap-1 flex-col'>
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
              className=' flex-1'
              label='password*'
              type='password'
              variant='outlined'
              {...register('password')}
            />
          </div>
          <div className=' flex gap-1 flex-col'>
            <TextField
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: errors.confirmPassword ? 'tomato' : '#4b5563', // Border color based on error
                  },
                  '&:hover fieldset': {
                    borderColor: errors.confirmPassword ? 'tomato' : '#4b5563',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: errors.confirmPassword ? 'tomato' : '#4b5563', // Focused border color based on error
                  },
                },
                '& .MuiInputLabel-root': {
                  color: errors.confirmPassword ? 'tomato' : '#4b5563', // Label color based on error
                },
                '& .MuiInputBase-input': {
                  color: '#4b5563', // Input text color
                },
              }}
              className=' flex-1'
              label='confirm password*'
              variant='outlined'
              type='password'
              {...register('confirmPassword')}
            />
          </div>

          <div className=' flex items-center text-white'>
            <button
              disabled={isSubmitting}
              className=' p-2 capitalize text-center cursor-pointer bg-black rounded-lg flex-1'
            >
              {isSubmitting ? 'loading' : 'recover'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
