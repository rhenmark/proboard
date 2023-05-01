import React, { PropsWithChildren } from 'react';
import { PageHeader } from '../PageHeader';

const Wrapper = (props: PropsWithChildren) => {
    return (
        <div className="w-screen min-h-screen">
            <PageHeader invert />
            <div className="h-full w-screen">{props.children}</div>
        </div>
    );
};

export default Wrapper;
