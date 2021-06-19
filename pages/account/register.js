import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from 'react';
import Layout from '@/components/Layout';
import styles from '@/styles/Login.module.css';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import AuthContext from '../../context/AuthContext';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { register, error } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      username === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      toast.error('Please Fill in All Fields');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not matched!');
      return;
    }

    register({ username, email, password });
  };

  {
    error && toast.error(error);
  }
  return (
    <Layout>
      <div className={styles.card}>
        <h1>
          <FaUser />
          Register
        </h1>
        <ToastContainer />
        <form onSubmit={submitHandler} className='form'>
          <div className={styles.formControl}>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder=''
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
          <div className={styles.formControl}>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              placeholder=''
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
