import Container, { GridContainer } from '~/ui/Container';
import Text from '~/ui/Text';
import Box from '~/ui/Box';
import { ExternalLink } from '~/ui/TextLink';

const TweetIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M46.1709 11.7832C44.5804 12.4867 42.8937 12.9488 41.1667 13.154C42.987 12.0653 44.3494 10.352 45 8.33318C43.2917 9.34985 41.4188 10.0623 39.4667 10.4478C38.1555 9.0448 36.4175 8.11435 34.5229 7.80107C32.6283 7.48778 30.6833 7.8092 28.9902 8.71537C27.2971 9.62155 25.9509 11.0617 25.1607 12.8119C24.3706 14.5621 24.1808 16.5244 24.6209 18.3936C21.1565 18.22 17.7674 17.3197 14.6736 15.7512C11.5797 14.1828 8.85031 11.9812 6.66255 9.28943C5.88815 10.6195 5.48121 12.1316 5.48338 13.6707C5.48338 16.6915 7.02088 19.3603 9.35838 20.9228C7.97507 20.8792 6.6222 20.5056 5.41255 19.8332V19.9415C5.41297 21.9534 6.10915 23.9032 7.38306 25.4604C8.65698 27.0176 10.4302 28.0863 12.4021 28.4853C11.118 28.8333 9.77152 28.8846 8.46463 28.6353C9.02061 30.367 10.1042 31.8815 11.5638 32.9667C13.0233 34.052 14.7857 34.6536 16.6042 34.6873C14.7969 36.1068 12.7275 37.1561 10.5144 37.7752C8.30127 38.3944 5.98781 38.5712 3.7063 38.2957C7.689 40.857 12.3252 42.2168 17.0605 42.2123C33.0875 42.2123 41.8521 28.9353 41.8521 17.4207C41.8521 17.0457 41.8417 16.6665 41.825 16.2957C43.531 15.0627 45.0034 13.5353 46.173 11.7853L46.1709 11.7832Z"
      fill="#1FA1F1"
    />
  </svg>
);

const ProductHuntIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25.0001 45.8334C13.4938 45.8334 4.16675 36.5063 4.16675 25.0001C4.16675 13.4938 13.4938 4.16675 25.0001 4.16675C36.5063 4.16675 45.8334 13.4938 45.8334 25.0001C45.8334 36.5063 36.5063 45.8334 25.0001 45.8334ZM27.7792 25.0001H21.8751V18.7501H27.7792C28.6081 18.7501 29.4029 19.0793 29.989 19.6654C30.575 20.2514 30.9042 21.0463 30.9042 21.8751C30.9042 22.7039 30.575 23.4987 29.989 24.0848C29.4029 24.6708 28.6081 25.0001 27.7792 25.0001ZM27.7792 14.5834H17.7084V35.4168H21.8751V29.1667H27.7792C29.7131 29.1667 31.5678 28.3985 32.9352 27.0311C34.3027 25.6636 35.0709 23.809 35.0709 21.8751C35.0709 19.9412 34.3027 18.0865 32.9352 16.7191C31.5678 15.3516 29.7131 14.5834 27.7792 14.5834V14.5834Z"
      fill="#DA552E"
    />
  </svg>
);

const CoffeeIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M33.3334 27.0833V10.4167H12.5001V27.0833C12.5001 28.1884 12.9391 29.2482 13.7205 30.0296C14.5019 30.811 15.5617 31.25 16.6667 31.25H29.1667C30.2718 31.25 31.3316 30.811 32.113 30.0296C32.8944 29.2482 33.3334 28.1884 33.3334 27.0833ZM10.4167 6.25H41.6668C42.7718 6.25 43.8316 6.68899 44.613 7.47039C45.3944 8.25179 45.8334 9.3116 45.8334 10.4167V16.6667C45.8334 17.7717 45.3944 18.8315 44.613 19.6129C43.8316 20.3943 42.7718 20.8333 41.6668 20.8333H37.5001V27.0833C37.5001 29.2935 36.6221 31.4131 35.0593 32.9759C33.4965 34.5387 31.3769 35.4167 29.1667 35.4167H16.6667C14.4566 35.4167 12.337 34.5387 10.7742 32.9759C9.21139 31.4131 8.33342 29.2935 8.33342 27.0833V8.33333C8.33342 7.7808 8.55291 7.25089 8.94361 6.86019C9.33431 6.46949 9.86421 6.25 10.4167 6.25ZM37.5001 10.4167V16.6667H41.6668V10.4167H37.5001ZM4.16675 39.5833H41.6668V43.75H4.16675V39.5833Z"
      fill="#D3C185"
    />
  </svg>
);

const supportLinks = [
  {
    link: 'https://twitter.com',
    icon: <TweetIcon />,
    label: 'Tweet',
  },
  {
    link: 'https://www.producthunt.com/posts/letra-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-letra-2',
    icon: <ProductHuntIcon />,
    label: 'Upvote',
  },
];

function Support() {
  return (
    <Box>
      <GridContainer
        id="support"
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
          Support
        </Text>
        <Text type="p">
          <strong>Spreading the word</strong> about Letra is the best way to support it. If you want
          to go the extra mile, here are some handy dandy buttons to do so:
        </Text>
      </GridContainer>
      <Container size="xs">
        <Box
          css={{
            display: 'grid',
            // gridTemplateColumns: '250px',
            alignItems: 'center',
            justifyContent: 'center',
            gridRowGap: '$3',
            mt: '$4',
            '@md': {
              gridTemplateColumns: '1fr 1fr',
            },
          }}
        >
          {supportLinks.map((supportLink) => (
            <ExternalLink href={supportLink.link} type="simple" key={supportLink.label}>
              <Box
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  '@md': { px: '$2', justifyContent: 'center' },
                }}
              >
                {supportLink.icon}
                <Text type="h3" css={{ ml: '$3' }}>
                  {supportLink.label}
                </Text>
              </Box>
            </ExternalLink>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Support;
