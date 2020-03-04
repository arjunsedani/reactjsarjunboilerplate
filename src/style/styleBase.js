import { createGlobalStyle } from 'styled-components';
import { colors, fonts, fontSizes } from '../style/styleSettings.js';

const GlobaStyle = createGlobalStyle`
    html {
      font-family: sans-serif;
      text-size-adjust: 100%;
    }
    body {
      margin: 0;
      font-family: ${fonts.PRIMARY};
      font-size: ${fontSizes.BASE};
      -webkit-font-smoothing: antialiased;
      line-height: 1.5;
      color: ${colors.PRIMARY_DARK_TEXT};
      background-color: ${colors.BACKGROUND_GREY};
      overflow-x:hidden;
    }
    * {
      box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, h6, p, ul {
      margin: 0;
    }

    :focus {
    outline: -webkit-focus-ring-color auto 0px;
    }
    .side{
      @media (max-width: 960px) {
        display: none;
      }
    }
    .show{
      @media (max-width: 960px) {
        display: block;
      }
    }
    .padding{
      padding:60px 0px 40px 0px;
      @media (min-width: 961px) {
        padding:60px 40px 40px 280px
      }
    }
    .mobileShow{
      display: inline;
      @media (min-width: 961px) {
        display: none;
        font-weight: normal;
      }
    }
    .mobileShow svg{
      vertical-align: top;
    }
    .mobileHide{
      @media (max-width: 960px) {
        display: none;
      }
    }
    .invalidDate {
      border-color: red;
    }
  `;

export default GlobaStyle;