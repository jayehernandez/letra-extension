import Container from '~/ui/Container';
import Text from '~/ui/Text';
import Box from '~/ui/Box';
import Button from '~/ui/Button';
import FullLogo from '~/FullLogo';
import { ExternalLink } from '~/ui/TextLink';

function Footer({ photographer }) {
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
          mt: '170px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          '@md': { borderRadius: '20px', py: '$4' },
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
        size="lg"
        css={{
          display: 'flex',
          textAlign: 'center',
          flexDirection: 'column',
          mt: '$7',
          mb: '$6',
          '@md': {
            mt: '$8',
            mb: '$7',
            color: '$secondary',
            justifyContent: 'space-between',
            flexDirection: 'row',
          },
        }}
      >
        <Box css={{ '@md': { textAlign: 'left' } }}>
          <Text type="footnote">
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
          <Text type="footnote">
            Background photo by{' '}
            <ExternalLink
              href={`https://unsplash.com/@${photographer.username}?utm_source=letra&utm_medium=referral`}
            >
              {photographer.name}
            </ExternalLink>{' '}
            on{' '}
            <ExternalLink href={`https://unsplash.com/?utm_source=letra&utm_medium=referral`}>
              Unsplash
            </ExternalLink>
          </Text>
        </Box>

        <Box
          css={{
            borderTop: '2px solid $primary2',
            mt: '$5',
            pt: '$5',
            '@md': { textAlign: 'right', mt: '$0', pt: '$0', borderTop: 'none' },
          }}
        >
          <Text type="footnote">
            Like this site?{' '}
            <ExternalLink href="https://www.buymeacoffee.com/jayehernandez">
              Buy me a coffee{' '}
              <span role="img" aria-label="coffee">
                ☕️
              </span>
            </ExternalLink>
            <Text type="footnote">© Copyright 2020</Text>
          </Text>
        </Box>
      </Container>
    </>
  );
}

export default Footer;
