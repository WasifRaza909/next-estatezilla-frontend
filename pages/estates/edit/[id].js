import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Layout from 'components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/EditEstatesPage.module.css';
import { API_URL } from '@/config/index';
import { parseCookie } from '@/helpers/index';

export default function EditEstatesPage({ est, token }) {
  const router = useRouter();

  const [values, setValues] = useState({
    estateAddress: est.estateAddress,
    estateType: est.estateType,
    bedrooms: est.bedrooms,
    bathrooms: est.bathrooms,
    size: est.size,
    price: est.price,
    phoneNumber: est.phoneNumber,
    condition: est.condition,
  });

  const onChangeHandler = (e) => {
    e.preventDefault();

    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    );

    if (hasEmptyFields) {
      toast.error('Please Fill In All Fields');
      return;
    }

    const res = await fetch(`${API_URL}/estates/${est.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      toast.error(`Something went wrong`);
    } else {
      const estate = await res.json();

      router.push(`/estates/${estate.id}`);
    }
  };

  return (
    <Layout>
      <div className={styles.addEstate}>
        <Link href='/events'>Go Back</Link>
        <h1>Edit Estate</h1>
        <ToastContainer />
        <form onSubmit={submitHandler}>
          <div className={styles.inputGroups}>
            <div className={styles.inputGroup}>
              <label htmlFor='address'>Estate Address</label>
              <input
                value={values.estateAddress}
                type='text'
                name='estateAddress'
                id='estateAddress'
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='estateType'>Estate Type</label>
              <select
                name='estateType'
                id='estateType'
                value={values.estateType}
                onChange={onChangeHandler}>
                <option>Select Estate Type</option>
                <option value='Single Family House'>Single Family House</option>
                <option value='Multi Family House'>Multi Family House</option>
                <option value='Land'>Land</option>
                <option value='Farm'>Farm</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='bedrooms'>Bedrooms</label>
              <input
                type='number'
                name='bedrooms'
                id='bedrooms'
                value={values.bedrooms}
                onChange={onChangeHandler}
                min='0'
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='bathrooms'>Bathrooms</label>
              <input
                type='number'
                name='bathrooms'
                id='bathrooms'
                value={values.bathrooms}
                onChange={onChangeHandler}
                min='0'
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='size'>Estate Size</label>
              <input
                type='number'
                name='size'
                id='size'
                value={values.size}
                onChange={onChangeHandler}
                min='0'
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='price'>Price</label>
              <input
                type='number'
                name='price'
                id='price'
                value={values.price}
                onChange={onChangeHandler}
                min='0'
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor='phoneNumber'>Phone Number</label>
              <input
                type='tel'
                placeholder=''
                name='phoneNumber'
                id='phoneNumber'
                value={values.phoneNumber}
                onChange={onChangeHandler}
                pattern='[0-9]{3}-[0-9]{4}-[0-9]{3}'
              />
              <small>Format: 123-4567-890</small>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='condition'>Condition</label>
              <select
                name='condition'
                id='condition'
                value={values.condition}
                onChange={onChangeHandler}>
                <option>Select Condition</option>
                <option value='perfect'>Perfect</option>
                <option value='excellent'>Excellent</option>
                <option value='good'>Good</option>
                <option value='bad'>Bad</option>
                <option value='worst'>Worst</option>
              </select>
            </div>
          </div>
          <input type='submit' value='Update Estate' />
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookie(req);
  const res = await fetch(`${API_URL}/estates/${id}`);

  const est = await res.json();

  return {
    props: {
      est,
      token,
    },
  };
}
