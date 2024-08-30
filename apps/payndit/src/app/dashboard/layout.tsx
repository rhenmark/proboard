'use client';

import GoogleIcon from 'apps/payndit/src/components/google-icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const leftMenu = [
  {
    label: 'Dashboard',
    link: '/dashboard',
    id: 'dashboard',
  },
  {
    label: 'Services',
    link: '/dashboard/services',
    id: 'services',
  },
  {
    label: 'Messages',
    link: '/dashboard/messages',
    id: 'messages',
  },
];

const isActive = (pathname: string, id: string) => {
  let [_, , subPath] = pathname.split('/');
  if (!subPath && id === 'dashboard') return true;
  return subPath === id;
};

const excludeLinks = ['/dashboard/profile', '/dashboard/notifications'];
const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="w-full h-screen">
      <div className="grid grid-flow-row grid-rows-[100px_1fr] gap-2 max-h-screen">
        <div className="h-full grid grid-cols-[240px_1fr] gap-4 items-center justify-center shadow-sm">
          <div className="h-full w-full flex items-center px-8">
            <h2 className="font-bold text-3xl text-primary">
              <Link href="/dashboard">Payndit</Link>
            </h2>
          </div>
          <div className="h-full w-full flex items-center justify-end px-8">
            <div className="flex gap-8 ">
              <Link
                href="/dashboard/search"
                className="rounded-md hover:bg-gray-100 p-2"
              >
                <GoogleIcon icon="search" />
              </Link>
              <Link
                href="/dashboard/notifications"
                className="rounded-md hover:bg-gray-100 p-2"
              >
                <GoogleIcon icon="notifications" />
              </Link>
              <Link
                href="/dashboard/profile"
                className="rounded-md hover:bg-gray-100 p-2"
              >
                <GoogleIcon icon="person" />
              </Link>
              <Link href="/" className="rounded-md hover:bg-gray-100 p-2">
                <GoogleIcon icon="logout" />
              </Link>
            </div>
          </div>
        </div>
        {excludeLinks.includes(pathname) ? (
          children
        ) : (
          <div className="grid grid-flow-col grid-cols-[240px_1fr] gap-4 overflow-auto">
            <div className="px-4">
              <ul className="pt-10">
                {leftMenu.map((item) => (
                  <li
                    key={item.label}
                    className={`mb-2 rounded-md p-4 ${
                      isActive(pathname, item.id) && 'bg-black text-white'
                    }`}
                  >
                    <Link href={item.link} className="w-full h-full block">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-full w-full px-8 overflow-auto">{children}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
