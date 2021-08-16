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
        fontSize: '$md',
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
      h3: {
        fontFamily: '$primary',
        fontWeight: '700',
        fontSize: '$sm',
        '@md': {
          fontSize: '$md',
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
        lineHeight: '25px',
        '@md': {
          fontSize: '$xs',
          lineHeight: '24px',
        },
      },
      footnote: {
        fontSize: '$xxs',
        color: '$secondary',
        lineHeight: '20px',
      },
    },
  },
});

export default Text;
