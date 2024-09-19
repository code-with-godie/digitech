import ProfileNav from '@/components/nav/ProfileNav';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-[90vh] flex justify-center p-4 overflow-auto'>
      <div className='w-full h-full max-w-[1200px] flex gap-2 p-4 '>
        <ProfileNav />
        <div className=' my-shadow flex-1 h-full overflow-auto'>
          {' '}
          {children}{' '}
        </div>
      </div>
    </div>
  );
}
