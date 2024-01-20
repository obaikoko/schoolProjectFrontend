import Link from 'next/link';
import style from '../styles/nav.module.css';
import { useState } from 'react';

const Navbar = () => {
  const [open, setIsOpen] = useState(false);
  const menuBtnClicked = () => {
    setIsOpen(!open);
    document.body.classList.toggle('stopScrolling');
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
          <li>
            <Link onClick={menuBtnClicked} href='/' className={style.navLink}>
              home
            </Link>
          </li>
          <li>
            <Link
              onClick={menuBtnClicked}
              className={style.navLink}
              href='/about'
            >
              about
            </Link>
          </li>

          <li>
            <Link
              onClick={menuBtnClicked}
              className={style.navLink}
              href='/register'
            >
              register
            </Link>
          </li>
          <li>
            <Link
              className={style.navLink}
              onClick={menuBtnClicked}
              href='/login'
            >
              login
            </Link>
          </li>
        </ul>
      </div>
      <header className={style.mainHeader}>
        <div className={style.logo}>
          <Link href='/'>
            <img src='' alt='Logo' />
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
              <Link className={style.navLink} href='/register'>
                register
              </Link>
            </li>
            <li>
              <Link className={style.navLink} href='/login'>
                login
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