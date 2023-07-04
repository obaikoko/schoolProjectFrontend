import { gql } from '@apollo/client';

const ADD_STAFF = gql`
  mutation addStaff(
    $firstName: String!
    $lastName: String!
    $surname: String!
    $qualification: String!
    $gender: StaffGenderType!
    $dob: String!
    $yearAdmitted: String!
    $role: String!
    $stateOfOrigin: String!
    $localGvt: String!
    $homeTown: String!
    $residence: String!
    $maritalStatus: String!
    $phone: String!
    $email: String!
  ) {
    addStaff(
      firstName: $firstName
      lastName: $lastName
      surname: $surname
      qualification: $qualification
      gender: $gender
      dob: $dob
      yearAdmitted: $yearAdmitted
      role: $role
      stateOfOrigin: $stateOfOrigin
      localGvt: $localGvt
      homeTown: $homeTown
      residence: $residence
      maritalStatus: $maritalStatus
      phone: $phone
      email: $email
    ) {
      id
      surname
      firstName
      lastName
      qualification
      gender
      dob
      yearAdmitted
      stateOfOrigin
      localGvt
      homeTown
      residence
      maritalStatus
      phone
      email
    }
  }
`;

const UPDATE_STAFF = gql`
  mutation updateStaff(
    $id: ID!
    $firstName: String!
    $lastName: String!
    $surname: String!
    $qualification: String!
    $gender: StaffGenderType!
    $dob: String!
    $yearAdmitted: String!
    $role: String!
    $stateOfOrigin: String!
    $localGvt: String!
    $homeTown: String!
    $residence: String!
    $maritalStatus: String!
    $phone: String!
    $email: String!
  ) {
    updateStaff(
      id: $id
      firstName: $firstName
      lastName: $lastName
      surname: $surname
      qualification: $qualification
      gender: $gender
      dob: $dob
      yearAdmitted: $yearAdmitted
      role: $role
      stateOfOrigin: $stateOfOrigin
      localGvt: $localGvt
      homeTown: $homeTown
      residence: $residence
      maritalStatus: $maritalStatus
      phone: $phone
      email: $email
    ) {
      id
      surname
      firstName
      lastName
      qualification
      gender
      dob
      yearAdmitted
      stateOfOrigin
      localGvt
      homeTown
      residence
      maritalStatus
      phone
      email
    }
  }
`;
const DELETE_STAFF = gql`
  mutation deleteStaff($id: ID!) {
    deleteStaff(id: $id) {
      id
      surname
      firstName
      lastName
      qualification
      gender
      dob
      yearAdmitted
      stateOfOrigin
      localGvt
      homeTown
      residence
      maritalStatus
      phone
      email
    }
  }
`;

export { ADD_STAFF, UPDATE_STAFF, DELETE_STAFF };
