import { gql } from '@apollo/client';

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      firstName
      role
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
    $role: UserRoleType!
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
      role: $role
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
      role
      stateOfOrigin
      localGvt
      email
    }
  }
`;

export { LOGIN_USER, ADD_USER };
