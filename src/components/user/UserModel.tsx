'use client';
import { authService } from '@/appWrite/auth';
import { closeAccountModel } from '@/context/appSlice';
import { updateUser } from '@/context/userSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  FavoriteBorderOutlined,
  Login,
  Logout,
  Person2Outlined,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
const AccountModel = () => {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector(state => state.user);
  const router = useRouter();
  const handleNavigate = (to: string) => {
    if (currentUser) {
      router.push(to);
    } else {
      router.push('/sign-in');
    }
    dispatch(closeAccountModel());
  };
  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(updateUser(null));
      dispatch(closeAccountModel());
    });
  };
  return (
    <div className=' hidden bg-white my-shadow  absolute top-16 right-10 z-10 md:flex flex-col gap-2 rounded p-1'>
      <div
        className=' flex gap-2 items-center p-2   hover:bg-gray-200 cursor-pointer pr-6 '
        onClick={() => handleNavigate('/profile')}
      >
        <Person2Outlined className='icon' />
        <p>my account</p>
      </div>
      <div
        className=' flex gap-2 items-center p-2 hover:bg-gray-200 cursor-pointer pr-6'
        onClick={() => handleNavigate('/profile/orders')}
      >
        <FavoriteBorderOutlined className='icon' />
        <p>orders</p>
      </div>
      <div
        className=' flex gap-2 items-center p-2 hover:bg-gray-200 cursor-pointer pr-6'
        onClick={() => handleNavigate('/profile/saved')}
      >
        <FavoriteBorderOutlined className='icon' />
        <p>saved items</p>
      </div>
      {currentUser ? (
        <div
          className=' flex gap-2 items-center p-2 cursor-pointer pr-6 bg-black'
          onClick={handleLogout}
        >
          <Logout className='icon text-white' />
          <p className=' text-white'>sign-out</p>
        </div>
      ) : (
        <div
          className=' flex gap-2 items-center p-2 cursor-pointer pr-6 bg-black'
          onClick={() => handleNavigate('/sign-in')}
        >
          <Login className='icon text-white' />
          <p className=' text-white'>sign-in</p>
        </div>
      )}
    </div>
  );
};

export default AccountModel;
