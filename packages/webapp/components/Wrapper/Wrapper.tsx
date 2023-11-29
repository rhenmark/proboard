import React, { PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';
import { PageHeaderSkeleton } from '../PageHeader/PageHeader';

const PageHeader = dynamic(() => import("../PageHeader/PageHeader"), {
    loading: () => <PageHeaderSkeleton />
})
const Wrapper = (props: PropsWithChildren) => {
    return (
        <div className="w-screen min-h-screen">
            <PageHeader invert />
            <div className="h-full w-screen">{props.children}</div>
        </div>
    );
};

export default Wrapper;
