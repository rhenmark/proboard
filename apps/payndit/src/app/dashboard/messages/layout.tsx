'use client';

import GoogleIcon from 'apps/payndit/src/components/google-icon';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PropsWithChildren, Suspense } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-[25%_1fr] gap-4 h-[calc(100vh-120px)] overflow-hidden">
      <div className="h-full bg-gray-100 overflow-auto relative">
        <div className="p-4 py-4 sticky top-0 bg-gray-100 z-10">
          <input type="text" placeholder="Search" className="p-4 w-full" />
        </div>
        <div className="mt-4 p-4">
          <span>All Messages</span>
        </div>
        <div className="overflow-auto">
          <Suspense>
            <List />
          </Suspense>
        </div>
      </div>
      {children}
    </div>
  );
};

const List = () => {
  const params = useParams()
  return (
    <ul>
      {new Array(10).fill('').map((item, index) => (
        <MessageItem key={index} id={index} isActive={Number(params.id) === index } />
      ))}
    </ul>
  );
};

const MessageItem = ({ id, isActive }: { id: number, isActive: boolean }) => {
  return (
    <li className={`grid grid-cols-[auto_1fr] gap-2 p-4 py-4 border-b border-black/20 relative hover:bg-gray-200 ${isActive && "bg-blue-300" }`}>
      <Link href={`${id}`} className="absolute left-0 right-0 h-full" />
      <div className="h-12 w-12 rounded-full bg-blue-400 grid place-items-center">
        <GoogleIcon icon="person" />
      </div>
      <div>
        <div className="flex justify-between">
          <span className="text-md font-medium">John Doe</span>
          <span>10:10 AM</span>
        </div>
        <div>
          <span className="text-sm">John has sent you a message</span>
        </div>
      </div>
    </li>
  );
};

export default Layout;
