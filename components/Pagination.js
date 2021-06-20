import { PER_PAGE } from 'config';
import Link from 'next/link';
import styles from '@/styles/Pagination.module.css';

export default function Pagination({ total, page }) {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <div className={styles.pagination}>
      {page > 1 && (
        <Link href={`/estates?page=${page - 1}`}>
          <a className={styles.prevButton}>Prev</a>
        </Link>
      )}

      {page < lastPage && (
        <Link href={`/estates?page=${page + 1}`}>
          <a className={styles.nextButton}>Next</a>
        </Link>
      )}
    </div>
  );
}
