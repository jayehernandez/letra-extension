import { GridContainer } from '~/ui/Container';
import Text from '~/ui/Text';
import Box from '~/ui/Box';
import Collapsible from 'react-collapsible';
import TextLink, { ExternalLink } from './ui/TextLink';

const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"
      fill="rgba(255,255,255,1)"
    />
  </svg>
);

const ArrowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
      fill="rgba(255,255,255,1)"
    />
  </svg>
);

function Trigger({ title, arrow }) {
  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: '$2',
        cursor: 'pointer',
      }}
    >
      <Text type="h3">{title}</Text>
      <Box css={{ display: 'none', '@md': { display: 'block' } }}>{arrow}</Box>
    </Box>
  );
}

function TriggerClosed({ title }) {
  return <Trigger title={title} arrow={<ArrowDownIcon />} />;
}

function TriggerOpen({ title }) {
  return <Trigger title={title} arrow={<ArrowUpIcon />} isOpen />;
}

const faqData = [
  {
    question: 'Do you have plans of supporting other browsers in the future?',
    answer: (
      <>
        Yes! We had some work done on porting Letra over to Firefox, however it is{' '}
        <ExternalLink href="https://github.com/jayehernandez/letra-extension/issues/410">
          always rejected
        </ExternalLink>{' '}
        whenever we try to submit. If you know how to solve this, please send over a message.
      </>
    ),
  },
  {
    question: 'Does it show a new word every time a new tab is opened?',
    answer: (
      <>
        No, it <strong>shows the same word the entire day</strong>, it will only reset at 12 AM the
        next day. This is so you&apos;ll have the entire day to memorize a single word.
      </>
    ),
  },
  {
    question: 'Does this extension have a paid version?',
    answer: (
      <>
        No, it will always be <strong>free</strong>! However, the number of hours needed to keep the
        server running increases with the number of users. If you want to go the extra mile and help
        out, do{' '}
        <ExternalLink href="https://www.buymeacoffee.com/jayehernandez">
          buy me a coffee
        </ExternalLink>
        !
      </>
    ),
  },
  {
    question: 'How can I request for a new language?',
    answer: (
      <>
        <TextLink href="#contact">Contact us</TextLink> with the language you&apos;d like to add! If
        you&apos;re a native speaker of any language that is <strong>not</strong> in the{' '}
        <TextLink href="#languages">Languages</TextLink> section, check out{' '}
        <ExternalLink href="https://github.com/jayehernandez/letra-extension/blob/master/docs/new_language.md">
          this link
        </ExternalLink>{' '}
        for instructions on how to contribute.
      </>
    ),
  },
  {
    question: 'I think the translation for [...] is wrong, it should be [...]',
    answer: (
      <>
        Thank you for pointing that out! Please contact us <TextLink href="#contact">here</TextLink>{' '}
        with your correction. If you are a developer, you&apos;re free to open up a{' '}
        <ExternalLink href="https://github.com/jayehernandez/letra-extension">
          pull request
        </ExternalLink>
        !
      </>
    ),
  },
];

function Faq() {
  return (
    <GridContainer id="faq" size="sm" css={{ justifyContent: 'center', gridRowGap: '$6' }}>
      <Text type="h1" css={{ color: '$primary', textAlign: 'center' }}>
        Frequently Asked Questions
      </Text>
      {faqData.map((faq, index) => (
        <Collapsible
          key={index}
          trigger={<TriggerClosed title={faq.question} />}
          triggerWhenOpen={<TriggerOpen title={faq.question} />}
          tabIndex={0}
        >
          <Text type="smallerP">{faq.answer}</Text>
        </Collapsible>
      ))}
    </GridContainer>
  );
}

export default Faq;
