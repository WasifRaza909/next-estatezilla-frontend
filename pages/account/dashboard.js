import Layout from '@/components/Layout';
import styles from '@/styles/dashboard.module.css';
import { API_URL } from '@/config/index';
import { FaPencilAlt, FaTimes, FaWindowMaximize } from 'react-icons/fa';
import Link from 'next/link';
import { parseCookie } from '@/helpers/index';
import { useRouter } from 'next/router';

export default function Dashboard({ estates, token }) {
  const router = useRouter();
  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure?')) {
      const res = await fetch(`${API_URL}/estates/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      router.reload();
    } else {
      return;
    }
  };

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
                  <Link href='#'>
                    <a
                      onClick={() => deleteHandler(estate.id)}
                      className={styles.delete}>
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

export async function getServerSideProps({ req }) {
  const { token } = parseCookie(req);

  const res = await fetch(`${API_URL}/estates/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const estates = await res.json();

  return {
    props: {
      estates,
      token,
    },
  };
}
