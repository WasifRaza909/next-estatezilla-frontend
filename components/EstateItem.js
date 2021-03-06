import Image from 'next/image';
import styles from '@/styles/EstateItem.module.css';
import Link from 'next/link';

export default function EstateItem({ estate }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={
            estate.image
              ? estate.image.formats.thumbnail.url
              : '/images/default.png'
          }
          width={200}
          height={120}
        />
      </div>
      <div className={styles.center}>
        <div className={styles.leftCenter}>
          <p className={styles.date}>{estate.date}</p>
          <h3>{estate.estateType}</h3>
          <h5 className={styles.price}>Rs {estate.price}</h5>
        </div>
        <hr />
        <div className={styles.badges}>
          <div className={`${styles.badge} ${styles.bedrooms}`}>
            Bed : {estate.bedrooms}
          </div>
          <div className={`${styles.badge} ${styles.bathrooms}`}>
            Bath : {estate.bathrooms}
          </div>
          <div className={`${styles.badge} ${styles.size}`}>
            {estate.size} sqft
          </div>
        </div>
      </div>

      <Link href={`/estates/${estate.id}`}>
        <a className={styles.button}>Details</a>
      </Link>
    </div>
  );
}
