import Container, { GridContainer } from '~/ui/Container';
import Text from '~/ui/Text';
import Box from '~/ui/Box';
import { ExternalLink } from '~/ui/TextLink';
import Image from 'next/image';

const MoonIcon = (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M33.3334 23.3332C33.3327 27.9686 34.7128 32.4993 37.2975 36.3472C39.8822 40.1952 43.5545 43.186 47.846 44.9384C52.1375 46.6908 56.8536 47.1252 61.393 46.1862C65.9324 45.2473 70.0893 42.9776 73.3334 39.6665V39.9998C73.3334 58.4098 58.4101 73.3332 40.0001 73.3332C21.5901 73.3332 6.66675 58.4098 6.66675 39.9998C6.66675 21.5898 21.5901 6.6665 40.0001 6.6665H40.3334C38.1135 8.83692 36.3505 11.4297 35.1483 14.2921C33.9461 17.1545 33.329 20.2286 33.3334 23.3332V23.3332ZM13.3334 39.9998C13.331 45.9498 15.3185 51.7296 18.9797 56.4197C22.6409 61.1098 27.7655 64.4408 33.5381 65.8826C39.3107 67.3244 45.3997 66.7942 50.8362 64.3764C56.2728 61.9586 60.7445 57.7921 63.5401 52.5398C58.5649 53.712 53.3727 53.5935 48.4561 52.1956C43.5396 50.7977 39.0618 48.1668 35.4474 44.5525C31.8331 40.9382 29.2022 36.4603 27.8043 31.5438C26.4065 26.6272 26.288 21.435 27.4601 16.4598C23.192 18.7336 19.6227 22.1254 17.1343 26.272C14.6458 30.4186 13.332 35.1639 13.3334 39.9998V39.9998Z"
      fill="#D8C078"
    />
  </svg>
);

const WorldIcon = (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.7834 21.5098C16.5336 25.9208 13.9317 31.6603 13.4153 37.7637C12.8989 43.8671 14.4993 49.9622 17.9476 55.0245C21.3959 60.0869 26.4818 63.8078 32.3505 65.5619C38.2191 67.316 44.5127 66.9963 50.1734 64.6565C50.5568 62.1565 49.7168 59.7565 49.3734 58.9165C48.6068 57.0498 46.0801 53.8598 41.8634 49.4365C40.7367 48.2532 40.8101 47.3432 41.2134 44.6465L41.2567 44.3432C41.5301 42.4965 41.9901 41.4032 48.2067 40.4165C51.3667 39.9165 52.1967 41.1765 53.3467 42.9265L53.7334 43.4998C54.8268 45.0998 55.6368 45.4665 56.8601 46.0198C57.4101 46.2698 58.0934 46.5865 59.0101 47.1032C61.1834 48.3465 61.1834 49.7498 61.1834 52.8232V53.1732C61.1834 54.4765 61.0568 55.6232 60.8568 56.6198C63.4146 53.4096 65.1971 49.6523 66.0654 45.6405C66.9337 41.6287 66.8643 37.4706 65.8628 33.4899C64.8613 29.5093 62.9546 25.8135 60.2911 22.6903C57.6276 19.5671 54.2793 17.1007 50.5068 15.4832C48.6634 16.7265 46.1334 18.4898 45.2501 19.6998C44.8001 20.3165 44.1601 23.4732 42.0834 23.7332C41.5434 23.7998 40.8134 23.7532 40.0401 23.7032C37.9667 23.5698 35.1334 23.3865 34.2267 25.8498C33.6501 27.4098 33.5501 31.6498 35.4134 33.8498C35.7134 34.1998 35.7701 34.8498 35.5667 35.5798C35.3001 36.5365 34.7634 37.1198 34.5934 37.2398C34.2734 37.0532 33.6334 36.3098 33.1967 35.8065C32.1534 34.5898 30.8467 33.0732 29.1601 32.6065C28.5467 32.4365 27.8734 32.2965 27.2167 32.1565C25.3867 31.7732 23.3167 31.3365 22.8334 30.3098C22.4801 29.5565 22.4834 28.5198 22.4834 27.4265C22.4834 26.0365 22.4834 24.4665 21.8034 22.9432C21.567 22.3995 21.2196 21.9113 20.7834 21.5098V21.5098ZM40.0001 73.3332C21.5901 73.3332 6.66675 58.4098 6.66675 39.9998C6.66675 21.5898 21.5901 6.6665 40.0001 6.6665C58.4101 6.6665 73.3334 21.5898 73.3334 39.9998C73.3334 58.4098 58.4101 73.3332 40.0001 73.3332Z"
      fill="#D8C078"
    />
  </svg>
);

