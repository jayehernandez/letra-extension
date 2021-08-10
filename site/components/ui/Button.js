import { styled } from 'stitches.config';

const Button = styled('button', {
  cursor: 'pointer',
  fontFamily: '$primary',
  fontWeight: '700',
  letterSpacing: '1px',
  transition: 'all 0.2s ease',
  borderStyle: 'solid',
  variants: {
    size: {
      sm: {
        fontSize: '$sm',
        letterSpacing: '0.5px',
        borderRadius: '12px',
        borderWidth: '2px',
        px: '$4',
        py: '$2',
      },
      lg: {
        fontSize: '$lg',
        letterSpacing: '0.5px',
        borderRadius: '12px',
        borderWidth: '3',
        px: '$7',
        py: '$3',
      },
    },
    color: {
      primary: {
        color: '$primary',
        borderColor: '$primary',
        backgroundColor: '$bodyBg',
        '&:hover, &:focus': {
          backgroundColor: '$primary',
          color: '$bodyBg',
          transform: 'scale(1.05)',
        },
      },
    },
  },
});

export default Button;
