import { GridContainer } from '~/ui/Container';
import Text from '~/ui/Text';
import Box from '~/ui/Box';
import { ExternalLink } from '~/ui/TextLink';
import Image from 'next/image';

function Support() {
  return (
    <GridContainer
      id="support"
      size="xs"
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
        This extension is <strong>free and open source for life.</strong>
      </Text>
      <Text type="p">
        Spreading the word about Letra is the best way to support it. Here are some handy dandy
        buttons to do so!
      </Text>
      <Box>
        {/* tweet icon here! */}
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
      </Box>
      <Text type="p">
        For any feature requests or bug reports, please open up an issue in{' '}
        <ExternalLink href="https://github.com/jayehernandez/letra-extension">GitHub!</ExternalLink>{' '}
        We&apos;ll be happy to assist you there.
      </Text>
    </GridContainer>
  );
}

export default Support;
