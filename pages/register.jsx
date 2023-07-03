import React from 'react';
import AddStudent from '../components/AddStudent';
import AddSponsor from '../components/AddSponsor';
import AddStaff from '../components/AddStaff';
import StudentList from '@/components/StudentList';


const register = () => {
 
  return (
    <div>
      <AddStudent />
      <AddSponsor />
      <AddStaff />

      <StudentList/>
      
    </div>
  );
};

export default register;
