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
export { GET_STUDENTS, GET_STUDENT };
