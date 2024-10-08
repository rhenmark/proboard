'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Developer from '../developer/Developer';
import { ProfileAvatar } from '../profile-avatar/ProfileAvatar';
import { useRouter } from 'next/navigation';

interface IDeveloperSection {
  developers: any
  hide?: boolean
}

export const DeveloperSection = ({ developers, hide }: IDeveloperSection) => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!developers || !isClient) {
    return null;
  }

  const handleClick = (username: string) => {
    router.push(`/developer/${username}`);
  };

  if (hide) {
    return true
  }

  return (
    <div className="w-full py-10 md:px-10 md:py-20 min-h-[400px] relative z-10 mb-20">
      <div className="max-w-7xl m-auto px-4 md:px-0">
        <div className="grid grid-flow-rows md:grid-flow-col justify-between items-center overflow-hidden gap-4">
          <div>
            <h4 className="text-4xl font-medium">DEVELOPERS</h4>
            <Image
              src="/images/developer-line.svg"
              height={150}
              width={150}
              alt=""
            />
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {developers.map((item: any, index: number) => {
            return (
              <div
                key={`${index}`}
                className="bg-white w-full min-h-[140px] py-2 grid justify-center place-items-center"
              >
                <div role="button" onClick={() => handleClick(item.username)}>
                  <ProfileAvatar url={item?.profileImage?.url} />
                  <Developer developer={item} preview />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DeveloperSection;
