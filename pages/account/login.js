import Layout from '@/components/Layout';
import styles from '@/styles/Login.module.css';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

export default function Login() {
  return (
    <Layout>
      <div className={styles.card}>
        <h1>
          <FaUser />
          Log In
        </h1>
        <form className='form'>
          <div className={styles.formControl}>
            <label htmlFor='email'>Email Address</label>
            <input type='email' name='email' id='email' placeholder='' />
          </div>
          <div className={styles.formControl}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder=''
            />
          </div>
          <input type='submit' value='Login' />
        </form>
        <p>
          Don't have an account?
          <Link href='/account/register'>
            <a> Register</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}
