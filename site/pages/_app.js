import { global } from '@stitches/react';
import 'styles/twemoji.css';

const globalStyles = global({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollMarginTop: '150px',
    scrollBehavior: 'smooth',
  },
  body: {
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: '$body',
    color: '$body',
    background: '$bodyBg',
  },
  a: {
    textDecoration: 'none',
    color: '$body',
  },
  strong: {
    color: '$primary',
  },
  '::selection': {
    backgroundColor: '$primary2',
  },
});

function MyApp({ Component, pageProps }) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
