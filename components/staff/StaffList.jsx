import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STAFF } from './staffQueries';
import Link from 'next/link';
import StaffCard from './StaffCard';
import style from '@/styles/register.module.css';

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

  if (loading) return  <h3>Loading Staff Data...</h3>
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
      <div className={style.formGroup}>
        <select className='form-control' onChange={handleFilterChange}>
          <option value=''>All Role</option>
          <option value='Mathematics'>Mathematics</option>
          <option value='English'>English</option>
          <option value='Kitchen'>Kitchen</option>
        </select>
      </div>
      <div className={style.formGroup}>
        <input
          type='text'
          placeholder='Search by First Name or Surname'
          onChange={handleSearchChange}
        />
      </div>

      
        <div className={style.listContainer}>
          <ul>
            <li>#</li>
            <li>Name</li>
            <li>Department</li>
            <li>Details</li>
          </ul>
          {filteredStaff.map((staff, index) => (
            <div className={style.list} key={staff.id}>
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
  );
};

export default StaffList;
