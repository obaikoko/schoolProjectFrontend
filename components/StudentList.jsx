import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STUDENTS } from './queries/query';

const StudentCard = ({ student }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{student.surname} {student.firstName}</h5>
        <p className='card-text'>Level: {student.level}</p>
      </div>
    </div>
  );
};

const StudentList = () => {
  const [filterLevel, setFilterLevel] = useState('');

  const handleFilterChange = (event) => {
    setFilterLevel(event.target.value);
  };

  const { loading, error, data } = useQuery(GET_STUDENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const studentsData = data.students; 

  const filteredStudents = studentsData.filter(
    (student) => student.level === filterLevel
  );

  return (
    <div>
      <h3>Filter Students by Level</h3>
      <div className='form-group'>
        <select className='form-control' onChange={handleFilterChange}>
          <option value=''>All Levels</option>
          <option value='Jss1'>Jss1</option>
          <option value='Jss2'>Jss2</option>
          <option value='Jss3'>Jss3</option>
        </select>
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
