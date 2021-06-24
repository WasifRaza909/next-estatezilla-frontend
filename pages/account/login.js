import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/Layout';
import styles from '@/styles/Login.module.css';
import AuthContext from 'context/AuthContext';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { useContext } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error, user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      router.push('/account/dashboard');
    }
  }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      toast.error('Please Fill In All Fields');
      return;
    } else {
      login({ email, password });
    }
  };

  {
    error && toast.error(error);
  }

  return (
    <Layout>
      <div className={styles.card}>
        <h1>
          <FaUser />
          Log In
        </h1>
        <ToastContainer />
        <form onSubmit={submitHandler} className='form'>
          <div className={styles.formControl}>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder=''
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder=''
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
