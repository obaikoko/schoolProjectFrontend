import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '@/components/mutations/mutation';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Spinner from '@/components/Spinner';
import style from '../styles/login.module.css';

function loginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const router = useRouter();
  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    variables: { email, password },
    onError: (error) => {
      toast.error(error.message);
    },
    onCompleted: () => {
      router.push('/register');
    },
  });

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className={style.container}>
      <div className={style.loginBg}></div>

      {loading ? (
        <Spinner />
      ) : (
        <form className={style.form} onSubmit={handleSubmit}>
          <h1>SIGN IN</h1>
          <div className={style.formGroup}>
            <label htmlFor='email'>Username</label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <button type='submit' className={style.btn}>
            Login
          </button>
          <Link href='/resetPassword' className={style.btn}>
            Forgotten password ?
          </Link>
        </form>
        // <form onSubmit={handleSubmit}>
        //   <div className='form-group'>
        //     <label htmlFor='email'>Username</label>
        //     <input
        //       type='text'
        //       name='email'
        //       className='form-control'
        //       id='email'
        //       value={email}
        //       onChange={handleInputChange}
        //     />
        //   </div>
        //   <div className='form-group'>
        //     <label htmlFor='password'>Password</label>
        //     <input
        //       type='password'
        //       name='password'
        //       className='form-control'
        //       id='password'
        //       value={password}
        //       onChange={handleInputChange}
        //     />
        //   </div>
        //   <button type='submit' className='btn btn-primary'>
        //     Login
        //   </button>
        // </form>
      )}
    </div>
  );
}

export default loginPage;
