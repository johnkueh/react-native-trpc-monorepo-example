import { DefaultTheme } from 'styled-components/native';

export const theme: DefaultTheme = {
  colors: {
    global: {
      primary: '#606CD2',
      success: '#52BD94',
      warning: '#FFB020',
      danger: '#D14343',
      info: '#25CBD6',
      border: '#E5E7EB',
    },
    background: {
      base: '#FFFFFF',
    },
    text: {
      base: '#182535',
      muted: '#5D6672',
      dim: '#969CA5',
      disabled: '#939393',
      inverted: '#FFFFFF',
    },
  },
  fonts: {
    headingOne: {
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: '40px',
    },
    headingTwo: {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '32px',
    },
    textSingleM400: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '16px',
    },
    textSingleM500: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '16px',
    },
    textSingleM600: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '16px',
    },
    textSingleS500: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '14px',
    },
  },
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      global: {
        primary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
        border: string;
      };
      background: {
        base: string;
      };
      text: {
        base: string;
        muted: string;
        dim: string;
        disabled: string;
        inverted: string;
      };
    };
    fonts: {
      headingOne: { fontWeight: number; fontSize: string; lineHeight: string };
      headingTwo: { fontWeight: number; fontSize: string; lineHeight: string };
      textSingleM500: { fontWeight: number; fontSize: string; lineHeight: string };
      textSingleM400: { fontWeight: number; fontSize: string; lineHeight: string };
      textSingleM600: { fontWeight: number; fontSize: string; lineHeight: string };
      textSingleS500: { fontWeight: number; fontSize: string; lineHeight: string };
    };
  }
}
