import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Dropdown = () => {
  return (
    <FormControl
      variant='outlined'
      className='w-full'
    >
      <InputLabel
        id='category-label'
        className='text-blue-600'
      >
        Category
      </InputLabel>
      <Select
        labelId='category-label'
        defaultValue=''
        className='text-blue-600'
        MenuProps={{
          PaperProps: {
            className: 'bg-white', // Dropdown menu background color
          },
        }}
        sx={{
          background: 'transparent', // Remove background from Select
          border: 'none', // Remove border if desired
          '&:focus': {
            background: 'transparent', // Ensure no background on focus
          },
        }}
      >
        <MenuItem value='chocolate'>Chocolate</MenuItem>
        <MenuItem value='strawberry'>Strawberry</MenuItem>
        <MenuItem value='vanilla'>Vanilla</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
