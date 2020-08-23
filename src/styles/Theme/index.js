/* 
  Colors:
  https://about.twitter.com/content/dam/about-twitter/company/brand-resources/en_us/Twitter_Brand_Guidelines_V2_0.pdf
*/
const colors = {
  blue: '#1da1f2',
  lightblue: '#71c9f8',
  black: '#14171a',
  darkgray: '#657786',
  lightgray: '#aab8c2',
  extralightgray: '#e1e8ed',
  extraextralightgray: '#f5f8fa', // really, Twitter?
  white: '#fff',
  red: '#dc3545',
  green: '#28a745',
};

/* Fonts */
const fonts = {
  family: 'Helvetica Neue LT,Helvetica Neue,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif',
  size: '16px',
  weight: {
    light: 300,
    normal: 400,
    bold: 600,
    bolder: 700,
  },
};

const sizes = {
  largeDesktop: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

const theme = {
  main: {
    /* Colors */
    colors: { ...colors },

    /* Fonts */
    fonts: { ...fonts },

    /* Devices */
    sizes: { ...sizes },
  },
};

export default theme;
