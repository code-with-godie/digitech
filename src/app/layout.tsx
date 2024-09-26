import type { Metadata } from 'next';
import './globals.css';
import CartCalculator from '@/context/CartCalculator';
import StoreProvider from '@/context/StoreProvider';
import UserInitializer from '@/context/UserInitializer';
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
              <UserInitializer>
                <CartCalculator>{children}</CartCalculator>
              </UserInitializer>
              {/* <Drawer /> */}
            </StoreProvider>
          </section>
        </main>
      </body>
    </html>
  );
}
