import React from "react";
import history from "./AppHistory";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { fonts } from "./style/styleSettings";
import { colors } from "./style/styleSettings";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { Router } from "react-router-dom";
const App = () => {
  const {
    primary: primaryColor,
    secondary,
    tertiary,
    hpsBlue,
    error,
    selectedgray
  } = {
    primary: colors.WALLMART_BLUE,
    secondary: colors.SECONDARY,
    tertiary: colors.TERTIARY,
    success: colors.GREEN_REST,
    error: colors.ERROR_RED,
    hpsBlue: colors.HPS_BLUE,
    selectedgray: colors.BACKGROUND_GREY
  };
  const linksColor = colors.PRIMARY_LINKS;

  const darkTextColor = colors.PRIMARY_DARK_TEXT;

  const theme = createMuiTheme({
    palette: {
      primary: { main: primaryColor },
      secondary: { main: secondary },
      tertiary: { main: tertiary },
      error: { main: error },
      selectedGray: { main: selectedgray },
      action: { main: colors.PRIMARY_GREY_TEXT }
    },
    typography: {
      fontFamily: `${fonts.PRIMARY}`,
      htmlFontSize: 14,
      fontSize: 14,
      body1: { fontSize: 14 }
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": `${fonts.PRIMARY}`
        }
      }
    },
    primaryColor,
    hpsBlue,
    secondaryTextColor: linksColor,
    iconColor: primaryColor,
    fontColor: darkTextColor
  });
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>{renderRoutes(routes)}</Router>
    </ThemeProvider>
  );
};

export default App;
