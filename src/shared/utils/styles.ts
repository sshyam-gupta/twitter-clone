import { css } from 'styled-components';

export const color = {
  primary: '#1da1f2', // Blue
  success: '#0B875B', // green
  danger: '#E13C3C', // red
  warning: '#F89C1C', // orange
  secondary: '#8899a6', // light grey

  textPrimary: '#fff',
  textDarkest: '#172b4d',
  textDark: '#42526E',
  textMedium: '#5E6C84',
  textLight: '#8993a4',
  textLink: '#0052cc',

  backgroundDarkPrimary: '#15202b',
  backgroundMedium: '#dfe1e6',
  backgroundLight: '#192734',
  backgroundLightest: '#F4F5F7',
  backgroundLightPrimary: '#D2E5FE',
  backgroundLightSuccess: '#E4FCEF',

  borderLightest: '#dfe1e6',
  borderLight: '#c1c7d040',
  borderInputFocus: '#4c9aff',
};

const SIZES: any = {
  Giant: 1440,
  BigDesktop: 1200,
  Desktop: 1000,
  Tablet: 768,
  Thone: 600,
  Phablet: 480,
  Phone: 376,
  Tiny: 330,
};


export const font = {
  regular: 'font-family: "AirbnbCerealBook"; font-weight: normal;',
  medium: 'font-family: "AirbnbCerealMedium"; font-weight: normal;',
  bold: 'font-family: "AirbnbCerealBold"; font-weight: normal;',
  black: 'font-family: "AirbnbCerealBlack"; font-weight: normal;',
  size: (size: number) => `font-size: ${size}px;`,
};

export const mixin = {
  boxShadowMedium: css`
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  `,
  truncateText: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    `,
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
  hardwareAccelerate: css`
    transform: translateZ(0);
  `,
  cover: css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
  placeholderColor: (colorValue: string) => css`
    ::-webkit-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    ::-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-ms-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
  `,
  scrollableY: css`
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `,
  customScrollbar: ({ width = 8, background = color.backgroundMedium } = {}) => css`
    &::-webkit-scrollbar {
      width: ${width}px;
    }
    &::-webkit-scrollbar-track {
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 99px;
      background: ${background};
    }
  `,
  link: (colorValue = color.textLink) => css`
    cursor: pointer;
    color: ${colorValue};
    ${font.medium}
    &:hover, &:visited, &:active {
      color: ${colorValue};
    }
    &:hover {
      text-decoration: underline;
    }
  `
}

export const media = Object.keys(SIZES).reduce((accumulator: any, label: string) => {
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = SIZES[label] / 16;
  accumulator[label] = (args: any) => css`
    @media (max-width: ${emSize}em) {
      ${css(args)};
    }
  `;
  return accumulator;
}, {});