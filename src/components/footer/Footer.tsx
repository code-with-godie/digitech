import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm'>
      {/* TOP */}
      <div className='flex flex-col md:flex-row justify-between gap-24'>
        {/* LEFT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <Link href='/'>
            <div className='text-2xl tracking-wide'>DIGITECH </div>
          </Link>
          <p>456 kenyatta avenue, Central Plaza, Nairobi,Kenya</p>
          <span className='font-semibold'>digitech@gmail.com</span>
          <span className='font-semibold'>+254 112482569</span>
          <div className='flex gap-6'>
            <Image
              src='/facebook.png'
              alt=''
              width={16}
              height={16}
            />
            <Image
              src='/instagram.png'
              alt=''
              width={16}
              height={16}
            />
            <Image
              src='/youtube.png'
              alt=''
              width={16}
              height={16}
            />
            <Image
              src='/pinterest.png'
              alt=''
              width={16}
              height={16}
            />
            <Image
              src='/x.png'
              alt=''
              width={16}
              height={16}
            />
          </div>
        </div>
        {/* CENTER */}
        <div className='hidden lg:flex justify-between w-1/2'>
          <div className='flex flex-col '>
            <h1 className='font-medium text-lg mb-5'>USEFUL LINKS</h1>
            <div className='flex flex-col gap-6'>
              <Link
                href=''
                className=' hover:underline'
              >
                Home
              </Link>
              <Link
                href=''
                className=' hover:underline'
              >
                Categories
              </Link>
              <Link
                href=''
                className=' hover:underline'
              >
                Terms of services
              </Link>
              <Link
                href=''
                className=' hover:underline'
              >
                Privacy policy
              </Link>
            </div>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-medium text-lg mb-5'>OUR SERVICES</h1>
            <div className='flex flex-col gap-6'>
              <Link
                href=''
                className=' hover:underline'
              >
                Ps 5
              </Link>
              <Link
                href=''
                className=' hover:underline'
              >
                Gaming Laptop
              </Link>
              <Link
                href=''
                className=' hover:underline'
              >
                Mobile Phones
              </Link>
              <Link
                href=''
                className=' hover:underline'
              >
                Gaming Gadget
              </Link>
              <Link
                href=''
                className=' hover:underline'
              >
                Accessories
              </Link>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>HELP</h1>
            <div className='flex flex-col gap-6'>
              <Link
                className=' hover:underline'
                href=''
              >
                Customer Service
              </Link>
              <Link
                className=' hover:underline'
                href=''
              >
                My Account
              </Link>
              <Link
                className=' hover:underline'
                href=''
              >
                Find a Store
              </Link>
              <Link
                className=' hover:underline'
                href=''
              >
                Legal & Privacy
              </Link>
              <Link
                className=' hover:underline'
                href=''
              >
                Gift Card
              </Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className='flex'>
            <input
              type='text'
              placeholder='Email address'
              className='p-4 w-3/4 border-none outline-none'
            />
            <button className='w-1/4 bg-blue-950 text-white'>JOIN</button>
          </div>
          <span className='font-semibold'>Secure Payments</span>
          <div className='flex justify-between'>
            <Image
              src='/discover.png'
              alt=''
              width={40}
              height={20}
            />
            <Image
              src='/skrill.png'
              alt=''
              width={40}
              height={20}
            />
            <Image
              src='/paypal.png'
              alt=''
              width={40}
              height={20}
            />
            <Image
              src='/mastercard.png'
              alt=''
              width={40}
              height={20}
            />
            <Image
              src='/visa.png'
              alt=''
              width={40}
              height={20}
            />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
        <div className=''>
          © 2023- {new Date().getFullYear()} digitech technoologies
        </div>
        <div className='flex flex-col gap-8 md:flex-row'>
          <div className=''>
            <span className='text-gray-500 mr-4'>Language</span>
            <span className='font-medium'>United States | English</span>
          </div>
          <div className=''>
            <span className='text-gray-500 mr-4'>Currency</span>
            <span className='font-medium'>$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
