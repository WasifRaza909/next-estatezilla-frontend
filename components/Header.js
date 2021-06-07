import styles from '@/styles/Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navFlex}>
        <Link href='/'>
          <a className={styles.logo}>EstateZilla</a>
        </Link>
        <ul className={styles.navLinks}>
          <Link href='/properties'>
            <a className={styles.navLinksItems}>Properties</a>
          </Link>
          <Link href='/properties/add'>
            <a className={styles.navLinksItems}>Add Property</a>
          </Link>
          <Link href='/account/dashboard'>
            <a className={styles.navLinksItems}>Dashboard</a>
          </Link>
          <Link href='/dashboard'>
            <a className={styles.navLinksItems}>Login</a>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
