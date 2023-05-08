import React from 'react';
import HeroCaption from '@/components/atoms/HeroCaption/HeroCaption';
import styles from './HeroSection.module.css';

const HeroSection = ({ titleProps, subProps, descProps }) => {
  return (
    <div className={styles.container}>
      <HeroCaption
        titleProps={titleProps}
        subProps={subProps}
        descProps={descProps}
      />
    </div>
  );
};

export default HeroSection;
