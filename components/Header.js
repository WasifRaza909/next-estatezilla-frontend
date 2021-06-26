import { useContext, useState } from 'react';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import AuthContext from 'context/AuthContext';
import Search from '@/components/Search';
import BurgerMenu from '@/components/BurgerMenu';

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [showNavItems, setShowNavItems] = useState(false);

  const logoutHandler = () => {
    logout();
  };

  const burgerMenuHandler = () => {
    setShowNavItems(!showNavItems);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.burgerMenu}>
        <Link href='/'>
          <a className={styles.burgerMenuLogo}>EstateZilla</a>
        </Link>
        <div className={styles.lines} onClick={burgerMenuHandler}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={!showNavItems ? styles.navFlex : styles.navFlexOn}>
        <Link href='/'>
          <a className={styles.logo}>EstateZilla</a>
        </Link>
        <div className={styles.search}>
          <Search />
        </div>
        <ul className={styles.navLinks}>
          <Link href='/estates'>
            <a className={styles.navLinksItems}>Estates</a>
          </Link>
          {user && (
            <>
              <Link href='/estates/add'>
                <a className={styles.navLinksItems}>Add Estate</a>
              </Link>
              <Link href='/account/dashboard'>
                <a className={styles.navLinksItems}>Dashboard</a>
              </Link>
            </>
          )}
          {!user ? (
            <Link href='/account/login'>
              <a className={styles.navLinksItems}>Login</a>
            </Link>
          ) : (
            <Link href='/'>
              <button onClick={logoutHandler} className={styles.navLinksItems}>
                Logout
              </button>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
}
