import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssString } from 'stitches.config';

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Sen:wght@400;700&family=Playfair+Display:wght@700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="icon" href="/favicon/favicon.ico" />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
          {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && (
            <script
              defer
              data-domain="letra.vercel.app"
              src="https://plausible.io/js/plausible.js"
            ></script>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