const SoundIcon = (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M33.3333 24.0667L22.0099 33.3333H9.99992V46.6667H22.0099L33.3333 55.9333V24.0667ZM19.6299 53.3333H6.66659C5.78253 53.3333 4.93468 52.9821 4.30956 52.357C3.68444 51.7319 3.33325 50.884 3.33325 50V30C3.33325 29.1159 3.68444 28.2681 4.30956 27.643C4.93468 27.0178 5.78253 26.6667 6.66659 26.6667H19.6299L37.2766 12.2267C37.5208 12.0265 37.8168 11.8998 38.1301 11.8613C38.4435 11.8228 38.7614 11.8742 39.0467 12.0093C39.3321 12.1445 39.5732 12.3579 39.7419 12.6248C39.9107 12.8916 40.0001 13.2009 39.9999 13.5167V66.4833C40.0001 66.7991 39.9107 67.1084 39.7419 67.3752C39.5732 67.6421 39.3321 67.8555 39.0467 67.9907C38.7614 68.1258 38.4435 68.1772 38.1301 68.1387C37.8168 68.1002 37.5208 67.9735 37.2766 67.7733L19.6333 53.3333H19.6299ZM64.6866 67.1133L59.9666 62.3933C63.1265 59.5817 65.6545 56.1322 67.3839 52.2723C69.1134 48.4123 70.005 44.2297 69.9999 40C70.0041 35.5536 69.0178 31.1622 67.1128 27.1446C65.2078 23.127 62.4318 19.5841 58.9866 16.7733L63.7199 12.04C67.7815 15.4785 71.0441 19.7616 73.2801 24.5906C75.5162 29.4197 76.6719 34.6784 76.6666 40C76.6666 50.7433 72.0466 60.4067 64.6866 67.1133ZM52.8766 55.3033L48.1366 50.5633C49.7548 49.319 51.0652 47.7191 51.9663 45.8874C52.8674 44.0557 53.3351 42.0413 53.3333 40C53.3333 35.2333 50.8333 31.05 47.0666 28.6933L51.8633 23.8967C54.3881 25.754 56.4403 28.1795 57.8538 30.977C59.2674 33.7746 60.0026 36.8656 59.9999 40C59.9999 46.14 57.2333 51.6333 52.8766 55.3033Z"
      fill="#D3C185"
    />
  </svg>
);
const UnsplashIcon = (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M28.3333 36.6667V53.3333H51.6667V36.6667H70V70H10V36.6667H28.3333ZM51.6667 10V26.6667H28.3333V10H51.6667Z"
      fill="#D3C185"
    />
  </svg>
);

const features = [
  {
    icon: MoonIcon,
    label: 'Dark, simple, and clean interface',
  },
  {
    icon: WorldIcon,
    label: 'Learn multiple languages at once',
  },
  {
    icon: UnsplashIcon,
    label: (
      <span>
        Stunning backgrounds from{' '}
        <ExternalLink href="https://unsplash.com/?utm_source=letra&utm_medium=referral">
          Unsplash
        </ExternalLink>
      </span>
    ),
  },
  {
    icon: SoundIcon,
    label: (
      <span>
        Listen to the word with{' '}
        <ExternalLink href="https://responsivevoice.org/">ResponsiveVoice</ExternalLink>
      </span>
    ),
  },
];

function About() {
  return (
    <Box>
      <GridContainer
        id="about"
        size="sm"
        css={{
          textAlign: 'center',
          gridRowGap: '$4',
          '@md': {
            gridRowGap: '$6',
          },
        }}
      >
        <Text type="p">
          How many times do you open a new tab in a single day? It&apos;s probably a lot.
          <br />
          Now, you can <strong>learn as you browse the web</strong> with Letra.
        </Text>
      </GridContainer>
      <GridContainer
        size="sm"
        css={{
          gridTemplateColumns: '1fr',
          gridRowGap: '$6',
          justifyContent: 'center',
          alignItems: 'center',
          my: '$7',
          '@sm': {
            gridTemplateColumns: '1fr 1fr',
            gridRowGap: '$7',
            gridColumnGap: '$4',
          },
        }}
      >
        {features.map((feature, index) => {
          return (
            <Box
              key={index}
              css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {feature.icon}
              <Text
                type="p"
                css={{ ml: '$4', lineHeight: '28px', width: '50%', '@sm': { width: '200px' } }}
              >
                {feature.label}
              </Text>
            </Box>
          );
        })}
      </GridContainer>
      <Container size="sm" css={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
          <a
            href="https://www.producthunt.com/posts/letra-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-letra-2"
            target="_blank"
            style={{ width: '250px', height: '54px', margin: 'auto' }}
            rel="noreferrer"
          >
            <Image
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=196571&theme=dark"
              alt="Letra - Passively learn a new language every time you open a new tab | Product Hunt"
              style={{ width: '250px', height: '54px' }}
              width="250"
              height="54"
            />
          </a>
          <Text type="footnote" css={{ textAlign: 'center' }}>
            Fancy an upvote? 🥺
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
