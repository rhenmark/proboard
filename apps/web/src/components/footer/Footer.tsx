import React from 'react';
import { PoweredBy } from 'react-instantsearch';

const Footer = () => {
  return (
    <div className="mt-40 w-full p-4 border-t bg-white grid justify-start items-center gap-2">
      <PoweredBy className="w-[140px]" />
      <span>All rights reserved &copy; 2024</span>
    </div>
  );
};

export default Footer;
