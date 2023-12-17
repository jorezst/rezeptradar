// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

//import colors from "vuetify/util/colors";

const myCustomLightTheme = {
  dark: false,
  colors: {
    text: "#0a0905",
    background: "#ffffff",
    "background-darken-1": "#f7f7f7",
    primary: "#ffa200",
    "primary-darken-1": "#e69100",
    secondary: "#abd3a6",
    "secondary-darken-1": "#8ec487",
    accent: "#76bc8b",
    "accent-darken-1": "#65b37d",
  },
};

const myCustomDarkTheme = {
  dark: true, // Set dark to true for a dark theme
  colors: {
    text: "#faf9f5",
    background: "#212121",
    "background-darken-1": "#080808",
    primary: "#ffa200",
    "primary-darken-1": "#e69100",
    secondary: "#31592c",
    "secondary-darken-1": "#264422",
    accent: "#438958",
    "accent-darken-1": "#326742",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
      myCustomDarkTheme,
    },
  },
});
