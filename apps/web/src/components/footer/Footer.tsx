import React from 'react';
import { PoweredBy } from 'react-instantsearch';

const Footer = () => {
  return (
    <div className=''>
    <div className="mt-40 w-full p-4 border-t bg-white grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-2">
     <div>
     <PoweredBy className="w-[140px]" />
     <span>All rights reserved &copy; 2024</span>
     </div>
     <div className='grid justify-end'>
      {/* About */}
     </div>
    </div>
    </div>
  );
};

export default Footer;
