import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import EstateItem from '@/components/EstateItem';
import { API_URL } from '@/config/index';

import styles from '@/styles/HomePage.module.css';

export default function HomePage({ estates }) {
  return (
    <>
      <Layout>
        <div className={styles.listings}>
          <h1>Recent Listings</h1>
          {estates.length === 0 && <h2>No Estates to Show</h2>}

          {estates.map((estate) => (
            <EstateItem key={estate.id} estate={estate} />
          ))}

          {estates.length > 0 && (
            <Link href='/estates/'>
              <a className={styles.button}>View All Listings</a>
            </Link>
          )}
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/estates?_limit=3&_sort=date:DESC`);

  const estates = await res.json();

  return {
    props: { estates: estates },
  };
}
