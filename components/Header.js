import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [user, setUser] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navFlex}>
        <Link href='/'>
          <a className={styles.logo}>EstateZilla</a>
        </Link>
        <ul className={styles.navLinks}>
          <Link href='/estates'>
            <a className={styles.navLinksItems}>Estates</a>
          </Link>
          <Link href='/estates/add'>
            <a className={styles.navLinksItems}>Add Estate</a>
          </Link>
          <Link href='/account/dashboard'>
            <a className={styles.navLinksItems}>Dashboard</a>
          </Link>

          {!user ? (
            <Link href='/account/login'>
              <a className={styles.navLinksItems}>Login</a>
            </Link>
          ) : (
            <Link href='/'>
              <a className={styles.navLinksItems}>Logout</a>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
}
