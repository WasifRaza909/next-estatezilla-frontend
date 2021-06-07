import Layout from '@/components/Layout';
import { FaExclamationTriangle } from 'react-icons/fa';
import styles from '@/styles/notFound.module.css';
import Link from 'next/link';

export default function notFound() {
  return (
    <Layout title='Page - Not Found'>
      <div className={styles.flex}>
        <h1 className={styles.h1}>
          <FaExclamationTriangle />
        </h1>
        <p className={styles.p}>Page Not Found</p>

        <Link href='/'>
          <a className={styles.a}>Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}
