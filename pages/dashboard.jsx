import React from 'react';
import { GET_SPONSORS } from '@/components/queries/query';
import { GET_STAFF } from '@/components/staff/staffQueries';
import { GET_STUDENTS } from '@/components/Student/studentQueries';
import { GET_USERS } from '@/components/queries/query';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import style from '@/styles/dashboard.module.css';
import {
  FaChalkboardTeacher,
  FaChild,
  FaHandshake,
  FaPatreon,
  FaUserAlt,
} from 'react-icons/fa';

function dashboard() {
  const [totalSponsors, setTotalSponsors] = useState('');
  const [totalStudents, setTotalStudents] = useState('');
  const [totalStaff, setTotalStaff] = useState('');
  const [totalUsers, setTotalUsers] = useState('');
  const {
    loading: sponsorLoading,
    error: sponsorError,
    data: sponsorData,
  } = useQuery(GET_SPONSORS);
  const {
    loading: studentLoading,
    error: studentError,
    data: studentData,
  } = useQuery(GET_STUDENTS);
  const {
    loading: staffLoading,
    error: staffError,
    data: staffData,
  } = useQuery(GET_STAFF);
  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useQuery(GET_USERS);

  useEffect(() => {
    studentData && setTotalStudents(studentData.students.length);
    staffData && setTotalStaff(staffData.staff.length);
    userData && setTotalUsers(userData.users.length);
    sponsorData && setTotalSponsors(sponsorData.Sponsors.length);
  }, [studentLoading, staffLoading, sponsorLoading, staffLoading]);

  return (
    <div className={style.container}>
      <ul>
        <li className={style.totalStudents}>
          <h3>Total Students</h3>
          <FaChild />
          <p>{totalStudents}</p>
        </li>
        <li className={style.totalStaff}>
          <h3>Total Staff</h3>
          <FaChalkboardTeacher />
          
          <p>{totalStaff}</p>
        </li>
        <li className={style.totalSponsors}>
          <h3>Total Sponsors</h3>
          <FaHandshake />
          <p>{totalSponsors}</p>
        </li>
        <li className={style.totalUsers}>
          <h3>Total Users</h3>
          <FaUserAlt />
          <p>{totalUsers}</p>
        </li>
      </ul>
    </div>
  );
}

export default dashboard;
