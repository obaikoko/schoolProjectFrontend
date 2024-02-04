import Head from 'next/head';
import { GET_SPONSORS } from '@/components/queries/query';
import { GET_STAFF } from '@/components/staff/staffQueries';
import { GET_STUDENTS } from '@/components/Student/studentQueries';
// import { GET_USERS } from '@/components/queries/query';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import style from '@/styles/dashboard.module.css';
import {
  FaChalkboardTeacher,
  FaChild,
  FaHandshake,
  FaPatreon,
  FaUserAlt,
} from 'react-icons/fa';
import ChartComponent from '@/components/chartComponent';

function dashboard() {
  const router = useRouter();
  useEffect(() => {
    const { loginUser } = JSON.parse(localStorage.getItem('User'));
    if (!loginUser) {
      router.push('/');
    } else if (loginUser && loginUser.role != 'Admin') {
      router.push('/');
    }
    setLoggedIn(loginUser);
  }, []);
  const [isLoggedIn, setLoggedIn] = useState('');
  const [totalSponsors, setTotalSponsors] = useState('');
  const [totalStudents, setTotalStudents] = useState('');
  const [totalStaff, setTotalStaff] = useState('');
  // const [totalUsers, setTotalUsers] = useState('');
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
  // const {
  //   loading: userLoading,
  //   error: userError,
  //   data: userData,
  // } = useQuery(GET_USERS);
  // const maleStudents = studentData.students.filter(
  //   (student) => student.gender === 'Male'
  // );

  studentData &&
    console.log(
      studentData.students.filter((student) => student.gender === 'Male')
    );
  // console.log(maleStudents);
  useEffect(() => {
    studentData && setTotalStudents(studentData.students.length);
    staffData && setTotalStaff(staffData.staff.length);
    // userData && setTotalUsers(userData.users.length);
    sponsorData && setTotalSponsors(sponsorData.Sponsors.length);
  }, [studentLoading, sponsorLoading, staffLoading]);

  return (
    <div className={style.container}>
      <Head>
        <title>Bendonalds</title>
      </Head>
      <ul>
        <li className={style.totalStudents}>
          <h3>Total Students</h3>
          {studentLoading ? (
            <p>fetching data...</p>
          ) : (
            <>
              <FaChild />
              <p>{totalStudents}</p>
            </>
          )}
        </li>
        <li className={style.totalStaff}>
          <h3>Total Staff</h3>

          {staffLoading ? (
            <p>fetching data...</p>
          ) : (
            <>
              <FaChalkboardTeacher />

              <p>{totalStaff}</p>
            </>
          )}
        </li>
        <li className={style.totalSponsors}>
          <h3>Total Sponsors</h3>
          {sponsorLoading ? (
            <p>fetching data...</p>
          ) : (
            <>
              <FaHandshake />
              <p>{totalSponsors}</p>
            </>
          )}
        </li>
      </ul>
      {/* <ChartComponent/> */}
    </div>
  );
}

export default dashboard;
