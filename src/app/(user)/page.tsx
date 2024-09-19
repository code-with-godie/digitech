import React, { Suspense } from 'react';
import Slider from '@/components/slider/Slider';
import FirstBanner from '@/components/banner/FirstBanner';
import Deals from '@/components/Deals/Deals';
import HomeCategory from '@/components/category/HomeCategory';
import NewArrivals from '@/components/arrivals/NewArrivals';
import Services from '@/components/services/Services';
import CatSkeleton from '@/components/skeleton/CatSkeleton';
const HomePage = () => {
  return (
    <section>
      <Slider />
      <FirstBanner />
      <Suspense fallback={<CatSkeleton counter={10} />}>
        <HomeCategory />
      </Suspense>
      <Deals />
      <Services />
      <NewArrivals />
    </section>
  );
};

export default HomePage;
