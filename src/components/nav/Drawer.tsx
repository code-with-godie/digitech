// import { authService } from '@/appWrite/auth';
import { closeDrawer } from '@/context/appSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  Close,
  FavoriteOutlined,
  Login,
  Logout,
  PersonOutlined,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
const Drawer = () => {
  // const { showDrawer } = useSelector(state => state.app);
  const { currentUser } = useAppSelector(state => state.user);
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const handleNavigate = to => {
  //   navigate(to);
  //   dispatch(closeDrawer());
  // };
  // const handleLogout = () => {
  //   authService.logout().then(() => {
  //     dispatch(logout());
  //   });
  //   dispatch(closeDrawer());
  // };
  return (
    <div className=' absolute right-0 top-0 h-screen overflow-auto w-full max-w-[300px] z-10 bg-white flex flex-col gap-1 md:hidden'>
      <div className=' flex justify-between items-center p-2 bg-gray-200'>
        <IconButton onClick={() => dispatch(closeDrawer())}>
          <Close />
        </IconButton>
        <h2>DIGITECH</h2>
      </div>
      <div className=' flex flex-col gap-2'>
        <div className=' flex justify-between items-center p-2'>
          <h2 className=' text-gray-600 '>my account</h2>
        </div>
        <div className=' flex gap-2 items-center p-2'>
          <PersonOutlined />
          <h2 className=' text-gray-600 '>my profile</h2>
        </div>
        <div className=' flex gap-2 items-center p-2'>
          <FavoriteOutlined />
          <h2 className=' text-gray-600 '>my orders</h2>
        </div>
        <div className=' flex gap-2 items-center p-2'>
          <FavoriteOutlined />
          <h2 className=' text-gray-600 '>saved items</h2>
        </div>
      </div>
      <div className=' flex flex-col gap-2'>
        <div className=' flex justify-between items-center p-2'>
          <h2 className=' text-gray-600 '>our categories</h2>
        </div>
        <div className=' flex gap-2 items-center p-2'>
          <PersonOutlined />
          <h2 className=' text-gray-600 '>my profile</h2>
        </div>
        <div className=' flex gap-2 items-center p-2'>
          <FavoriteOutlined />
          <h2 className=' text-gray-600 '>my orders</h2>
        </div>
        <div className=' flex gap-2 items-center p-2'>
          <FavoriteOutlined />
          <h2 className=' text-gray-600 '>saved items</h2>
        </div>
      </div>
      <div className=' flex gap-2 items-center p-2'>
        {currentUser ? (
          <button className=' bg-black text-white p-2 w-full self-end'>
            <Logout /> logout
          </button>
        ) : (
          <button className=' bg-black text-white p-2 w-full self-end'>
            <Login /> sign-in
          </button>
        )}
      </div>
    </div>
  );
};

export default Drawer;
