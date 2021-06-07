import Layout from '@/components/Layout.js';
import styles from '@/styles/about.module.css';

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <h1>About This App</h1>
        <p>This is an app to help in Buying & Selling of Properties</p>
        <small>Version : 1.0.0</small>
      </div>
    </Layout>
  );
}
