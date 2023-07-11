import { gql } from '@apollo/client';

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
const ADD_USER = gql`
  mutation addUser(
    $surname: String!
    $firstName: String!
    $lastName: String!
    $phone: String!
    $stateOfOrigin: String!
    $localGvt: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      surname: $surname
      firstName: $firstName
      lastName: $lastName
      phone: $phone
      stateOfOrigin: $stateOfOrigin
      localGvt: $localGvt
      email: $email
      password: $password
    ) {
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

export { LOGIN_USER, ADD_USER };
