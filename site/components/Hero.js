import { styled } from 'stitches.config';
import Container from '~/ui/Container';
import Text from '~/ui/Text';
import Button from '~/ui/Button';
import Box from '~/ui/Box';
import Logo from '~/Logo';
import TextLink, { ExternalLink } from '~/ui/TextLink';
import Link from 'next/link';
import { createCss } from '@stitches/react';

const scaleUp = createCss({}, null).keyframes({
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(1.05)' },
});

const DownIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="21.875" fill="#D8C078" />
    <path
      d="M25.0002 31.25L16.1606 22.4104L19.1086 19.4646L25.0002 25.3583L30.8919 19.4646L33.8398 22.4104L25.0002 31.25Z"
      fill="#111111"
    />
  </svg>
);

function Hero() {
  return (
    <Container
      size="xs"
      css={{ textAlign: 'center', py: '$4', my: '$6', '@md': { py: '$3', my: '$6' } }}
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
      <Box css={{ mt: '$7' }}>
        <ExternalLink href="https://bit.ly/letra-extension" type="simple">
          <Button size="lg" color="primary">
            Download
          </Button>
        </ExternalLink>
        <Text type="footnote" css={{ mt: '$2' }}>
          Available on Chrome and Chromium Browsers
        </Text>
      </Box>
      <Box css={{ mt: '$7', animation: `${scaleUp} .3s infinite alternate` }}>
        <TextLink href="#about" type="simple">
          <DownIcon />
        </TextLink>
      </Box>
    </Container>
  );
}

export default Hero;
