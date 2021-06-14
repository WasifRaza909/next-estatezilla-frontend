import { useState } from 'react';
import Layout from 'components/Layout';
import Link from 'next/link';
import styles from '@/styles/EditEstatesPage.module.css';

export default function EditEstatesPage() {
  const [values, setValues] = useState({});

  const onChangeHandler = (e) => {
    e.preventDefault();

    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <div className={styles.addEstate}>
        <Link href='/events'>Go Back</Link>
        <h1>Edit Estate</h1>
        <form>
          <div className={styles.inputGroups}>
            <div className={styles.inputGroup}>
              <label htmlFor='address'>Property Address</label>
              <input
                type='text'
                name='address'
                id='address'
                onChange={onChangeHandler}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='estateType'>Estate Type</label>
              <select
                name='estateType'
                id='estateType'
                onChange={onChangeHandler}>
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
                onChange={onChangeHandler}
                min='0'
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='homeSize'>Home Size</label>
              <input
                type='number'
                name='homeSize'
                id='homeSize'
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
                onChange={onChangeHandler}
                min='0'
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='condition'>Condition</label>
              <select
                name='condition'
                id='condition'
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
