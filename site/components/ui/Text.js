import { styled } from 'stitches.config';

const Text = styled('div', {
  variants: {
    type: {
      title: {
        fontFamily: '$primary',
        fontWeight: '700',
        fontSize: '$xxxl',
        '@md': {
          fontSize: '$title',
        },
      },
      h1: {
        fontFamily: '$primary',
        fontWeight: '700',
        fontSize: '$lg',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        '@md': {
          fontSize: '$xl',
          letterSpacing: '5px',
        },
      },
      h2: {
        fontFamily: '$primary',
        fontSize: '$md',
        '@md': {
          fontSize: '$xl',
        },
      },
      p: {
        fontSize: '$sm',
        lineHeight: '28px',
        '@md': {
          fontSize: '$md',
          lineHeight: '40px',
        },
      },
      smallerP: {
        fontSize: '$xs',
        lineHeight: '20px',
        '@md': {
          fontSize: '$xs',
          lineHeight: '32px',
        },
      },
      footnote: {
        fontSize: '$xxs',
        color: '$secondary',
      },
    },
  },
});

export default Text;
