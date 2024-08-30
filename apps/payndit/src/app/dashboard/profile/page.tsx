'use client';

import ProfileMenu from 'apps/payndit/src/components/profile-menu';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

const MainPage = () => {
  const [activeMenu, setActiveMenu] = useState('acc-per-det');
  const searchParams = useSearchParams();
  const menuVal = searchParams.get('menu');

  useEffect(() => {
    if (menuVal) {
      setActiveMenu(menuVal);
    }
  }, [menuVal]);

  return (
    <div className="grid grid-cols-[20%_1fr] max-w-screen-xl mx-auto w-full">
      <div className="p-4">
        <ProfileMenu
          activeMenu={activeMenu}
          activePathname={'/dashboard/profile'}
        />
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense>
      <MainPage />
    </Suspense>
  );
};

export default Page;
