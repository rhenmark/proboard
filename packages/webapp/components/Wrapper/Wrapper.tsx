import React, { PropsWithChildren } from 'react';
interface WrapperProps {
    hideNav?: boolean
}
const AppWrapper = (props: PropsWithChildren<WrapperProps>) => {
    return (
        <div className="w-screen min-h-screen">
            <div className="h-full w-screen">{props.children}</div>
        </div>
    );
};


export const ContentWrapper = (props: PropsWithChildren<{ className?: string }>) => {
    return (
        <div className={`md:max-w-7xl m-auto w-full h-full ${props.className}`}>
            {props.children}
        </div>
    )
}

export default AppWrapper;
