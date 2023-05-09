import HeroCaption from '@/components/atoms/HeroCaption/HeroCaption';
import React from 'react';
import styles from './PageHero.module.css';

type Props = {
  titleProps: string;
  subProps: string;
  descProps?: string;
};

const PageHero = ({ titleProps, subProps, descProps }: Props) => {
  return (
    <div className={styles.container}>
      <HeroCaption
        subProps={subProps}
        titleProps={titleProps}
        descProps={descProps}
      />
    </div>
  );
};

export default PageHero;
