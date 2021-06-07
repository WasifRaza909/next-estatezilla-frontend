import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/Layout.module.css';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className={styles.children}>{children}</div>
      <Footer />
    </>
  );
}
