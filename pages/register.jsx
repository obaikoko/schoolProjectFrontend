import React from 'react'
import AddStudent from '../components/AddStudent'
import AddSponsor from '../components/AddSponsor'
import AddTeacher from '../components/AddTeacher'

const register = () => {
  return (
    <div>
        <AddStudent/>
        <AddSponsor/>
        <AddTeacher/>
    </div>
  )
}

export default register