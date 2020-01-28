import React from 'react';
import T from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ text }) => (
  <div className={styles.notifyContainer}>
    <p className={styles.notifyText}>{text}</p>
  </div>
);

Notification.propTypes = {
  text: T.string,
};

Notification.defaultProps = {
  text: 'Please check your input. Try again.',
};

export default Notification;
