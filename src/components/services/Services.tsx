import {
  CardMembership,
  CarRental,
  CreditCard,
  Headphones,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
const Services = () => {
  return (
    <div className='mygrid bg-gray-100/50  py-4 gap-4'>
      <div className=' flex flex-col gap-2  p-4 items-center'>
        <IconButton className=' bg-white'>
          <CarRental className=' text-4xl text-black/80' />
        </IconButton>
        <h1 className=' uppercase font-semibold'>free shipping worldwide</h1>
        <p className=' text-sm text-gray-600'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
          veritatis esse, nulla itaque repudiandae odit hic voluptatum
          reiciendis magnam, molestias, ipsa neque sed dolores modi maiores
          nihil. Ut, vitae placeat.
        </p>
      </div>
      <div className=' flex flex-col gap-2 p-4 items-center'>
        <IconButton className=' bg-white'>
          <CardMembership className=' text-4xl text-black/80' />
        </IconButton>
        <h1 className=' uppercase font-semibold'>100% money back gurantee</h1>
        <p className=' text-sm text-gray-600'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
          veritatis esse, nulla itaque repudiandae odit hic voluptatum
          reiciendis magnam, molestias, ipsa neque sed dolores modi maiores
          nihil. Ut, vitae placeat.
        </p>
      </div>
      <div className=' flex flex-col gap-2 p-4 items-center'>
        <IconButton className=' bg-white'>
          <CreditCard className=' text-4xl text-black/80' />
        </IconButton>
        <h1 className=' uppercase font-semibold'>many payment gateway</h1>
        <p className=' text-sm text-gray-600'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
          veritatis esse, nulla itaque repudiandae odit hic voluptatum
          reiciendis magnam, molestias, ipsa neque sed dolores modi maiores
          nihil. Ut, vitae placeat.
        </p>
      </div>
      <div className=' flex flex-col gap-2 p-4 items-center'>
        <IconButton className=' bg-white'>
          <Headphones className=' text-4xl text-black/80' />
        </IconButton>
        <h1 className=' uppercase font-semibold'>24/7 customer care</h1>
        <p className=' text-sm text-gray-600'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
          veritatis esse, nulla itaque repudiandae odit hic voluptatum
          reiciendis magnam, molestias, ipsa neque sed dolores modi maiores
          nihil. Ut, vitae placeat.
        </p>
      </div>
    </div>
  );
};

export default Services;
