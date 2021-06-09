import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import EstateItem from '@/components/EstateItem';

import styles from '@/styles/HomePage.module.css';

export default function HomePage({ estates }) {
  return (
    <>
      <Layout>
        <div className={styles.background}>
          <h1>Welcome to EstateZilla</h1>
          <p>Find Properties of your choice!</p>
        </div>

        <div className={styles.listings}>
          <h1>Recent Listings</h1>
          {estates.length === 0 && <h2>No Estates to show</h2>}

          {estates.map((estate) => (
            <EstateItem key={estate.id} estate={estate} />
          ))}

          {estates.length > 0 && (
            <Link href='/estates/'>
              <a>View All Listings</a>
            </Link>
          )}
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/estates/`);

  const estates = await res.json();

  return {
    props: { estates },
  };
}