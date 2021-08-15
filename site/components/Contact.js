import Container from '~/ui/Container';
import Text from '~/ui/Text';
import ContactForm from '~/ContactForm';

function Contact() {
  return (
    <Container
      id="contact"
      size="xs"
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gridRowGap: '$4',
        '@md': {
          gridRowGap: '$6',
        },
      }}
    >
      <Text type="h1" css={{ color: '$primary' }}>
        Contact
      </Text>
      <Text type="p">Got any feature requests, bug reports, or other ideas? Let us know!</Text>
      <ContactForm />
    </Container>
  );
}

export default Contact;
