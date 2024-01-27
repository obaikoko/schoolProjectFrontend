import React from 'react';
import AddUser from '@/components/users/AddUser';
import AddStudent from '@/components/Student/AddStudent';
import AddStaff from '@/components/staff/AddStaff';
import AddSponsor from '@/components/AddSponsor';
import style from '../styles/register.module.css';
import StudentList from '@/components/Student/StudentList';
import StaffList from '@/components/staff/StaffList';

function register() {
  return (
    <div className={style.registersContainer}>
    <h1>Registration Page</h1>
      <div className={style.registers}>
        <AddSponsor />
        <AddStudent />
        <AddUser />
        <AddStaff />
      </div>
      <div className={style.allList}>
        <StudentList />
        <StaffList />
      </div>
    </div>
  );
}

export default register;
