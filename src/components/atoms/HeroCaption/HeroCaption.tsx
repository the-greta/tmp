'use client';

import React from 'react';
import styles from './HeroCaption.module.css';
import { usePathname } from 'next/navigation';

type Props = {
  subProps: string;
  titleProps: string;
  descProps?: string;
};

const HeroCaption = ({ subProps, titleProps, descProps }: Props) => {
  const pathname = usePathname();
  return (
    <div className={`${styles.hero} ${pathname == '/' ? styles.landing : ''}`}>
      <div>
        <sub>{subProps}</sub>
        <h1>{titleProps}</h1>
        {descProps ? <desc>{descProps}</desc> : null}
      </div>
    </div>
  );
};

export default HeroCaption;
