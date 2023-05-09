import styles from './page.module.css';
import HeroSection from '@/components/templates/HeroSection/HeroSection';
import PageSummary from '@/components/templates/PageSummary/PageSummary';
import Highlights from '@/components/templates/Highlights/Highlights';
import { heroSectionProps, summaryProps, highlightsProps } from '@/const/home';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection
        titleProps={heroSectionProps.titleProps}
        subProps={heroSectionProps.subProps}
        descProps={heroSectionProps.descProps}
      />
      <div className={styles.summary}>
        <PageSummary
          titleProps={summaryProps.titleProps}
          contentProps={summaryProps.contentProps}
        />
      </div>
      <Highlights
        titleProps={highlightsProps.titleProps}
        subProps={highlightsProps.subProps}
        itemsProps={highlightsProps.itemsProps}
      />
    </main>
  );
}
