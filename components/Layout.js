import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/Layout.module.css';
import { useRouter } from 'next/router';

export default function Layout({ children, title }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {router.pathname === '/' && (
        <div className={styles.background}>
          <h1>Welcome to EstateZilla</h1>
          <p>Find Properties of your choice!</p>
        </div>
      )}
      <div className={styles.children}>{children}</div>
      <Footer />
    </>
  );
}
