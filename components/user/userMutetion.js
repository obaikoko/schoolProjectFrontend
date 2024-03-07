import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';

const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $role: UserRoleType!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      role: $role
    ) {
      firstName
      lastName
      email
      role
    }
  }
`;


export { ADD_USER, };
