import React from 'react';
import Link from 'next/link';
import style from '../styles/footer.module.css';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className={style.footer}>
        <div className={style.newsLetter}>
          <h3>Subscribe to our news letter</h3>
          <form className={style.form}>
            <input type='email' placeholder='Enter your email address' />
            <button type='submit'>Subscribe now</button>
          </form>
        </div>
       
          <ul>
            <h3>Bendonalds &copy; 2023</h3>
            <li>
              <Link
                className={style.footerLink}
                href='https://wa.me/08146797467?text=Hello%20from%20Bendonalds%20International%20School.%20How%20can%20we%20assist%20you%3F'
              >
                <FaWhatsapp />
                WhatsApp
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
            <h3>Useful Links</h3>

            <li>
              <Link className={style.footerLink} href='/about'>
                About
              </Link>
            </li>
            <li>
              <Link className={style.footerLink} href='/events'>
                events
              </Link>
            </li>
            <li>
              <Link className={style.footerLink} href='/admission'>
                Admission
              </Link>
            </li>
            <li>
              <Link className={style.footerLink} href='/news'>
                news
              </Link>
            </li>
          </ul>
      
      </footer>
    </div>
  );
}

export default Footer;
