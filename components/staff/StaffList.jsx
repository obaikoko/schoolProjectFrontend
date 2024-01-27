import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STAFF } from './staffQueries';
import Link from 'next/link';
import StaffCard from './StaffCard';
import Spinner from '../Spinner';
import style from '@/styles/dashboard.module.css'

const StaffList = () => {
  const [filterRole, setFilterRole] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleFilterChange = (e) => {
    setFilterRole(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const { loading, error, data } = useQuery(GET_STAFF);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  const staffData = data.staff;

  const filteredStaff = staffData.filter((staff) => {
    const isLevelMatch = filterRole === '' || staff.role === filterRole;
    const isNameMatch =
      searchValue === '' ||
      staff.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      staff.surname.toLowerCase().includes(searchValue.toLowerCase());
    return isLevelMatch && isNameMatch;
  });

  return (
    <div className='container p-3'>
      <h3>Filter Staff</h3>
      <div className='form-group'>
        <select className='form-control' onChange={handleFilterChange}>
          <option value=''>All Role</option>
          <option value='Mathematics'>Mathematics</option>
          <option value='English'>English</option>
          <option value='Kitchen'>Kitchen</option>
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

      <div className={style.students}>
        <div className={style.stdContainer}>
          <ul>
            <li>#</li>
            <li>Name</li>
            <li>Department</li>
            <li>Details</li>
          </ul>
          {filteredStaff.map((staff, index) => (
            <div className={style.student} key={staff.id}>
              <p>{index + 1}</p>
              <p>
                {staff.surname} {staff.firstName}
              </p>
              <p>{staff.role}</p>
              <p>
                <Link className={style.link} href={`/staff/${staff.id}`}>
                  Details
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className='row'>
        {filteredStaff.map((staff) => (
          <div className='col-md-4' key={staff.id}>
            <StaffCard staff={staff} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default StaffList;
