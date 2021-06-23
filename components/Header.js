import { useContext } from 'react';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import AuthContext from 'context/AuthContext';
import Search from '@/components/Search';

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navFlex}>
        <Link href='/'>
          <a className={styles.logo}>EstateZilla</a>
        </Link>

        <Search />

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
