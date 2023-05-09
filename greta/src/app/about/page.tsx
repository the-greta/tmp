import CompanySummary from '@/components/templates/CompanySummary/CompanySummary';
import Location from '@/components/templates/Location/Location';
import PageHero from '@/components/templates/PageHero/PageHero';
import TeamMember from '@/components/templates/TeamMemeber/TeamMember';
import React from 'react';
import styles from './page.module.css';
import {
  pageHeroProps,
  companySummaryProps,
  teamMemberProps,
  locationProps,
} from '@/const/about';

const page = () => {
  return (
    <main className={styles.main}>
      <PageHero
        titleProps={pageHeroProps.titleProps}
        subProps={pageHeroProps.subProps}
      />
      <CompanySummary
        titleProps={companySummaryProps.titleProps}
        subProps={companySummaryProps.subProps}
        tableItems={companySummaryProps.tableItems}
      />
      <TeamMember
        titleProps={teamMemberProps.titleProps}
        subProps={teamMemberProps.subProps}
        itemsProps={teamMemberProps.itemsProps}
      />
      <Location
        titleProps={locationProps.titleProps}
        subProps={locationProps.subProps}
        addressProps={locationProps.addressProps}
      />
    </main>
  );
};

export default page;
