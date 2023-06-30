import React from 'react';
import Navbar from './Navbar';

const layout = ({ children }) => {
  return (
    <>
    
    <Navbar/>
    <div>{children}</div>
    </>
  
  );
};

export default layout;
