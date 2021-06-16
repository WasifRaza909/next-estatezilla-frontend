import Layout from '@/components/Layout';
import styles from '@/styles/dashboard.module.css';
import { API_URL } from '@/config/index';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function Dashboard({ estates }) {
  return (
    <Layout>
      <div className={styles.dashboard}>
        <h1>Dashboard</h1>
        <h2>My Events</h2>
        <div className={styles.cards}>
          {estates.length > 0 &&
            estates.map((estate) => (
              <div key={estate.id} className={styles.card}>
                <h3>
                  {estate.estateType} ({estate.size} sqft)
                </h3>
                <div className={styles.links}>
                  <Link href={`/estates/edit/${estate.id}`}>
                    <a className={styles.edit}>
                      <FaPencilAlt /> <span> Edit Estate</span>
                    </a>
                  </Link>
                  <Link href='/estates/edit/{estate.id}'>
                    <a className={styles.delete}>
                      <FaTimes /> <span> Delete</span>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/estates`);

  const estates = await res.json();

  return {
    props: {
      estates,
    },
  };
}
