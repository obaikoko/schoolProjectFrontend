import { gql } from '@apollo/client';

const GET_STUDENTS = gql`
  query getStudents {
    students {
      id
      surname
      firstName
      lastName
      level
      gender
      dob
      yearAdmitted
      stateOfOrigin
      localGvt
      homeTown
      sponsor {
        id
        name
        occupation
        relationship
        phoneNumber
        address
      }
    }
  }
`;

const GET_STUDENT = gql`
  query getStudent($id: ID!) {
    studentDetails(id: $id) {
      id
      surname
      firstName
      lastName
      level
      gender
      dob
      yearAdmitted
      stateOfOrigin
      localGvt
      homeTown
      sponsor {
        id
        name
        occupation
        relationship
        phoneNumber
        address
      }
    }
  }
`;

const GET_STAFF = gql`
query getStaff{
  staff{
    id
    surname
    firstName
    lastName
    qualification
    gender
    dob
    maritalStatus
    role
    yearAdmitted
    stateOfOrigin
    localGvt
    homeTown
    residence
    phone
    email
  }
}
`;
const GET_STAFF_DETAIL = gql`
query getStaff($id: ID!){
  staff (id: $id){
    id
    surname
    firstName
    lastName
    qualification
    gender
    dob
    maritalStatus
    role
    yearAdmitted
    stateOfOrigin
    localGvt
    homeTown
    residence
    phone
    email
  }
}
`;

const GET_USERS = gql`
  query getUsers {
    users {
      id
      surname
      firstName
      lastName
      phone
      stateOfOrigin
      localGvt
      email
    }
  }
`;

const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      surname
      firstName
      lastName
      phone
      stateOfOrigin
      localGvt
      email
    }
  }
`;

const GET_SPONSORS = gql`
  query getSponsors {
    Sponsors {
      id
      name
      occupation
      relationship
      phoneNumber
      address
    }
  }
`;
export { GET_STUDENTS, GET_STUDENT, GET_STAFF, GET_STAFF_DETAIL, GET_USERS, GET_USER, GET_SPONSORS };
