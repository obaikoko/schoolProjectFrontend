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

export {ADD_SPONSOR };
