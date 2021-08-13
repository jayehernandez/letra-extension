import Container, { GridContainer } from '~/ui/Container';
import Text from '~/ui/Text';
import Box from '~/ui/Box';
import Button from './ui/Button';
import { ExternalLink } from './ui/TextLink';
import Image from 'next/image';

const ForkIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.8021 31.6876C16.1639 32.2274 17.2929 33.2282 17.9921 34.5154C18.6913 35.8027 18.9163 37.2945 18.6279 38.7307C18.3394 40.1669 17.5558 41.4562 16.4139 42.3737C15.2719 43.2911 13.844 43.7784 12.3794 43.7506C10.9148 43.7228 9.50648 43.1816 8.40017 42.2214C7.29387 41.2612 6.55984 39.9431 6.32616 38.497C6.09249 37.0509 6.37402 35.5686 7.12162 34.3089C7.86922 33.0491 9.03542 32.0919 10.4167 31.6042V18.3959C9.02611 17.9044 7.85402 16.9372 7.10763 15.6651C6.36125 14.3929 6.08862 12.8979 6.33794 11.4443C6.58727 9.99058 7.34249 8.67185 8.47011 7.72116C9.59773 6.77047 11.0251 6.24905 12.5001 6.24905C13.975 6.24905 15.4024 6.77047 16.53 7.72116C17.6576 8.67185 18.4128 9.99058 18.6622 11.4443C18.9115 12.8979 18.6389 14.3929 17.8925 15.6651C17.1461 16.9372 15.974 17.9044 14.5834 18.3959V25.0001C16.3251 23.6917 18.4876 22.9167 20.8334 22.9167H29.1667C30.5378 22.9168 31.8708 22.4661 32.9607 21.6342C34.0505 20.8023 34.8366 19.6351 35.198 18.3126C33.8296 17.7707 32.6962 16.7635 31.9974 15.4682C31.2986 14.1729 31.0792 12.6726 31.3777 11.2314C31.6763 9.79026 32.4737 8.50061 33.6295 7.58952C34.7854 6.67844 36.2256 6.20433 37.6966 6.25066C39.1677 6.29699 40.5752 6.8608 41.6714 7.84281C42.7677 8.82483 43.4823 10.1621 43.6896 11.6192C43.8969 13.0763 43.5834 14.5598 42.8045 15.8086C42.0256 17.0573 40.8311 17.9912 39.4313 18.4459C39.0117 20.864 37.752 23.0563 35.8741 24.6365C33.9963 26.2167 31.6209 27.0832 29.1667 27.0834H20.8334C19.4623 27.0833 18.1293 27.534 17.0394 28.3659C15.9496 29.1979 15.1635 30.365 14.8021 31.6876V31.6876Z"
      fill="#C6B67E"
    />
  </svg>
);

const StarIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25 38.0417L10.3062 46.2667L13.5875 29.7501L1.2229 18.3167L17.9458 16.3334L25 1.04175L32.0542 16.3334L48.7771 18.3167L36.4125 29.7501L39.6937 46.2667L25 38.0417ZM25 33.2667L33.8479 38.2188L31.8708 28.2751L39.3146 21.3897L29.2458 20.1959L25 10.9897L20.7542 20.198L10.6854 21.3897L18.1292 28.2751L16.1521 38.2188L25 33.2667V33.2667Z"
      fill="#D3C185"
    />
  </svg>
);

const ContributorsIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M27.0833 43.7501V48.9584L20.8333 44.7918L14.5833 48.9584V43.7501H13.5417C11.6078 43.7501 9.75313 42.9819 8.38568 41.6144C7.01823 40.247 6.25 38.3923 6.25 36.4584V10.4167C6.25 8.75915 6.90848 7.16943 8.08058 5.99733C9.25269 4.82523 10.8424 4.16675 12.5 4.16675H41.6667C42.2192 4.16675 42.7491 4.38624 43.1398 4.77694C43.5305 5.16764 43.75 5.69755 43.75 6.25008V41.6668C43.75 42.2193 43.5305 42.7492 43.1398 43.1399C42.7491 43.5306 42.2192 43.7501 41.6667 43.7501H27.0833ZM27.0833 39.5834H39.5833V33.3334H13.5417C12.7129 33.3334 11.918 33.6627 11.332 34.2487C10.7459 34.8348 10.4167 35.6296 10.4167 36.4584C10.4167 37.2872 10.7459 38.0821 11.332 38.6681C11.918 39.2542 12.7129 39.5834 13.5417 39.5834H14.5833V35.4168H27.0833V39.5834ZM39.5833 29.1667V8.33342H12.5V29.2397C12.8451 29.1907 13.1932 29.1663 13.5417 29.1667H39.5833ZM14.5833 10.4167H18.75V14.5834H14.5833V10.4167ZM14.5833 16.6667H18.75V20.8334H14.5833V16.6667ZM14.5833 22.9167H18.75V27.0834H14.5833V22.9167Z"
      fill="#D3C185"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.83958 11.7854L0 2.94583L2.94792 0L8.83958 5.89375L14.7313 0L17.6792 2.94583L8.83958 11.7854Z"
      fill="white"
    />
  </svg>
);

function Contribute({ github }) {
  const githubNumbers = [
    {
      icon: <ForkIcon />,
      label: `${github.forks_count} forks`,
    },
    {
      icon: <StarIcon />,
      label: `${github.stargazers_count} stars`,
    },
    {
      icon: <ContributorsIcon />,
      label: '160+ contributors',
    },
  ];

  return (
    <Box>
      <GridContainer
        size="sm"
        css={{
          textAlign: 'center',
          gridRowGap: '$4',
          '@md': {
            gridRowGap: '$6',
          },
        }}
      >
        <Text type="h1" css={{ color: '$primary' }}>
          Open Source
        </Text>
        <Text type="p">
          Contribute by raising an issue, creating a PR, or collaborating with others.
        </Text>
      </GridContainer>
      <Container size="sm">
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: '250px',
            justifyContent: 'center',
            gridRowGap: '$5',
            mt: '$3',
            mb: '$7',
            '@md': {
              gridTemplateColumns: '400px',
            },
            '@lg': {
              gridTemplateColumns: '1fr 1fr 1fr',
            },
          }}
        >
          {githubNumbers.map((gitHubNumber) => (
            <Box
              css={{ display: 'flex', alignItems: 'center', '@md': { mx: '$1' } }}
              key={gitHubNumber.label}
            >
              {gitHubNumber.icon}
              <Text type="p" css={{ ml: '$3', fontWeight: '700', color: '$primary' }}>
                {gitHubNumber.label}
              </Text>
            </Box>
          ))}
        </Box>
      </Container>
      <Container
        size="sm"
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          my: '$6',
        }}
      >
        <Text type="h3" css={{ fontWeight: '700', textAlign: 'center' }}>
          The current top 30 contributors
        </Text>
      </Container>
      <Container size="md">
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridRowGap: '$5',
            mb: '$7',
            '@md': {
              gridTemplateColumns: 'repeat(10, 1fr)',
            },
          }}
        >
          {github.top_contributors.map((contributor) => (
            <Box
              key={contributor.login}
              css={{
                width: '50px',
                height: '50px',
                '& img': {
                  borderRadius: '999px',
                },
              }}
            >
              <ExternalLink href={contributor.html_url} type="simple">
                <Image
                  src={contributor.avatar_url}
                  width="100px"
                  height="100px"
                  loading="lazy"
                  alt={contributor.login}
                />
              </ExternalLink>
            </Box>
          ))}
        </Box>
      </Container>
      <Container size="sm" css={{ textAlign: 'center' }}>
        <ExternalLink href="https://github.com/jayehernandez/letra-extension" type="simple">
          <Button size="md" color="primary" css={{ px: '$6' }}>
            Contribute on GitHub
          </Button>
        </ExternalLink>
      </Container>
    </Box>
  );
}

export default Contribute;
