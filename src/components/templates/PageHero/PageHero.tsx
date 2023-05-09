import HeroCaption from '@/components/atoms/HeroCaption/HeroCaption';
import React from 'react';
import styles from './PageHero.module.css';
import Image from 'next/image';
import wave from 'public/wave2.jpg';

type Props = {
  titleProps: string;
  subProps: string;
  descProps?: string;
};

const PageHero = ({ titleProps, subProps, descProps }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <HeroCaption
          subProps={subProps}
          titleProps={titleProps}
          descProps={descProps}
        />
      </div>
      <div className={styles.wrap}>
        <Image src={wave} fill alt="wave" />
      </div>
    </>
  );
};

export default PageHero;
