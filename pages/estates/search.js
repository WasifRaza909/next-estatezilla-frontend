import qs from 'qs';
import Layout from '@/components/Layout';
import EstateItem from '@/components/EstateItem';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { API_URL } from 'config';
import styles from '@/styles/SearchPage.module.css';

export default function SearchPage({ estates }) {
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.search}>
        <Link href='/estates'>Go Back</Link>
        <h1>Search Results for "{router.query.term}"</h1>

        {estates.length === 0 && <h3>No estates to show</h3>}

        {estates.map((est) => (
          <EstateItem key={est.id} estate={est} />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { estateType_contains: term },
        { estateAddress_contains: term },
        { size_contains: term },
        { condition_contains: term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/estates?_sort=date:DESC&${query}`);
  const estates = await res.json();

  return {
    props: { estates },
  };
}
