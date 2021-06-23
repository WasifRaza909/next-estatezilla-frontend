import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '@/styles/Search.module.css';

export default function Search() {
  const [term, setTerm] = useState('');

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    router.push(`/estates/search?term=${term}`);

    setTerm('');
  };

  return (
    <div className={styles.search}>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Search by type || address || size || condition'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
