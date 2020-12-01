import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './download.module.css';

function Home() {
  const context = useDocusaurusContext();

  const imgLogoApple = useBaseUrl('img/logo-apple.svg');
  const imgLogoLinux = useBaseUrl('img/logo-linux.svg');
  const imgLogoWindows = useBaseUrl('img/logo-windows.svg');

  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Downloads</h1>
            </div>
          </div>
          <div className="row">
            <div className='col'>
              <div className={styles.tile}>
                <img height={80} src={imgLogoWindows} alt='logo-windows' className={styles.logo} />

                <a className='button button--secondary' href='https://github.com/EvntBoard/application/releases/latest' target='_blank'>
                  Download for Windows
                </a>
              </div>
            </div>
            <div className='col'>
              <div className={styles.tile}>
                <img height={80} src={imgLogoApple} alt='logo-apple' className={styles.logo} />
                <a className='button button--secondary' href='https://github.com/EvntBoard/application/releases/latest' target='_blank'>
                  Download for Mac
                </a>
              </div>
            </div>
            <div className='col'>
              <div className={styles.tile}>
                <img height={80} src={imgLogoLinux} alt='logo-linux' className={styles.logo} />
                <a className='button button--secondary' href='https://github.com/EvntBoard/application/releases/latest' target='_blank'>
                  Download for Linux
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
