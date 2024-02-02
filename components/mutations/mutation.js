import { gql } from '@apollo/client';

const ADD_SPONSOR = gql`
  mutation addSponsor(
    $name: String!
    $occupation: String!
    $relationship: String!
    $phoneNumber: String!
    $address: String!
  ) {
    addSponsor(
      name: $name
      occupation: $occupation
      relationship: $relationship
      phoneNumber: $phoneNumber
      address: $address
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
const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $surname: String!
    $stateOfOrigin: String!
    $localGvt: String!
    $phoneNumber: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      surname: $surname
      stateOfOrigin: $stateOfOrigin
      localGvt: $localGvt
      phone: $phoneNumber
      email: $email
      password: $password
    ) {
      id
      firstName
      email
      role
    }
  }
`;

export { ADD_SPONSOR, ADD_USER };
