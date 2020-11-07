export const breakpoints = {
  xxl: 1441,
  xl: 1201,
  lg: 993,
  md: 769,
  sm: 577,
  xs: 576,
};

const Grid = {
  breakpoints,
  row: {
    padding: 15, // default 15
  },
  col: {
    padding: 15, // default 15
  },
  container: {
    padding: 15, // default 15
    maxWidth: {
      xxl: 1141,
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
};

export default Grid;
