import { styled } from 'stitches.config';

export const Input = styled('input', {
  fontFamily: '$body',
  color: '$body',
  px: '$3',
  py: '$2',
  borderColor: '$secondary2',
  borderRadius: '10px',
  borderStyle: 'solid',
  fontSize: '$sm',
  outline: 'none',
  backgroundColor: '$secondary4',
  '&:focus': {
    borderColor: '$primary',
  },
});

export const TextArea = styled('textarea', {
  fontFamily: '$body',
  color: '$body',
  px: '$3',
  py: '$2',
  borderColor: '$secondary2',
  borderRadius: '10px',
  borderStyle: 'solid',
  fontSize: '$sm',
  outline: 'none',
  backgroundColor: '$secondary4',
  resize: 'vertical',
  '&:focus': {
    borderColor: '$primary',
  },
});

export const Form = styled('form', {
  display: 'grid',
  width: '100%',
  gridRowGap: '$5',
  '@md': {
    width: '80%',
  },
});

export const FormControl = styled('div', {
  display: 'grid',
  gridRowGap: '$1',
});
