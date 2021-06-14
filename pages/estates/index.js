import Layout from '@/components/Layout';
import styles from '@/styles/EstatesPage.module.css';
import EstateItem from 'components/EstateItem';
import Link from 'next/link';

export default function EstatesPage({ estates }) {
  return (
    <Layout>
      <div className={styles.listings}>
        <h1>All Listings</h1>
        {estates.length === 0 && <h2>No Estates to Show</h2>}

        {estates.map((estate) => (
          <EstateItem key={estate.id} estate={estate} />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/estates/`);

  const estates = await res.json();

  return {
    props: { estates },
  };
}
