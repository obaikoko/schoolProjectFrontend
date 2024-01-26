import React from 'react'
import AddUser from '@/components/users/AddUser'
import AddStudent from '@/components/Student/AddStudent'
import AddStaff from '@/components/staff/AddStaff'
import AddSponsor from '@/components/AddSponsor'
import style from '../styles/dashboard.module.css'
import StudentList from '@/components/Student/StudentList'

function dashboard() {
  return (
    <div className={style.dashboard}>
        <AddSponsor/>
        <AddStudent/>
        <AddUser/>
        <AddStaff/>
        <StudentList/>
    </div>
  )
}

export default dashboard