import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './AppLink.module.css';
import { HiOutlineExternalLink } from 'react-icons/hi';

type Props = {
  href: string;
  type: string;
  children: ReactNode;
};

const AppLink = ({ href, type, children }: Props) => {
  const isExternal = href.startsWith('http');
  const target = href || (isExternal ? '_blank' : '');
  let linkClassName = '';

  if (type === 'menu') {
    linkClassName = styles.menu;
  } else if (type === 'detail') {
    linkClassName = styles.detail;
  }

  return (
    <Link
      href={target}
      rel={target === '_blank' ? 'noreferrer' : ''}
      className={linkClassName}
    >
      {children}
      {isExternal ? <HiOutlineExternalLink size={'1em'} /> : null}
    </Link>
  );
};

export default AppLink;
