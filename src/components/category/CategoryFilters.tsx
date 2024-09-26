'use client';
import { appwriteService } from '@/appWrite/appwriteService';
import {
  FormControl,
  Radio,
  RadioGroup,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Slider,
} from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
type Cat = {
  $id: string;
  name: string;
};
function valuetext(value: number) {
  return `${value}usd`;
}
const CategoryFilters = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const [query, setQuery] = useState<string[] | null>(null);
  const [value, setValue] = useState<number[]>([10, 200]);
  const [sort, setSort] = useState<string>('newest');
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  params.set('sort', sort);
  const [categories, setCategories] = useState<Cat[]>([]);
  const getCat = async () => {
    try {
      const res = await appwriteService.getCategories();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const cat: Cat[] = res.map((doc: any) => ({
        $id: doc.$id,
        name: doc.name,
      }));
      setCategories(cat);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSort = (e: ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value);
  };
  const handlePrice = (event: Event, newValue: number | number[]) => {
    console.log('price', newValue);

    setValue(newValue as number[]);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleCategory = (id: string) => {
    setQuery(prev => {
      if (prev) {
        return prev.includes(id)
          ? prev.filter(item => item !== id)
          : [...prev, id];
      }
      return null;
    });
  };

  useEffect(() => {
    getCat();
  }, []);
  useEffect(() => {
    if (query) {
      if (query.length > 0) {
        params.set('id', query.join('&'));
      } else {
        params.delete('id');
      }
      replace(`${pathname}?${params}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  useEffect(() => {
    if (sort) {
      params.set('sort', sort);
    } else {
      params.delete('sort');
    }
    replace(`${pathname}?${params}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);
  useEffect(() => {
    const defaultId = params.get('id');
    if (defaultId) {
      setQuery(() => [defaultId]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (searchTerm) {
      params.set('search', searchTerm);
    } else {
      params.delete('search');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);
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
            onChange={handleSearch}
            className=' border-none outline-none  bg-transparent text-sm flex-1'
            placeholder='search....'
          />
        </form>
      </div>
      <div>
        <h1 className=' text-gray-700 text-lg capitalize'>Category</h1>
        <FormGroup>
          {categories?.map(item => (
            <FormControlLabel
              key={item.$id}
              control={
                <Checkbox
                  sx={{
                    color: 'gray', // Color when unchecked
                    '&.Mui-checked': {
                      color: 'blue', // Color when checked
                    },
                  }}
                  checked={query?.includes(item.$id)}
                  name={item.name}
                  onChange={() => handleCategory(item.$id)}
                />
              }
              label={item.name}
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
            getAriaLabel={() => 'Price range'}
            value={value}
            getAriaValueText={valuetext}
            onChange={handlePrice}
          />
        </div>
      </div>
      <div>
        <h1 className=' text-gray-700 text-lg capitalize'>Sort By </h1>
        <div>
          <FormControl>
            <RadioGroup
              onChange={handleSort}
              name='order'
            >
              <FormControlLabel
                value='newest'
                control={<Radio checked={sort === 'newest'} />}
                label='Newest'
              />
              <FormControlLabel
                value='oldest'
                control={<Radio checked={sort === 'oldest'} />}
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
