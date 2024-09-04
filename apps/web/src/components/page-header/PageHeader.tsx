'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@core-ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

interface IPageHeader {
  hideNav?: boolean;
}

const navItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Projects',
    path: '/project',
  },
  {
    name: 'Devs',
    path: '/developer',
  },
  {
    name: 'Blogs',
    path: '/blog',
  },
];

function isMobileView() {
 
  if (typeof window === 'undefined') {
    return false;
  }
  
  const isMobileDevice =
  /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    navigator.userAgent.toLowerCase()
  );
  const isSmallScreen = window?.innerWidth <= 768;
  return isMobileDevice || isSmallScreen;
}

const PageHeader = (props: IPageHeader) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleShowMenu = () => {
    if (!showMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    setShowMenu(!showMenu)
  };

  return (
    <header
      className={`Header w-full h-20 sticky top-0 bg-white z-50 grid grid-cols-[auto_1fr] px-4 md:px-[60px] items-center overflow-hidden ${
        isScrolled ? 'shadow-md' : 'border-b'
      }`}
    >
      <div className="relative">
        <Link href="/" className="text-black flex flex-row gap-2 items-center">
          <Image src={"/images/logo/proboard-logo.webp"} alt='logo' height={60} width={60} className=''/>
          <span className='hidden md:block font-medium text-2xl'>Proboard</span>
        </Link>
      </div>
      {isMobileView() && (
        <div className="grid justify-end">
          <Button
            className="h-full w-full min-w-fit active:outline-none hover:shadow-none"
            onClick={handleShowMenu}
          >
            <Image
              src={'/images/menu_icon.png'}
              height={24}
              width={24}
              alt="menu"
            />
          </Button>
          <MenuSlide
            isVisible={showMenu}
            onClose={handleShowMenu}
            nav={<Nav pathname={pathname} onClose={handleShowMenu} />}
          />
        </div>
      )}

      {!props.hideNav && (
        <nav className="hidden justify-end items-center md:flex">
          <ul className="grid grid-flow-col grid-cols-[auto_auto] justify-end gap-[4px] mr-[4px] list-none">
            {navItems.map((item: { name: string; path: string }) => (
              <li
                key={item.name}
                className={`hover:bg-primary hover:text-white rounded-full cursor-pointer px-[16px] py-[6px] ${
                  pathname === item.path ? 'bg-primary text-white' : ''
                }`}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MenuSlide = ({
  isVisible,
  onClose,
  nav,
}: {
  isVisible: boolean;
  onClose: () => void;
  nav: React.ReactNode;
}) => {
  const getWindowSize = () => {
    return window.innerWidth + 2;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: getWindowSize() }}
          animate={{ x: 0 }}
          transition={{ ease: 'easeIn', duration: 0.3 }}
          className="h-screen w-screen fixed top-0 bottom-0 backdrop-blur-md bg-white/30 left-0"
        >
          <div className="h-[80px] grid justify-end">
            <Button
              className="min-w-fit active:outline-none hover:shadow-none"
              onClick={onClose}
            >
              <Image
                src={'/images/close_icon.png'}
                height={24}
                width={24}
                alt="menu"
              />
            </Button>
          </div>
          {nav}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Nav = ({
  pathname,
  onClose,
}: {
  pathname: string;
  onClose: () => void;
}) => {
  return (
    <nav className="justify-end items-center md:flex h-full">
      <motion.ul
        variants={variants}
        className="grid grid-flow-row place-content-center md:grid-flow-col md:grid-cols-[auto_auto] md:justify-end gap-4 md:gap-[4px] mr-[4px] list-none pt-20"
      >
        {navItems.map((item: { name: string; path: string }) => (
          <motion.li
            key={item.name}
            className={`hover:bg-primary hover:text-white rounded-full cursor-pointer px-[16px] py-[6px] ${
              pathname === item.path ? 'bg-primary text-white' : ''
            }`}
            onClick={onClose}
          >
            <Link
              href={item.path}
              className="w-full block text-center text-2xl md:font-md"
            >
              {item.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default PageHeader;
