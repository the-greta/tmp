import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div>
          <span className={styles.company}>㈜그레타</span>
          <div>
            <span>
              서울시 중구 무교로 28, 시그너스빌딩 608호 | 대표번호 070-8648-1024
            </span>
            <span>
              Cygnus 608, 28 Mugyo-ro, Jung-gu, Seoul-si, Republic of Korea
            </span>
          </div>
          <span className={styles.copyright}>
            © GRETA Inc. All rights reserved.
          </span>
          {/* <span>개인정보처리방침</span> */}
          {/* <span>Contact Us</span> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
