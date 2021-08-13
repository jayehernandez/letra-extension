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
      xs: {
        fontSize: '$xs',
        letterSpacing: '0.3px',
        borderRadius: '8px',
        borderWidth: '2px',
        px: '$4',
        py: '$2',
      },
      sm: {
        fontSize: '$sm',
        letterSpacing: '0.3px',
        borderRadius: '12px',
        borderWidth: '2px',
        px: '$4',
        py: '$2',
      },
      md: {
        fontSize: '$md',
        letterSpacing: '0.4px',
        borderRadius: '12px',
        borderWidth: '2px',
        px: '$6',
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
        backgroundColor: 'transparent',
        '&:hover, &:focus': {
          backgroundColor: '$primary',
          color: '$bodyBg',
          transform: 'scale(1.05)',
        },
      },
      secondary: {
        color: '$secondary',
        borderColor: '$secondary',
        backgroundColor: 'transparent',
        '&:hover, &:focus': {
          borderColor: '$primary',
          color: '$primary',
        },
      },
    },
  },
});

export default Button;
