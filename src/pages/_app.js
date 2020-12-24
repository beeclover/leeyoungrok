import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';
// component
import DefaultTheme from '@style/Theme';
import Grid from '@style/Grid';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .sbdocs-wrapper {
    min-height: 100%;
    box-sizing: border-box;
  }
  * {
    outline: none;
    /* font-family: 'Noto Sans','Noto Sans KR', sans-serif; */
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GridThemeProvider gridTheme={Grid}>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </GridThemeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
