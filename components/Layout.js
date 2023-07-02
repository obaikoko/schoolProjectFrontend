import React from 'react';
import Navbar from './Navbar';

const layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
    </>
  );
};

export default layout;
