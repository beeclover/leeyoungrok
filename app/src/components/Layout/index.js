import { ThemeProvider } from "styled-components";
import { GridThemeProvider } from "styled-bootstrap-grid";
// component
import DefaultTheme from "@/styles/Theme";
import Grid from "@/styles/Grid";

export default function Layout(props) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GridThemeProvider gridTheme={Grid}>
        <>{props.children}</>
      </GridThemeProvider>
    </ThemeProvider>
  );
}
