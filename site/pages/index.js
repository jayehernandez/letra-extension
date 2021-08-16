import { useEffect, useState } from 'react';
import { styled } from 'stitches.config';
import Head from 'next/head';
import Header from '~/Header';
import Footer from '~/Footer';
import Hero from '~/Hero';
import About from '~/About';
import Languages from '~/Languages';
import Faq from '~/Faq';
import Contact from '~/Contact';
import Contribute from '~/Contribute';
import Box from '~/ui/Box';
import Image from 'next/image';
import { createApi } from 'unsplash-js';

// We're making this run every build instead of every request because I might not be able to keep up with server costs haha
export async function getStaticProps() {
  const languages = await fetch('https://letra-extension.herokuapp.com/languages');
  const languageData = await languages.json();

  const githubRepoRes = await fetch('https://api.github.com/repos/jayehernandez/letra-extension');
  const githubContributorsRes = await fetch(
    'https://api.github.com/repos/jayehernandez/letra-extension/contributors?q=contributions&order=desc',
  );
  const githubRepo = await githubRepoRes.json();
  const githubContributors = await githubContributorsRes.json();

  const unsplash = createApi({ accessKey: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY });
  const unsplashRes = await unsplash.photos.getRandom({ collections: [9836658] });
  const background = unsplashRes.response;

  const github = {
    forks_count: githubRepo.forks_count,
    stargazers_count: githubRepo.stargazers_count,
    top_contributors: githubContributors.map((contributor) => ({
      avatar_url: contributor.avatar_url,
      html_url: contributor.html_url,
      login: contributor.login,
    })),
  };

  return {
    props: {
      languages: languageData.languages,
      github,
      background,
    },
  };
}

const SkipLink = styled('a', {
  position: 'absolute',
  transform: 'translateY(-100%)',
  transition: 'transform 0.3s',
  left: '5%',
  zIndex: '99999',
  padding: '$2 $4',
  backgroundColor: '$primary',
  color: '$bodyBg',
  borderRadius: '0 0 10px 10px',
  fontSize: '$sm',
  fontFamily: '$primary',
  textTransform: 'uppercase',
  fontWeight: '700',
  letterSpacing: '0.2px',
  '&:focus': {
    transform: 'translateY(0%)',
  },
  '@md': {
    left: '20%',
  },
});

const domain = 'https://letra.vercel.app';
const title = 'Letra | Learn a Foreign Language Passively';
const description =
  'New tab. New word. Everyday. Learn a new foreign language as you browse the web through a new tab Chrome extension.';
const image = `${domain}/og.png`;

export default function Home({ languages, github, background }) {
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph */}
        <meta property="og:url" content={image} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jayehernandez_" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <Box
        css={{
          opacity: '0.25',
          display: 'block',
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '-2',
          width: '100%',
          height: '100%',
          '& img': {
            objectFit: 'cover',
          },
        }}
      >
        <Image src={background.urls.full} layout="fill" alt={background.alt_description} />
      </Box>

      <SkipLink id="skip-nav" href="#main-content">
        Skip to content
      </SkipLink>
      <Header />
      <Box
        id="main-content"
        css={{
          display: 'grid',
          gridRowGap: '100px',
          '@md': {
            gridRowGap: '170px',
          },
        }}
      >
        <Hero />
        <About />
        <Languages languages={languages} />
        <Faq />
        <Contact />
        <Contribute github={github} />
      </Box>
      <Footer photographer={background.user} />
    </Box>
  );
}
