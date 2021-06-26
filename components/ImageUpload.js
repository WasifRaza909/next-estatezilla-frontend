import { API_URL } from '@/config/index';
import { useState } from 'react';
import styles from '@/styles/ImageUpload.module.css';
import Spinner from '@/components/Spinner';

export default function ImageUpload({ token, estId, imageUploaded }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('files', image);
    formData.append('refId', estId);
    formData.append('ref', 'estates');
    formData.append('field', 'image');

    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      return imageUploaded();
      setLoading(false);
    }
  };
  const changeHandler = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div className={styles.imageUpload}>
      {loading && <Spinner />}
      <h1>Upload Estate Image</h1>
      <form onSubmit={submitHandler}>
        <div>
          <input type='file' onChange={changeHandler} />
        </div>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}
