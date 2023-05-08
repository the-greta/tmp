import React from 'react';
import styles from './Summary.module.css';

const Summary = ({ titleProps, contentProps }) => {
  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <h2>{titleProps}</h2>
        <div>
          {contentProps.map((cardContent, i) => (
            <span key={i}>{cardContent}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;
