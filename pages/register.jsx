import React from 'react';
import AddStudent from '../components/Student/AddStudent';
import AddSponsor from '../components/AddSponsor';
import AddStaff from '../components/staff/AddStaff';
import StudentList from '@/components/Student/StudentList';
import StaffList from '@/components/staff/StaffList';

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
      <div
        style={{ maxHeight: '300px', overflowY: 'auto' }}
        className='card container '
      >
        <StudentList />
      </div>
      <div
        style={{ maxHeight: '300px', overflowY: 'auto' }}
        className='card container '
      >
        <StaffList />
      </div>
    </>
  );
};

export default register;
