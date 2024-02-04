import React from 'react';
import Link from 'next/link';
import style from '../styles/footer.module.css';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className={style.footer}>
        <ul>
          <li>Bendonalds &copy; 2023</li>
          <li>
            <Link
              className={style.footerLink}
              href='https://wa.me/qr/KMUJWQ364PWAG1'
            >
              <FaTwitter />
              Twitter
            </Link>
          </li>
          <li>
            <Link className={style.footerLink} href='/#'>
              <FaYoutube />
              Youtube
            </Link>
          </li>
          <li>
            <Link className={style.footerLink} href='/#'>
              <FaInstagram />
              Intsagram
            </Link>
          </li>
          <li>
            <Link className={style.footerLink} href='/#'>
              <FaLinkedin />
              Linkedin
            </Link>
          </li>
          <li>
            <Link className={style.footerLink} href='/#'>
              <FaFacebook />
              Facebook
            </Link>
          </li>
        </ul>
        <ul className={style.usefulLinks}>
          <li>
            <h4>Useful Links</h4>
          </li>
          <li>
            <Link className={style.footerLink} href='/about'>
              About
            </Link>
          </li>
          <li>
            <Link className={style.footerLink} href='/about'>
              Cantact
            </Link>
          </li>
          <li>
            <Link className={style.footerLink} href='/about'>
              news/up coming events
            </Link>
          </li>
          <li>
            <Link className={style.footerLink} href='/about'>
              Admission
            </Link>
          </li>
        </ul>
        <div className={style.newsLetter}>
          <form className={style.form}>
            <input type='email' placeholder='Enter your email address' />
            <button type='submit'>Subscribe now</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
