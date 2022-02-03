import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        *, *::before, *::after {
          box-sizing: border-box;
        }
        button {
          border: 0;
          outline: 0;
          background: none;
          cursor: pointer;
        }
      `}
    />
  );
}

export default GlobalStyle;
