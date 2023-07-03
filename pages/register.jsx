import React from 'react';
import AddStudent from '../components/AddStudent';
import AddSponsor from '../components/AddSponsor';
import AddStaff from '../components/AddStaff';
import StudentList from '@/components/StudentList';

const register = () => {
  return (
    <>
      <div className='d-md-flex align-items-center justify-content-center'>
        <div className='card m-4 p-3'>
          <AddStudent />
        </div>
        <div className='card m-4 p-3'>
          <AddSponsor />
        </div>
        <div className='card m-4 p-3'>
          <AddStaff />
        </div>
      </div>

      <StudentList />
    </>
  );
};

export default register;
