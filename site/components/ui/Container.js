import { styled } from 'stitches.config';

const Container = styled('div', {
  mx: 'auto',
  px: '25px',
  // border: '1px solid red',
  '@sm': {
    px: '32px',
  },
  variants: {
    size: {
      xs: {
        maxWidth: '650px',
      },
      sm: {
        maxWidth: '800px',
      },
      md: {
        maxWidth: '1000px',
      },
      lg: {
        maxWidth: '1200px',
      },
    },
  },
});

export const GridContainer = styled(Container, {
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '1fr',
});

export default Container;
