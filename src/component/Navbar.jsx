import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 py-3 bg-black text-white shadow-md'>
      <div className='text-lg font-semibold tracking-wide'>MemePot</div>
      
      <div className='flex space-x-5 text-sm'>
        <div className='cursor-pointer hover:text-gray-300 transition'>Templates</div>
        <div className='cursor-pointer hover:text-gray-300 transition'>Upload</div>
        <div className='cursor-pointer hover:text-gray-300 transition'>Submit</div>
      </div>
    </div>
  );
};

export default Navbar;
