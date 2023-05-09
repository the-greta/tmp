import Summary from '@/components/atoms/Summary/Summary';
import Highlights from '@/components/templates/Highlights/Highlights';
import React from 'react';
import styles from './page.module.css';
import PageHero from '@/components/templates/PageHero/PageHero';
import {
  pageHeroProps,
  summaryProps,
  highlightsProps,
} from '@/const/services/services';

const page = () => {
  return (
    <main className={styles.main}>
      <PageHero
        titleProps={pageHeroProps.titleProps}
        subProps={pageHeroProps.subProps}
      />
      <Summary
        titleProps={summaryProps.titleProps}
        contentProps={summaryProps.contentProps}
      />
      <Highlights
        titleProps={highlightsProps.titleProps}
        subProps={highlightsProps.subProps}
        itemsProps={highlightsProps.itemsProps}
      />
    </main>
  );
};

export default page;
