import Container from '~/ui/Container';
import Text from '~/ui/Text';
import { ExternalLink } from '~/ui/TextLink';

function Footer() {
  return (
    <Container
      size="xs"
      css={{ textAlign: 'center', height: '50px', mt: '$8', '@md': { mt: '$9', height: '80px' } }}
    >
      <Text type="smallerP" css={{ color: '$secondary' }}>
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
    </Container>
  );
}

export default Footer;
