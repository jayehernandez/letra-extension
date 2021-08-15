import { useForm, ValidationError } from '@formspree/react';
import Text from '~/ui/Text';
import { Input, Form, TextArea, FormControl } from '~/ui/Form';
import Button from '~/ui/Button';
import Box from '~/ui/Box';

function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <Text type="h3" css={{ my: '$9' }}>
        Hey, thanks for contacting us!{' '}
        <span role="img" aria-label="party">
          🥳
        </span>
        <br />
        We will reply to you as soon as possible.
      </Text>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <label htmlFor="email">Email</label>
        <Input id="email" type="email" name="email" placeholder="you@gmail.com" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </FormControl>
      <FormControl>
        <label htmlFor="message">Message</label>
        <TextArea
          id="message"
          name="message"
          placeholder="Place your suggestions or ideas here!"
          rows="5"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </FormControl>
      <Box css={{ display: 'flex', justifyContent: 'center' }}>
        <Button type="submit" disabled={state.submitting} size="md" color="primary">
          {state.submitting ? 'Submitting...' : 'Submit'}
        </Button>
      </Box>
    </Form>
  );
}

export default ContactForm;
