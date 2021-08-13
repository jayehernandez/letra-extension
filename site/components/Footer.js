import Container from '~/ui/Container';
import Text from '~/ui/Text';
import Box from '~/ui/Box';
import Button from '~/ui/Button';
import FullLogo from '~/FullLogo';
import { ExternalLink } from '~/ui/TextLink';

function Footer() {
  return (
    <>
      <Container
        size="xs"
        css={{
          backgroundColor: '$secondary3',
          backdropFilter: 'blur(5px)',
          mt: '$8',
          mb: '$3',
          px: '$5',
          pt: '$2',
          pb: '$7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          '@md': { borderRadius: '20px', pt: '$4', pb: '$7', mt: '170px' },
        }}
      >
        <Box
          css={{
            display: 'flex',
            justifyContent: 'center',
            width: '90%',
            mb: '-15px',
            '@md': { width: '70%' },
          }}
        >
          <FullLogo />
        </Box>
        <Text type="h3" css={{ fontWeight: '400', mb: '$6', '@md': { width: '70%' } }}>
          Passively learn a new language every time you open a new tab
        </Text>
        <ExternalLink href="https://bit.ly/letra-extension" type="simple">
          <Button size="md" color="primary">
            Download
          </Button>
        </ExternalLink>
      </Container>
      <Container
        size="xs"
        css={{
          textAlign: 'center',
          mt: '$7',
          mb: '$6',
          '@md': { mt: '$8', mb: '$7', height: '80px', color: '$secondary' },
        }}
      >
        <Text type="smallerP">
          Made with{' '}
          <span role="img" aria-label="white heart">
            🤍
          </span>{' '}
          and{' '}
          <span role="img" aria-label="milk tea">
            🧋
          </span>{' '}
          by <ExternalLink href="https://jayehernandez.com">Jaye Hernandez</ExternalLink>
        </Text>
        <Text type="smallerP">© Copyright 2020</Text>
      </Container>
    </>
  );
}

export default Footer;
