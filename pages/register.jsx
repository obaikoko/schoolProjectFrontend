import { useState, useEffect } from 'react';
import Head from 'next/head';
import AddStudent from '@/components/Student/AddStudent';
import AddStaff from '@/components/staff/AddStaff';
import AddSponsor from '@/components/AddSponsor';
import style from '../styles/register.module.css';
import StudentList from '@/components/Student/StudentList';
import StaffList from '@/components/staff/StaffList';
import AddUser from '@/components/user/registerUser';
import { useRouter } from 'next/router';

function register() {
  const router = useRouter();
  const [isAdmin, setAdmin] = useState('');
  const [isAgent, setAgent] = useState('');

  useEffect(() => {
    const User = JSON.parse(localStorage.getItem('User'));
    if (!User) {
      router.push('/');
    } else if (User && User.role == 'Admin') {
      setAdmin(User);
    } else if (User && User.role == 'Agent') {
      setAgent(User);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Bendonalds</title>
      </Head>
      <div className={style.registersContainer}>
        <h1>Registration Page</h1>
        {isAdmin && (
          <div className={style.registers}>
            <AddUser />
            <AddSponsor />
            <AddStudent />
            <AddStaff />
          </div>
        )}
        {isAgent && (
          <div className={style.registers}>
            <AddSponsor />
            <AddStudent />
          </div>
        )}

        <div className={style.allList}>
          <StudentList />
          <StaffList />
        </div>
      </div>
    </>
  );
}

export default register;
