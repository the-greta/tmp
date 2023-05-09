import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div>
          <span>© GRETA Inc. All rights reserved.</span>
          {/* <span>개인정보처리방침</span> */}
          {/* <span>Contact Us</span> */}
        </div>
        <div>
          <span className={styles.company}>㈜그레타</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
