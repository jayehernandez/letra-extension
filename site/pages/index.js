import Head from 'next/head';
import { createApi } from 'unsplash-js';
import Header from '~/Header';
import Footer from '~/Footer';
import Hero from '~/Hero';
import About from '~/About';
import Languages from '~/Languages';
// import Carousel from '~/Carousel';
import Support from '~/Support';
import Contribute from '~/Contribute';
import Box from '~/ui/Box';

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
    },
  };
}

const domain = 'https://letra.vercel.app';
const title = 'Letra | Learn a Foreign Language Passively';
const description =
  'New tab. New word. Everyday. Learn a new foreign language as you browse the web through a new tab Chrome extension.';
const image = `${domain}/og.png`;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Home({ languages, background, github }) {
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
          backgroundImage: `url('/backgrounds/${shuffle([1, 2, 3])[0]}.jpeg')`,
          opacity: '0.15',
          display: 'block',
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '-2',
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
        }}
      />

      <Header />
      <Box
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
        {/* <Carousel /> */}
        <Languages languages={languages} />
        <Support />
        <Contribute github={github} />
      </Box>
      <Footer />
    </Box>
  );
}
