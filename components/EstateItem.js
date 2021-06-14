import Image from 'next/image';
import styles from '@/styles/EstateItem.module.css';
import Link from 'next/link';

export default function EstateItem({ estate }) {
  console.log(`${estate.image.formats.thumbnail.url}`);

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={
            estate.image
              ? estate.image.formats.thumbnail.url
              : '/images/multi-family-1.jpg'
          }
          width={170}
          height={120}
        />
      </div>
      <div className={styles.center}>
        <div>
          <p className={styles.date}>{estate.date}</p>
          <h3>{estate.estateType}</h3>
          <h5 className={styles.price}>Rs {estate.price}</h5>
        </div>
        <hr />
        <div className={styles.badges}>
          <div className={styles.badge}>Bed : {estate.bedrooms}</div>
          <div className={styles.badge}>Bath : {estate.bathrooms}</div>
          <div className={styles.badge}>{estate.size} sqft</div>
        </div>
      </div>

      <Link href={`/estates/${estate.slug}`}>
        <a className={styles.button}>Details</a>
      </Link>
    </div>
  );
}
