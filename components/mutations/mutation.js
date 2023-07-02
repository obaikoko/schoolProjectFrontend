import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
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
      sponsor{
        name
        occupation
        relationship
        phoneNumber
        address
      }
    }
  }
`;


const ADD_SPONSOR = gql`
  mutation addSponsor(
    $name: String!
    $occupation: String!,
    $relationship: String!,
    $phoneNumber: String!,
    $address: String!,
    
  ) {
    addSponsor(    
    name: $name,
    occupation: $occupation,
    relationship: $relationship,
    phoneNumber: $phoneNumber,
    address: $address,
    ) {
      id
      name
      occupation
      relationship
      phoneNumber
      address
    }
  }
`;


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




export {LOGIN_USER, ADD_STUDENT, ADD_SPONSOR, ADD_STAFF}