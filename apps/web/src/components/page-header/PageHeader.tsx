'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@core-ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

const PageHeader = (props: IPageHeader) => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const pathname = usePathname()

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

    return (
        <header
            className={`Header w-full h-20 sticky top-0 bg-white z-50 grid grid-cols-[auto_1fr] px-4 md:px-[60px] items-center overflow-hidden ${isScrolled ? 'shadow-md' : ''
                }`}
        >
            <h2 className="text-[32px] font-[500] font-">
                <Link href="/" className=''>
                    Pr<span className="text-secondary">o</span>board
                </Link>
            </h2>
            {!props.hideNav && (
                <nav className="hidden justify-end items-center md:flex">
                    <ul className="grid grid-flow-col grid-cols-[auto_auto] justify-end gap-[4px] mr-[4px]">
                        {navItems.map((item: { name: string, path: string }) => (
                            <li
                                key={item.name}
                                className={`hover:bg-primary hover:text-white rounded-full cursor-pointer px-[16px] py-[6px] ${pathname === item.path ? "bg-primary text-white" : ""}`}
                            >
                                <Link href={item.path}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Button className="bg-black text-white rounded-full">
                        <Link className={`link`} href="/auth">
                            Account
                        </Link>
                    </Button>
                </nav>
            )}
        </header>
    );
};

export default PageHeader;
