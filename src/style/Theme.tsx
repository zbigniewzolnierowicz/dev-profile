import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  borderRadius: {
    sm: '1rem',
    md: '1.3rem',
    lg: '2rem',
    full: '999999px'
  },
  colors: {
    main: {
      50: '#e8f8ef',
      100: '#cce5d6',
      200: '#add1bd',
      300: '#8ebfa3',
      400: '#6fac88',
      500: '#55926f',
      600: '#417256',
      700: '#2e523d',
      800: '#193124',
      900: '#001208',
    },
    monochrome: {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    }
  },
  fontFamily: {
    "sans-serif": 'sans-serif',
    "heading": 'Space Mono, sans-serif'
  }
}
