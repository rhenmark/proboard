import Link from 'next/link';
import { Button, LightModeIcon, DarkModeIcon, GithubIcon } from '@proboard/ui';
import { externalLink } from '../../common/AppLinks';
import React from 'react';

const roundedClassName =
    'p-2 h-[48px] w-[48px] rounded grid place-items-center hover:bg-slate-500';

const PageHeader = () => {
    return (
        <header className="grid grid-flow-col justify-end items-center px-4 md:px-10 gap-2 relative z-10">
            <Button className={roundedClassName}>
                <LightModeIcon width={28} color="#fff" />
            </Button>
            <Button className={roundedClassName}>
                <DarkModeIcon width={28} color="orange" />
            </Button>
            <Link href={externalLink.github}>
                <Button className={roundedClassName}>
                    <GithubIcon width={28} color="#fff" />
                </Button>
            </Link>
            <Button className="hover:bg-slate-500 p-2 rounded-full">
                <span className='text-white'>Login </span>
            </Button>
        </header>
    );
};

export default PageHeader;
