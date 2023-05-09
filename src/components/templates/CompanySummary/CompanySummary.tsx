import Title from '@/components/atoms/Title/Title';
import React from 'react';
import styles from './CompanySummary.module.css';

const CompanySummary = ({ titleProps, subProps, tableItems }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title titleProps={titleProps} subProps={subProps} />
      </div>
      <div className={styles.content}>
        <table className={styles.table}>
          <tbody>
            {tableItems.map((tableItem, i) => (
              <tr key={i}>
                <th>{tableItem.th}</th>
                <td>{tableItem.td}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanySummary;
