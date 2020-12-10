import { addDecorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { withThemesProvider } from 'themeprovider-storybook';
import DefaultTheme from '@style/Theme';
const themes = [DefaultTheme];

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

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

addDecorator(withThemesProvider(themes));
