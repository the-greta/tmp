import Summary from '@/components/atoms/Summary/Summary';
import Title from '@/components/atoms/Title/Title';
import React from 'react';
import styles from './page.module.css';
import Technology from '@/components/templates/Technology/Technology';
import PageHero from '@/components/templates/PageHero/PageHero';
import {
  summaryProps,
  descProps,
  technologyProps,
} from '@/const/services/synthesis';
import { pageHeroProps } from '@/const/services/services';

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

      <div className={styles.container}>
        <Title
          titleProps={descProps.titleProps}
          subProps={descProps.subProps}
          descProps={descProps.descProps}
        />
        {descProps.itemsProps.map((item, i) => (
          <div key={i} className={styles.item}>
            <h3>{item.title}</h3>
            <div>
              {item.items.map((item, j) => (
                <div key={j} className={styles.itemWrap}>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemContent}>{item.content}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Technology
        titleProps={technologyProps.titleProps}
        subProps={technologyProps.subProps}
        itemsProps={technologyProps.itemsProps}
      />
    </main>
  );
};

export default page;
