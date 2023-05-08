import React from 'react';
import styles from './Accordion.module.css';

interface item {
  title: string;
  descs: string[];
}
type Props = { itemsProps: item[] };

const Accordion = ({ itemsProps }: Props) => {
  return (
    <ul className={styles.container}>
      {itemsProps.map((item, i) => (
        <li key={i} className={styles.wrap}>
          <div className={styles.flex}>
            <h3>{item.title}</h3>
            <div>open</div>
          </div>
          <ul className={styles.desc}>
            {item.descs.map((desc, j) => (
              <li>
                <span key={`desc_${j}`}>{desc}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
