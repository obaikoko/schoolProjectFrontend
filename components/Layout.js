import React from 'react';
import Navbar from './Navbar';

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <footer className=' bg-dark text-light text-center py-3'>
        <p>
          &copy; {new Date().getFullYear()} Our School. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default layout;
