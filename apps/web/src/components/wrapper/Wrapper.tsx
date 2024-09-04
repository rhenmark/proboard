import React, { PropsWithChildren } from 'react';

interface WrapperProps {
  hideNav?: boolean;
}

const AppWrapper = (props: PropsWithChildren<WrapperProps>) => {
  return (
    <div className="w-screen min-h-screen h-auto ">
      <div className="h-full mt-28 w-screen absolute inset-0 bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        {props.children}
      </div>
    </div>
  );
};

export const ContentWrapper = (
  props: PropsWithChildren<{ className?: string }>
) => {
  return (
    <div className={`md:max-w-7xl m-auto w-full h-full ${props.className}`}>
      {props.children}
    </div>
  );
};

export default AppWrapper;
