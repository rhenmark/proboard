'use client';

import Link from 'next/link';

const PageHeader = () => {

  return (
    <div className="w-full h-full border-b border-slate-200">
      <div className="container m-auto bg-white">
        <header className="grid grid-flow-col p-4 items-center">
          <Link href={"/"}>
            <span className="text-4xl font-semibold text-primary">payndit</span>
          </Link>
          <div className="hidden md:grid justify-end gap-6 grid-flow-col items-center ">
            <PageHeaderLink href="/location?from=header">Location</PageHeaderLink>
            <PageHeaderLink href="/categories?from=header">Categories</PageHeaderLink>
            <PageHeaderLink href="/login?from=header">Login</PageHeaderLink>
            <Link  href='/signup?type=provider' className="px-4 py-2 border-primary bg-primary hover:bg-primary/90 text-white border-[2px] rounded-md">
              <span>I offer services</span>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

interface PageHeaderLinkProps extends React.PropsWithChildren {
  text?: string
  href: string
}
const PageHeaderLink = ({text, href, children}: PageHeaderLinkProps) => {
  return (
    <Link href={`${href}?from=header`} className='hover:underline hover:underline-offset-4 hover:text-primary'>{text || children}</Link>
  )
}

export default PageHeader;
