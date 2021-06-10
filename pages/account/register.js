import Layout from '@/components/Layout';
import styles from '@/styles/Login.module.css';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

export default function Register() {
  return (
    <Layout>
      <div className={styles.card}>
        <h1>
          <FaUser />
          Register
        </h1>
        <form className='form'>
          <div className={styles.formControl}>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' id='username' placeholder='' />
          </div>
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
          <div className={styles.formControl}>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              placeholder=''
            />
          </div>
          <input type='submit' value='Register' />
        </form>
        <p>
          Already have an account?
          <Link href='/account/login'>
            <a> Login</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}
