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


export {LOGIN_USER, ADD_SPONSOR, }