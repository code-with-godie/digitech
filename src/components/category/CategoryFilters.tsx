'use client';
import {
  FormControl,
  Radio,
  RadioGroup,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Slider,
} from '@mui/material';
import { useState } from 'react';
const CategoryFilters = () => {
  const categories = ['tvs', 'radios', 'phone', 'headphone', 'laptops'];
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  function valuetext(value: number) {
    return `${value}usd`;
  }
  return (
    <div className=' w-1/5  p-4 my-shadow min-w-60 flex gap-4 flex-col sticky top-0 z-20'>
      <div className=' flex flex-col gap-2'>
        <h1 className=' text-gray-700 text-sm capitalize'>
          Search by product title
        </h1>
        <form
          action=''
          className=' border border-gray-200 rounded-3xl  p-2 flex'
        >
          <input
            type='text'
            className=' border-none outline-none  bg-transparent text-sm flex-1'
            placeholder='search....'
          />
        </form>
      </div>
      <div>
        <h1 className=' text-gray-700 text-lg capitalize'>Category</h1>
        <FormGroup>
          {categories?.map((item, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  sx={{
                    color: 'gray', // Color when unchecked
                    '&.Mui-checked': {
                      color: 'blue', // Color when checked
                    },
                  }}
                  //   checked={query?.tags?.includes(item)}
                  name={item}
                  //   onChange={handleCategory}
                />
              }
              label={item}
            />
          ))}
        </FormGroup>
      </div>
      <div>
        <h1 className=' text-gray-700 text-lg capitalize'>Price (Kshs.) </h1>
        <div>
          <Slider
            sx={{
              color: 'gray',
              '& .MuiSlider-thumb': {
                backgroundColor: 'gray',
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: 'inherit',
                },
              },
              '& .MuiSlider-track': {
                backgroundColor: 'gray',
              },
              '& .MuiSlider-rail': {
                backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional: lighter rail color
              },
            }}
            getAriaLabel={() => 'Temperature range'}
            value={value}
            getAriaValueText={valuetext}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <h1 className=' text-gray-700 text-lg capitalize'>Sort By </h1>
        <div>
          <FormControl>
            <RadioGroup
              // value={filters.percent}
              // onChange={handlePercentage}
              name='order'
            >
              <FormControlLabel
                value='newest'
                control={<Radio />}
                label='Newest'
              />
              <FormControlLabel
                value='oldest'
                control={<Radio />}
                label='Oldest'
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
