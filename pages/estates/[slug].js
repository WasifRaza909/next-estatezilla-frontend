import Layout from '@/components/Layout';
import styles from '@/styles/Estate.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ({ est }) {
  console.log(est);
  return (
    <Layout>
      <div className={styles.estate}>
        <div className={styles.top}>
          <span className={styles.date}>{est.date}</span>
          <h1>{est.estateType}</h1>
        </div>
        <div className={styles.image}>
          <Image src={est.image} width={900} height={462.5} />
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomFlex}>
            <div>
              <p>Bedrooms : {est.bedrooms}</p>
              <p>Bathrooms : {est.bathrooms}</p>
              <p>{est.size} SQFT</p>
            </div>
            <h2 className={styles.price}>Rs {est.price}</h2>
          </div>
          <p className={styles.address}>
            <span>Address</span> : {est.estateAddress}
          </p>

          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1809.377915012897!2d67.06362665804616!3d24.906308996008065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU0JzIyLjciTiA2N8KwMDMnNTMuMCJF!5e0!3m2!1sen!2s!4v1623317396291!5m2!1sen!2s'
            width='600'
            height='350'
            className={styles.map}
            style={{ border: 0, width: '100%' }}
            allowfullscreen=''
            loading='lazy'></iframe>
        </div>
        <Link href='/'>
          <a className={styles.back}>{'<'} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`http://localhost:3000/api/estates?slug=${slug}`);

  const ests = await res.json();

  return {
    props: {
      est: ests[0],
    },
  };
}
