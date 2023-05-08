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
      if (scrollPosition > 400) {
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
        className={`${styles.container} ${
          isLandingPage && !isScrolled && !isActive && !showMobileNav
            ? styles.white
            : styles.black
        }`}
      >
        <nav className={styles.navbar}>
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
          <div
            className={styles.menuBtn}
            onClick={() => setShowMobileNav((o) => !o)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <HiMenuAlt4 size={'24px'} />
          </div>
          <ul className={styles.navlist}>
            {headerProps.map((item, i) => (
              <li
                key={i}
                className={styles.navlink}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <AppLink href={item.href} type="menu">
                  {item.name}
                </AppLink>
                {/* {item.depth2 && isActive ? (
                  <div className={styles.depth2}>
                    <ul>
                      {item.depth2.map((depth2Item, j) => (
                        <li key={j}>
                          <Link href={depth2Item.href}>{depth2Item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null} */}
              </li>
            ))}
          </ul>
        </nav>
        {/* {isActive ? <div className={styles.inner}></div> : null} */}
      </header>
      <ul
        className={`${styles.mobileNav} ${
          showMobileNav ? styles.showMobileNav : styles.hideMobileNav
        }`}
      >
        {headerProps.map((item, i) => (
          <li
            key={i}
            className={styles.navlink}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AppLink href={item.href} type="menu">
              {item.name}
            </AppLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Header;
