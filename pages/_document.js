/* eslint-disable react/self-closing-comp */
import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import AdSense from 'react-adsense';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        // eslint-disable-next-line react/jsx-props-no-spreading
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap' rel='stylesheet' />
          <meta property='og:image' content='https://raw.githubusercontent.com/EduardoAlphonse/lolquiz/main/readme-assets/home.png' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://lolquiz.eduardoalphonse.vercel.app' />
          <meta property='og:title' content='Quiz of Legends' />
          <meta property='og:description' content='This is a web application of Quiz about League of Legends' />
          <script data-ad-client='ca-pub-9906786180385588' async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <AdSense.Google
            client='ca-pub-9906786180385588'
            slot='4796733160'
            style={{ display: 'block' }}
            format='auto'
            responsive='true'
            layoutKey='-gw-1+2a-9x+5c'
          />
        </body>
        <script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>
      </Html>
    );
  }
}
