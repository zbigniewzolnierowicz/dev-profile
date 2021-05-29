import 'styled-components';

// and extend them!
declare module 'styled-components' {
  interface ISwatchColor {
    50?: string,
    100?: string,
    200?: string,
    300?: string,
    400?: string,
    500?: string,
    600?: string,
    700?: string,
    800?: string,
    900?: string,
  }
  export interface DefaultTheme {
    borderRadius: {
      sm: string
      md: string
      lg: string
      full: string
    }

    colors: {
      main: ISwatchColor,
      monochrome: ISwatchColor
    }

    fontFamily: {
      'sans-serif': string
      'heading': string
    }
  }
}
