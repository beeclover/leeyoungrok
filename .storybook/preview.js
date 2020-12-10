import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'themeprovider-storybook';
import DefaultTheme from '@style/Theme';
const themes = [DefaultTheme];
addDecorator(withThemesProvider(themes));
