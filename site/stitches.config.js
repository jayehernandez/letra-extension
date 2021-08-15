import { createCss } from '@stitches/react';

export const { css, styled, global, getCssString, theme } = createCss({
  theme: {
    colors: {
      black: 'black',
      white: 'white',

      body: '$white',
      bodyBg: '#000000',
      primary: '#D8C078', // gold
      primary2: '#5c502c', // gold
      secondary: '#BDBDBD', // gray
      secondary2: '#383738', // darker gray
      secondary3: 'rgba(0, 0, 0, 0.3)',
      secondary4: '#101010',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '60px',
      8: '100px',
      9: '130px',
    },
    fontSizes: {
      xxs: '12px',
      xs: '16px',
      sm: '18px',
      md: '20px',
      lg: '24px',
      xl: '28px',
      xxl: '32px',
      xxxl: '48px',
      title: '74px',
      title2: '90px',
      hero: '150px',
    },
    fonts: {
      primary: 'Sen,system-ui,Helvetica',
      heading: '"Playfair Display","Times New Roman"',
      body: '"Atkinson Hyperlegible",system-ui,Helvetica',
    },
  },
  media: {
    xxs: '(min-width: 300px)',
    xs: '(min-width: 480px)',
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1300px)',
  },
  utils: {
    // Abbreviated margin properties
    m: () => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: () => (value) => ({
      marginTop: value,
    }),
    mr: () => (value) => ({
      marginRight: value,
    }),
    mb: () => (value) => ({
      marginBottom: value,
    }),
    ml: () => (value) => ({
      marginLeft: value,
    }),
    mx: () => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: () => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    // Abbreviated padding properties
    p: () => (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: () => (value) => ({
      paddingTop: value,
    }),
    pr: () => (value) => ({
      paddingRight: value,
    }),
    pb: () => (value) => ({
      paddingBottom: value,
    }),
    pl: () => (value) => ({
      paddingLeft: value,
    }),
    px: () => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: () => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
