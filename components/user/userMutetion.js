import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
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
// const LOGIN_USER = gql`
//   mutation loginUser($email: String!, $password: String!) {
//     loginUser(email: $email, password: $password) {
//       name
//       email
//       role
//     }
//   }
// `;

const LOGIN_USER = async (userData) => {
  try {
    const response = await fetch('http://localhost:5000/api/users/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    toast.success(`Welcome ${data.name}`);
    localStorage.setItem('User', JSON.stringify(data));
  } catch (error) {
    console.error('Fetch error:', error);
    toast.error('Error occurred during authentication');
  }
};

// const LOGOUT_USER = async () => {
//   try {
//     const response = await fetch('http://localhost:5000/api/users/logout', {
//       method: 'POST',
      
//       credentials: 'include',
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//   } catch (error) {
//     console.error('Fetch error:', error);
//     toast.error('Error occurred during authentication');
//   }
// };

export { ADD_USER, LOGIN_USER,  };
