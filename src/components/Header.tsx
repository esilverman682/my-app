import React from 'react';
import styles from 'scss/components/Header.module.scss';
import Link from 'next/link';
import { client, MenuLocationEnum } from 'client';

interface Props {
  title?: string;
  description?: string;
 
}

function Header({
  title = 'Headless Kap',
  description,
 
}: Props): JSX.Element {
  const { menuItems } = client.useQuery()
  const links = menuItems({
    // HEADER MENU NAVIGATION NAME IS -->  HCMS_MENU_HEADER THE FOOTER IS --> HCMS_MENU_FOOTER
    where: { location: MenuLocationEnum.HCMS_MENU_HEADER },
  }).nodes;

  return (
    <header className="headerz">
    
      <div className={styles.wrap}>
        <div className={styles['title-wrap']}>
          <p className={styles['site-title']}>
            <Link href="/">
              <a>{title}</a>
            </Link>
          </p>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        <div className={styles.menu}>
          <ul>
            {links?.map((link) => (
              <li key={`${link.label}$-menu`}>
                <Link href={link.url ?? ''}>
                  <a href={link.url}>{link.label}</a>
                </Link>
              </li>
            ))}
            <li>
              <Link href="https://master-my-app.vercel.app/">
                <a
                  className="button"
                  href="https://master-my-app.vercel.app/">
                  APPLY NOW
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
