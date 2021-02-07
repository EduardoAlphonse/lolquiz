import React from 'react';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: ProductSans;
    src: url('/fonts/ProductSans/ProductSans-Regular.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: ProductSans;
    src: url('/fonts/ProductSans/ProductSans-Medium.ttf');
    font-style: medium;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: ProductSans;
    src: url('/fonts/ProductSans/ProductSans-Bold.ttf');
    font-style: bold;
    font-weight: 600;
    font-display: swap;
  }

  @media (max-width: 1400px) {
    :root {
      font-size: 12px;
    }
  }
  @media (min-width: 1401px) {
    :root {
      font-size: 16px;
    }
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  body, input, button {
    /* font-family: ProductSans, 'Poppins', 'Lato', sans-serif; */
    font-family: ProductSans, sans-serif;
    letter-spacing: 0.1rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>LoL Quiz</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
