'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import ProfileMenu from '../../components/profile-menu';

const Account = () => {
  const [activeMenu, setActiveMenu] = useState('acc-per-det');
  const searchParams = useSearchParams();
  const menuVal = searchParams.get('menu');

  useEffect(() => {
    if (menuVal) {
      setActiveMenu(menuVal);
    }
  }, [menuVal]);

  const RightContent =
    {
      ['account-personal']: PersonalDetails,
    }[activeMenu] || PersonalDetails;

  return (
    <div className="bg-black/90 min-h-dvh">
      <div className="max-w-screen-md mx-auto text-white py-20 px-4">
        <div className="mb-10 flex justify-between items-center">
          <h2 className="text-4xl">Overview</h2>
          <div>
            <Link href="/" className="text-xl text-primary">
              Sign out
            </Link>
          </div>
        </div>
        <div className="grid grid-flow-col grid-cols-[40%_1fr] gap-10">
          <div className="border-r border-r-white/40">
            <ProfileMenu activeMenu={activeMenu} activePathname="/account" />
          </div>
          <div>
            <RightContent />
          </div>
        </div>
      </div>
    </div>
  );
};



const PersonalDetails = () => {
  return (
    <div className="w-full">
      <div className="pb-8">
        <h4>Personal Details</h4>
      </div>
      <div className="grid gap-6">
        <div>
          <label className="inline-block pb-2">Firstname</label>
          <input
            type="text"
            placeholder="Firstname"
            className="bg-black border p-2 w-full"
          />
        </div>
        <div>
          <label className="inline-block pb-2">Lastname</label>
          <input
            type="text"
            placeholder="Lastname"
            className="bg-black border p-2 w-full"
          />
        </div>
        <div>
          <label className="inline-block pb-2">Birthdate</label>
          <input
            type="date"
            placeholder="Birthdate"
            className="bg-black border p-2 w-full"
          />
        </div>
        <div>
          <label className="inline-block pb-2">Address</label>
          <input
            type="text"
            placeholder="Address"
            className="bg-black border p-2 w-full"
          />
        </div>
        <div>
          <label className="inline-block pb-2">Email address</label>
          <input
            type="text"
            disabled
            placeholder="Email address"
            value="youremail@test.com"
            className="bg-black border p-2 w-full disabled:bg-white/20"
          />
        </div>
        <div>
          <button className="p-4 rounded-full bg-primary w-full">
            Update Changes
          </button>
        </div>
        <div className="my-10">
          <hr />
        </div>
        <div>
          <button className="p-4 rounded-full bg-red-700 w-full">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense>
      <Account />
    </Suspense>
  );
};

export default Page;
