/**
 * @file
 * @author Arjun Sedani
 * 
 */
const unSortedColors = {
  BLUE: "#364959",
  DARK_GREY: "#2D323C",
  MID_GREY: "#828793",
  LIGHT_GREY: "#EAEDF4",
  LIGHTEST_GREY: "#FDFEFF",
  RED: "#CB2431",
  ERROR_RED: "#FF4623",
  GREEN: "#2CBE4E",
  YELLOW: "#DBAB09",
  LIGHT_BLUE: "#7fc6ff",
  WHITE: "#ffffff",
  GREEN_DARK: "#003300",
  GREEN_REST: "#1b5e20",
  CANDY_RED: "#ff0800",
  ORANGE: "#E3AA91",
  BLACK: "#000000",
  PRIMARY_CTA: "#29ccc4",
  SECONDARY: "#6f7682",
  TERTIARY: "#d9d9d9",
  HOST_BLUE: "#29ccc4",
  PRIMARY_LINKS: "#577a80",
  PRIMARY_DARK_TEXT: "#002124",
  PRIMARY_GREY_TEXT: "#6F7682",
  DISABLED_GREY: "#aab1b3",
  BACKGROUND_GREY: "#f7f7f7",
  LINE_GREY: "#d9d9d9",
  NEGATIVE_TEXT: "#d44204",
  NOTIFICATION_RED: "#ed0235",
  WALLMART_BLUE: "#0072CE",
  HPS_BLUE: "#101068",
  HPS_TEAL: "#3da98b"
};

export const colors = Object.keys(unSortedColors)
  .sort()
  .reduce(
    (acc, key) => ({
      ...acc,
      [key]: unSortedColors[key]
    }),
    {}
  );

export const fonts = {
  PRIMARY: [
    "SoDoSans",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "sans-serif"
  ].join(),
  CODE: ["Menlo", "Consolas", "Monaco"].join(),
  CONFIG: "ConfigurationPrimaryFont"
};

export const fontSizes = {
  BASE: "14px",
  MEDIUM: "16px",
  LARGE: "20px"
};

export const spacing = {
  BASE: "30px",
  SMALL: "10px",
  LARGE: "70px",
  EXTRA_LARGE: "100px"
};

export const tabStyles = {
  tabs: {
    width: "100%",
    display: "inline-block",
    marginRight: "30px",
    verticalAlign: "top"
  },
  links: {
    margin: 0,
    padding: 0
  },
  tabLink: {
    height: "30px",
    lineHeight: "30px",
    padding: "0 15px",
    cursor: "pointer",
    fontWeight: "bold",
    borderBottom: "2px solid transparent",
    display: "inline-block"
  },
  activeLinkStyle: {
    borderBottom: "2px solid #0082E6"
  },
  visibleTabStyle: {
    flex: 1
  },
  content: {
    padding: "0 15px"
  }
};

export const columnWidth = {
  BASE: "10%",
  SMALL: "15%",
  MEDIUM: "30%",
  LARGE: "50%"
};
