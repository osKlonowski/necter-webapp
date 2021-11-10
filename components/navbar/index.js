import Image from "next/image";
import Link from "next/link";
import necterLogo from "../../public/images/logo_w_tr.png";
import styles from "./Navbar.module.scss";
import { Nav, NavMenu, NavItem, NavLinks } from "./NavbarElements";
import { useState, useEffect } from "react";

export default function Navbar({ isHome }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={scrollNav}>
      <div className={styles.navbarContainer}>
        <div className={styles.companyInfoContainer}>
          <div className={styles.logoImgWrap}>
            <Image
              to="/"
              src={necterLogo}
              alt="necter-logo"
              className={styles.logoImg}
            />
          </div>
          <div className={styles.navCompanyName}>
            <Link href="/" onClick={toggleHome}>
              NECTER
            </Link>
          </div>
        </div>
        {isHome ? (
          <>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="what"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="active"
                >
                  What
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="why"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="active"
                >
                  Why
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="how"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="active"
                >
                  How
                </NavLinks>
              </NavItem>
            </NavMenu>
          </>
        ) : null}
        <div className={styles.navbtn}>
          <a className={styles.navbtnlink}>Download</a>
        </div>
      </div>
    </Nav>
  );
}
