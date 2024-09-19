import type { Metadata } from 'next';
import './globals.css';
import StoreProvider from '@/context/StoreProvider';
// import Drawer from '@/components/nav/Drawer';
export const metadata: Metadata = {
  title: 'digitech',
  description: 'for all latest technology electronics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <main className=' flex justify-center h-screen overflow-auto'>
          <section className=' w-full max-w-[1500px] '>
            <StoreProvider>
              {children}

              {/* <Drawer /> */}
            </StoreProvider>
          </section>
        </main>
      </body>
    </html>
  );
}
