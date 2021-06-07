import styles from '@/styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; EstateZilla 2021</p>
      <Link href='/about'>
        <a>About this Project</a>
      </Link>
    </footer>
  );
}
