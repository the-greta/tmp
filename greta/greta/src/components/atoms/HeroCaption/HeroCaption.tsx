import React from 'react';
import styles from './HeroCaption.module.css';

type Props = {
  subProps: string;
  titleProps: string;
  descProps?: string;
};

const HeroCaption = ({ subProps, titleProps, descProps }: Props) => {
  return (
    <div className={styles.hero}>
      <div>
        <sub>{subProps}</sub>
        <h1>{titleProps}</h1>
        {descProps ? <desc>{descProps}</desc> : null}
      </div>
    </div>
  );
};

export default HeroCaption;
