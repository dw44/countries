// for emotion
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export default function Flag({ name, flag }) {
  const styles = css`
    margin-top: 1em;
    max-width: 720px;
    width: 100%;
  `;

  return (
    <img
      css={styles} 
      src={flag}
      alt={name}
      loading="lazy"
    />
  );
}
