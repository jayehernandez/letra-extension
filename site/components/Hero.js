import { styled } from 'stitches.config';
import Container from '~/ui/Container';
import Text from '~/ui/Text';
import Button from '~/ui/Button';
import Box from '~/ui/Box';
import Logo from '~/Logo';
import { ExternalLink } from '~/ui/TextLink';

function Hero() {
  return (
    <Container
      size="xs"
      css={{ textAlign: 'center', py: '$4', my: '$6', '@md': { py: '$5', my: '$6' } }}
    >
      <Text type="h1">Learn a new language with</Text>
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          mt: '$5',
          mb: '$2',
          justifyContent: 'center',
          '@md': { mt: '$6', mb: '$3' },
        }}
      >
        <Box css={{ width: '30%', '@md': { width: '100%' } }}>
          <Logo />
        </Box>
        <Text
          css={{
            fontFamily: '$heading',
            fontSize: '$title',
            color: '$primary',
            ml: '$3',
            '@md': { fontSize: '$hero', ml: '$5' },
          }}
        >
          letra
        </Text>
      </Box>
      <Text type="h2">New tab. New word. Everyday.</Text>
      <Box css={{ mt: '$8' }}>
        <ExternalLink href="https://bit.ly/letra-extension">
          <Button size="lg" color="primary">
            Download
          </Button>
        </ExternalLink>
        <Text type="footnote" css={{ mt: '$2' }}>
          Available on Chrome and Chromium Browsers
        </Text>
      </Box>
    </Container>
  );
}

export default Hero;
