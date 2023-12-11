// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

//import colors from "vuetify/util/colors";

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#6200EE",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

const myCustomDarkTheme = {
  dark: true, // Set dark to true for a dark theme
  colors: {
    background: "#121212", // Dark background color
    surface: "#121212", // Dark surface color
    primary: "#BB86FC", // Adjusted primary color for dark theme
    "primary-darken-1": "#3700B3", // Keep darken variant
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#CF6679", // Adjusted error color for dark theme
    info: "#BB86FC", // Use primary color for info in dark theme
    success: "#4CAF50",
    warning: "#FFC107", // Adjusted warning color for dark theme
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
