import Accordion from '@/components/atoms/Accordion/Accordion';
import React from 'react';
import Title from '@/components/atoms/Title/Title';
import styles from './TeamMember.module.css';

const TeamMember = ({ titleProps, subProps, itemsProps }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title titleProps={titleProps} subProps={subProps} />
      </div>
      <div className={styles.content}>
        <Accordion itemsProps={itemsProps} />
      </div>
    </div>
  );
};

export default TeamMember;
