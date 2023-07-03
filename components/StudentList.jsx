import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STUDENTS } from './queries/query';
import StudentCard from './StudentCard';
import Spinner from './Spinner';

const StudentList = () => {
  const [filterLevel, setFilterLevel] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleFilterChange = (event) => {
    setFilterLevel(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const { loading, error, data } = useQuery(GET_STUDENTS); 

  if (loading) return (
    <Spinner/>
  );
  if (error) return <p>Error: {error.message}</p>;

  const studentsData = data.students; 

  const filteredStudents = studentsData.filter((student) => {
    const isLevelMatch = filterLevel === '' || student.level === filterLevel;
    const isNameMatch =
      searchValue === '' ||
      student.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchValue.toLowerCase());
    return isLevelMatch && isNameMatch;
  });

  return (
    <div className='container'>
      <h3>Filter Students </h3>
      <div className='form-group'>
        <select className='form-control' onChange={handleFilterChange}>
          <option value=''>All Levels</option>
          <option value='Jss1'>Jss1</option>
          <option value='Jss2'>Jss2</option>
          <option value='Jss3'>Jss3</option>
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

      <div className='row'>
        {filteredStudents.map((student, index) => (
          <div className='col-md-4' key={index}>
            <StudentCard student={student} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
