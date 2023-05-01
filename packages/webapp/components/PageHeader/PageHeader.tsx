import Link from 'next/link';
import { Button, LightModeIcon, DarkModeIcon, GithubIcon } from '@proboard/ui';
import { externalLink } from '../../common/AppLinks';
import React from 'react';

const roundedClassName =
    'p-2 h-[48px] w-[48px] rounded grid place-items-center hover:bg-slate-500';

interface IPageHeader {
    invert?: boolean;
    hideLogo?: boolean;
}

const PageHeader = (props: IPageHeader) => {
    return (
        <header
            className={`grid h-[80px] grid-flow-col space-between items-center px-4 md:px-10 gap-2 relative z-10 ${props.invert ? 'bg-black' : ''
                }`}
        >
            <div className="h-full grid items-center">
                {!props.hideLogo && (
                    <Link href="/">
                        <span className="text-white text-2xl">Proboard</span>
                    </Link>
                )}
            </div>
            <div className="h-full grid grid-flow-col justify-end items-center">
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
                <Link href="/auth">
                    <Button className="hover:bg-slate-500 p-2 rounded-full">
                        <span className="text-white">Login </span>
                    </Button>
                </Link>
            </div>
        </header>
    );
};

export default PageHeader;
