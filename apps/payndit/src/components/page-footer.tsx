'use client';

import Link from "next/link";

const PageFooter = () => {
  return (
    <div className="bg-gray-200 mt-20">
      <div className="container m-auto py-10">
        <div>
          <PageSocialFooter />
          <PageFooterOthers />
          <PageFooterInc />
        </div>
      </div>
    </div>
  );
};

const PageSocialFooter = () => {
  return (
    <div>
      <ul className="grid gap-2 grid-flow-col justify-start">
        <li>Follow us: </li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>X</li>
      </ul>
    </div>
  );
};

const PageFooterOthers = () => {
  return (
    <div className="mt-4 grid grid-cols-3">
      <ul>
        <li className="text-xl mb-2">Discover</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
      <ul>
        <li className="text-xl mb-2">Company</li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li> <Link href="/newsletter">NewsLetter</Link></li>
      </ul>
      <ul>
        <li className="text-xl mb-2">Download</li>
      </ul>
    </div>
  );
};

const PageFooterInc = () => {
    return (
        <div className="mt-4 border border-t border-t-black/80 pt-2">
            <ul>
                <li>&copy; 2024 Payndit, Inc.</li>
            </ul>
        </div>
    )
}

export default PageFooter;
