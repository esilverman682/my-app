import { getNextStaticProps } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { CTA, Footer, Header, Hero, Posts } from 'components';
import styles from 'scss/pages/home.module.scss';
import { client } from 'client';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';

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
        <section className={styles.explore}>
          <div className="wrap">
            <h2>
              Explore this Example Projects 
            </h2>
            <p>
              This headless example project uses{' '}
              <a href="https://nextjs.org/">Next.js</a>,{' '}
              <a href="https://graphql.org/">GraphQL</a>,{' '}
              <a href="https://gqty.dev">GQty</a> and the{' '}
              <a href="https://master-my-app.vercel.app/">
                WP&nbsp;Engine headless packages
              </a>{' '}
              for WordPress integration. Dive in and edit this template at{' '}
              <code>src/pages/index.tsx</code> or discover more below.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>Static Site Generation</h3>
                <p>
                  This example project uses Next.js&apos;{' '}
                  <a href="https://nextjs.org/docs/basic-features/pages#two-forms-of-pre-rendering">
                    Static Site Generation (SSR)
                  </a>
                  . SSG unlocks better performance by statically generating
                  pages that can then be cached by a CDN.
                </p>
              </div>

              <div className={styles.feature}>
                <h3>Incremental Static Regeneration</h3>
                <p>
                  This example project uses Next.js&apos;{' '}
                  <a href="https://vercel.com/docs/concepts/next.js/incremental-static-regeneration">
                    Incremental Static Regeneration (ISR)
                  </a>
                  . This allows you to revalidate static pages without having to
                  rebuild your entire site. By default, Faust.js sets a{' '}
                  <strong>
                    15 minute <code>revalidate</code> time per page.
                  </strong>{' '}
                  <br />
                  <a href="https://faustjs.org/docs/next/guides/ssr-ssg#setting-up-incremental-static-regeneration-isr">
                    Learn more about how Faust.js uses ISR.
                  </a>
                </p>
              </div>

              <div className={styles.feature}>
                <h3>Ready for Atlas</h3>
                <p>
                  <a href="https://master-my-app.vercel.app">Atlas</a> is the complete
                  Headless WordPress Platform for absurdly fast dynamic sites.
                  One headless solution, one price, all in one place.
                  <br />
                </p>
              </div>
            </div>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>Global Styles and Fonts</h3>
                <p>
                  Add styles to load on every page, such as typography and
                  layout rules, in <code>src/scss/main.scss</code>. The project
                  adds{' '}
                  <a href="https://necolas.github.io/normalize.css/">
                    normalize.css
                  </a>{' '}
                  in <code>src/pages/_app.tsx</code>. Google Fonts are enqueued
                  in <code>src/pages/_document.tsx</code>.
                </p>
              </div>

              <div className={styles.feature}>
                <h3>Hooks</h3>
                <p>
                  Fetch data from WordPress with <code>usePost</code>,{' '}
                  <code>usePosts</code>, <code>useGeneralSettings</code> and
                  other custom hooks. Use these hooks in your page templates to
                  pass data to custom components. See{' '}
                  <code>src/pages/index.tsx</code> for examples.
                </p>
              </div>

              <div className={styles.feature}>
                <h3>Components</h3>
                <p>
                  Add or edit components in the <code>src/components</code>{' '}
                  folder. Find component styles at{' '}
                  <code>src/scss/components</code>, which use{' '}
                  <a href="https://master-my-app.vercel.app">
                    CSS modules
                  </a>{' '}
                  to scope CSS to each component.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Posts
          posts={posts.nodes}
          heading="Latest Posts"
          intro="The Posts component in src/pages/index.tsx shows the latest six posts from the connected WordPress site."
          headingLevel="h2"
          postTitleLevel="h3"
          id={styles.post_list}
        />
        <CTA
          title="Questions or comments?"
          buttonText="Join the discussion on GitHub"
          buttonURL="https://master-my-app.vercel.app/discussions"
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
