'use client';

import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import AppLink from '@/components/atoms/AppLink/AppLink';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import gretaGold from 'public/greta_gold.png';
import gretaWhite from 'public/greta_white.png';
import { HiMenuAlt4 } from 'react-icons/hi';

interface depth2Item {
  name: string;
  href: string;
}
interface item {
  name: string;
  href: string;
  depth2?: depth2Item[];
}
type Props = {
  headerProps: item[];
};

const Header = ({ headerProps }: Props) => {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const [isActive, setIsActive] = useState(false);
  const handleMouseEnter = () => {
    setIsActive(true);
  };
  const handleMouseLeave = () => {
    setIsActive(false);
  };
  let activeClass = '';
  activeClass = isActive ? 'styles.active' : '';

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <header
        className={`${styles.header} ${
          isLandingPage && !isScrolled && !isActive && !showMobileNav
            ? styles.black
            : ''
        }`}
      >
        <div className={styles.inner}>
          <div className={styles.logo}>
            <AppLink href="./" type="menu">
              <Image
                src={
                  isLandingPage && !isScrolled && !isActive && !showMobileNav
                    ? gretaWhite
                    : gretaGold
                }
                alt="Greta Logo"
                fill
                unoptimized={true}
                priority
              />
            </AppLink>
          </div>
          <nav className={styles.gnb}>
            <ul>
              {headerProps.map((item, i) => (
                <li
                  key={i}
                  className={styles.gnb_list}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <AppLink href={item.href} type="menu">
                    {item.name}
                  </AppLink>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className={styles.nav_btn_box}
            onClick={() => setShowMobileNav((o) => !o)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <HiMenuAlt4 size={'24px'} />
          </div>
        </div>
        <div
          className={`${styles.navigation_wrap} ${
            showMobileNav ? styles.open : styles.close
          }`}
        >
          <div className={styles.navigation}>
            <ul className={styles.nav_list}>
              {headerProps.map((item, i) => (
                <li
                  className={styles.nav_item}
                  key={i}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <AppLink href={item.href} type="menu">
                    {item.name}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
