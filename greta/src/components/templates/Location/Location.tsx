import Title from '@/components/atoms/Title/Title';
import React from 'react';
import styles from './Location.module.css';
import locationMap from 'public/map.png';
import Image from 'next/image';

const Location = ({ titleProps, subProps, addressProps }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title titleProps={titleProps} subProps={subProps} />
      </div>
      <div className={styles.content}>
        <p>{addressProps}</p>
        <div>
          <Image src={locationMap} fill alt="greta_location_map" />
        </div>
        <span>출처: 공간정보오픈플랫폼</span>
      </div>
    </div>
  );
};

export default Location;
