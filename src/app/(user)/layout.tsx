// import Drawer from '@/components/nav/Drawer';

import Topbav from '@/components/nav/Topbav';
import Footer from '@/components/footer/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className=''>
      <Topbav />
      {children}
      <Footer />
      {/* <Drawer /> */}
    </article>
  );
}
