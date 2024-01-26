import React from 'react'
import AddUser from '@/components/users/AddUser'
import AddStudent from '@/components/Student/AddStudent'
import AddStaff from '@/components/staff/AddStaff'
import AddSponsor from '@/components/AddSponsor'
import style from '../styles/dashboard.module.css'

function dashboard() {
  return (
    <div className={style.dashboard}>
        <AddStudent/>
        <AddUser/>
        <AddStaff/>
        <AddSponsor/>
    </div>
  )
}

export default dashboard