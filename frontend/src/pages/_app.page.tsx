import type { AppProps } from 'next/app'
import GlobalStyle from "@/styles/global";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {ThemeProvider} from "@/contexts";
import Head from "next/head";
import styled from 'styled-components';

const ContentWrapper = styled.div`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
width: 99%;
padding: 0 1rem;
margin: 0.5rem;
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider>
          <Head>
              <title>
                  Resume
              </title>
              <link rel="icon" href="/assets/tiny-logo.ico" />
          </Head>
        <GlobalStyle/>
        <ContentWrapper>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
        </ContentWrapper>
      </ThemeProvider>
  )
}

export default MyApp
