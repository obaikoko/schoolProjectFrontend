import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STUDENTS } from './studentQueries';

import Link from 'next/link';
import Spinner from '../Spinner';
import style from '@/styles/register.module.css';

const StudentList = () => {
  const [filterLevel, setFilterLevel] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleFilterChange = (e) => {
    setFilterLevel(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const { loading, error, data } = useQuery(GET_STUDENTS);

  if (loading) return <h3>Loading Students Data...</h3>;
  if (error) return <p>Error: {error.message}</p>;

  const studentsData = data.students;

  const filteredStudents = studentsData.filter((student) => {
    const isLevelMatch = filterLevel === '' || student.level === filterLevel;
    const isNameMatch =
      searchValue === '' ||
      student.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      student.surname.toLowerCase().includes(searchValue.toLowerCase());
    return isLevelMatch && isNameMatch;
  });

  return (
    <div className='container p-3'>
      <h3>Filter Students </h3>
      <div className={style.formGroup}>
        <select className='form-control' onChange={handleFilterChange}>
          <option value=''>All Levels</option>
          <option value='Jss1'>Jss1</option>
          <option value='Jss2'>Jss2</option>
          <option value='Jss3'>Jss3</option>
          <option value='Sss1'>Sss1</option>
          <option value='Sss2'>Sss2</option>
          <option value='Sss3'>Sss3</option>
        </select>
      </div>
      <div className={style.formGroup}>
        <input
          type='text'
          className='form-control'
          placeholder='Search by First Name or Surname'
          onChange={handleSearchChange}
        />
      </div>

      <div className={style.listContainer}>
        <ul>
          <li>#</li>
          <li>Name</li>
          <li>Class</li>
          <li>Details</li>
        </ul>
        {filteredStudents.map((student, index) => (
          <div className={style.list} key={index}>
            <p>{index + 1}</p>
            <p>
              {student.surname} {student.firstName}
            </p>
            <p>{student.level}</p>
            <Link className={style.link} href={`/student/${student.id}`}>
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
