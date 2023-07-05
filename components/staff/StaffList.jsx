import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STAFF } from './staffQueries';
import Link from 'next/link';
import StaffCard from './StaffCard';
import Spinner from '../Spinner';

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

      <table className='table table-hover table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Department</th>

            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredStaff.map((staff, index) => (
            <tr key={staff.id}>
              <td>{index + 1}</td>
              <td>
                {staff.surname} {staff.firstName}
              </td>
              <td>{staff.role}</td>
              <td>
                <Link
                  className='btn btn-sm btn-light'
                  href={`/staff/${staff.id}`}
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
