import { getNextStaticProps } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { CTA, Footer, Header, Hero, Posts } from 'components';
import styles from 'scss/pages/home.module.scss';
import { client, HomecolumnIdType } from 'client';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
 


//import HomeColumn from '../components/HomeColumn';

export function TypingEffect() {
  const [state] = useState ({
    title: '',
    titleTwo: '',
    titleThree: '',
  })
  return (
    <div className={styles.text}>
      <div className='title'>{state.title}</div>
      <div className='titleTwo'>{state.titleTwo}</div>
      <div className='titleThree'>{state.titleThree}</div>
      <Typewriter
        options={{ 
          autoStart: true,
          loop: true,
          delay: 70,
          strings: [
            "run your business",
            "grow your business",
            "secure your business",
            "renovate",
            "get new equipment",
            "pay my taxes",
            "move to a new location",
            "purchase inventory",
            "run marketing campaigns",
          ],
        }}
      />
    </div>
  );
}
 
export default function Page() {
  
  const { usePosts, useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const posts = usePosts({
    first:9,
    where: {
      categoryName: 'uncategorized',
    },
  });
  interface Props {
    homecolumn?: string;
    id?: string;
  }
  
  const homecolumn = useQuery().homecolumns()?.nodes;
  
  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />
      <Head>
        <title>
          {generalSettings.title} - {generalSettings.description}
        </title>
      </Head>

      <main className="content">
        <Hero
          title="Business Loan Financing to: "
          buttonText="GET STARTED"
          buttonURL="https://example.com"
          //button2Text="2nd Button"
          //button2URL="https://example.com"
          bgImage="/images/headless_hero_background.webp"
          id={styles.home_hero}
          description="Questions"
          phone="(800) 780-7133"
        >

          <TypingEffect></TypingEffect>
        </Hero>
    
 
 
        <CTA
          title="Questions or comments?"
          buttonText="Contact Us"
          buttonURL="https://master-my-app.vercel.app/contact-us"
          headingLevel="h2"
        >
          <p>
            We welcome feature requests, bug reports and questions in the{' '}
            <a href="https://master-my-app.vercel.app/">
              Headless Framework GitHub repository
            </a>
            .
          </p>
        </CTA>
      </main>
     
      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
