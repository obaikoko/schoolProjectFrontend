import React from 'react';
import { GET_SPONSORS } from '@/components/queries/query';
import { GET_STAFF } from '@/components/staff/staffQueries';
import { GET_STUDENTS } from '@/components/Student/studentQueries';
import { GET_USERS } from '@/components/queries/query';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

function dashboard() {
  const [totalSponsors, setTotalSponsors] = useState('');
  const [totalStudents, setTotalStudents] = useState('');
  const [totalStaff, setTotalStaff] = useState('');
  const [totalUsers, setTotalUsers] = useState('');
  const {loading: sponsorLoading, error: sponsorError, data: sponsorData} = useQuery(GET_SPONSORS);
  const {loading: studentLoading, error: studentError, data: studentData} = useQuery(GET_STUDENTS);
  const {loading: staffLoading, error: staffError, data: staffData} = useQuery(GET_STAFF);
  const {loading: userLoading, error: userError, data: userData} = useQuery(GET_USERS);

  useEffect(() => {
studentData && setTotalStudents(studentData.students.length);
staffData && setTotalStaff(staffData.staff.length);
userData && setTotalUsers(userData.users.length);
sponsorData && setTotalSponsors(sponsorData.Sponsors.length);
  },[studentLoading, staffLoading, sponsorLoading, staffLoading])
   

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: '100vw',
          height: '100vh',
          // backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>Total Students {totalStudents}</h1><br />
        <h1>Total Staff {totalStaff}</h1><br />
        <h1>Total Users {totalUsers}</h1><br />
        <h1>Total Sponsors {totalSponsors}</h1>
      </div>
    </div>
  );
}

export default dashboard;
