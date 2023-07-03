import { gql } from '@apollo/client';

const ADD_STUDENT = gql`
  mutation addStudent(
    $firstName: String!
    $lastName: String!
    $surname: String!
    $dob: String!
    $yearAdmitted: String!
    $stateOfOrigin: String!
    $localGvt: String!
    $homeTown: String!
    $gender: GenderType!
    $level: ClassStatus!
    $sponsorId: ID!
  ) {
    addStudent(
      firstName: $firstName
      lastName: $lastName
      surname: $surname
      dob: $dob
      yearAdmitted: $yearAdmitted
      stateOfOrigin: $stateOfOrigin
      localGvt: $localGvt
      homeTown: $homeTown
      gender: $gender
      level: $level
      sponsorId: $sponsorId
    ) {
      id
      surname
      firstName
      lastName
      dob
      yearAdmitted
      stateOfOrigin
      localGvt
      homeTown
      gender
      level
      sponsor {
        name
        occupation
        relationship
        phoneNumber
        address
      }
    }
  }
`;

const UPDATE_STUDENT = gql`
  mutation updateStudent(
    $id: ID!
    $firstName: String!
    $lastName: String!
    $surname: String!
    $dob: String!
    $yearAdmitted: String!
    $stateOfOrigin: String!
    $localGvt: String!
    $homeTown: String!
    $gender: GenderTypeUpdate!
    $level: ClassStatusUpdate!
    $sponsorId: ID!
  ) {
    updateStudent(
      id: $id
      firstName: $firstName
      lastName: $lastName
      surname: $surname
      dob: $dob
      yearAdmitted: $yearAdmitted
      stateOfOrigin: $stateOfOrigin
      localGvt: $localGvt
      homeTown: $homeTown
      gender: $gender
      level: $level
      sponsorId: $sponsorId
    ) {
      id
      surname
      firstName
      lastName
      dob
      yearAdmitted
      stateOfOrigin
      localGvt
      homeTown
      gender
      level
      sponsor {
        name
        occupation
        relationship
        phoneNumber
        address
      }
    }
  }
`;
const DELETE_STUDENT = gql`
  mutation deleteStudent(
    $id: ID!
   
  ) {
    deleteStudent(
      id: $id
   
    ) {
      id
    }
  }
`;

export { ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT };
