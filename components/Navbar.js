import Link from "next/link";

import style from "../styles/Navbar.module.css";
// styles

const Navbar = () => {
  return (
    <nav
      className={`navbar  navbar-expand-lg bg-body-tertiary ${style["navbar-custom"]}`}
    >
      <div className="container-fluid">
        <Link
          className={`navbar-brand ${style["navbar-brand-custom"]}`}
          href="/"
        >
          SUPER SCHOOL <br />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Super School
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul
              className={`${style["navbar-nav-custom"]} navbar-nav justify-content-end flex-grow-1 pe-3`}
            >
              <li className={`${style["nav-item-custom"]} nav-item`}>
                <Link
                  href="/"
                  className={`${style["nav-link-custom"]} ${style.active} nav-link active`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li className={`${style["nav-item-custom"]} nav-item`}>
                <Link
                  href="/about"
                  className={`${style["nav-link-custom"]} nav-link`}
                >
                  About
                </Link>
              </li>
              <li className={`${style["nav-item-custom"]} nav-item`}>
                <Link
                  href="/register"
                  className={`${style["nav-link-custom"]} nav-link`}
                >
                  Register
                </Link>
              </li>
              <li className={`${style["nav-item-custom"]} nav-item`}>
                <Link
                  href="/loginPage"
                  className={`${style["nav-link-custom"]} nav-link`}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
