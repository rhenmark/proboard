import Link from 'next/link';
import { Button, LightModeIcon, DarkModeIcon, GithubIcon } from '@proboard/ui';
import { externalLink } from '../../common/AppLinks';
import React from 'react';
import Image from 'next/image';

const roundedClassName =
    'p-2 h-[48px] w-[48px] rounded grid place-items-center hover:bg-slate-500';

interface IPageHeader {
    invert?: boolean;
    hideLogo?: boolean;
}

// temporary show/hide nav items
const SHOW_NAV_ITEMS = false

const PageHeader = (props: IPageHeader) => {
    return (
        <header
            className={`grid h-[80px] grid-flow-col space-between items-center px-4 md:px-10 gap-2 relative z-10 ${props.invert ? 'border border-[#efefef]' : ''
                }`}
        >
            <div className="h-full grid items-center">
                {!props.hideLogo && (
                    <Link href="/">
                        <span className="text-black text-2xl font-semi flex flex-row gap-2 items-center">
                            <Image src="/images/logo/proboard-logo.png" alt="logo" height={32} width={32} />
                            roboard</span>
                    </Link>
                )}
            </div>
            <div className="h-full grid grid-flow-col justify-end items-center">
                {
                    SHOW_NAV_ITEMS && (
                        <>
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
                            </Link></>
                    )
                }

                <Link href="/auth">
                    <Button className="hover:bg-green-200 p-2 px-4 rounded-full">
                        <span className="text-black">Login</span>
                    </Button>
                </Link>
            </div>
        </header>
    );
};

export const PageHeaderSkeleton = () => (
    <header className=' h-[40px] animate-pulse' />
)

export default PageHeader;
