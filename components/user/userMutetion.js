import { gql } from '@apollo/client';

const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $email: String!
    $password: String!
    $role: UserRoleType!
  ) {
    addUser(name: $name, email: $email, password: $password, role: $role) {
      name
      email
      password
      role
    }
  }
`;
const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      name
      email
      role
    }
  }
`;
export { ADD_USER, LOGIN_USER };
