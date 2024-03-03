import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '@/src/features/auth/usersApiSlice';
import { setCredentials, logout } from '@/src/features/auth/authSlice';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Spinner from '@/components/Spinner';
import style from '../styles/login.module.css';

function loginPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const [login, { isLoading }] = useLoginMutation();

  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success('logged In');
      router.push('/');
    } catch (err) {
      console.log(err?.data?.message || err.error);
      toast.error(err?.data?.message || err.error);
    }
  };

if (isLoading) {
  return <h1 className={style.loading}>Authenticating...</h1>;
}

  return (
    <div className={style.container}>
      <div className={style.loginBg}></div>

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
    </div>
  );
}

export default loginPage;
