import Layout from '@/components/Layout';
import styles from '@/styles/EstatesPage.module.css';
import EstateItem from '@/components/EstateItem';
import Pagination from '@/components/Pagination';
import { API_URL, PER_PAGE } from '@/config/index';

export default function EstatesPage({ estates, total, page }) {
  return (
    <Layout>
      <div className={styles.listings}>
        <h1>All Listings</h1>
        {estates.length === 0 && <h2>No Estates to Show</h2>}

        {estates.map((estate) => (
          <EstateItem key={estate.id} estate={estate} />
        ))}
      </div>
      <Pagination total={total} page={page} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/estates/count`);
  const total = await totalRes.json();

  const res = await fetch(
    `${API_URL}/estates?_sort=date:DESC&_limit=${PER_PAGE}&_start=${start}`
  );

  const estates = await res.json();

  return {
    props: { estates, total, page: +page },
  };
}
