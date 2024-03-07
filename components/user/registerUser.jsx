import { ADD_USER } from './userMutetion';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { toast } from 'react-toastify';
import style from '@/styles/register.module.css';

function AddUser() {
  const [isUserForm, setIsUserForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
  });

  const { firstName, lastName, email, password, role } = formData;
  const [addUser, { loading, error }] = useMutation(ADD_USER, {
    variables: {
      firstName,
      lastName,
      email,
      password,
      role,
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error.message);
    },
    onCompleted: () => {
      toast.success(`${firstName} Account created Successfully `);
    },
  });

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addUser(firstName, lastName, email, password, role);
  };
  const clickedUserForm = () => {
    setIsUserForm(!isUserForm);
  };
  return (
    <div className={style.container}>
      <button
        className={
          isUserForm ? `${style.btn} ${style.hideBtn}` : `${style.btn}`
        }
        onClick={clickedUserForm}
      >
        Register User
      </button>
      <div
        className={
          isUserForm
            ? `${style.formContainer} ${style.showForm} `
            : `${style.formContainer}`
        }
      >
        <form className={style.form} onSubmit={onSubmit}>
          <h2>Register User</h2>
          <div className={style.formGroup}>
            <label htmlFor='userFirstName'>First Name</label>
            <input
              className={style.form}
              type='text'
              name='firstName'
              id='userFirstName'
              value={firstName}
              onChange={onChange}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor='userLastName'>Last Name</label>
            <input
              className={style.form}
              type='text'
              name='lastName'
              id='userLastName'
              value={lastName}
              onChange={onChange}
            />
          </div>

          <div className={style.formGroup}>
            <label htmlFor='userEmail'>Email</label>
            <input
              type='email'
              name='email'
              id='userEmail'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor='userPassword'>Password</label>
            <input
              type='password'
              name='password'
              id='userPassword'
              value={password}
              onChange={onChange}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor='userRole'>Role</label>
            <select name='role' id='userRole' onChange={onChange}>
              <option value=''>Select user Role</option>
              <option value='Admin'>Administrator</option>
              <option value='Agent'>Agent</option>
            </select>
          </div>

          <button className={style.btn} type='submit'>
            Register
          </button>
          <button
            onClick={clickedUserForm}
            className={`${style.btn} ${style.btnCancel} `}
            type='button'
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
