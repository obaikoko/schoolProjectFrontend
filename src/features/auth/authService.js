// import { toast } from 'react-toastify';

// // const API_URL = 'http://localhost:5000/api/users';
// const API_URL = 'https://schproject.onrender.com/api/users';

// const register = async (userData) => {
//   try {
//     const response = await fetch(API_URL + '/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//       credentials: 'include',
//     });

//     const data = await response.json();

//     if (data) {
//       localStorage.setItem('User', JSON.stringify(data));
//     }

//     return data;
//   } catch (error) {
//     // Handle errors here
//     console.error('Error during registration:', error);
//     throw error; // Propagate the error to the calling code
//   }
// };

// const login = async (userData) => {
//   try {
//     const response = await fetch(API_URL + '/auth', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//       credentials: 'include',
//     });

//     const data = await response.json();

//     if (data) {
//       localStorage.setItem('User', JSON.stringify(data));
//       toast.success(`Welcome ${data.name}`);
//     }

//     return data;
//   } catch (error) {
//     // Handle errors here
//     console.error('Error during login:', error);
//     throw error; // Propagate the error to the calling code
//   }
// };

// const logout = async () => {
//   try {
//     const response = await fetch(API_URL + '/logout', {
//       method: 'POST',
//       credentials: 'include',
//     });

//     localStorage.removeItem('User');
//   } catch (error) {
//     // Handle errors here
//     console.error('Error during logout:', error);
//     throw error; // Propagate the error to the calling code
//   }
// };

// const authService = {
//   register,
//   login,
//   logout,
// };

// export default authService;
