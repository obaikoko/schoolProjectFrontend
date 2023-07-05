import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STUDENTS } from './studentQueries';

import Link from 'next/link';
import Spinner from '../Spinner';

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

  if (loading) return <Spinner />;
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
      <div className='form-group'>
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
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Search by First Name or Surname'
          onChange={handleSearchChange}
        />
      </div>

      <table className='table table-hover table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Class</th>

            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>
                {student.surname} {student.firstName}
              </td>
              <td>{student.level}</td>
              <td>
                <Link
                  className='btn btn-sm btn-light'
                  href={`/student/${student.id}`}
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='row'></div>
    </div>
  );
};

export default StudentList;
