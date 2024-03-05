import Link from 'next/link';
import style from '../styles/nav.module.css';
import { useState, useEffect } from 'react';
import { useLogoutMutation } from '@/src/features/auth/usersApiSlice';
import { logout } from '@/src/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState('');
  const [open, setIsOpen] = useState(false);

  const [logoutApi, { isLoading }] = useLogoutMutation();
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    // const loginUser = JSON.parse(localStorage.getItem('User'));

    setIsLoggedIn(user);
  }, [user]);

  const menuBtnClicked = () => {
    setIsOpen(!open);
    document.body.classList.toggle('stopScrolling');
  };
  const handleLogout = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logout());
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
    setIsOpen(!open);
    document.body.classList.toggle('stopScrolling');
    localStorage.removeItem('user');
    setIsLoggedIn('');
  };
  return (
    <>
      <div className={open ? `${style.overlay}` : ''}></div>

      <div
        className={
          open
            ? `${style.mobileMainMenu} ${style.showMenu}`
            : `${style.mobileMainMenu}`
        }
      >
        <ul>
          {/* mobile menu only */}

          <li className={style.mobileOnly}>
            <Link onClick={menuBtnClicked} href='/' className={style.navLink}>
              home
            </Link>
          </li>
          <li className={style.mobileOnly}>
            <Link
              onClick={menuBtnClicked}
              className={style.navLink}
              href='/about'
            >
              about
            </Link>
          </li>

          {isLoggedIn && (
            <>
              <li>
                <Link
                  onClick={menuBtnClicked}
                  className={style.navLink}
                  href='/dashboard'
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  onClick={menuBtnClicked}
                  className={style.navLink}
                  href='/register'
                >
                  Register
                </Link>
              </li>
            </>
          )}
          <li>
            <Link
              onClick={menuBtnClicked}
              className={style.navLink}
              href='/admission'
            >
              Admission
            </Link>
          </li>

          <li className={style.mobileOnly}>
            <Link
              onClick={menuBtnClicked}
              className={style.navLink}
              href='/events'
            >
              events
            </Link>
          </li>
          <li>
            <Link
              onClick={menuBtnClicked}
              className={style.navLink}
              href='/news'
            >
              news
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link href='/' className={style.navLink} onClick={handleLogout}>
                logout
              </Link>
            </li>
          ) : (
            <li>
              <Link
                onClick={menuBtnClicked}
                className={style.navLink}
                href='/login'
              >
                login
              </Link>
            </li>
          )}
        </ul>
      </div>
      <header className={style.mainHeader}>
        <div className={style.logo}>
          <Link href='/'>
            <div className={style.img}></div>
          </Link>
        </div>

        <nav className={style.destopMainMenu}>
          <ul>
            <li>
              <Link href='/' className={style.navLink}>
                home
              </Link>
            </li>
            <li>
              <Link className={style.navLink} href='/about'>
                about
              </Link>
            </li>
            <li>
              <Link className={style.navLink} href='/events'>
                events
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hambuger Menu */}
      </header>
      <button
        id='menuBtn'
        className={`${style.hambuger} ${open ? `${style.open}` : ''} `}
        onClick={menuBtnClicked}
        type='button'
      >
        <span className={style.hambugerTop}></span>
        <span className={style.hambugerMiddle}></span>
        <span className={style.hambugerButtom}></span>
      </button>
    </>
  );
};

export default Navbar;
