import { GridContainer } from '~/ui/Container';
import Text from '~/ui/Text';

function About() {
  return (
    <GridContainer
      id="about"
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
        Passively learn everyday
      </Text>
      <Text type="p">
        How many times do you open a new tab in a single day?
        <br />
        It&apos;s probably a lot.
      </Text>
      <Text type="p">
        With Letra, you can <strong>learn as you browse the web</strong>. It&apos;s going to show
        you a word that will be there until 11:59 PM.
      </Text>
      <Text type="p">
        The same word is going to appear every time you open a new tab. At the end of the day,
        you&apos;ll surely remember it!
      </Text>
    </GridContainer>
  );
}

export default About;
