import styles from '@/styles/Modal.module.css';
import { FaTimes } from 'react-icons/fa';

export default function Modal({ showModal, children, onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <a className={styles.modalIcon}>
          <FaTimes onClick={() => onClose()} />
        </a>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
}
