import React from 'react';
import styles from './Title.module.css';

export type Props = {
  titleProps: string;
  subProps: string;
  descProps?: string;
};

const Title = ({ titleProps, subProps, descProps }: Props) => {
  return (
    <div className={styles.title}>
      <div>
        <h2>{titleProps}</h2>
        <sub>{subProps}</sub>
      </div>
      {descProps ? <section>{descProps}</section> : null}
    </div>
  );
};

export default Title;
